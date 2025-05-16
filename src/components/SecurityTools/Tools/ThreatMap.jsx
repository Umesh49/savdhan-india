// import React, { useState, useEffect, useRef } from 'react';
// import './ThreatMap.css';
// import CyberSpinner from '../../common/CyberSpinner/CyberSpinner';

// const fetchWithTimeout = async (url, options = {}, timeout = 10000) => {
//   const controller = new AbortController();
//   const { signal } = controller;
//   const timeoutId = setTimeout(() => controller.abort(), timeout);

//   try {
//     return await fetch(url, { ...options, signal });
//   } catch (error) {
//     if (error.name === 'AbortError') {
//       throw new Error('Request timed out');
//     }
//     throw error;
//   } finally {
//     clearTimeout(timeoutId);
//   }
// };

// // ✅ Use CORS proxy for testing — DO NOT use in production!
// const CORS_PROXY = 'https://corsproxy.io/?';
// const API_URL = 'https://api.abuseipdb.com/api/v2/blacklist';
// const ABUSE_IPDB_API_KEY = import.meta.env.VITE_ABUSE_IPDB_KEY ?? 'missing api key';

// const ThreatMap = () => {
//   const [threatData, setThreatData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const mapRef = useRef(null);

//   const [stats, setStats] = useState({
//     activeAttacks: 0,
//     topTarget: 'Financial',
//     topAttackType: 'Phishing',
//     attacksToday: 0
//   });

//   const processApiResponse = (apiData) => {
//     if (!apiData || !apiData.data) return [];

//     return apiData.data.map((item, index) => {
//       const country = item.countryCode || 'Unknown';
//       let severity = 'low';
//       if (item.abuseConfidenceScore > 80) severity = 'high';
//       else if (item.abuseConfidenceScore > 50) severity = 'medium';

//       let type = 'Scanning';
//       if (item.categories) {
//         if (item.categories.includes(11) || item.categories.includes(21)) {
//           type = 'Phishing';
//         } else if (item.categories.includes(4) || item.categories.includes(14)) {
//           type = 'DDoS';
//         } else if (item.categories.includes(3) || item.categories.includes(12)) {
//           type = 'Malware';
//         }
//       }

//       const lat = item.latitude ?? (Math.random() * 180 - 90);
//       const lng = item.longitude ?? (Math.random() * 360 - 180);

//       return {
//         id: index + 1,
//         lat,
//         lng,
//         type,
//         severity,
//         country,
//         ipAddress: item.ipAddress
//       };
//     });
//   };

//   useEffect(() => {
//     const fetchThreatData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetchWithTimeout(`${CORS_PROXY}${encodeURIComponent(API_URL)}`, {
//           method: 'GET',
//           headers: {
//             Accept: 'application/json',
//             Key: ABUSE_IPDB_API_KEY
//           }
//         });

//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//         const data = await response.json();
//         const processed = processApiResponse(data);
//         setThreatData(processed);

//         const attackTypes = processed.map(t => t.type);
//         const topType = attackTypes.reduce((acc, curr) => {
//           acc[curr] = (acc[curr] || 0) + 1;
//           return acc;
//         }, {});

//         setStats(prev => ({
//           ...prev,
//           activeAttacks: processed.length,
//           topAttackType: Object.keys(topType).reduce((a, b) => topType[a] > topType[b] ? a : b),
//           attacksToday: processed.length + Math.floor(Math.random() * 100)
//         }));

//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch threat data:", err);
//         setError("Failed to load threat data from AbuseIPDB.");
//         setLoading(false);
//       }
//     };

//     fetchThreatData();

//     const interval = setInterval(() => {
//       setStats(prev => ({
//         ...prev,
//         activeAttacks: prev.activeAttacks + Math.floor(Math.random() * 10),
//         attacksToday: prev.attacksToday + Math.floor(Math.random() * 50)
//       }));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (!loading && threatData.length > 0 && mapRef.current) {
//       renderMap();
//     }
//   }, [loading, threatData]);

