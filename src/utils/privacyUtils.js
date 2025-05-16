export const checkPrivacy = async () => {
  const localTests = performLocalTests();
  const apiResults = await fetchPrivacyAPIResults();
  const allTests = [...localTests, ...apiResults.tests];
  const passedTests = allTests.filter((test) => test.pass).length;
  const score = Math.round((passedTests / allTests.length) * 100);
  const recommendations = generateRecommendations(
    allTests,
    apiResults.recommendations
  );

  return {
    score,
    tests: allTests,
    recommendations,
  };
};

export const performLocalTests = () => {
  const cookieEnabled = navigator.cookieEnabled;
  const doNotTrack = navigator.doNotTrack === "1" || window.doNotTrack === "1";
  const hasLocalStorage = !!window.localStorage;
  const hasSessionStorage = !!window.sessionStorage;
  const hasIndexedDB = !!window.indexedDB;
  const hasWebRTC = !!(
    window.RTCPeerConnection ||
    window.webkitRTCPeerConnection ||
    window.mozRTCPeerConnection
  );
  const hasCanvasFingerprinting = checkCanvasFingerprinting();
  const plugins = navigator.plugins?.length || 0;
  const hasLimitedPlugins = plugins < 3;
  const hasStrictReferrerPolicy =
    document.referrerPolicy &&
    ["no-referrer", "same-origin", "strict-origin"].includes(
      document.referrerPolicy
    );
  const hasPermissionsPolicy = !!document.querySelector(
    'meta[http-equiv="Permissions-Policy"]'
  );

  return [
    {
      name: "Do Not Track",
      pass: doNotTrack,
      description: doNotTrack
        ? "Do Not Track is enabled in your browser"
        : "Do Not Track is not enabled in your browser",
    },
    {
      name: "Cookies",
      pass: !cookieEnabled,
      description: !cookieEnabled
        ? "Cookies are disabled, improving privacy"
        : "Cookies are enabled, which may reduce privacy",
    },
    {
      name: "WebRTC",
      pass: !hasWebRTC,
      description: !hasWebRTC
        ? "No WebRTC detected, reducing risk of IP leaks"
        : "WebRTC is enabled, which could leak your real IP address",
    },
    {
      name: "Canvas Fingerprinting",
      pass: !hasCanvasFingerprinting,
      description: !hasCanvasFingerprinting
        ? "Protected against canvas fingerprinting"
        : "Vulnerable to canvas fingerprinting",
    },
    {
      name: "Browser Plugins",
      pass: hasLimitedPlugins,
      description: hasLimitedPlugins
        ? "Limited browser plugins, reducing fingerprinting surface"
        : "Multiple browser plugins detected, increasing fingerprinting risk",
    },
    {
      name: "Referrer Policy",
      pass: hasStrictReferrerPolicy,
      description: hasStrictReferrerPolicy
        ? "Strict referrer policy in place"
        : "No strict referrer policy detected",
    },
    {
      name: "Storage APIs",
      pass: !(hasLocalStorage && hasSessionStorage && hasIndexedDB),
      description: !(hasLocalStorage && hasSessionStorage && hasIndexedDB)
        ? "Some storage APIs are disabled, improving privacy"
        : "All storage APIs are enabled, which can be used for tracking",
    },
    {
      name: "Permissions Policy",
      pass: hasPermissionsPolicy,
      description: hasPermissionsPolicy
        ? "Permissions Policy is set, limiting browser features"
        : "No Permissions Policy detected",
    },
  ];
};

export const checkCanvasFingerprinting = () => {
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText("Privacy Test", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText("Privacy Test", 4, 17);
    const dataURL = canvas.toDataURL();
    return dataURL.length > 0;
  } catch {
    return false;
  }
};

