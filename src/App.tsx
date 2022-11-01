import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header } from "ui/organisms";
import { Home } from "ui/pages";
import "styles/index.scss";
import Team from "ui/pages/team";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/roadmap" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/whitepaper" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
