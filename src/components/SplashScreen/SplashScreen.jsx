import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import SplashScreenAuth from "./SplashScreenAuth";
import SplashScreenLoad from "./SplashScreenLoad";

const SplashScreen = memo(() => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("authenticated") === "true") {
      navigate("/home");
    }
  }, [navigate]);

  const handleAuthSuccess = () => {
    sessionStorage.setItem("authenticated", "true");
    setAuthenticated(true);
  };

  return authenticated ? (
    <SplashScreenLoad onFinish={() => navigate("/home")} />
  ) : (
    <SplashScreenAuth onAuthSuccess={handleAuthSuccess} />
  );
});

export default SplashScreen;