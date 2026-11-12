"use client";

import React from "react";
import Link from "next/link";

export default function PaymentsReconciliationServicePage() {
  const problems = [
    {
      title: "Till & Bank Statement Discrepancies",
      desc: "Daily M-Pesa Buy Goods or Paybill receipts don't match the actual funds transferred to your commercial bank accounts, leaving gaps in your records."
    },
    {
      title: "Unallocated Customer Payments",
      desc: "Clients pay via mobile money using family names or personal phones without proper reference numbers, making it impossible to match who paid which invoice."
    },
    {
      title: "Delayed End-of-Month Bookkeeping",
      desc: "Business owners spend endless weekends hunting down missing receipts and transaction IDs just to close the monthly books."
    },
    {
      title: "Undetected Bad Debt & Aging Receivables",
      desc: "Without daily payment tracking, invoices sit unpaid for 60 to 90 days without follow-up, causing severe cash-flow strains."
    }
  ];

  const deliverables = [
    {
      title: "Daily M-Pesa Till to Bank Matching Log",
      desc: "Daily automated audit sheet cross-referencing Safaricom statements with bank account credit alerts."
    },
    {
      title: "Unallocated Payment Investigation Register",
      desc: "A systematic ledger that identifies anomalous transactions and traces customer references before they get lost."
    },
    {
      title: "Accounts Receivable & Invoice Aging Dashboard",
      desc: "Color-coded tracking showing which clients have paid, who is overdue, and exactly how much cash is expected each week."
    },
    {
      title: "Digital Receipting & Invoice Tagging Protocol",
      desc: "A simplified procedure for your sales attendants to ensure every payment is immediately tagged with an invoice or customer ID."
    },
    {
      title: "Weekly Financial Reconciliation Sign-off Pack",
      desc: "Management-ready weekly summary reports signed off by our QA mentors ready for your accountant or tax filing."
    },
    {
      title: "Cashier Handover SOP & Training",
      desc: "Step-by-step guidance and one-on-one training for your cashier or bookkeeper to sustain the discipline post-pilot."
    }
  ];

  const whoItsFor = [
    "Wholesale & Retail Businesses handling high-volume daily M-Pesa transactions",
    "Schools, Colleges & Training Institutes collecting recurring student fees",
    "Hotels, Restaurants & Hospitality Hubs with multi-till point collections",
    "Medical Clinics & Pharmacies needing clean reconciliation for suppliers and audit"
  ];

  const deliverySchedule = [
    {
      week: "Week 1",
      title: "Statement Extraction & Setup",
      desc: "Collation of 60 days of historical M-Pesa and bank statements to establish baseline balances and backlog cleanup."
    },
    {
      week: "Week 2",
      title: "Reconciliation Template Build",
      desc: "Setup of your customized daily matching model and cashier logging protocol."
    },
    {
      week: "Weeks 3-4",
      title: "Live Governed Matching",
      desc: "Vetted SasaKazi talent executes daily statement matching with senior financial mentor oversight."
    },
    {
      week: "Handover",
      title: "Audit Sign-off & Handover",
      desc: "Delivery of clean books, verified receivables balance, and staff operating handbook."
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
              <span className="badge-sub">30-Day Fixed Pilot</span>
              <h1>Payments Reconciliation</h1>
              <p className="hero-lead">
                Match every single M-Pesa till payment, bank deposit, and sales invoice with zero missing shillings. Delivered by vetted local talent with senior oversight.
              </p>

              <div className="hero-pricing-box">
                <div className="price-tag">
                  From KES 20,000 <span>/ 30-Day Pilot</span>
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
                  href="https://wa.me/254723567263?text=Hello%20SasaKazi%2C%20I%20am%20interested%20in%20the%20Payments%20Reconciliation%20pilot." 
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
                  <strong>Investment:</strong> KES 20,000 – KES 35,000 (Based on transaction volume)
                </li>
                <li>
                  <strong>Monthly Support Retainer:</strong> From KES 12,000/mo ongoing
                </li>
                <li>
                  <strong>Required Access:</strong> Read-only statement exports (No banking passwords needed)
                </li>
                <li>
                  <strong>Quality Oversight:</strong> Senior financial operations mentor check
                </li>
                <li>
                  <strong>Location:</strong> Eldoret, Nairobi &amp; Nationwide
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
            <h2>Where Cash Flow Leaks in Kenyan Enterprises</h2>
            <p className="section-desc">
              When business owners can’t tell whether all till receipts reached the bank, revenue leaks uncontrollably.
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
              Complete peace of mind knowing exactly what entered your tills, what cleared into the bank, and who still owes you money.
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
              <p>Businesses processing over 20 transactions a day through Paybill, Till, or bank transfers.</p>
            </div>

            <div className="who-cards-row">
              {whoItsFor.map((item, i) => (
                <div key={i} className="who-item-card">
                  <span className="who-badge">Business Type</span>
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
            <h2>How Delivery Works Over 30 Days</h2>
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
                Clear, transparent pilot fees based on your average monthly transaction volume.
              </p>
              <div className="price-row">
                <strong>KES 20,000</strong>
                <span>Standard SME (Up to 500 transactions/mo / 1-2 tills)</span>
              </div>
              <div className="price-row">
                <strong>KES 32,000</strong>
                <span>High Volume (Up to 2,000 transactions/mo / multiple bank accounts)</span>
              </div>
              <div className="price-row">
                <strong>From KES 12,000/mo</strong>
                <span>Ongoing monthly reconciliation &amp; audit retainer</span>
              </div>
            </div>

            <div className="quality-card">
              <span className="badge-sub">Quality Guarantee</span>
              <h3>Zero Discrepancy Standard</h3>
              <p>
                Every shilling is accounted for. We reconcile statement line-by-line and identify all unexplained variances before presenting the sign-off pack to you.
              </p>
              <ul className="quality-bullets">
                <li>Senior financial operations mentor review on weekly reconciliations</li>
                <li>Strict data confidentiality protocols (read-only exports)</li>
                <li>Comprehensive handover session with business management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="service-bottom-cta">
        <div className="container text-center">
          <h2>Ready to balance your books effortlessly?</h2>
          <p>
            Book a 15-minute introductory call. Let’s review your current payment flow and set up your fixed-price pilot.
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

