import React from "react";
import { Analytics } from "@vercel/analytics/react"
import "./App.css";
import Home from "./pages/Home/home";

export default function CaseConverter() {

  return (
    <div className="App">
      <Home />
      <Analytics />
    </div>
  );
}
