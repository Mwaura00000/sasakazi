"use client";

import React from "react";
import Link from "next/link";

export default function ServicesOverviewPage() {
  const coreServices = [
    {
      id: "stock-inventory",
      title: "Stock & Inventory Visibility",
      price: "From KES 25,000",
      timeframe: "30-Day Pilot",
      headline: "Stop unexplained stock shrinkage and gain daily inventory clarity.",
      description: "We organize your catalog, audit physical stock, implement daily stock-count tracking, and configure simple discrepancy alert sheets.",
      highlights: [
        "Itemized SKU catalog & count sheets",
        "Variance & shrinkage tracking logs",
        "Reorder alert & safety thresholds",
        "Staff training on daily record keeping"
      ],
      href: "/services/stock-inventory",
      badge: "Retail & Distribution",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      )
    },
    {
      id: "payments-reconciliation",
      title: "Payments Reconciliation",
      price: "From KES 20,000",
      timeframe: "30-Day Pilot",
      headline: "Match every M-Pesa till payment, bank deposit, and sales invoice.",
      description: "Eliminate end-of-month accounting nightmares. We map your mobile money transactions to customer invoices with zero missing shillings.",
      highlights: [
        "Daily M-Pesa till to bank deposit match",
        "Unallocated customer payment log",
        "Accounts receivable aging schedule",
        "End-of-week reconciliation sign-off"
      ],
      href: "/services/payments-reconciliation",
      badge: "Finance & Accounts",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
          <circle cx="7" cy="15" r="1" />
          <circle cx="11" cy="15" r="1" />
        </svg>
      )
    },
    {
      id: "customer-follow-up",
      title: "Customer Follow-up",
      price: "From KES 18,000",
      timeframe: "30-Day Pilot",
      headline: "Revive dormant inquiries and close quotes waiting on customer replies.",
      description: "Stop letting valuable inquiries slip through WhatsApp and email. Dedicated local professionals follow up on outstanding quotes and nurture repeat sales.",
      highlights: [
        "Customer contact & lead cleanup",
        "WhatsApp & phone follow-up cadence",
        "Quote status tracker & CRM update",
        "Weekly customer feedback insights"
      ],
      href: "/services/customer-follow-up",
      badge: "Sales & Client Service",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14 2v4" />
          <path d="M18 6v4" />
        </svg>
      )
    }
  ];

  const miniSteps = [
    { num: "01", name: "Qualify", desc: "15-minute diagnostic call" },
    { num: "02", name: "Scope", desc: "Define 30-day deliverables" },
    { num: "03", name: "Deploy", desc: "Vetted talent pod matched" },
    { num: "04", name: "Execute", desc: "Weekly review & QA gates" },
    { num: "05", name: "Handover", desc: "Sign-off & optional retainer" }
  ];

  const audienceSectors = [
    {
      title: "Eldoret & Western Region Enterprises",
      desc: "Regional distributors, agribusiness suppliers, logistics hubs, and hardware retailers managing high physical throughput."
    },
    {
      title: "Nairobi Commercial SMEs",
      desc: "Fast-moving wholesale stores, clinics, colleges, and professional practices needing disciplined back-office operations."
    },
    {
      title: "Multi-branch Retailers",
      desc: "Businesses struggling to aggregate till collections, stock transfers, and branch reports into a single executive dashboard."
    }
  ];

  return (
    <div className="services-overview-page">
      {/* 1. HERO */}
      <section className="services-hero">
        <div className="container text-center">
          <span className="badge-sub">Outcome-Led BPO</span>
          <h1 className="hero-title">Our BPO Services</h1>
          <p className="hero-desc">
            Practical business process outsourcing designed for Kenyan SMEs. We don't sell bloated software subscriptions—we deliver dedicated local talent governed by structured QA to fix real operational bottlenecks in 30 to 45 days.
          </p>
          <div className="hero-action-buttons">
            <Link href="/contact" className="btn btn-teal">
              Book a Needs Conversation
            </Link>
            <a 
              href="tel:+254723567263" 
              className="btn btn-outline-navy"
            >
              Call Us (+254 723 567 263)
            </a>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-grid">
            {coreServices.map((service) => (
              <div key={service.id} className="service-feature-card">
                <div className="card-header-row">
                  <div className="service-icon">{service.icon}</div>
                  <span className="bpo-service-badge">{service.badge}</span>
                </div>

                <h3>{service.title}</h3>
                <div className="service-price-tag">
                  {service.price} <span>/ 30-day pilot</span>
                </div>

                <p className="service-headline">{service.headline}</p>
                <p className="service-body">{service.description}</p>

                <div className="service-highlights-box">
                  <strong>Key Deliverables:</strong>
                  <ul>
                    {service.highlights.map((h, i) => (
                      <li key={i}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-actions">
                  <Link href={service.href} className="btn btn-teal" style={{ width: '100%', justifyContent: 'center' }}>
                    View Full Scope &amp; Deliverables &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHO THIS IS FOR */}
      <section className="audience-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">Audience Fit</span>
            <h2>Who Our BPO Services Support</h2>
            <p className="section-desc">
              Tailored for business owners, directors, and operational leaders who want results without headcount bloat.
            </p>
          </div>

          <div className="audience-grid">
            {audienceSectors.map((sec, i) => (
              <div key={i} className="audience-card">
                <div className="aud-badge">Target Sector</div>
                <h4>{sec.title}</h4>
                <p>{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS REMINDER (Mini How It Works) */}
      <section className="mini-process-strip">
        <div className="container">
          <div className="mini-process-header text-center">
            <h3>How Governed Delivery Works</h3>
            <p>Every pilot follows our structured 5-step quality framework</p>
          </div>

          <div className="mini-steps-row">
            {miniSteps.map((s, i) => (
              <div key={i} className="mini-step-item">
                <span className="mini-num">{s.num}</span>
                <strong>{s.name}</strong>
                <span>{s.desc}</span>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link href="/how-it-works" className="link-arrow">
              Learn more about our governance, QA gates, and mentorship &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CONVERSATION CTA */}
      <section className="services-bottom-cta">
        <div className="container text-center">
          <h2>Not sure which service fits your business?</h2>
          <p>
            Book a short, no-obligation conversation. We will diagnose your current operations and advise whether a 30-day pilot makes commercial sense.
          </p>
          <div className="cta-btns">
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
        .services-overview-page {
          background-color: var(--color-bg-light);
        }
        .services-hero {
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
          font-size: 2.5rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 1.25rem;
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
          margin: 0 auto 2rem auto;
          line-height: 1.6;
        }
        .hero-action-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* Services Grid */
        .services-list-section {
          padding: 5rem 0;
          background: var(--color-bg-light);
        }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .service-feature-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid var(--color-border-gray);
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 16px rgba(31, 78, 121, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .service-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(31, 78, 121, 0.12);
          border-color: rgba(13, 148, 136, 0.35);
        }
        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .service-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: var(--color-teal-light);
          color: var(--color-teal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-feature-card h3 {
          font-size: 1.4rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .service-price-tag {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-navy);
          margin-bottom: 0.75rem;
        }
        .service-price-tag span {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }
        .service-headline {
          font-weight: 700;
          color: var(--color-text-dark);
          font-size: 0.95rem;
          margin-bottom: 0.6rem;
          line-height: 1.4;
        }
        .service-body {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }
        .service-highlights-box {
          background: var(--color-bg-light);
          padding: 1.25rem;
          border-radius: 10px;
          margin-bottom: 1.75rem;
          flex-grow: 1;
        }
        .service-highlights-box strong {
          display: block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-navy);
          margin-bottom: 0.75rem;
        }
        .service-highlights-box ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .service-highlights-box li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.84rem;
          color: var(--color-text-dark);
          line-height: 1.35;
        }

        /* Audience Section */
        .audience-section {
          padding: 5rem 0;
          background: #ffffff;
          border-top: 1px solid var(--color-border-gray);
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
        .audience-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .audience-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .audience-card {
          background: var(--color-bg-light);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--color-border-gray);
        }
        .aud-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--color-teal);
          margin-bottom: 0.5rem;
        }
        .audience-card h4 {
          font-size: 1.2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .audience-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* Mini Process Strip */
        .mini-process-strip {
          padding: 4.5rem 0;
          background: var(--color-bg-light);
          border-top: 1px solid var(--color-border-gray);
        }
        .mini-process-header {
          margin-bottom: 2.5rem;
        }
        .mini-process-header h3 {
          font-size: 1.8rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.35rem;
        }
        .mini-process-header p {
          font-size: 0.95rem;
          color: var(--color-text-muted);
        }
        .mini-steps-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .mini-steps-row {
            grid-template-columns: repeat(5, 1fr);
          }
        }
        .mini-step-item {
          background: #ffffff;
          padding: 1.5rem 1rem;
          border-radius: 12px;
          border: 1px solid var(--color-border-gray);
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mini-num {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--color-teal);
          margin-bottom: 2px;
        }
        .mini-step-item strong {
          color: var(--color-navy);
          font-size: 1rem;
        }
        .mini-step-item span {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
        .link-arrow {
          color: var(--color-teal);
          font-weight: 700;
          text-decoration: underline;
        }

        /* Bottom CTA */
        .services-bottom-cta {
          background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 100%);
          color: #ffffff;
          padding: 5rem 0;
        }
        .services-bottom-cta h2 {
          font-size: 2.4rem;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .services-bottom-cta p {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 650px;
          margin: 0 auto 2rem auto;
          line-height: 1.6;
        }
        .cta-btns {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
      `}</style>
    </div>
  );
}
