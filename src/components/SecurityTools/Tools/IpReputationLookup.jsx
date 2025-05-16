import { useState } from "react";
import { lookupIPReputation } from "../../../utils/securityUtils";

import "../Tools.css";

const IpReputationLookup = () => {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const lookupIp = async () => {
    if (!ip.trim() && !ip.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/)) {
      setError("Please enter a valid IP address.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const reputationData = await lookupIPReputation(ip);
      setResult(reputationData);
    } catch (err) {
      console.error("Error looking up IP reputation:", err);
      setError("Failed to lookup IP reputation. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getReputationClass = (score) => {
    if (score <= 10) return "sec-tool-text-success";
    if (score <= 50) return "sec-tool-text-warning";
    return "sec-tool-text-danger";
  };

  const getReputationLabel = (score) => {
    if (score <= 10) return "Good";
    if (score <= 50) return "Suspicious";
    return "Bad";
  };

  return (
    <div className="sec-tool-page">
      <div className="sec-tool-page-container">
        

        <div className="sec-tool-page-header">
          <h1 className="sec-tool-page-title">IP Reputation Lookup</h1>
          <p className="sec-tool-page-subtitle">Check if an IP address has been reported for malicious activity</p>
        </div>

        <div className="sec-tool-page-content">
          <div className="sec-tool-form-group">
            <label htmlFor="ipAddress" className="sec-tool-label">
              Enter IP Address
            </label>
            <input
              type="text"
              id="ipAddress"
              className="sec-tool-input"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              placeholder="e.g., 8.8.8.8"
            />
          </div>

          <button className="sec-tool-button" onClick={lookupIp} disabled={isLoading}>
            {isLoading ? "Checking..." : "Check IP Reputation"}
          </button>

          {error && <div className="sec-tool-error">{error}</div>}

          {isLoading && (
            <div className="sec-tool-loading">
              <div className="sec-tool-spinner"></div>
              <p>Checking IP reputation...</p>
            </div>
          )}

          {result && !error && (
            <div className="sec-tool-result">
              <h4 className="sec-tool-result-header">IP Reputation Results:</h4>

              <div className="sec-tool-reputation-score">
                <div className={`sec-tool-score-badge ${getReputationClass(result.abuseScore)}`}>
                  {result.abuseScore}/100
                </div>
                <div className="sec-tool-score-label">
                  <span className={getReputationClass(result.abuseScore)}>
                    {getReputationLabel(result.abuseScore)} Reputation
                  </span>
                </div>
              </div>

              <table className="sec-tool-table">
                <tbody>
                  <tr>
                    <td>
                      <strong>IP Address:</strong>
                    </td>
                    <td>{result.ipAddress}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Country:</strong>
                    </td>
                    <td>{result.countryCode || "Unknown"}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>ISP:</strong>
                    </td>
                    <td>{result.isp || "Unknown"}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Usage Type:</strong>
                    </td>
                    <td>{result.usageType || "Unknown"}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Last Reported:</strong>
                    </td>
                    <td>{result.lastReportedAt ? new Date(result.lastReportedAt).toLocaleString() : "Never"}</td>
                  </tr>
                </tbody>
              </table>

              {result.reports && result.reports.length > 0 && (
                <div className="sec-tool-reports">
                  <h4>Abuse Reports:</h4>
                  <ul className="sec-tool-list">
                    {result.reports.map((report, index) => (
                      <li key={index}>
                        <strong>{report.category}:</strong> {report.description}
                        <span className="sec-tool-report-date">{new Date(report.reportedAt).toLocaleString()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.abuseScore > 0 && (
                <div className="sec-tool-advice">
                  <h4>Recommendations:</h4>
                  <ul className="sec-tool-list">
                    {result.abuseScore > 50 ? (
                      <>
                        <li>Block this IP address in your firewall or security systems</li>
                        <li>Monitor for any connections from this IP address</li>
                        <li>If this is your IP, check your network for malware or compromised devices</li>
                      </>
                    ) : result.abuseScore > 10 ? (
                      <>
                        <li>Exercise caution when dealing with this IP address</li>
                        <li>Consider additional verification steps for connections from this IP</li>
                      </>
                    ) : (
                      <li>No specific action needed, but continue monitoring as part of normal security practices</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default IpReputationLookup;