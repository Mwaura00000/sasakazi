"use client";

import { useState } from "react";

export default function FaqsPage() {
  const faqs = [
    {
      q: "How does Sasakazi verify tech talent?",
      a: "Our vetting process consists of technical assessments (coding test & logic challenges), soft skills evaluations, and baseline readiness reviews. We track these results in our 'Capability Intelligence' framework."
    },
    {
      q: "What are the mentor guardrails?",
      a: "For paid client projects, we attach a senior tech lead who oversees the apprentice talent. The mentor reviews all source code before it reaches the client, ensuring the business gets premium quality delivery."
    },
    {
      q: "How does milestone payment work?",
      a: "Businesses break their project budget into clear, deliverable milestones. Funds for each milestone are secured in escrow, and only released to the talent after the client and mentor approve the deliverables."
    },
    {
      q: "How can my business post a project?",
      a: "To post a project, register as a business on our platform. An account representative will verify your business and guide you in splitting your project requirements into milestones."
    }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="container content-page">
      <h1>Frequently Asked Questions</h1>
      <p className="intro-text">
        Got questions about the platform, matching engine, or guardrails? We have answers.
      </p>

      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item glass">
            <button 
              className={`faq-question-btn ${activeFaq === index ? "active" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.q}</span>
              <span className="faq-icon">{activeFaq === index ? "−" : "+"}</span>
            </button>
            
            {activeFaq === index && (
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .content-page {
          padding-top: 64px;
          padding-bottom: 80px;
          max-width: 750px;
        }
        .content-page h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 16px;
          text-align: center;
        }
        .intro-text {
          font-size: 1.2rem;
          color: var(--color-text-light);
          line-height: 1.6;
          margin-bottom: 48px;
          text-align: center;
        }
        .faqs-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .faq-item {
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition);
        }
        .faq-question-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          padding: 24px;
          text-align: left;
          font-family: var(--font-outfit);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text);
          cursor: pointer;
        }
        .faq-question-btn:hover {
          color: var(--color-primary);
        }
        .faq-question-btn.active {
          color: var(--color-primary);
          border-bottom: 1px solid var(--color-border);
        }
        .faq-icon {
          font-size: 1.5rem;
          line-height: 1;
        }
        .faq-answer {
          padding: 24px;
          background-color: rgba(255, 255, 255, 0.3);
          line-height: 1.6;
          font-size: 0.95rem;
          color: var(--color-text-light);
        }
        @media (prefers-color-scheme: dark) {
          .faq-answer {
            background-color: rgba(21, 31, 50, 0.2);
          }
        }
      `}</style>
    </div>
  );
}
