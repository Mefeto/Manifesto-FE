import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PropositionContent from "./pages/proposition-content";

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<PropositionContent />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
