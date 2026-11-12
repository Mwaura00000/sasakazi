"use client";

import React from "react";
import Link from "next/link";

export default function StockInventoryServicePage() {
  const problems = [
    {
      title: "Unexplained Stock Shrinkage",
      desc: "Physical inventory constantly differs from written ledgers or point-of-sale numbers without any clear trail of where items disappeared."
    },
    {
      title: "Stockouts of High-Demand Goods",
      desc: "Running out of best-selling products during peak trading hours because reorder points are based on guesswork rather than data."
    },
    {
      title: "Dead Capital in Slow Inventory",
      desc: "Cash is tied up in slow-moving stock that sits on shelves for months, creating working-capital stress for the business."
    },
    {
      title: "Staff Rely on Unaudited Manual Counts",
      desc: "Store managers and retail attendants count products on paper notes with zero variance checks, leading to inaccurate records."
    }
  ];

  const deliverables = [
    {
      title: "Itemized SKU Catalog & Clean Setup",
      desc: "Complete digital cataloging of all products, variants, unit measurements, and standard selling prices in an accessible spreadsheet or POS."
    },
    {
      title: "Daily Physical Stock-Count System",
      desc: "A standardized daily count workflow designed for your shop or warehouse attendants that takes under 20 minutes to complete."
    },
    {
      title: "Automated Variance & Shrinkage Tracker",
      desc: "Formula-driven variance logs that immediately flag discrepancies between opening stock, recorded sales, and closing balance."
    },
    {
      title: "Reorder Alert & Safety Stock Guidelines",
      desc: "Calculated minimum safety thresholds for every product so you order before you run dry."
    },
    {
      title: "Weekly Stock Movement Dashboard",
      desc: "Visual summary for directors and owners highlighting top-performing SKUs, shrinkage rate, and dead stock."
    },
    {
      title: "Attendant Onboarding & Process SOPs",
      desc: "Documented standard operating procedures and staff training to guarantee the system continues running smoothly after handover."
    }
  ];

  const whoItsFor = [
    "Retailers & Wholesale Shops (hardware, apparel, electronics, auto-parts)",
    "Distributors & FMCG Depot Operators managing high SKU volumes",
    "Agrovet & Agricultural Supply Stores with seasonal inventory turns",
    "Clinics & Pharmacies requiring batch tracking and expiry alerts"
  ];

  const deliverySchedule = [
    {
      week: "Week 1",
      title: "Audit & Baseline Setup",
      desc: "Physical on-site or digital stock audit, catalog cleanup, and baseline inventory valuation."
    },
    {
      week: "Week 2",
      title: "Workflow Implementation",
      desc: "Deployment of daily count sheets, receiving protocols, and morning/evening count routines."
    },
    {
      week: "Weeks 3-4",
      title: "Governed Execution & QA",
      desc: "Our vetted talent reconciles daily stock logs with senior mentor quality auditing and variance flags."
    },
    {
      week: "Handover",
      title: "Acceptance & Training",
      desc: "Final variance report, management sign-off, SOP document handover, and ongoing support setup."
    }
  ];

  return (
    <div className="service-detail-page">
      {/* 1. HERO */}
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/services">BPO Services</Link> <span>/</span> <span>Stock &amp; Inventory Visibility</span>
          </div>

          <div className="hero-grid">
            <div className="hero-text">
              <span className="badge-sub">30-Day Fixed Pilot</span>
              <h1>Stock &amp; Inventory Visibility</h1>
              <p className="hero-lead">
                Eliminate unexplained inventory shrinkage, stop stockouts, and gain 100% daily visibility over your physical goods without purchasing expensive software.
              </p>

              <div className="hero-pricing-box">
                <div className="price-tag">
                  From KES 25,000 <span>/ 30-Day Pilot</span>
                </div>
                <p className="price-sub">Fixed price • Delivered by vetted local talent • Senior QA included</p>
              </div>

              <div className="hero-cta-group">
                <Link href="/contact" className="btn btn-teal btn-lg">
                  Request This Pilot
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <a 
                  href="https://wa.me/254723567263?text=Hello%20SasaKazi%2C%20I%20am%20interested%20in%20the%20Stock%20and%20Inventory%20Visibility%20pilot." 
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
                  <strong>Target Duration:</strong> 30 Days (4 Weeks)
                </li>
                <li>
                  <strong>Investment:</strong> KES 25,000 – KES 40,000 (Based on SKU volume)
                </li>
                <li>
                  <strong>Monthly Retainer Option:</strong> From KES 15,000/mo ongoing
                </li>
                <li>
                  <strong>Software Needed:</strong> None (Works on Sheets, Excel, or existing POS)
                </li>
                <li>
                  <strong>Supervision:</strong> Daily audits backed by EldoHub mentors
                </li>
                <li>
                  <strong>Location:</strong> Eldoret, Western Kenya &amp; Remote across Kenya
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
            <span className="badge-sub">The Challenge</span>
            <h2>Where Kenyan Businesses Lose Stock &amp; Money</h2>
            <p className="section-desc">
              Managing physical stock across branches or warehouses without a disciplined process bleeds profit quietly every single day.
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
            <span className="badge-sub">Tangible Scope</span>
            <h2>What You Receive in the 30-Day Pilot</h2>
            <p className="section-desc">
              Every deliverable is practical, documented, and built into tools your existing team can maintain.
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
              <span className="badge-sub">Ideal Fit</span>
              <h2>Who This Pilot Is Designed For</h2>
              <p>Tailored specifically for growing SMEs and regional distributors.</p>
            </div>

            <div className="who-cards-row">
              {whoItsFor.map((item, i) => (
                <div key={i} className="who-item-card">
                  <span className="who-badge">SME Sector</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DELIVERY SCHEDULE */}
      <section className="section-padded bg-light">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">Execution Roadmap</span>
            <h2>How the 30-Day Pilot Unfolds</h2>
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
        </div>
      </section>

      {/* 6. INVESTMENT & QUALITY PROMISE */}
      <section className="section-padded bg-white">
        <div className="container">
          <div className="investment-grid">
            <div className="investment-card">
              <span className="badge-sub">Fixed Investment</span>
              <h3>Pilot Pricing Bands</h3>
              <p className="invest-desc">
                Transparent fixed pricing with no hidden charges or unexpected scope creep.
              </p>
              <div className="price-row">
                <strong>KES 25,000</strong>
                <span>Standard SME Pilot (Up to 250 SKUs / 1 location)</span>
              </div>
              <div className="price-row">
                <strong>KES 38,000</strong>
                <span>Growth Pilot (Up to 750 SKUs / multiple counters)</span>
              </div>
              <div className="price-row">
                <strong>From KES 15,000/mo</strong>
                <span>Optional ongoing weekly stock audit retainer after pilot</span>
              </div>
            </div>

            <div className="quality-card">
              <span className="badge-sub">Quality Guarantee</span>
              <h3>The SasaKazi Acceptance Standard</h3>
              <p>
                We do not close a pilot until your baseline inventory balances match physical stock within our agreed tolerance, and your attendant is fully trained to maintain the daily logs.
              </p>
              <ul className="quality-bullets">
                <li>Senior EldoHub mentor review on all variance models</li>
                <li>Documented acceptance criteria signed by the client</li>
                <li>Post-pilot transition briefing with business owner</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="service-bottom-cta">
        <div className="container text-center">
          <h2>Ready to stop inventory leakage?</h2>
          <p>
            Schedule a 15-minute diagnostic call with our team. We'll examine your current setup and determine if this pilot is the right fit.
          </p>
          <div className="cta-action-row">
            <Link href="/contact" className="btn btn-teal btn-lg">
              Book a Short Consultation
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
          background: #ffffff;
          padding: 3.5rem 0 4rem 0;
          border-bottom: 1px solid var(--color-border-gray);
        }
        .breadcrumb {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .breadcrumb a {
          color: var(--color-navy);
          text-decoration: underline;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.35fr 1fr;
            gap: 4rem;
          }
        }
        .badge-sub {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: var(--color-teal);
          margin-bottom: 0.5rem;
        }
        .hero-text h1 {
          font-size: 2.4rem;
          color: var(--color-navy);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        @media (min-width: 768px) {
          .hero-text h1 {
            font-size: 3rem;
          }
        }
        .hero-lead {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .hero-pricing-box {
          background: var(--color-bg-light);
          border-left: 4px solid var(--color-teal);
          padding: 1.25rem 1.5rem;
          border-radius: 0 10px 10px 0;
          margin-bottom: 2rem;
        }
        .price-tag {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--color-navy);
        }
        .price-tag span {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }
        .price-sub {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 0;
          margin-top: 4px;
        }
        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .hero-summary-card {
          background: var(--color-bg-light);
          border-radius: 16px;
          border: 1px solid var(--color-border-gray);
          padding: 2rem;
          box-shadow: 0 8px 24px rgba(31, 78, 121, 0.06);
        }
        .hero-summary-card h3 {
          font-size: 1.2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--color-border-gray);
        }
        .snapshot-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
        .snapshot-list li {
          font-size: 0.88rem;
          color: var(--color-text-dark);
          line-height: 1.4;
        }
        .snapshot-list strong {
          color: var(--color-navy);
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .section-padded {
          padding: 5rem 0;
        }
        .bg-white {
          background: #ffffff;
        }
        .bg-light {
          background: var(--color-bg-light);
        }
        .text-center {
          text-align: center;
        }
        .section-head {
          max-width: 680px;
          margin: 0 auto 3rem auto;
        }
        .section-head h2 {
          font-size: 2.2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.75rem;
        }
        .section-desc {
          font-size: 1rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* Problems Grid */
        .problems-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .problems-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .problem-card {
          background: var(--color-bg-light);
          padding: 1.75rem;
          border-radius: 12px;
          border: 1px solid var(--color-border-gray);
          position: relative;
        }
        .problem-num {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--color-teal);
          margin-bottom: 0.5rem;
        }
        .problem-card h4 {
          font-size: 1.15rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .problem-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* Deliverables */
        .deliverables-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .deliverables-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .deliverable-card {
          background: #ffffff;
          padding: 1.75rem;
          border-radius: 12px;
          border: 1px solid var(--color-border-gray);
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .del-check {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--color-teal-light);
          color: var(--color-teal-dark);
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
          font-weight: 800;
          margin-bottom: 0.4rem;
        }
        .deliverable-card p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* Who It's For */
        .who-cards-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .who-cards-row {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .who-item-card {
          background: var(--color-bg-light);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid var(--color-border-gray);
        }
        .who-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--color-teal);
          margin-bottom: 0.5rem;
        }
        .who-item-card p {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-navy);
          line-height: 1.4;
          margin-bottom: 0;
        }

        /* Schedule Timeline */
        .schedule-timeline {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .schedule-timeline {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .schedule-item {
          background: #ffffff;
          padding: 1.75rem;
          border-radius: 12px;
          border: 1px solid var(--color-border-gray);
        }
        .step-tag {
          font-size: 0.75rem;
          font-weight: 800;
          background: var(--color-navy);
          color: #ffffff;
          padding: 2px 8px;
          border-radius: 4px;
          display: inline-block;
          margin-bottom: 0.75rem;
        }
        .schedule-item h4 {
          font-size: 1.1rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.4rem;
        }
        .schedule-item p {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* Investment & Quality */
        .investment-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .investment-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .investment-card, .quality-card {
          background: var(--color-bg-light);
          padding: 2.25rem;
          border-radius: 16px;
          border: 1px solid var(--color-border-gray);
        }
        .investment-card h3, .quality-card h3 {
          font-size: 1.4rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.75rem;
        }
        .invest-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }
        .price-row {
          background: #ffffff;
          border-radius: 8px;
          padding: 1rem 1.25rem;
          margin-bottom: 0.75rem;
          border: 1px solid var(--color-border-gray);
        }
        .price-row strong {
          display: block;
          color: var(--color-navy);
          font-size: 1.15rem;
          margin-bottom: 2px;
        }
        .price-row span {
          font-size: 0.82rem;
          color: var(--color-text-muted);
        }
        .quality-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1.25rem;
        }
        .quality-bullets li {
          font-size: 0.9rem;
          color: var(--color-text-dark);
          position: relative;
          padding-left: 1.25rem;
        }
        .quality-bullets li::before {
          content: '✔';
          position: absolute;
          left: 0;
          color: var(--color-teal);
          font-weight: 800;
        }

        /* Bottom CTA */
        .service-bottom-cta {
          background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 100%);
          color: #ffffff;
          padding: 5rem 0;
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
          max-width: 600px;
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

