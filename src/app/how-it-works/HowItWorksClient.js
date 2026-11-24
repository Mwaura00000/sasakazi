"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HowItWorksClient() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      tag: "DISCOVERY",
      title: "1. Qualify the Need",
      shortDesc: "A focused 15-minute diagnostic call to understand your immediate operational bottleneck.",
      lead: "We start with a rapid, structured diagnostic rather than a long sales cycle. We identify whether your problem is inventory leakage, payment mismatches, or stalled customer quotes.",
      activities: [
        "15-minute diagnostic video or telephone consultation",
        "Identification of current manual friction and tools used (Sheets, WhatsApp, POS)",
        "Determination of whether a fixed 30-day pilot is the right commercial fit",
        "Clear guidance on what data access will be required (read-only exports)"
      ],
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" x2="16.65" y1="21" y2="16.65" />
        </svg>
      )
    },
    {
      num: "02",
      tag: "SCOPING",
      title: "2. Assess Needs & Scope the Pilot",
      shortDesc: "We define precise 30–45 day deliverables, milestones, and acceptance criteria.",
      lead: "No ambiguous consulting hours. We provide a single-page Pilot Agreement specifying the exact deliverables, expected outcomes, timeline, and fixed price.",
      activities: [
        "Definition of concrete weekly milestones (Setup, Execution, Audit, Handover)",
        "Establishment of quantitative acceptance criteria (e.g. 100% variance resolved)",
        "Fixed-price sign-off with escrow milestone protection",
        "Scheduling of weekly 20-minute client review calls"
      ],
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" x2="8" y1="13" y2="13" />
          <line x1="16" x2="8" y1="17" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      num: "03",
      tag: "MATCHING",
      title: "3. Match & Onboard Vetted Talent",
      shortDesc: "We deploy trained local professionals matched specifically to your operational stack.",
      lead: "From our vetted roster trained through EldoHub's technical apprenticeship pipelines, we assign professionals who already know your sector and workflow.",
      activities: [
        "Selection of verified talent based on numerical and communication aptitude",
        "Assignment of a designated Senior Quality Assurance mentor",
        "Secure onboarding without exposing admin or banking credentials",
        "Execution of non-disclosure and strict confidentiality agreements"
      ],
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      num: "04",
      tag: "GOVERNED EXECUTION",
      title: "4. Deliver with Senior QA Gates",
      shortDesc: "Structured execution backed by weekly review checkpoints and senior EldoHub mentorship.",
      lead: "Your talent executes the daily operational tasks while an experienced EldoHub supervisor audits accuracy, verifies logs, and prevents errors before reports reach you.",
      activities: [
        "Daily task logging, statement cross-referencing, and record cleanup",
        "Mid-week internal QA checks conducted by senior operations mentors",
        "Weekly 20-minute client alignment review highlighting variances and progress",
        "Iterative refinement of templates based on client operational feedback"
      ],
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    },
    {
      num: "05",
      tag: "HANDOVER & SCALE",
      title: "5. Handover & Next Steps",
      shortDesc: "Clean sign-off, documented process handover, with the option for ongoing monthly support.",
      lead: "At Day 30–45, we present the verified deliverables, train your in-house staff on the new SOPs, and provide a clear path forward.",
      activities: [
        "Presentation of final reconciliation reports, clean catalog, or CRM logs",
        "One-on-one handover training for your cashier, attendant, or administrator",
        "Written Standard Operating Procedure (SOP) documentation",
        "Seamless option to retain your talent on an affordable monthly retainer"
      ],
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )
    }
  ];

  const governancePillars = [
    {
      title: "EldoHub Mentorship Layer",
      desc: "Junior talent is never left unsupervised. An experienced industry mentor reviews code, spreadsheets, and audits every week to uphold enterprise standards."
    },
    {
      title: "Documented QA Acceptance Criteria",
      desc: "Deliverables are evaluated against objective criteria written down before the pilot began. If numbers don't balance, our team resolves them before sign-off."
    },
    {
      title: "Weekly Pulse Reviews",
      desc: "Every 7 days, you receive a crisp 1-page dashboard and a 15-minute briefing so you always know where your pilot stands."
    },
    {
      title: "Strict Confidentiality",
      desc: "All client operational data, customer lists, and financial statements are governed by signed legal NDAs and stored in encrypted directories."
    }
  ];

  return (
    <div className="how-it-works-page">
      {/* 1. HERO */}
      <section className="hiw-hero">
        <div className="container text-center">
          <span className="badge-sub">Governed Operating Model</span>
          <h1 className="hero-title">A clear, governed process from first conversation to handover</h1>
          <p className="hero-desc">
            We eliminate the risks of outsourcing. Every pilot follows our structured 5-step framework with senior QA checkpoints, transparent milestones, and zero hidden costs.
          </p>
          <div className="hero-cta-row">
            <Link href="/contact" className="btn btn-teal btn-lg">
              Talk to Us About a Pilot
            </Link>
            <a 
              href="tel:+254723567263" 
              className="btn btn-outline-navy btn-lg"
            >
              Call +254 723 567 263
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE 5-STEP PROCESS */}
      <section className="hiw-process-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">Step-by-Step Delivery</span>
            <h2>The 5 Stages of a SasaKazi Pilot</h2>
            <p className="section-desc">
              Click on each step below to inspect how we execute and supervise every phase.
            </p>
          </div>

          <div className="interactive-process-wrapper">
            {/* Step Selector Tabs */}
            <div className="process-tab-nav">
              {steps.map((s, idx) => (
                <button 
                  key={idx} 
                  className={`process-tab-btn ${activeStep === idx ? "active" : ""}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <span className="tab-num">{s.num}</span>
                  <span className="tab-name">{s.title.split(". ")[1]}</span>
                </button>
              ))}
            </div>

            {/* Active Step Card */}
            <div className="active-step-card">
              <div className="step-card-header">
                <div className="step-tag-row">
                  <span className="step-pill">{steps[activeStep].tag}</span>
                  <span className="step-number-tag">Stage {steps[activeStep].num} of 05</span>
                </div>
                <h3>{steps[activeStep].title}</h3>
                <p className="step-lead">{steps[activeStep].lead}</p>
              </div>

              <div className="step-card-body">
                <h4>What Happens During This Stage:</h4>
                <div className="activities-grid">
                  {steps[activeStep].activities.map((act, i) => (
                    <div key={i} className="activity-item">
                      <div className="act-check">✓</div>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="step-card-footer">
                <div className="step-nav-buttons">
                  <button 
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="btn btn-outline-navy btn-sm"
                  >
                    &larr; Previous Stage
                  </button>
                  <button 
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="btn btn-teal btn-sm"
                  >
                    Next Stage &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUALITY & GOVERNANCE */}
      <section className="hiw-governance-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">Quality Guardrails</span>
            <h2>Why Governed BPO Protects Your Business</h2>
            <p className="section-desc">
              Freelancers vanish and traditional agencies overcharge. Our model pairs high-potential local talent with senior oversight so you receive enterprise consistency at SME-friendly prices.
            </p>
          </div>

          <div className="governance-grid">
            {governancePillars.map((pillar, i) => (
              <div key={i} className="gov-card">
                <div className="gov-icon-pill">0{i + 1}</div>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT HAPPENS AFTER THE PILOT */}
      <section className="hiw-continuity-section">
        <div className="container">
          <div className="continuity-card">
            <div className="continuity-content">
              <span className="badge-sub">Long-Term Value</span>
              <h2>What Happens After the 30–45 Day Pilot?</h2>
              <p>
                Our pilots are designed with a clean finish line, but most clients choose to maintain the momentum. You have three flexible pathways once your pilot concludes:
              </p>

              <div className="pathways-grid">
                <div className="pathway-item">
                  <span className="pathway-badge">Option 1</span>
                  <h4>Full Handover</h4>
                  <p>
                    Take your verified spreadsheets, reconciled accounts, and trained internal attendant with zero ongoing commitment.
                  </p>
                </div>

                <div className="pathway-item active">
                  <span className="pathway-badge">Option 2 (Most Popular)</span>
                  <h4>Monthly Support Retainer</h4>
                  <p>
                    Keep your dedicated SasaKazi talent on a simple monthly retainer (from KES 12,000 – KES 15,000/mo) for continuous audits and follow-ups.
                  </p>
                </div>

                <div className="pathway-item">
                  <span className="pathway-badge">Option 3</span>
                  <h4>Expand to New Workflows</h4>
                  <p>
                    Apply the same governed model to another bottleneck in your operations—such as launching inventory tracking after completing payment reconciliations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="hiw-final-cta">
        <div className="container text-center">
          <h2>See if this process fits your business</h2>
          <p>
            Book a 15-minute diagnostic call with our team. We'll examine your current operations and outline exactly what your pilot would look like.
          </p>
          <div className="cta-action-row">
            <Link href="/contact" className="btn btn-teal btn-lg">
              Book a Short Diagnostic Call
            </Link>
            <a 
              href="tel:+254723567263" 
              className="btn btn-outline-white btn-lg"
            >
              Call +254 723 567 263
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .how-it-works-page {
          background-color: var(--color-bg-light);
        }
        .hiw-hero {
          background: #ffffff;
          padding: 4.5rem 0 3.5rem 0;
          border-bottom: 1px solid var(--color-border-gray);
        }
        .text-center {
          text-align: center;
        }
        .badge-sub {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: var(--color-teal);
          margin-bottom: 0.75rem;
        }
        .hero-title {
          font-size: 2.4rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 1.25rem;
          line-height: 1.2;
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.2rem;
          }
        }
        .hero-desc {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          max-width: 720px;
          margin: 0 auto 2.25rem auto;
          line-height: 1.6;
        }
        .hero-cta-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* Process Section */
        .hiw-process-section {
          padding: 5rem 0;
          background: var(--color-bg-light);
        }
        .section-head {
          max-width: 680px;
          margin: 0 auto 3.5rem auto;
        }
        .section-head h2 {
          font-size: 2.2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.75rem;
        }
        .section-desc {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .interactive-process-wrapper {
          max-width: 950px;
          margin: 0 auto;
        }
        .process-tab-nav {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          margin-bottom: 1.5rem;
        }
        @media (min-width: 768px) {
          .process-tab-nav {
            grid-template-columns: repeat(5, 1fr);
          }
        }
        .process-tab-btn {
          background: #ffffff;
          border: 1px solid var(--color-border-gray);
          border-radius: 10px;
          padding: 12px 10px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transition: all 0.2s ease;
        }
        .process-tab-btn:hover {
          border-color: var(--color-teal);
        }
        .process-tab-btn.active {
          background: var(--color-navy);
          border-color: var(--color-navy);
          box-shadow: 0 4px 14px rgba(31, 78, 121, 0.2);
        }
        .tab-num {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--color-teal);
        }
        .process-tab-btn.active .tab-num {
          color: #5eead4;
        }
        .tab-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-navy);
        }
        .process-tab-btn.active .tab-name {
          color: #ffffff;
        }

        /* Active Step Card */
        .active-step-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid var(--color-border-gray);
          padding: 2.5rem;
          box-shadow: 0 8px 24px rgba(31, 78, 121, 0.08);
        }
        .step-tag-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .step-pill {
          background: var(--color-teal-light);
          color: var(--color-teal-dark);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.5px;
        }
        .step-number-tag {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }
        .step-card-header h3 {
          font-size: 1.8rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.75rem;
        }
        .step-lead {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-border-gray);
        }
        .step-card-body h4 {
          font-size: 1rem;
          color: var(--color-navy);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1.25rem;
        }
        .activities-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 768px) {
          .activities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .activity-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: var(--color-bg-light);
          padding: 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--color-text-dark);
          line-height: 1.45;
        }
        .act-check {
          color: var(--color-teal);
          font-weight: 800;
          margin-top: 1px;
        }
        .step-card-footer {
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border-gray);
        }
        .step-nav-buttons {
          display: flex;
          justify-content: space-between;
        }

        /* Governance Section */
        .hiw-governance-section {
          padding: 5rem 0;
          background: #ffffff;
          border-top: 1px solid var(--color-border-gray);
        }
        .governance-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .governance-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 992px) {
          .governance-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .gov-card {
          background: var(--color-bg-light);
          padding: 2rem 1.5rem;
          border-radius: 12px;
          border: 1px solid var(--color-border-gray);
        }
        .gov-icon-pill {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--color-teal);
          margin-bottom: 0.75rem;
        }
        .gov-card h4 {
          font-size: 1.15rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .gov-card p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* Continuity Section */
        .hiw-continuity-section {
          padding: 5rem 0;
          background: var(--color-bg-light);
        }
        .continuity-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid var(--color-border-gray);
          padding: 3rem 2rem;
          box-shadow: 0 4px 16px rgba(31, 78, 121, 0.05);
        }
        .continuity-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .continuity-content h2 {
          font-size: 2.2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .continuity-content > p {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }
        .pathways-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .pathways-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .pathway-item {
          background: var(--color-bg-light);
          padding: 1.75rem;
          border-radius: 12px;
          border: 1px solid var(--color-border-gray);
        }
        .pathway-item.active {
          border-color: var(--color-teal);
          box-shadow: 0 4px 14px rgba(13, 148, 136, 0.15);
          background: var(--color-teal-light);
        }
        .pathway-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--color-navy);
          margin-bottom: 0.5rem;
        }
        .pathway-item.active .pathway-badge {
          color: var(--color-teal-dark);
        }
        .pathway-item h4 {
          font-size: 1.2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .pathway-item p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* Final CTA */
        .hiw-final-cta {
          background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 100%);
          color: #ffffff;
          padding: 5rem 0;
        }
        .hiw-final-cta h2 {
          font-size: 2.4rem;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .hiw-final-cta p {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 620px;
          margin: 0 auto 2rem auto;
          line-height: 1.6;
        }
        .cta-action-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
      `}</style>
    </div>
  );
}
