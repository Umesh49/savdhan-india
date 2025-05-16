import { useState, useEffect } from "react";
import { generateQRCode } from "../../../utils/securityUtils";

import "../Tools.css";

const QrCodeGenerator = () => {
  const [text, setText] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    if (text.trim()) {
      const timer = setTimeout(() => {
        updateQrCode();
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setQrCodeUrl("");
    }
  }, [text]);

  const updateQrCode = async () => {
    try {
      const url = await generateQRCode(text);
      setQrCodeUrl(url);
    } catch (error) {
      console.error("Error generating QR code:", error);
      setQrCodeUrl("");
    }
  };

  const downloadQrCode = () => {
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="sec-tool-page">
      <div className="sec-tool-page-container">
        

        <div className="sec-tool-page-header">
          <h1 className="sec-tool-page-title">QR Code Generator</h1>
          <p className="sec-tool-page-subtitle">Generate QR codes for URLs or text</p>
        </div>

        <div className="sec-tool-page-content">
          <label htmlFor="qrText" className="sec-tool-label">
            Enter Text or URL
          </label>
          <textarea
            id="qrText"
            className="sec-tool-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text or URL to encode as QR code"
            rows="3"
          ></textarea>

          {qrCodeUrl && (
            <div className="sec-tool-qr-result">
              <div className="sec-tool-qr-container">
                <img src={qrCodeUrl || "/placeholder.svg"} alt="Generated QR Code" className="sec-tool-qr-image" />
              </div>

              <button className="sec-tool-button" onClick={downloadQrCode}>
                Download QR Code
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default QrCodeGenerator;