export const fetchPrivacyAPIResults = async () => {
  const tests = [];
  const recommendations = [];

  try {
    const fingerprintResults = checkBrowserFingerprint();
    tests.push({
      name: "Browser Fingerprint",
      pass: !fingerprintResults.isHighlyUnique,
      description: !fingerprintResults.isHighlyUnique
        ? "Your browser fingerprint is likely common"
        : "Your browser fingerprint appears unique, making you more trackable",
    });

    if (fingerprintResults.isHighlyUnique) {
      recommendations.push(
        "Use a browser fingerprinting protection like the Tor Browser or extensions that randomize your fingerprint."
      );
    }

    const webRtcLeakCheck = await checkWebRTCLeak();
    tests.push({
      name: "DNS/WebRTC Leak",
      pass: !webRtcLeakCheck.hasLeak,
      description: !webRtcLeakCheck.hasLeak
        ? "No WebRTC IP leaks detected"
        : "WebRTC could be leaking your real IP address",
    });

    if (webRtcLeakCheck.hasLeak) {
      recommendations.push(
        "Install a WebRTC leak protection extension or use a browser that blocks WebRTC leaks"
      );
    }

    const currentProtocol = window.location.protocol;
    tests.push({
      name: "HTTPS Security",
      pass: currentProtocol === "https:",
      description:
        currentProtocol === "https:"
          ? "You're using a secure HTTPS connection"
          : "You're not using a secure HTTPS connection",
    });

    if (currentProtocol !== "https:") {
      recommendations.push("Only visit websites that use HTTPS encryption");
    }

    const securityHeaders = checkSecurityHeaders();
    tests.push({
      name: "Security Headers",
      pass: securityHeaders.score > 70,
      description:
        securityHeaders.score > 70
          ? "Good security headers detected"
          : "Some important security headers are missing",
    });

    if (securityHeaders.score <= 70) {
      recommendations.push(
        "Use a browser extension that adds security headers to requests"
      );
    }
  } catch (error) {
    console.error("Error fetching privacy API results:", error);
    tests.push({
      name: "Privacy APIs",
      pass: false,
      description: "Unable to connect to privacy testing APIs",
    });
    recommendations.push("Check your internet connection or try again later");
  }

  return {
    tests,
    recommendations,
  };
};

export const checkWebRTCLeak = () => {
  return new Promise((resolve) => {
    if (
      !(
        window.RTCPeerConnection ||
        window.webkitRTCPeerConnection ||
        window.mozRTCPeerConnection
      )
    ) {
      resolve({ hasLeak: false, ips: [] });
      return;
    }

    const ips = [];
    let hasLeak = false;

    try {
      const pc = new (window.RTCPeerConnection ||
        window.webkitRTCPeerConnection ||
        window.mozRTCPeerConnection)({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      });

      pc.createDataChannel("");

      pc.onicecandidate = (ice) => {
        if (!ice.candidate) return;

        const { candidate } = ice.candidate;
        const matches = candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3})/g);
        if (matches) {
          matches.forEach((ip) => {
            if (
              !ips.includes(ip) &&
              !ip.startsWith("192.168.") &&
              !ip.startsWith("10.") &&
              !ip.startsWith("172.")
            ) {
              ips.push(ip);
              hasLeak = true;
            }
          });
        }

        if (!ice.candidate.candidate) {
          pc.close();
          resolve({ hasLeak, ips });
        }
      };

      setTimeout(() => {
        pc.close();
        resolve({ hasLeak, ips });
      }, 1000);

      pc.createOffer()
        .then((offer) => pc.setLocalDescription(offer))
        .catch(() => {
          pc.close();
          resolve({ hasLeak: false, ips: [] });
        });
    } catch {
      resolve({ hasLeak: false, ips: [] });
    }
  });
};
export const checkBrowserFingerprint = () => {
  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platformInfo: navigator.userAgentData?.platform || "Unknown",
    cookiesEnabled: navigator.cookieEnabled,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screenRes: `${window.screen.width}x${window.screen.height}`,
    colorDepth: window.screen.colorDepth,
    webGLRenderer: getWebGLInfo(),
    touchPoints: navigator.maxTouchPoints,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: navigator.deviceMemory || "Unknown",
    fonts: getAvailableFonts(),
  };

  return fingerprint;
};

function getWebGLInfo() {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (gl) {
      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      if (debugInfo) {
        return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      }
    }
    return "Unknown";
  } catch {
    return "WebGL not available";
  }
}

