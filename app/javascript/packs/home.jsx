import React from "react";
import { render } from "react-dom";
import HomePage from "../components/HomePage/HomePage";

document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("home-root");
  if (!node) return;

  render(<HomePage />, node);
});
