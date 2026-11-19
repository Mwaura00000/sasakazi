"use client";

import React from "react";
import Link from "next/link";

export default function PaymentsReconciliationServicePage() {
  const problems = [
    {
      title: "Unmatched Multi-Channel Payments",
      desc: "Unmatched or missing payments across bank transfers, multiple M-Pesa tills/paybills, cash deposits, and card PDQs."
    },
    {
      title: "Delayed, Incomplete Reconciliations",
      desc: "Delayed or incomplete reconciliations that obscure your true cash position and hide cash-flow gaps until month-end."
    },
    {
      title: "Hours Wasted on Manual Matching",
      desc: "Business owners and finance staff spending late nights manually cross-checking M-Pesa SMS confirmation codes against invoices."
    },
    {
      title: "Uncertain Customer Balance Records",
      desc: "Uncertainty about what payments have actually settled versus what customers still owe, creating billing disputes and awkward client calls."
    }
  ];

  const deliverables = [
    {
      title: "Daily M-Pesa Till to Bank Matching",
      desc: "Systematic mapping of daily mobile money collections, Paybill balances, and bank deposits to verify zero missing shillings."
    },
    {
      title: "Multi-Channel Transaction Ledger",
      desc: "Unified reconciliation spreadsheet consolidating cash, card POS, M-Pesa, and electronic bank transfers into one clean ledger."
    },
    {
      title: "Unallocated Customer Payment Log",
      desc: "Audit trail resolving orphaned payments, unidentified till references, and customer deposit discrepancies."
    },
    {
      title: "Accounts Receivable Aging Schedule",
      desc: "Clear itemized schedule tracking outstanding client balances, overdue credit days, and collection priorities."
    },
    {
      title: "Automated Discrepancy & Dispute Alerts",
      desc: "Formula-driven dispute sheet flagging uncredited transactions, reversed payments, and supplier variance immediately."
    },
    {
      title: "Weekly Financial Summary & Handover SOPs",
      desc: "Clean weekly sign-off reports for management with documented standard operating procedures for your internal bookkeeper."
    }
  ];

  const whoItsFor = [
    {
      sector: "Multi-Channel Retailers",
      desc: "Businesses receiving payments across multiple M-Pesa tills, credit cards, bank transfers, and cash daily."
    },
    {
      sector: "Distributors & Wholesalers",
      desc: "Companies extending trade credit and balancing daily driver collections against warehouse sales invoices."
    },
    {
      sector: "Clinics, Schools & Hospitality",
      desc: "Institutions handling high daily transaction volumes where unallocated payments lead to administrative confusion."
    },
    {
      sector: "Growing SME Owners",
      desc: "Owners or finance managers who currently reconcile manually or irregularly and want peace of mind."
    }
  ];

  const deliverySchedule = [
    {
      week: "Week 1",
      title: "Channel Audit & Mapping",
      desc: "Review of all payment channels, M-Pesa portals, bank statements, and historical variance logs."
    },
    {
      week: "Week 2",
      title: "Daily Matching Setup",
      desc: "Configuration of daily reconciliation templates and transaction mapping routines."
    },
    {
      week: "Weeks 3-4",
      title: "Governed Execution & QA",
      desc: "Vetted finance talent executes daily reconciliations with senior EldoHub accounting mentorship oversight."
    },
    {
      week: "Handover",
      title: "Clean Books & Handover",
      desc: "Zero-variance sign-off, documented process handover, and transition to ongoing monthly retainer."
    }
  ];

  return (
    <div className="service-detail-page">
      {/* 1. HERO */}
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/services">BPO Services</Link> <span>/</span> <span>Payments Reconciliation</span>
          </div>

          <div className="hero-grid">
            <div className="hero-text">
              <span className="badge-sub">30–45 Day Fixed Pilot</span>
              <h1>Payments Reconciliation</h1>
              <p className="hero-lead">
                Get your payments matched, reported and under control — without the daily headache.
              </p>

              <div className="hero-pricing-box">
                <div className="price-tag">
                  From KES 20,000 <span>/ 30-Day Pilot</span>
                </div>
                <p className="price-sub">Fixed price • Delivered by vetted local talent • Senior QA included • Read-only access</p>
              </div>

              <div className="hero-cta-group">
                <Link href="/contact?service=payments-reconciliation" className="btn btn-teal btn-lg">
                  Request Payments Pilot
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <a 
                  href="https://wa.me/254723567263?text=Hello%20SasaKazi%2C%20I%20am%20interested%20in%20the%20Payments%20Reconciliation%20pilot%20(From%20KES%2020%2C000)." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline-navy btn-lg"
                >
                  Discuss on WhatsApp
                </a>
              </div>
            </div>

            <div className="hero-summary-card">
              <h3>Pilot Snapshot</h3>
              <ul className="snapshot-list">
                <li>
                  <strong>Target Duration:</strong> 30–45 Days to Outcome
                </li>
                <li>
                  <strong>Starting Investment:</strong> From KES 20,000 fixed
                </li>
                <li>
                  <strong>Monthly Retainer Option:</strong> From KES 12,000/mo ongoing
                </li>
                <li>
                  <strong>Access Required:</strong> Read-only statement exports (No passwords or OTPs required)
                </li>
                <li>
                  <strong>Governed QA:</strong> Audited by senior EldoHub finance &amp; accounting mentors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="section-padded bg-white">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">The Problem</span>
            <h2>Where Kenyan Businesses Lose Money &amp; Sleep</h2>
            <p className="section-desc">
              When money arrives across multiple till numbers, bank accounts, and cash drawers, unmapped payments quietly eat into operating cash flow.
            </p>
          </div>

          <div className="problems-grid">
            {problems.map((prob, i) => (
              <div key={i} className="problem-card">
                <div className="problem-num">0{i + 1}</div>
                <h4>{prob.title}</h4>
                <p>{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT YOU GET */}
      <section className="section-padded bg-light">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">What You Get</span>
            <h2>Tangible Deliverables in Your 30-Day Pilot</h2>
            <p className="section-desc">
              Clean accounting schedules, automated matching models, and documented reconciliations ready for your director reviews or tax audits.
            </p>
          </div>

          <div className="deliverables-grid">
            {deliverables.map((item, i) => (
              <div key={i} className="deliverable-card">
                <div className="del-check">✓</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO IT'S FOR */}
      <section className="section-padded bg-white">
        <div className="container">
          <div className="who-container">
            <div className="who-header text-center">
              <span className="badge-sub">Who It's For</span>
              <h2>Designed for Multi-Channel Payment Receivers</h2>
              <p>Businesses handling daily customer payments across mobile money, cards, and banking channels.</p>
            </div>

            <div className="who-cards-row">
              {whoItsFor.map((item, i) => (
                <div key={i} className="who-item-card">
                  <span className="who-badge">{item.sector}</span>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW DELIVERY WORKS */}
      <section className="section-padded bg-light">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">How Delivery Works</span>
            <h2>A Governed 4-Stage Reconciliation Roadmap</h2>
            <p className="section-desc">
              Structured daily execution backed by weekly quality check gates and senior mentor oversight.
            </p>
          </div>

          <div className="schedule-timeline">
            {deliverySchedule.map((step, i) => (
              <div key={i} className="schedule-item">
                <div className="step-tag">{step.week}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link href="/how-it-works" className="btn btn-outline-navy">
              See Our Full 5-Step Governed Process &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. INVESTMENT & QUALITY PROMISE */}
      <section className="section-padded bg-white">
        <div className="container">
          <div className="investment-grid">
            <div className="investment-card">
              <span className="badge-sub">Investment</span>
              <h3>Pilot Pricing Bands</h3>
              <p className="invest-desc">
                Clear upfront pilot pricing with agreed milestones. No open-ended hourly fees or surprise charges.
              </p>
              <div className="price-row">
                <strong>From KES 20,000</strong>
                <span>Standard SME Pilot (Up to 2 tills / 1 bank account / moderate volume)</span>
              </div>
              <div className="price-row">
                <strong>From KES 32,000</strong>
                <span>High-Volume Multi-Channel Pilot (Multiple branches, POS cards &amp; Paybills)</span>
              </div>
              <div className="price-row">
                <strong>From KES 12,000/mo</strong>
                <span>Optional ongoing monthly reconciliation retainer after pilot</span>
              </div>
            </div>

            <div className="quality-card">
              <span className="badge-sub">Quality Promise</span>
              <h3>Bank-Grade Confidentiality &amp; QA</h3>
              <p>
                We maintain strict non-disclosure terms. Our talent operates strictly on read-only transaction exports. We never request banking passwords, PINs, or OTP tokens.
              </p>
              <ul className="quality-bullets">
                <li>100% matched shillings guarantee on agreed scope</li>
                <li>Senior accounting mentor audit on reconciliation spreadsheets</li>
                <li>Signed Non-Disclosure Agreement (NDA) before data exchange</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="service-bottom-cta">
        <div className="container text-center">
          <h2>Get Your Payments Matched and Under Control</h2>
          <p>
            Request a pilot or start with a 15-minute diagnostic call. We will review your current payment channels and confirm if this pilot fits your business.
          </p>
          <div className="cta-action-row">
            <Link href="/contact?service=payments-reconciliation" className="btn btn-teal btn-lg">
              Request Payments Pilot
            </Link>
            <a 
              href="https://wa.me/254723567263?text=Hello%20SasaKazi%2C%20I%20am%20ready%20to%20discuss%20the%20Payments%20Reconciliation%20pilot." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-white btn-lg"
            >
              Discuss on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-detail-page {
          background-color: var(--color-bg-light);
        }

        .service-hero {
          background: linear-gradient(180deg, #ffffff 0%, var(--color-bg-light) 100%);
          padding: 3rem 0 4rem 0;
          border-bottom: 1px solid var(--color-border);
        }

        .breadcrumb {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .breadcrumb a {
          color: var(--color-teal);
          text-decoration: none;
          font-weight: 600;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .hero-text h1 {
          font-size: 2.8rem;
          color: var(--color-navy);
          font-weight: 800;
          line-height: 1.15;
          margin: 0.75rem 0 1.25rem 0;
          letter-spacing: -0.02em;
        }

        .hero-lead {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .hero-pricing-box {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-left: 4px solid var(--color-teal);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow-sm);
        }

        .price-tag {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--color-navy);
        }

        .price-tag span {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-teal);
        }

        .price-sub {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          margin-top: 4px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .hero-summary-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          padding: 2.25rem;
          box-shadow: var(--shadow-md);
        }

        .hero-summary-card h3 {
          font-size: 1.3rem;
          color: var(--color-navy);
          font-weight: 700;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 0.75rem;
        }

        .snapshot-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .snapshot-list li {
          font-size: 0.95rem;
          color: var(--color-text-main);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .snapshot-list strong {
          color: var(--color-navy);
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Shared Section Styles */
        .section-padded {
          padding: 4.5rem 0;
        }

        .bg-white {
          background: #ffffff;
        }

        .bg-light {
          background: var(--color-bg-light);
        }

        .section-head {
          max-width: 700px;
          margin: 0 auto 3rem auto;
        }

        .section-head h2 {
          font-size: 2.2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin: 0.5rem 0 1rem 0;
        }

        .section-desc {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* Problems Grid */
        .problems-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .problems-grid {
            grid-template-columns: 1fr;
          }
        }

        .problem-card {
          background: #ffffff;
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        .problem-num {
          font-size: 1rem;
          font-weight: 800;
          color: var(--color-teal);
          margin-bottom: 0.5rem;
        }

        .problem-card h4 {
          font-size: 1.2rem;
          color: var(--color-navy);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .problem-card p {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* Deliverables Grid */
        .deliverables-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .deliverables-grid {
            grid-template-columns: 1fr;
          }
        }

        .deliverable-card {
          background: #ffffff;
          padding: 1.75rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          box-shadow: var(--shadow-sm);
        }

        .del-check {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(13, 148, 136, 0.12);
          color: var(--color-teal);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.85rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .deliverable-card h4 {
          font-size: 1.1rem;
          color: var(--color-navy);
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .deliverable-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin: 0;
        }

        /* Who Cards */
        .who-cards-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-top: 2.5rem;
        }

        @media (max-width: 992px) {
          .who-cards-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .who-cards-row {
            grid-template-columns: 1fr;
          }
        }

        .who-item-card {
          background: var(--color-bg-light);
          padding: 1.75rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
        }

        .who-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-teal);
          margin-bottom: 0.75rem;
        }

        .who-item-card p {
          font-size: 0.92rem;
          color: var(--color-text-main);
          line-height: 1.5;
          margin: 0;
        }

        /* Schedule Timeline */
        .schedule-timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 992px) {
          .schedule-timeline {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .schedule-timeline {
            grid-template-columns: 1fr;
          }
        }

        .schedule-item {
          background: #ffffff;
          padding: 1.75rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        .step-tag {
          font-size: 0.78rem;
          font-weight: 700;
          background: var(--color-navy);
          color: #ffffff;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .schedule-item h4 {
          font-size: 1.1rem;
          color: var(--color-navy);
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .schedule-item p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }

        /* Investment & Quality Grid */
        .investment-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .investment-grid {
            grid-template-columns: 1fr;
          }
        }

        .investment-card, .quality-card {
          background: var(--color-bg-light);
          padding: 2.25rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
        }

        .investment-card h3, .quality-card h3 {
          font-size: 1.4rem;
          color: var(--color-navy);
          font-weight: 800;
          margin: 0.5rem 0 0.75rem 0;
        }

        .invest-desc {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .price-row {
          background: #ffffff;
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          margin-bottom: 0.75rem;
          border: 1px solid var(--color-border);
        }

        .price-row strong {
          display: block;
          color: var(--color-navy);
          font-size: 1.15rem;
          margin-bottom: 2px;
        }

        .price-row span {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .quality-bullets {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-top: 1.5rem;
        }

        .quality-bullets li {
          font-size: 0.92rem;
          color: var(--color-text-main);
          position: relative;
          padding-left: 1.4rem;
          line-height: 1.5;
        }

        .quality-bullets li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-teal);
          font-weight: 800;
        }

        /* Bottom CTA */
        .service-bottom-cta {
          background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 100%);
          color: #ffffff;
          padding: 4.5rem 0;
        }

        .service-bottom-cta h2 {
          font-size: 2.4rem;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .service-bottom-cta p {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 650px;
          margin: 0 auto 2rem auto;
          line-height: 1.6;
        }

        .cta-action-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .btn-outline-white {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.8);
          padding: 0.85rem 1.75rem;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
        }

        .btn-outline-white:hover {
          background: #ffffff;
          color: var(--color-navy);
        }
      `}</style>
    </div>
  );
}