export const getAvailableFonts = () => {
  const baseFonts = ["monospace", "sans-serif", "serif"];
  const fontList = [
    "Arial",
    "Courier New",
    "Georgia",
    "Times New Roman",
    "Verdana",
    "Helvetica",
    "Comic Sans MS",
  ];

  const detected = [];
  const testString = "mmmmmmmmlli";
  const testSize = "72px";

  const h = document.getElementsByTagName("body")[0];
  const s = document.createElement("span");
  s.style.fontSize = testSize;
  s.innerHTML = testString;
  const defaultWidth = {};
  const defaultHeight = {};

  for (const baseFont of baseFonts) {
    s.style.fontFamily = baseFont;
    h.appendChild(s);
    defaultWidth[baseFont] = s.offsetWidth;
    defaultHeight[baseFont] = s.offsetHeight;
    h.removeChild(s);
  }

  let detected_fonts = 0;
  for (const font of fontList) {
    let isDetected = false;
    for (const baseFont of baseFonts) {
      s.style.fontFamily = font + "," + baseFont;
      h.appendChild(s);
      const matched =
        s.offsetWidth !== defaultWidth[baseFont] ||
        s.offsetHeight !== defaultHeight[baseFont];
      h.removeChild(s);
      if (matched) {
        isDetected = true;
        detected_fonts++;
        break;
      }
    }
    if (isDetected) detected.push(font);
    if (detected_fonts >= 3) break;
  }

  return detected;
};

export const checkSecurityHeaders = () => {
  let score = 100;
  const missingHeaders = [];

  const csp = document.querySelector(
    'meta[http-equiv="Content-Security-Policy"]'
  );
  if (!csp) {
    score -= 20;
    missingHeaders.push("Content-Security-Policy");
  }

  const xFrameOptions = document.querySelector(
    'meta[http-equiv="X-Frame-Options"]'
  );
  if (!xFrameOptions) {
    score -= 10;
    missingHeaders.push("X-Frame-Options");
  }

  const hsts = document.querySelector(
    'meta[http-equiv="Strict-Transport-Security"]'
  );
  if (!hsts) {
    score -= 15;
    missingHeaders.push("Strict-Transport-Security");
  }

  const xcto = document.querySelector(
    'meta[http-equiv="X-Content-Type-Options"]'
  );
  if (!xcto) {
    score -= 10;
    missingHeaders.push("X-Content-Type-Options");
  }

  const referrerPolicy = document.querySelector('meta[name="referrer"]');
  if (!referrerPolicy) {
    score -= 10;
    missingHeaders.push("Referrer-Policy");
  }

  return {
    score: Math.max(0, score),
    missingHeaders,
  };
};

export const generateRecommendations = (tests, apiRecommendations) => {
  const recommendations = [...apiRecommendations];

  tests.forEach((test) => {
    if (!test.pass) {
      switch (test.name) {
        case "Do Not Track":
          recommendations.push(
            "Enable 'Do Not Track' in your browser settings"
          );
          break;
        case "Cookies":
          recommendations.push(
            "Consider blocking third-party cookies or using a cookie manager extension"
          );
          break;
        case "WebRTC":
          recommendations.push(
            "Install a WebRTC blocking extension to prevent IP address leaks"
          );
          break;
        case "Canvas Fingerprinting":
          recommendations.push(
            "Use a browser extension that prevents canvas fingerprinting"
          );
          break;
        case "Browser Plugins":
          recommendations.push(
            "Reduce the number of browser plugins to minimize your fingerprinting surface"
          );
          break;
        case "Referrer Policy":
          recommendations.push(
            "Set a stricter referrer policy in your browser"
          );
          break;
        case "Storage APIs":
          recommendations.push(
            "Consider using private browsing mode or clearing storage regularly"
          );
          break;
        case "Security Headers":
          recommendations.push(
            "Use a browser extension like HTTP Header Live to check and enforce security headers"
          );
          break;
        case "HTTPS Security":
          recommendations.push(
            "Install HTTPS Everywhere extension to enforce secure connections"
          );
          break;
        case "Permissions Policy":
          recommendations.push(
            "Use a browser that supports Permissions Policy or an extension that enforces it"
          );
          break;
      }
    }
  });

  const passedTests = tests.filter((test) => test.pass).length;
  const passRate = (passedTests / tests.length) * 100;

  if (passRate < 70) {
    if (!recommendations.some((r) => r.includes("privacy-focused browser"))) {
      recommendations.push(
        "Consider using a privacy-focused browser like Firefox or Brave"
      );
    }

    if (
      !recommendations.some(
        (r) => r.includes("Privacy Badger") || r.includes("uBlock Origin")
      )
    ) {
      recommendations.push(
        "Install a comprehensive privacy extension like Privacy Badger or uBlock Origin"
      );
    }

    if (!recommendations.some((r) => r.includes("VPN"))) {
      recommendations.push(
        "Consider using a reputable VPN service when browsing sensitive content"
      );
    }
  }

  return [...new Set(recommendations)];
};
