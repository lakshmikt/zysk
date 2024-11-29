import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { question: "Can I change my plan later?", answer: "Yes, you can change your plan anytime from your account settings." },
    { question: "What is your cancellation policy?", answer: "You can cancel anytime, and your subscription will end at the end of your billing cycle." },
    { question: "Can other info be added to an invoice?", answer: "Yes, you can add details like VAT, company name, and address to your invoices." },
    { question: "How does billing work?", answer: "Billing is done on a monthly or yearly basis, depending on the plan you select." },
    { question: "How do I change my account email?", answer: "You can change your email in the account settings section of your profile." },
  ];

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <p className="intro">
        Everything you need to know about the product and billing.
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>

      <div className="faq-footer">
        <p>
          Still have questions? Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>
        <button className="faq-button">Get in touch</button>
      </div>
    </div>
  );
};

export default FAQ;
