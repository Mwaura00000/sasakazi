"use client";

import React from "react";
import Link from "next/link";

export default function ForBusinessesPage() {
  const problems = [
    {
      title: "Lost Stock & Manual Counting",
      desc: "Shop attendants and storekeepers use paper books. Variances go unnoticed until month-end inventory reveals large unexplained shortages.",
      serviceLink: "/services/stock-inventory",
      serviceName: "Stock & Inventory Visibility"
    },
    {
      title: "Un-reconciled Till & Bank Deposits",
      desc: "Hundreds of daily M-Pesa transactions are never matched against bank credit notifications, creating blind spots in your cash flow.",
      serviceLink: "/services/payments-reconciliation",
      serviceName: "Payments Reconciliation"
    },
    {
      title: "Stalled Quotes & Cold Inquiries",
      desc: "Sales inquiries arriving on WhatsApp or email go unanswered for days. Potential clients take their business to competitors.",
      serviceLink: "/services/customer-follow-up",
      serviceName: "Customer Follow-up"
    },
    {
      title: "Executive Reporting Delays",
      desc: "Directors and owners have to ask three different people just to know last week’s sales, gross margins, and overdue supplier balances.",
      serviceLink: "/contact",
      serviceName: "Custom SME Reporting"
    }
  ];

  const comparison = [
    {
      feature: "Upfront Software Cost",
      inHouse: "KES 0 (manual)",
      complexErp: "KES 150,000 – KES 500,000+",
      sasakazi: "KES 0 (We use your existing tools)"
    },
    {
      feature: "Time to First Results",
      inHouse: "Uncertain / Months",
      complexErp: "3 to 6 months setup",
      sasakazi: "30 to 45 Days Guaranteed"
    },
    {
      feature: "Staff Training Required",
      inHouse: "Ad-hoc / Inconsistent",
      complexErp: "Heavy & complex training",
      sasakazi: "Included (We train your attendant)"
    },
    {
      feature: "Senior Quality Supervision",
      inHouse: "Owner's personal time",
      complexErp: "Self-service / Expensive support",
      sasakazi: "Included (EldoHub QA Mentor)"
    },
    {
      feature: "Commercial Risk",
      inHouse: "High (Staff churn & mistakes)",
      complexErp: "High (Expensive software abandoned)",
      sasakazi: "Low (Fixed-price pilot with handover)"
    }
  ];

  return (
    <div className="for-businesses-page">
      {/* 1. HERO */}
      <section className="biz-hero">
        <div className="container text-center">
          <span className="badge-sub">For Business Owners &amp; Directors</span>
          <h1 className="hero-title">Solve operational friction without buying expensive software</h1>
          <p className="hero-lead">
            You don’t need a complicated six-figure ERP to gain control of your business. SasaKazi provides vetted local talent, structured processes, and senior supervision to deliver measurable outcomes in 30–45 days.
          </p>
          <div className="hero-cta-group">
            <Link href="/contact" className="btn btn-teal btn-lg">
              Book a Needs Conversation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <a 
              href="https://wa.me/254723567263?text=Hello%20SasaKazi%2C%20I%20am%20a%20business%20owner%20interested%20in%20your%20BPO%20pilots." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-navy btn-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMS WE SOLVE */}
      <section className="section-padded bg-white">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">Core Pain Points</span>
            <h2>Practical Problems We Fix for Kenyan Enterprises</h2>
            <p className="section-desc">
              Every day, small and mid-sized enterprises lose money to basic process breakdowns. Here is what we resolve in our 30-day pilots:
            </p>
          </div>

          <div className="problems-grid">
            {problems.map((p, i) => (
              <div key={i} className="problem-box">
                <div className="box-top">
                  <span className="problem-num">0{i + 1}</span>
                  <Link href={p.serviceLink} className="service-tag-link">
                    {p.serviceName} &rarr;
                  </Link>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPARISON TABLE */}
      <section className="section-padded bg-light">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">The Smart Commercial Choice</span>
            <h2>How SasaKazi Compares to Other Options</h2>
            <p className="section-desc">
              Why business owners across Eldoret, Nairobi, and Western Kenya choose our managed pilots over complex systems.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Evaluation Metric</th>
                  <th>Hiring In-House</th>
                  <th>Buying Complex ERPs</th>
                  <th className="highlight-col">SasaKazi Pilot Model</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx}>
                    <td className="metric-cell">{row.feature}</td>
                    <td>{row.inHouse}</td>
                    <td>{row.complexErp}</td>
                    <td className="highlight-col bold">{row.sasakazi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. TYPICAL ENGAGEMENT JOURNEY */}
      <section className="section-padded bg-white">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">Predictable Engagement</span>
            <h2>How Your Engagement Unfolds</h2>
            <p className="section-desc">
              From our first diagnostic to lasting operational stability.
            </p>
          </div>

          <div className="engagement-stages">
            <div className="stage-card">
              <span className="stage-num">Phase 1</span>
              <h4>1. Scoped 30-Day Pilot</h4>
              <p>
                We address one immediate headache (e.g. stock audit or till reconciliation) at a transparent fixed fee with zero software overhead.
              </p>
            </div>

            <div className="stage-card">
              <span className="stage-num">Phase 2</span>
              <h4>2. Measurable Handover</h4>
              <p>
                You receive clean records, operational dashboards, and documented SOPs to train your team.
              </p>
            </div>

            <div className="stage-card">
              <span className="stage-num">Phase 3</span>
              <h4>3. Scalable Monthly Retainer</h4>
              <p>
                Keep your talent on an affordable monthly retainer or expand the model into other departments as your enterprise grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="biz-final-cta">
        <div className="container text-center">
          <h2>Ready to streamline your business operations?</h2>
          <p>
            Book a 15-minute diagnostic call with our team. We'll examine your current operations and outline exactly what your pilot would look like.
          </p>
          <div className="cta-action-row">
            <Link href="/contact" className="btn btn-teal btn-lg">
              Book a Needs Conversation
            </Link>
            <a 
              href="https://wa.me/254723567263?text=Hello%20SasaKazi%2C%20I%20would%20like%20to%20discuss%20a%20pilot%20for%20my%20business." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-white btn-lg"
            >
              WhatsApp Us Directly
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .for-businesses-page {
          background-color: var(--color-bg-light);
        }
        .biz-hero {
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
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.2rem;
          }
        }
        .hero-lead {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          max-width: 740px;
          margin: 0 auto 2.25rem auto;
          line-height: 1.6;
        }
        .hero-cta-group {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
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
        .problem-box {
          background: var(--color-bg-light);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--color-border-gray);
        }
        .box-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .problem-num {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--color-teal);
        }
        .service-tag-link {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-navy);
          text-decoration: underline;
        }
        .problem-box h3 {
          font-size: 1.25rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .problem-box p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* Comparison Table */
        .comparison-table-wrapper {
          overflow-x: auto;
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid var(--color-border-gray);
          box-shadow: 0 4px 16px rgba(31, 78, 121, 0.05);
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.92rem;
        }
        .comparison-table th, 
        .comparison-table td {
          padding: 1.2rem 1.5rem;
          border-bottom: 1px solid var(--color-border-gray);
        }
        .comparison-table th {
          background: var(--color-bg-light);
          color: var(--color-navy);
          font-weight: 800;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .metric-cell {
          font-weight: 700;
          color: var(--color-navy);
        }
        .highlight-col {
          background-color: var(--color-teal-light);
          color: var(--color-navy);
        }
        .highlight-col.bold {
          font-weight: 800;
          color: var(--color-teal-dark);
        }

        /* Engagement Stages */
        .engagement-stages {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .engagement-stages {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .stage-card {
          background: var(--color-bg-light);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--color-border-gray);
        }
        .stage-num {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--color-teal);
          margin-bottom: 0.75rem;
          display: inline-block;
        }
        .stage-card h4 {
          font-size: 1.2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .stage-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* Final CTA */
        .biz-final-cta {
          background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 100%);
          color: #ffffff;
          padding: 5rem 0;
        }
        .biz-final-cta h2 {
          font-size: 2.4rem;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .biz-final-cta p {
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

