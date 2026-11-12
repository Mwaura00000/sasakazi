"use client";

import React from "react";
import Link from "next/link";

export default function AboutClient() {
  const approaches = [
    {
      num: "01",
      title: "Vetted Local Talent",
      desc: "We identify and train high-potential young professionals from EldoHub’s digital academies, verifying their skills in inventory auditing, account reconciliation, and customer operations."
    },
    {
      num: "02",
      title: "Senior Mentorship Guardrails",
      desc: "Junior specialists are always paired with seasoned operations supervisors who oversee quality assurance gates, review spreadsheets, and ensure deliverables meet commercial standards."
    },
    {
      num: "03",
      title: "Practical, Tool-Agnostic Delivery",
      desc: "We don't demand expensive software upgrades. We implement disciplined operational workflows directly inside the tools your business already uses—Excel, Google Sheets, WhatsApp, or local POS."
    },
    {
      num: "04",
      title: "Predictable Fixed-Price Pilots",
      desc: "No speculative billing or bloated retainers. Every client begins with a clear 30–45 day pilot with upfront milestones, documented acceptance criteria, and clean handover."
    }
  ];

  const locations = [
    {
      name: "Eldoret Headquarters",
      role: "Operations & Talent Delivery Hub",
      address: "EldoHub Campus, Sirikwa, Eldoret, Kenya",
      desc: "Our primary training, quality oversight, and BPO operations center serving businesses across the Rift Valley and Western Kenya."
    },
    {
      name: "Nairobi Office",
      role: "Client Partnerships & Strategic Coordination",
      address: "Kilimani / Westlands, Nairobi, Kenya",
      desc: "Coordinating enterprise BPO engagements, national partner initiatives, and Pan-African program linkages."
    }
  ];

  return (
    <div className="about-bpo-page">
      {/* 1. HERO */}
      <section className="about-hero">
        <div className="container text-center">
          <span className="badge-sub">Our Story &amp; Purpose</span>
          <h1 className="hero-title">Practical digital BPO powered by EldoHub</h1>
          <p className="hero-lead">
            SasaKazi is the managed business process outsourcing capability built to bridge Kenyan enterprise challenges with vetted local talent.
          </p>
          <div className="hero-cta-group">
            <Link href="/contact" className="btn btn-teal btn-lg">
              Talk to Our Team
            </Link>
            <Link href="/services" className="btn btn-outline-navy btn-lg">
              Explore Our Pilots
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE & CONNECTION TO ELDOHUB */}
      <section className="section-padded bg-white">
        <div className="container">
          <div className="eldohub-connection-grid">
            <div className="eldohub-text">
              <span className="badge-sub">Ecosystem Roots</span>
              <h2>Born from EldoHub’s Vision for African Tech Delivery</h2>
              <p>
                SasaKazi originated from <strong>EldoHub</strong>—one of Kenya’s leading technology innovation hubs headquartered in Eldoret. After training thousands of young people across the Rift Valley in software engineering, digital business skills, and data processing, EldoHub identified a critical market gap:
              </p>
              <p>
                Small and growing enterprises across Kenya desperately need reliable back-office support for stock visibility, reconciliation, and sales follow-up—yet cannot afford six-figure software or high-friction agencies.
              </p>
              <p>
                SasaKazi was established as the dedicated, governed BPO delivery capability: packaging skilled youth into supervised delivery pods that solve practical SME problems in 30-day fixed-price pilots.
              </p>
              <div className="shared-values-box">
                <strong>Shared Ecosystem Values:</strong> Practical problem-solving, merit-based youth employment, ethical data governance, and uncompromising delivery quality.
              </div>
            </div>

            <div className="eldohub-highlight-card">
              <div className="card-badge">EldoHub Footprint</div>
              <h3>Empowering Kenyan Enterprises &amp; Talent</h3>
              <div className="stats-list">
                <div className="stat-row">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Kenyan Businesses Supported with Practical Pilots</span>
                </div>
                <div className="stat-row">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Governed with Senior Quality Assurance Mentorship</span>
                </div>
                <div className="stat-row">
                  <span className="stat-number">30-45</span>
                  <span className="stat-label">Days Average Pilot Delivery to Clear Acceptance Sign-off</span>
                </div>
              </div>
              <div className="hub-partner-note">
                <a href="https://eldohub.co.ke" target="_blank" rel="noopener noreferrer">
                  Visit EldoHub Innovation Campus &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR OPERATING APPROACH */}
      <section className="section-padded bg-light">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">Delivery Model</span>
            <h2>Our Practical Operating Approach</h2>
            <p className="section-desc">
              How we combine vetted young professionals, rigorous mentor supervision, and fixed-price simplicity.
            </p>
          </div>

          <div className="approach-grid">
            {approaches.map((app, i) => (
              <div key={i} className="approach-card">
                <div className="approach-num">{app.num}</div>
                <h4>{app.title}</h4>
                <p>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOCATIONS */}
      <section className="section-padded bg-white">
        <div className="container">
          <div className="section-head text-center">
            <span className="badge-sub">Where We Operate</span>
            <h2>Our Operating Hubs</h2>
            <p className="section-desc">
              Grounded in the North Rift with national reach across Kenya.
            </p>
          </div>

          <div className="locations-grid">
            {locations.map((loc, i) => (
              <div key={i} className="location-card">
                <div className="loc-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3>{loc.name}</h3>
                <span className="loc-role">{loc.role}</span>
                <p className="loc-address">📍 {loc.address}</p>
                <p className="loc-desc">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="about-final-cta">
        <div className="container text-center">
          <h2>Let’s discuss your operational bottleneck</h2>
          <p>
            Connect with our Eldoret or Nairobi solutions advisors to see how a practical 30-day BPO pilot can bring clarity to your business.
          </p>
          <div className="cta-action-row">
            <Link href="/contact" className="btn btn-teal btn-lg">
              Book a Short Call
            </Link>
            <a 
              href="https://wa.me/254723567263?text=Hello%20SasaKazi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20BPO%20services." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-white btn-lg"
            >
              WhatsApp Us (+254 723 567 263)
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-bpo-page {
          background-color: var(--color-bg-light);
        }
        .about-hero {
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
        .hero-lead {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          max-width: 720px;
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

        /* EldoHub Connection Grid */
        .eldohub-connection-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 992px) {
          .eldohub-connection-grid {
            grid-template-columns: 1.35fr 1fr;
            gap: 4rem;
          }
        }
        .eldohub-text h2 {
          font-size: 2.2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }
        .eldohub-text p {
          font-size: 1rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }
        .shared-values-box {
          background: var(--color-bg-light);
          border-left: 4px solid var(--color-teal);
          padding: 1.25rem 1.5rem;
          border-radius: 0 10px 10px 0;
          font-size: 0.9rem;
          color: var(--color-navy);
          line-height: 1.5;
        }

        .eldohub-highlight-card {
          background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 100%);
          color: #ffffff;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(15, 47, 77, 0.2);
        }
        .card-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          background: rgba(13, 148, 136, 0.25);
          color: #5eead4;
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 1rem;
        }
        .eldohub-highlight-card h3 {
          font-size: 1.4rem;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 1.75rem;
        }
        .stats-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .stat-row {
          display: flex;
          align-items: baseline;
          gap: 1rem;
        }
        .stat-number {
          font-size: 2.2rem;
          font-weight: 800;
          color: #5eead4;
          flex-shrink: 0;
          min-width: 80px;
        }
        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.4;
        }
        .hub-partner-note a {
          color: #5eead4;
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: underline;
        }

        /* Approach Grid */
        .approach-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .approach-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .approach-card {
          background: #ffffff;
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--color-border-gray);
        }
        .approach-num {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--color-teal);
          margin-bottom: 0.5rem;
        }
        .approach-card h4 {
          font-size: 1.2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .approach-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin-bottom: 0;
        }

        /* Locations Grid */
        .locations-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .locations-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .location-card {
          background: var(--color-bg-light);
          padding: 2.25rem;
          border-radius: 16px;
          border: 1px solid var(--color-border-gray);
        }
        .loc-icon {
          color: var(--color-teal);
          margin-bottom: 1rem;
        }
        .location-card h3 {
          font-size: 1.4rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.25rem;
        }
        .loc-role {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-teal);
          margin-bottom: 1rem;
        }
        .loc-address {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-navy);
          margin-bottom: 0.5rem;
        }
        .loc-desc {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* Final CTA */
        .about-final-cta {
          background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 100%);
          color: #ffffff;
          padding: 5rem 0;
        }
        .about-final-cta h2 {
          font-size: 2.4rem;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .about-final-cta p {
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
