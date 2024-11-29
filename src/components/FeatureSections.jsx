import React from "react";
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h1>New Feature</h1>
      <h2>Check out the team dashboard</h2>
      <p className="feature-description">
        Beautiful analytics to grow smarter. Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="feature-buttons">
        <button className="demo-button">Demo</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </section>
  );
};

export default FeatureSection;