//   const renderMap = () => {
//     const map = mapRef.current;
//     map.innerHTML = '';

//     const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg.setAttribute("viewBox", "0 0 1000 500");
//     svg.setAttribute("width", "100%");
//     svg.setAttribute("height", "100%");
//     svg.classList.add("world-map-svg");

//     const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     path.setAttribute("d", "M100,100 L900,100 L900,400 L100,400 Z");
//     path.setAttribute("fill", "none");
//     path.setAttribute("stroke", "#2a4b8d");
//     path.setAttribute("stroke-width", "1");
//     svg.appendChild(path);

//     threatData.forEach(threat => {
//       const x = ((threat.lng + 180) / 360) * 1000;
//       const y = ((90 - threat.lat) / 180) * 500;

//       const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//       circle.setAttribute("cx", x);
//       circle.setAttribute("cy", y);
//       circle.setAttribute("r", threat.severity === 'high' ? 8 : threat.severity === 'medium' ? 6 : 4);

//       const color = threat.severity === 'high' ? '#ff3e3e' : threat.severity === 'medium' ? '#ffb03e' : '#3eb8ff';
//       circle.setAttribute("fill", color);
//       circle.setAttribute("opacity", "0.8");
//       circle.classList.add("threat-pulse");

//       const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
//       animate.setAttribute("attributeName", "r");
//       animate.setAttribute("from", circle.getAttribute("r"));
//       animate.setAttribute("to", threat.severity === 'high' ? 20 : threat.severity === 'medium' ? 15 : 10);
//       animate.setAttribute("dur", "2s");
//       animate.setAttribute("repeatCount", "indefinite");
//       circle.appendChild(animate);

//       const fade = document.createElementNS("http://www.w3.org/2000/svg", "animate");
//       fade.setAttribute("attributeName", "opacity");
//       fade.setAttribute("from", "0.8");
//       fade.setAttribute("to", "0");
//       fade.setAttribute("dur", "2s");
//       fade.setAttribute("repeatCount", "indefinite");
//       circle.appendChild(fade);

//       const tooltip = document.createElementNS("http://www.w3.org/2000/svg", "title");
//       tooltip.textContent = `${threat.type} in ${threat.country} (${threat.ipAddress})`;
//       circle.appendChild(tooltip);

//       svg.appendChild(circle);
//     });

//     map.appendChild(svg);
//   };

//   if (loading) {
//     return (
//         <CyberSpinner/>
//     );
//   }

//   if (error) {
//     return (
//       <div className="threat-map-error">
//         <p>{error}</p>
//         <button onClick={() => window.location.reload()}>Retry</button>
//       </div>
//     );
//   }

//   return (
//     <div className="threat-map-container">
//       <div ref={mapRef} className="threat-map-visualization"></div>
//       <div className="threat-stats-panel">
//         <div className="threat-stat">
//           <h4>Active Threats</h4>
//           <p>{stats.activeAttacks.toLocaleString()}</p>
//         </div>
//         <div className="threat-stat">
//           <h4>Top Target</h4>
//           <p>{stats.topTarget}</p>
//         </div>
//         <div className="threat-stat">
//           <h4>Top Attack Type</h4>
//           <p>{stats.topAttackType}</p>
//         </div>
//         <div className="threat-stat">
//           <h4>Threats Today</h4>
//           <p>{stats.attacksToday.toLocaleString()}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThreatMap;
import "../Tools.css";
import { useState, useEffect, useRef } from "react"
import { Loader2 } from "lucide-react"
import "./ThreatMap.css"

// Mock API for demonstration purposes
const fetchMockThreatData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockData = []
      // Generate 50 random threat points
      for (let i = 0; i < 50; i++) {
        const lat = Math.random() * 180 - 90
        const lng = Math.random() * 360 - 180

        // Determine severity
        let severity = "low"
        const rand = Math.random()
        if (rand > 0.8) severity = "high"
        else if (rand > 0.5) severity = "medium"

        // Determine attack type
        const types = ["Scanning", "Phishing", "DDoS", "Malware"]
        const type = types[Math.floor(Math.random() * types.length)]

        // Random country codes
        const countries = ["US", "CN", "RU", "UK", "DE", "FR", "JP", "BR", "IN", "KR"]
        const country = countries[Math.floor(Math.random() * countries.length)]

        mockData.push({
          id: i + 1,
          lat,
          lng,
          type,
          severity,
          country,
          ipAddress: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
        })
      }
      resolve(mockData)
    }, 1500)
  })
}

