import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features">
      <h1>Analytics That Feels Like It's From the Future</h1>
      <p className="intro">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className="feature-section">
        <div className="feature">
          <h2>Share Team Inboxes</h2>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </p>
        </div>

        <div className="feature">
          <h2>Deliver Instant Answers</h2>
          <p>
            Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
          </p>
        </div>

        <div className="feature">
          <h2>Manage Your Team With Reports</h2>
          <p>
            Measure what matters with Untitled’s easy-to-use reports. Filter, export, and drill down on the data in a couple of clicks.
          </p>
        </div>

        <div className="feature">
          <h2>Connect With Customers</h2>
          <p>Explore 100+ integrations that make your workflow more efficient. Use our developer tools for custom solutions.</p>
        </div>
      </div>

      <div className="cta">
        <h2>Our People Make the Difference</h2>
        <p>
          We’re an extension of your customer service team, and all of our resources are free. Chat with our friendly team 24/7 when you need help.
        </p>
      </div>
    </div>
  );
};

export default Features;

