"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SplashScreenAuth from "./SplashScreenAuth";
import SplashScreenLoad from "./SplashScreenLoad";

const SplashScreen = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {!authenticated ? (
        <SplashScreenAuth onAuthSuccess={() => setAuthenticated(true)} />
      ) : (
        <SplashScreenLoad onFinish={() => navigate("/home")} />
      )}
    </>
  );
};

export default SplashScreen;