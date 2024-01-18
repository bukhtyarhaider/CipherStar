import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import BuyCrypto from "./pages/BuyCrypto/BuyCrypto";

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/buy-crypto" element={<BuyCrypto />} />
        <Route path="*" element={<Navigate to={"/404"} />} />
      </Routes>
    </div>
  );
};

export default Router;
