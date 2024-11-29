import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta">
      <h1>Start your free trial</h1>
      <p className="subheadline">
        Join over <strong>4,000+ startups</strong> already growing with Untitled.
      </p>
      <div className="cta-buttons">
        <button className="cta-button learn-more">Learn More</button>
        <button className="cta-button get-started">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
