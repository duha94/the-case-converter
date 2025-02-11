import React from "react";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./App.css";
import Home from "./pages/Home/home";

export default function CaseConverter() {

  return (
    <div className="App">
      <Home />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
