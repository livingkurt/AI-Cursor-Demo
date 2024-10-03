import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import UsersPage from "../components/UsersPage/UsersPage";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("home-root");
  if (!container) return;

  const root = createRoot(container);
  root.render(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Router>
  );
});