const ThreatMap = () => {
  const [threatData, setThreatData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const mapRef = useRef(null)

  const [stats, setStats] = useState({
    activeAttacks: 0,
    topTarget: "Financial",
    topAttackType: "Phishing",
    attacksToday: 0,
  })

  useEffect(() => {
    const fetchThreatData = async () => {
      try {
        setLoading(true)
        // In a real app, you would use your API key and proper error handling
        const data = await fetchMockThreatData()
        setThreatData(data)

        const attackTypes = data.map((t) => t.type)
        const topType = attackTypes.reduce((acc, curr) => {
          acc[curr] = (acc[curr] || 0) + 1
          return acc
        }, {})

        setStats((prev) => ({
          ...prev,
          activeAttacks: data.length,
          topAttackType:
            Object.keys(topType).length > 0
              ? Object.keys(topType).reduce((a, b) => (topType[a] > topType[b] ? a : b))
              : "Phishing",
          attacksToday: data.length + Math.floor(Math.random() * 100),
        }))

        setLoading(false)
      } catch (err) {
        console.error("Failed to fetch threat data:", err)
        setError("Failed to load threat data.")
        setLoading(false)
      }
    }

    fetchThreatData()

    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        activeAttacks: prev.activeAttacks + Math.floor(Math.random() * 10),
        attacksToday: prev.attacksToday + Math.floor(Math.random() * 50),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!loading && threatData.length > 0 && mapRef.current) {
      renderMap()
    }
  }, [loading, threatData])

  const renderMap = () => {
    const map = mapRef.current
    map.innerHTML = ""

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("viewBox", "0 0 1000 500")
    svg.setAttribute("width", "100%")
    svg.setAttribute("height", "100%")
    svg.classList.add("world-map-svg")

    // Create a simplified world map outline
    // This is a simplified map path - in a real app you'd use a more detailed GeoJSON
    const worldPath = document.createElementNS("http://www.w3.org/2000/svg", "path")
    worldPath.setAttribute(
      "d",
      `
      M 210,160 L 250,160 L 280,120 L 390,120 L 410,150 L 450,150 L 470,180 L 520,180 L 550,150 L 600,150 L 620,130 L 680,130 L 700,150 L 750,150 L 780,170 L 780,220 L 750,250 L 720,250 L 700,270 L 650,270 L 630,290 L 580,290 L 560,310 L 510,310 L 490,330 L 440,330 L 420,350 L 370,350 L 350,330 L 320,330 L 300,310 L 250,310 L 230,290 L 200,290 L 180,270 L 180,220 L 210,160
      M 800,180 L 830,180 L 830,220 L 800,220 L 800,180
      M 150,200 L 170,200 L 170,230 L 150,230 L 150,200
      M 350,150 L 370,150 L 370,170 L 350,170 L 350,150
      M 650,200 L 670,200 L 670,220 L 650,220 L 650,200
      M 250,350 L 270,350 L 270,370 L 250,370 L 250,350
    `,
    )
    worldPath.setAttribute("fill", "none")
    worldPath.setAttribute("stroke", "#2a4b8d")
    worldPath.setAttribute("stroke-width", "1.5")
    svg.appendChild(worldPath)

    // Add grid lines for the cyber effect
    for (let i = 100; i < 400; i += 30) {
      const horizontalLine = document.createElementNS("http://www.w3.org/2000/svg", "path")
      horizontalLine.setAttribute("d", `M100,${i} L900,${i}`)
      horizontalLine.setAttribute("stroke", "#1a2e44")
      horizontalLine.setAttribute("stroke-width", "0.5")
      horizontalLine.setAttribute("stroke-opacity", "0.3")
      svg.appendChild(horizontalLine)
    }

    for (let i = 100; i < 900; i += 30) {
      const verticalLine = document.createElementNS("http://www.w3.org/2000/svg", "path")
      verticalLine.setAttribute("d", `M${i},100 L${i},400`)
      verticalLine.setAttribute("stroke", "#1a2e44")
      verticalLine.setAttribute("stroke-width", "0.5")
      verticalLine.setAttribute("stroke-opacity", "0.3")
      svg.appendChild(verticalLine)
    }

    threatData.forEach((threat) => {
      // Convert lat/lng to x,y coordinates on our map
      // This is a simplified conversion - in a real app you'd use proper map projection
      const x = ((threat.lng + 180) / 360) * 800 + 100
      const y = ((90 - threat.lat) / 180) * 300 + 100

      // Create the main threat point
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
      circle.setAttribute("cx", x)
      circle.setAttribute("cy", y)
      circle.setAttribute("r", threat.severity === "high" ? 4 : threat.severity === "medium" ? 3 : 2)

      const color = threat.severity === "high" ? "#ff3e3e" : threat.severity === "medium" ? "#ffb03e" : "#3eb8ff"
      circle.setAttribute("fill", color)

      // Add a glow filter
      const filterId = `glow-${threat.id}`
      const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter")
      filter.setAttribute("id", filterId)
      filter.setAttribute("x", "-50%")
      filter.setAttribute("y", "-50%")
      filter.setAttribute("width", "200%")
      filter.setAttribute("height", "200%")

      const feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur")
      feGaussianBlur.setAttribute("stdDeviation", "2")
      feGaussianBlur.setAttribute("result", "blur")
      filter.appendChild(feGaussianBlur)

      svg.appendChild(filter)

      // Apply the filter
      circle.setAttribute("filter", `url(#${filterId})`)

      // Add pulsing animation with opacity
      const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate")
      animate.setAttribute("attributeName", "opacity")
      animate.setAttribute("values", "1;0.3;1")
      animate.setAttribute("dur", threat.severity === "high" ? "1.5s" : threat.severity === "medium" ? "2s" : "3s")
      animate.setAttribute("repeatCount", "indefinite")
      circle.appendChild(animate)

      // Add tooltip
      const tooltip = document.createElementNS("http://www.w3.org/2000/svg", "title")
      tooltip.textContent = `${threat.type} in ${threat.country} (${threat.ipAddress})`
      circle.appendChild(tooltip)

      svg.appendChild(circle)
    })

    map.appendChild(svg)
  }

  if (loading) {
    return (
      <div className="threat-map-loading">
        <Loader2 size={40} className="loading-icon" />
        <p>Loading threat data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="threat-map-error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    )
  }

  return (
    <div className="threat-map-container">
      <div ref={mapRef} className="threat-map-visualization"></div>

      <div className="map-legend">
        <h4>Threat Severity</h4>
        <div className="legend-item">
          <div className="legend-color high"></div>
          <span>High (DDoS, Ransomware)</span>
        </div>
        <div className="legend-item">
          <div className="legend-color medium"></div>
          <span>Medium (Phishing, Malware)</span>
        </div>
        <div className="legend-item">
          <div className="legend-color low"></div>
          <span>Low (Scanning, Probing)</span>
        </div>
      </div>

      <div className="threat-stats-panel">
        <div className="threat-stat">
          <h4>Active Threats</h4>
          <p>{stats.activeAttacks.toLocaleString()}</p>
        </div>
        <div className="threat-stat">
          <h4>Top Target</h4>
          <p>{stats.topTarget}</p>
        </div>
        <div className="threat-stat">
          <h4>Top Attack Type</h4>
          <p>{stats.topAttackType}</p>
        </div>
        <div className="threat-stat">
          <h4>Threats Today</h4>
          <p>{stats.attacksToday.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

export default ThreatMap
