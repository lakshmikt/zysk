import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <p className="quote">
        “We’ve been using Untitled to kick start every new project and can’t imagine working without it.”
      </p>
      <div className="author">
        <h3>Candice Wu</h3>
        <p>Product Manager, Sisyphus</p>
      </div>
    </div>
  );
};

export default Testimonial;
