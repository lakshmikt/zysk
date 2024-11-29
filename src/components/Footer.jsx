import React from "react";
import "./Footer.css";

const Footer = () => {
  const footerData = [
    {
      title: "Product",
      links: ["Overview", "Features", "Solutions", "Pricing", "Releases"],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Press", "Media kit", "Contact"],
    },
    {
      title: "Resources",
      links: ["Blog", "Newsletter", "Help centre", "Tutorials", "SaaS centre"],
    },
    {
      title: "Use cases",
      links: ["Startups", "Enterprise", "Government", "Ecommerce", "Marketplaces"],
    },
    {
      title: "Social",
      links: ["Twitter", "LinkedIn", "Facebook", "GitHub", "Dribbble", "AngelList"],
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses"],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {footerData.map((section, index) => (
          <div key={index} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
