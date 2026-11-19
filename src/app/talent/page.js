"use client";

import React from "react";
import Link from "next/link";

export default function TalentPage() {
  const steps = [
    {
      num: "01",
      title: "Submit Profile & Skill Portfolio",
      desc: "Share your background in software, operations, accounting reconciliation, inventory tracking, or digital support."
    },
    {
      num: "02",
      title: "Practical Assessment & Screening",
      desc: "Complete a real-world case study or skills evaluation supervised by EldoHub technical and operations mentors."
    },
    {
      num: "03",
      title: "Pod Onboarding & QA Training",
      desc: "Learn our governed delivery framework, daily SOPs, and professional communications standards."
    },
    {
      num: "04",
      title: "Client Deployment & Paid Outcomes",
      desc: "Deliver practical results for Kenyan businesses on 30–45 day pilots with fair milestone-based compensation."
    }
  ];

  return (
    <div className="talent-page">
      {/* Header Banner */}
      <section className="talent-hero">
        <div className="container text-center">
          <span className="badge-sub">EldoHub Talent Pipeline</span>
          <h1>Work on Governed Digital BPO Projects</h1>
          <p className="talent-hero-lead">
            SasaKazi connects vetted Kenyan professionals with real businesses needing operational support. Gain hands-on project experience backed by senior EldoHub mentorship.
          </p>
          <div className="hero-btn-row">
            <Link href="/register" className="btn btn-teal">
              Apply to the Talent Roster &rarr;
            </Link>
            <Link href="/" className="btn btn-outline-navy">
              Return to Business Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* Talent Proposition */}
      <section className="section-padded bg-white">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">Why Join SasaKazi</span>
            <h2>More Than a Freelance Marketplace</h2>
            <p className="section-desc">
              We bridge the gap between classroom skills and market demand through governed team delivery.
            </p>
          </div>

          <div className="talent-grid">
            <div className="talent-card">
              <div className="talent-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Senior Mentorship</h3>
              <p>
                Every project pod is paired with experienced mentors who review your deliverables, guide your workflows, and ensure quality standards.
              </p>
            </div>

            <div className="talent-card">
              <div className="talent-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3>Transparent Pilot Pay</h3>
              <p>
                Earn fair, agreed milestone compensation for your work. No unverified promises or bidding wars against global algorithms.
              </p>
            </div>

            <div className="talent-card">
              <div className="talent-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Real SME Impact</h3>
              <p>
                Work with genuine Kenyan businesses solving stock tracking, payments matching, and customer communication bottlenecks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Step Process */}
      <section className="section-padded bg-light">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">Selection Pathway</span>
            <h2>How to Join the Governed Delivery Pool</h2>
          </div>

          <div className="talent-steps-row">
            {steps.map((st) => (
              <div key={st.num} className="step-card">
                <div className="step-badge">{st.num}</div>
                <h4>{st.title}</h4>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link href="/register" className="btn btn-teal btn-lg">
              Start Your Talent Application &rarr;
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .talent-page {
          background-color: var(--color-bg-light);
        }

        .talent-hero {
          background: linear-gradient(180deg, #ffffff 0%, var(--color-bg-light) 100%);
          padding: 4.5rem 0 3.5rem 0;
          border-bottom: 1px solid var(--color-border);
        }

        .talent-hero h1 {
          font-size: 2.8rem;
          color: var(--color-navy);
          font-weight: 800;
          margin: 0.75rem 0 1.25rem 0;
          letter-spacing: -0.02em;
        }

        .talent-hero-lead {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          max-width: 680px;
          margin: 0 auto 2rem auto;
          line-height: 1.6;
        }

        .hero-btn-row {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

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
          max-width: 650px;
          margin: 0 auto 3rem auto;
        }

        .section-head h2 {
          font-size: 2.2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin: 0.5rem 0 0.75rem 0;
        }

        .section-desc {
          font-size: 1.05rem;
          color: var(--color-text-muted);
        }

        .talent-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 900px) {
          .talent-grid {
            grid-template-columns: 1fr;
          }
        }

        .talent-card {
          background: var(--color-bg-light);
          padding: 2.25rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
        }

        .talent-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(13, 148, 136, 0.12);
          color: var(--color-teal);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .talent-card h3 {
          font-size: 1.25rem;
          color: var(--color-navy);
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .talent-card p {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .talent-steps-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 992px) {
          .talent-steps-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .talent-steps-row {
            grid-template-columns: 1fr;
          }
        }

        .step-card {
          background: #ffffff;
          padding: 2rem 1.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        .step-badge {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-teal);
          margin-bottom: 1rem;
        }

        .step-card h4 {
          font-size: 1.1rem;
          color: var(--color-navy);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .step-card p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
