"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HowItWorksClient() {
  const [activeStep, setActiveStep] = useState(0);

  const deliverySteps = [
    {
      num: "01",
      stepTitle: "Understand",
      heading: "1. Understand the Requirement",
      desc: "We define the business challenge, outputs, required skills, timeline, budget, working arrangement and success measures.",
      details: [
        "In-depth technical scoping & objective definition",
        "Resource allocation and budget mapping",
        "Clear timeline and deliverable milestones formulation",
        "Success KPIs and working arrangement agreement"
      ]
    },
    {
      num: "02",
      stepTitle: "Design",
      heading: "2. Design the Delivery Model",
      desc: "We recommend a defined project, dedicated professional, managed team, outsourced function or direct placement.",
      details: [
        "Select optimum model: Fixed Project, Dedicated Pod, BPO, or Staff Augmentation",
        "Establish service level agreements (SLAs)",
        "Determine governance and escalation framework",
        "Define tooling, environment access, and codebase permissions"
      ]
    },
    {
      num: "03",
      stepTitle: "Source",
      heading: "3. Source Qualified Talent",
      desc: "We identify professionals whose skills, experience, availability and interests align with the assignment.",
      details: [
        "Targeted screening from our pre-registered African talent network",
        "Alignment with specific technical stacks (frontend, backend, QA, UI/UX, BPO)",
        "Availability verification and timezone compatibility confirmation",
        "Domain interest and context match"
      ]
    },
    {
      num: "04",
      stepTitle: "Assess",
      heading: "4. Rigorous Capability Assessment",
      desc: "Assessment may include profile verification, portfolio review, technical tests, practical case studies, interviews and communication checks.",
      details: [
        "Deep portfolio & code repository validation",
        "Hands-on practical case studies & technical challenges",
        "Live technical and situational interview rounds",
        "Soft skills, English fluency, and communication checks"
      ]
    },
    {
      num: "05",
      stepTitle: "Match & Onboard",
      heading: "5. Match & Structured Onboarding",
      desc: "We present suitable talent, confirm the selection and prepare the professional or team for the client’s systems, expectations and milestones.",
      details: [
        "Client review and selection confirmation",
        "System integration, security walkthrough, and NDA sign-off",
        "Milestone schedule alignment and tooling setup",
        "Introduction to dedicated SasaKazi delivery coordinator"
      ]
    },
    {
      num: "06",
      stepTitle: "Deliver & Manage",
      heading: "6. Managed Delivery & Quality Assurance",
      desc: "Talent delivers against agreed outputs. Depending on the model, SasaKazi supports progress tracking, communication, quality review and issue escalation.",
      details: [
        "Iterative execution against agreed milestones",
        "Regular sprint check-ins and progress status reports",
        "Mentor guardrails and technical code reviews",
        "Rapid bottleneck resolution and quality oversight"
      ]
    },
    {
      num: "07",
      stepTitle: "Review & Grow",
      heading: "7. Review, Optimize & Scale",
      desc: "We review performance and outcomes. Successful engagements can progress into new projects, dedicated teams, managed services or employment.",
      details: [
        "Final deliverable sign-off against documented acceptance criteria",
        "Formal client feedback and talent performance appraisal",
        "Seamless extension into ongoing managed support or dedicated pod",
        "Pathways into permanent placement where appropriate"
      ]
    }
  ];

  const clientExpectations = [
    "A documented requirement and recommended delivery model",
    "Talent profiles aligned with the required capabilities",
    "Clear onboarding and communication arrangements",
    "Defined milestones and acceptance criteria",
    "Progress reporting, feedback and escalation procedures",
    "A close-out review and next-step recommendations"
  ];

  const qualityFactors = [
    { title: "Clear Scopes", desc: "Detailed technical specifications preventing scope creep and ambiguity." },
    { title: "Relevant Assessment", desc: "Multi-layered vetting aligned directly with the project technology stack." },
    { title: "Structured Onboarding", desc: "Smooth integration into your company systems, tools, and workflows." },
    { title: "Defined Milestones", desc: "Deliverables broken down into clear sprint phases with explicit checkpoints." },
    { title: "Progress Reviews", desc: "Consistent cadence of status updates, code reviews, and risk checks." },
    { title: "Documented Acceptance", desc: "Transparent criteria for project sign-off and mutual milestone release." }
  ];

  return (
    <div className="how-it-works-page">
      {/* 1. PAGE BANNER */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content">
            <span className="badge-pill">The Process</span>
            <h1>From Business Need to Successful Delivery</h1>
            <p className="banner-lead">
              We do not begin with a list of available professionals. We begin by understanding what the client needs to achieve.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE 7-STEP DELIVERY JOURNEY */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header-center">
            <span className="sub-heading-badge">Step-by-Step Execution</span>
            <h2>The Delivery Journey</h2>
            <p>Our 7-stage managed delivery lifecycle that guarantees predictability and quality.</p>
          </div>

          {/* Stepper Navigation */}
          <div className="stepper-nav">
            {deliverySteps.map((step, idx) => (
              <button
                key={step.num}
                className={`step-btn ${activeStep === idx ? "active" : ""}`}
                onClick={() => setActiveStep(idx)}
              >
                <span className="step-btn-num">{step.num}</span>
                <span className="step-btn-title">{step.stepTitle}</span>
              </button>
            ))}
          </div>

          {/* Active Step Panel */}
          <div className="step-display-card glass-panel">
            <div className="step-header-row">
              <span className="step-large-num">{deliverySteps[activeStep].num}</span>
              <div>
                <h3>{deliverySteps[activeStep].heading}</h3>
                <p className="step-desc">{deliverySteps[activeStep].desc}</p>
              </div>
            </div>

            <div className="step-details-block">
              <h4>Included in this phase:</h4>
              <div className="step-details-grid">
                {deliverySteps[activeStep].details.map((detail, i) => (
                  <div key={i} className="detail-item">
                    <span className="detail-check">✓</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="step-navigation-controls">
              <button
                className="btn btn-outline"
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
              >
                ← Previous Step
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setActiveStep((prev) => Math.min(deliverySteps.length - 1, prev + 1))}
                disabled={activeStep === deliverySteps.length - 1}
              >
                Next Step →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT CLIENTS CAN EXPECT */}
      <section className="expectations-section">
        <div className="container">
          <div className="expectations-grid">
            <div className="expectations-left">
              <span className="sub-heading-badge">Transparency &amp; Governance</span>
              <h2>What Clients Can Expect</h2>
              <p>
                Every engagement with SasaKazi is grounded in clear communication, accountability, and predictable project milestones.
              </p>
              <div className="expectations-cta">
                <Link href="/register/business" className="btn btn-primary">
                  Start a Project
                </Link>
                <Link href="https://wa.me/254723567263" target="_blank" className="btn btn-secondary">
                  Schedule a Consultation
                </Link>
              </div>
            </div>

            <div className="expectations-right glass-panel">
              <ul className="expect-list">
                {clientExpectations.map((item, idx) => (
                  <li key={idx}>
                    <span className="expect-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUALITY ASSURANCE */}
      <section className="qa-section">
        <div className="container">
          <div className="section-header-center">
            <span className="sub-heading-badge">Excellence by Design</span>
            <h2>Quality Assurance</h2>
            <p>Quality is supported through clear scopes, relevant assessment, structured onboarding, defined milestones, progress reviews, client feedback and documented acceptance criteria.</p>
          </div>

          <div className="qa-grid">
            {qualityFactors.map((q, idx) => (
              <div key={idx} className="qa-card">
                <div className="qa-top-row">
                  <div className="qa-card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  </div>
                  <span className="qa-mono-num">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <h3>{q.title}</h3>
                <p>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROFESSIONAL STANDARDS & MUTUAL OBLIGATIONS */}
      <section className="standards-section">
        <div className="container">
          <div className="section-header-center">
            <span className="sub-heading-badge">Code of Conduct</span>
            <h2>Professional Standards</h2>
            <p>Shared commitment to ethical conduct, security, and mutual respect.</p>
          </div>

          <div className="standards-grid">
            {/* Talent Standards */}
            <div className="standard-box talent-box glass-panel">
              <div className="standard-badge">For Tech Talent</div>
              <h3>Talent Obligations</h3>
              <p>SasaKazi professionals commit to:</p>
              <ul>
                <li>Provide accurate, verified profile information</li>
                <li>Strictly protect client data and confidentiality</li>
                <li>Communicate honestly, proactively and regularly</li>
                <li>Meet agreed project milestones and deadlines</li>
                <li>Produce original, high-quality deliverables</li>
                <li>Respect intellectual property rights and code licenses</li>
                <li>Maintain the highest standards of professional conduct</li>
              </ul>
            </div>

            {/* Client Standards */}
            <div className="standard-box client-box glass-panel">
              <div className="standard-badge">For Clients</div>
              <h3>Client Obligations</h3>
              <p>Client partners commit to:</p>
              <ul>
                <li>Provide clear, well-scoped assignments and goals</li>
                <li>Ensure timely access to systems, tools, and info</li>
                <li>Provide constructive, prompt deliverable feedback</li>
                <li>Honor agreed payment terms and milestone escrow releases</li>
                <li>Maintain a safe, respectful, and inclusive working environment</li>
                <li>Uphold transparent communication with the delivery team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-banner">
            <h2>Let Us Build the Right Team for Your Requirement</h2>
            <p>Whether you need a full-stack developer, a dedicated BPO pod, or a managed AI team, we coordinate execution from day one.</p>
            <div className="cta-actions">
              <Link href="/register/business" className="btn btn-primary btn-lg">
                Start a Project
              </Link>
              <a href="https://wa.me/254723567263?text=Hello%20SasaKazi%2C%20I%20would%20like%20to%20schedule%20a%20consultation." target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .how-it-works-page {
          padding-top: 0;
        }

        /* Banner */
        .page-banner {
          padding: 5rem 0 3.5rem;
          background: linear-gradient(180deg, rgba(26, 91, 140, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
          text-align: center;
        }
        .banner-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .badge-pill {
          display: inline-block;
          background-color: var(--color-blue-light);
          color: var(--color-blue);
          font-size: 0.85rem;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          margin-bottom: 1.25rem;
        }
        .page-banner h1 {
          font-size: 2.6rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          line-height: 1.2;
          margin-bottom: 1.25rem;
        }
        @media (min-width: 768px) {
          .page-banner h1 {
            font-size: 3.2rem;
          }
        }
        .banner-lead {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          line-height: 1.65;
        }

        /* Section Header Center */
        .section-header-center {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3.5rem;
        }
        .sub-heading-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--color-blue);
          margin-bottom: 0.75rem;
        }
        .section-header-center h2 {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 0.75rem;
        }
        .section-header-center p {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* Journey Section */
        .journey-section {
          padding: 4rem 0;
        }
        .stepper-nav {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--color-border-gray);
        }
        .step-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0.75rem 1.25rem;
          background: var(--color-bg-light);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-full);
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .step-btn-num {
          font-weight: 800;
          color: var(--color-yellow-dark);
          font-size: 0.85rem;
        }
        .step-btn-title {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--color-text-dark);
        }
        .step-btn.active {
          background-color: var(--color-blue);
          border-color: var(--color-blue);
        }
        .step-btn.active .step-btn-num {
          color: var(--color-yellow);
        }
        .step-btn.active .step-btn-title {
          color: #fff;
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 3rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);
        }
        .step-display-card {
          max-width: 900px;
          margin: 0 auto;
        }
        .step-header-row {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-border-gray);
        }
        .step-large-num {
          font-size: 3.5rem;
          font-weight: 900;
          color: var(--color-blue);
          line-height: 1;
        }
        .step-header-row h3 {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 0.5rem;
        }
        .step-desc {
          font-size: 1.05rem;
          color: var(--color-text-dark);
          line-height: 1.6;
          margin: 0;
        }
        .step-details-block h4 {
          font-size: 0.95rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-muted);
          margin-bottom: 1.25rem;
        }
        .step-details-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        @media (min-width: 768px) {
          .step-details-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--color-text-dark);
          line-height: 1.5;
        }
        .detail-check {
          color: #1b8a2c;
          font-weight: 900;
          background: rgba(39, 201, 63, 0.15);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .step-navigation-controls {
          display: flex;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border-gray);
        }

        /* Expectations */
        .expectations-section {
          padding: 5rem 0;
          background-color: var(--color-bg-light);
        }
        .expectations-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 900px) {
          .expectations-grid {
            grid-template-columns: 1fr 1.2fr;
          }
        }
        .expectations-left h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 1rem;
        }
        .expectations-left p {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .expectations-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .expect-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .expect-list li {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text-dark);
        }
        .expect-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(39, 201, 63, 0.15);
          color: #1b8a2c;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* QA Section */
        .qa-section {
          padding: 5rem 0;
        }
        .qa-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 600px) {
          .qa-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .qa-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .qa-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border-stone, #d6d1c4);
          border-radius: var(--radius-lg);
          padding: 2.25rem 2rem;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .qa-card:hover {
          transform: translateY(-4px);
          border-color: #0f3d61;
          box-shadow: 0 12px 28px rgba(15, 61, 97, 0.08);
        }
        .qa-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .qa-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--color-bg-warm, #FAF7F0);
          border: 1px solid var(--color-border-stone, #d6d1c4);
          color: #0f3d61;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }
        .qa-card:hover .qa-card-icon {
          background: #0f3d61;
          color: #fbb63f;
          border-color: #0f3d61;
          transform: scale(1.05);
        }
        .qa-mono-num {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 700;
          color: #a8a29e;
          letter-spacing: 0.5px;
          transition: color 0.2s ease;
        }
        .qa-card:hover .qa-mono-num {
          color: #C05621;
        }
        .qa-card h3 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }
        .qa-card p {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* Standards */
        .standards-section {
          padding: 5rem 0;
          background-color: var(--color-bg-light);
        }
        .standards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 800px) {
          .standards-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .standard-box {
          position: relative;
        }
        .standard-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          background-color: var(--color-blue-light);
          color: var(--color-blue);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 1rem;
        }
        .standard-box h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 0.5rem;
        }
        .standard-box p {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          margin-bottom: 1.25rem;
        }
        .standard-box ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .standard-box li {
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.92rem;
          color: var(--color-text-dark);
          line-height: 1.5;
        }
        .standard-box li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-yellow-dark);
          font-size: 1.25rem;
          line-height: 1;
        }

        /* CTA */
        .cta-section {
          padding: 5rem 0;
        }
        .cta-banner {
          background: linear-gradient(135deg, var(--color-blue-dark) 0%, var(--color-blue) 100%);
          border-radius: var(--radius-lg);
          padding: 4rem 2rem;
          text-align: center;
          color: #fff;
          box-shadow: 0 20px 40px rgba(26, 91, 140, 0.2);
        }
        .cta-banner h2 {
          font-size: 2.3rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 1rem;
        }
        .cta-banner p {
          max-width: 650px;
          margin: 0 auto 2.25rem;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }
        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .btn-outline-white {
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
        }
        .btn-outline-white:hover {
          background: #fff;
          color: var(--color-blue);
        }

        @media (max-width: 768px) {
          .glass-panel {
            padding: 1.75rem;
          }
          .step-header-row {
            flex-direction: column;
            gap: 1rem;
          }
          .cta-banner h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
