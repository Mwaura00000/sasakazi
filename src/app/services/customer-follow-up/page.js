"use client";

import React from "react";
import Link from "next/link";

export default function CustomerFollowUpServicePage() {
  const problems = [
    {
      title: "Leads Going Cold",
      desc: "Valuable customer inquiries and price quotation requests going cold because no one follows up systematically after the initial message."
    },
    {
      title: "Inconsistent, Ad-Hoc Outreach",
      desc: "Follow-up depends on who is free or remembers to send a text, resulting in missed sales and an unorganized brand impression."
    },
    {
      title: "No Conversation Tracking System",
      desc: "Customer chats scattered across individual staff personal phones with no shared pipeline showing who was quoted, who replied, or what comes next."
    },
    {
      title: "Lost Sales & Weak Conversion",
      desc: "Spending money or effort generating leads only to see low conversion rates because warm prospects buy from competitors who followed up first."
    }
  ];

  const deliverables = [
    {
      title: "Lead & Inquiry Database Cleanup",
      desc: "Centralize and clean customer contacts from WhatsApp chats, phone call logs, email threads, and walk-in records into one clear tracker."
    },
    {
      title: "Multi-Touch Cadence Protocol",
      desc: "Disciplined Day 1, Day 3, and Day 7 follow-up routine via WhatsApp Business, phone calls, and email tailored to your typical sales cycle."
    },
    {
      title: "Quote Pipeline & Status Tracker",
      desc: "Live visual status board tracking every pending quotation, objection raised, follow-up date, and deal closure value."
    },
    {
      title: "Brand-Aligned Response Playbook",
      desc: "Professional, polite message scripts and objection-handling templates customized to your business voice and pricing rules."
    },
    {
      title: "Win/Loss Feedback & Objection Logs",
      desc: "Actionable weekly log highlighting why prospects hesitated, competitor price comparisons, and customer sentiment."
    },
    {
      title: "Weekly Revenue Conversion Report",
      desc: "Executive weekly summary for the business owner highlighting converted leads, closed revenue, and pipeline health."
    }
  ];

  const whoItsFor = [
    {
      sector: "SMEs Generating Inquiries",
      desc: "Businesses receiving regular walk-ins, phone calls, WhatsApp messages, or website inquiries that fail to convert."
    },
    {
      sector: "Contractors & Service Providers",
      desc: "Fabricators, interior designers, consultants, and event planners sending out high-value quotes that stall without decisions."
    },
    {
      sector: "B2B Wholesalers & Suppliers",
      desc: "Companies wanting to reactivate dormant past buyers and re-engage dormant customer accounts."
    },
    {
      sector: "Growing Businesses",
      desc: "Owners wanting professional sales coordination without committing to the fixed overhead of a full-time in-house sales rep."
    }
  ];

  const deliverySchedule = [
    {
      week: "Week 1",
      title: "Pipeline Audit & Scripting",
      desc: "Audit of historical leads, dormant quote extraction, and creation of customized follow-up message scripts."
    },
    {
      week: "Week 2",
      title: "Cadence Launch & Initial Waves",
      desc: "Setup of shared tracking sheets, WhatsApp Business templates, and launch of outreach to recent open quotes."
    },
    {
      week: "Weeks 3-4",
      title: "Active Outreach & Conversion",
      desc: "Disciplined daily follow-ups, quote reviving, objection escalation, and senior EldoHub QA reviews."
    },
    {
      week: "Handover",
      title: "Conversion Sign-Off & Playbook",
      desc: "Delivery of converted sales report, handed-over contact database, and optional monthly retainer setup."
    }
  ];

  return (
    <div className="service-detail-page">
      {/* 1. HERO */}
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/services">BPO Services</Link> <span>/</span> <span>Customer Follow-up</span>
          </div>

          <div className="hero-grid">
            <div className="hero-text">
              <span className="badge-sub">30–45 Day Fixed Pilot</span>
              <h1>Customer Follow-up &amp; Retention</h1>
              <p className="hero-lead">
                Stop losing leads and customers through inconsistent follow-up. Put a reliable process in place.
              </p>

              <div className="hero-pricing-box">
                <div className="price-tag">
                  From KES 18,000 <span>/ 30-Day Pilot</span>
                </div>
                <p className="price-sub">Fixed price • Delivered by vetted local talent • Senior QA included • Lowest barrier entry point</p>
              </div>

              <div className="hero-cta-group">
                <Link href="/contact?service=customer-follow-up" className="btn btn-teal btn-lg">
                  Request Follow-up Pilot
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <a 
                  href="tel:+254723567263" 
                  className="btn btn-outline-navy btn-lg"
                >
                  Call +254 723 567 263
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
                  <strong>Starting Investment:</strong> From KES 18,000 fixed
                </li>
                <li>
                  <strong>Monthly Retainer Option:</strong> From KES 12,000/mo ongoing
                </li>
                <li>
                  <strong>Channels Covered:</strong> WhatsApp Business, Phone Calls &amp; Email
                </li>
                <li>
                  <strong>Governed QA:</strong> Supervised by senior EldoHub customer success mentors
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
            <h2>Where Kenyan Businesses Lose Warm Revenue</h2>
            <p className="section-desc">
              Over 60% of customer inquiries drop off simply because no one replied quickly or followed up when the customer got busy.
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
              Organized contact databases, structured follow-up cadences, converted revenue, and a repeatable playbook your team owns forever.
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
              <h2>Designed for Businesses That Generate Leads But Convert Weakly</h2>
              <p>SMEs that want professional sales and client follow-up without hiring a full-time coordinator immediately.</p>
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
            <h2>A Governed 4-Stage Lead Conversion Roadmap</h2>
            <p className="section-desc">
              Vetted local talent paired with senior EldoHub customer success mentors to protect your reputation and brand voice.
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
                Clear upfront pilot pricing with agreed milestones. Lowest entry barrier of our three core services.
              </p>
              <div className="price-row">
                <strong>From KES 18,000</strong>
                <span>Standard SME Pilot (Up to 100 active leads &amp; quotes / 1 pipeline)</span>
              </div>
              <div className="price-row">
                <strong>From KES 28,000</strong>
                <span>High-Volume Pipeline (Up to 300 active leads across multi-channel campaigns)</span>
              </div>
              <div className="price-row">
                <strong>From KES 12,000/mo</strong>
                <span>Optional ongoing monthly follow-up &amp; retention retainer after pilot</span>
              </div>
            </div>

            <div className="quality-card">
              <span className="badge-sub">Quality Promise</span>
              <h3>Brand Protection &amp; Courteous QA</h3>
              <p>
                Every message, phone conversation, and email is conducted courteously and strictly adheres to your approved brand guidelines.
              </p>
              <ul className="quality-bullets">
                <li>Senior mentor review on all customer response templates</li>
                <li>Zero-spam guarantee with immediate opt-out compliance</li>
                <li>Full client ownership of phone logs, CRM sheets, and lead notes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="service-bottom-cta">
        <div className="container text-center">
          <h2>Stop Losing Inquiries and Dormant Customers</h2>
          <p>
            Request a pilot or start with a 15-minute diagnostic call. We will review your inquiry flow and confirm if this pilot fits your business.
          </p>
          <div className="cta-action-row">
            <Link href="/contact?service=customer-follow-up" className="btn btn-teal btn-lg">
              Request Follow-up Pilot
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
