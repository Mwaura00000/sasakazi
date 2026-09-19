"use client";

import React from "react";
import Link from "next/link";

export default function AboutClient() {
  const coreValues = [
    {
      num: "01",
      title: "Client Value",
      desc: "Responding to genuine business needs with high-standard technical solutions.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12l4 6-10 12L2 9z" />
          <path d="M11 3 8 9l4 12 4-12-3-6" />
          <path d="M2 9h20" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Opportunity Through Merit",
      desc: "Allowing professionals to demonstrate verified capability regardless of pedigree.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Professional Excellence",
      desc: "Promoting uncompromising quality, strict accountability, and ethical conduct.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Inclusion",
      desc: "Expanding access for women, youth, persons with disabilities and underserved professionals.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Partnership",
      desc: "Connecting employers, mentors, training institutions and international development actors.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      num: "06",
      title: "Sustainable Impact",
      desc: "Using market enterprise to create permanent employment and strengthen Africa's digital economy.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v8" />
          <path d="m4.93 10.93 1.41 1.41" />
          <path d="M2 18h2" />
          <path d="M20 18h2" />
          <path d="m19.07 10.93-1.41 1.41" />
          <path d="M22 22H2" />
          <path d="m8 22 4-10 4 10" />
        </svg>
      )
    }
  ];

  const stories = [
    {
      name: "Edgar Onkware",
      pathway: "Data Science & Cloud",
      highlight: "Progressed from data-science training through a ControlTech apprenticeship into full-time employment.",
      quote: "The structured apprenticeship gave me direct access to real industry datasets, live production pipelines, and senior mentor coaching."
    },
    {
      name: "Ambrose Mbayi",
      pathway: "Software Engineering",
      highlight: "Moved from a software-engineering apprenticeship with Workpay Africa into an international technology role.",
      quote: "Working directly on production payment integrations with Workpay under SasaKazi guardrails prepared me to compete globally."
    },
    {
      name: "Josephine Adeti",
      pathway: "Digital Marketing & Strategy",
      highlight: "Progressed from digital-marketing assignments into entrepreneurship through Radava Mercantile.",
      quote: "SasaKazi proved that practical projects and commercial accountability are the quickest catalysts to launching a sustainable business."
    }
  ];

  return (
    <div className="about-page">
      {/* 1. PAGE BANNER */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content">
            <span className="badge-pill">About SasaKazi</span>
            <h1>Africa Does Not Lack Talent. It Needs Stronger Pathways to Opportunity.</h1>
            <p className="banner-lead">
              Discover how SasaKazi evolved from a digital-apprenticeship programme into an African digital talent and BPO company.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="story-section">
        <div className="container">
          <div className="story-card glass-panel">
            <div className="story-content">
              <span className="sub-heading-badge">Our Origins</span>
              <h2>Our Story</h2>
              
              <div className="story-body">
                <p>
                  SasaKazi grew from EldoHub’s Digital Apprenticeship Programme, piloted in 2020 during the COVID-19 pandemic with support from the UK–Kenya Tech Hub and the Africa Technology and Innovation Partnerships programme.
                </p>
                <p>
                  The initiative addressed two urgent needs: young technology professionals required practical experience to transition into decent work, while SMEs needed affordable, reliable digital support to adapt and grow.
                </p>
                <p>
                  Junior professionals were recruited and assessed through online tests, case studies and interviews. Successful candidates were matched with organisations to deliver projects in web development, data analysis, digital marketing, chatbot creation, payment integration and other areas. Participants also received employability training and one-to-one mentorship.
                </p>
                <p>
                  The results showed that a structured connection between skills and real work could benefit talent and businesses. <strong>SasaKazi—meaning “now work”—was developed as a digital platform to scale this model.</strong>
                </p>
                <p className="story-highlight">
                  Today, SasaKazi is evolving into a technology-enabled BPO and managed digital-services company serving African and international markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION, MISSION & SOCIAL IMPACT MISSION */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            {/* Vision */}
            <div className="mission-box vision-box">
              <span className="mission-tag">Our Vision</span>
              <h3>Global Competitiveness</h3>
              <p>
                To build an inclusive digital economy where African talent can compete globally and businesses can access the skills they need to grow.
              </p>
            </div>

            {/* Mission */}
            <div className="mission-box core-mission-box">
              <span className="mission-tag">Our Mission</span>
              <h3>Empowering Connection</h3>
              <p>
                To connect businesses with skilled and reliable African talent through technology-enabled outsourcing, managed digital services and workforce solutions that create business value and meaningful employment.
              </p>
            </div>

            {/* Social Impact Mission */}
            <div className="mission-box social-mission-box">
              <span className="mission-tag">Social Impact Mission</span>
              <h3>Unlocking Africa’s Digital Future</h3>
              <p>
                To unlock Africa’s digital future by providing businesses with top-tier technology talent, supporting young African professionals to secure meaningful digital work and enabling African SMEs to accelerate their digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="values-section">
        <div className="container">
          <div className="section-header-center">
            <span className="sub-heading-badge">Guiding Principles</span>
            <h2>Our Core Values</h2>
            <p>The foundational ethics that guide every interaction across our ecosystem.</p>
          </div>

          <div className="values-grid">
            {coreValues.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="val-top-row">
                  <div className="val-icon-badge">{val.icon}</div>
                  <span className="val-mono-num">{val.num}</span>
                </div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR IMPACT & HISTORICAL FIGURES */}
      <section className="impact-section">
        <div className="container">
          <div className="impact-summary-card glass-panel">
            <div className="section-header-center" style={{ marginBottom: "2rem" }}>
              <span className="sub-heading-badge">Ecosystem Outcomes</span>
              <h2>Our Impact</h2>
            </div>
            
            <p className="impact-narrative">
              For businesses, SasaKazi improves access to digital skills and delivery capacity. For talent, it creates experience, income, mentorship and career pathways. For the ecosystem, it strengthens the connection between training and market demand.
            </p>

            <div className="stats-row">
              <div className="stat-col">
                <span className="stat-big">6,000+</span>
                <span className="stat-desc">Tech Professionals Reached</span>
              </div>
              <div className="stat-col">
                <span className="stat-big">1,000+</span>
                <span className="stat-desc">Employers in Database</span>
              </div>
              <div className="stat-col">
                <span className="stat-big">386</span>
                <span className="stat-desc">Completed Projects</span>
              </div>
              <div className="stat-col">
                <span className="stat-big">90%</span>
                <span className="stat-desc">Job-Absorption Rate</span>
              </div>
            </div>

            <p className="verification-disclaimer">
              *Historical programme materials from EldoHub and partner initiatives report these figures following digital apprenticeships. Continuous reconciliation is maintained.
            </p>
          </div>
        </div>
      </section>

      {/* 6. SELECTED STORIES */}
      <section className="stories-section">
        <div className="container">
          <div className="section-header-center">
            <span className="sub-heading-badge">Real Journeys</span>
            <h2>Selected Stories</h2>
            <p>How real professionals translated hands-on project delivery into accelerated career trajectories.</p>
          </div>

          <div className="stories-grid">
            {stories.map((s, idx) => (
              <div key={idx} className="story-item-card">
                <div className="story-header">
                  <div className="avatar-circle">
                    {s.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3>{s.name}</h3>
                    <span className="pathway-badge">{s.pathway}</span>
                  </div>
                </div>
                <p className="story-highlight-text">{s.highlight}</p>
                <blockquote className="story-quote">
                  "{s.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-banner">
            <h2>Partner with SasaKazi to Drive Africa’s Tech Ecosystem</h2>
            <p>Join us as an employer, mentor, institutional sponsor, or talent builder.</p>
            <div className="cta-actions">
              <Link href="/opportunities#partners" className="btn btn-primary btn-lg">
                Partner With SasaKazi
              </Link>
              <Link href="/opportunities" className="btn btn-outline-white btn-lg">
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .about-page {
          padding-top: 0;
        }

        /* Banner */
        .page-banner {
          padding: 5rem 0 3.5rem;
          background: linear-gradient(180deg, rgba(26, 91, 140, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
          text-align: center;
        }
        .banner-content {
          max-width: 850px;
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
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          line-height: 1.25;
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

        /* Story Section */
        .story-section {
          padding: 4rem 0;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 3.5rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);
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
        .story-content h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 1.5rem;
        }
        .story-body p {
          font-size: 1.05rem;
          color: var(--color-text-dark);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .story-highlight {
          background-color: var(--color-blue-light);
          padding: 1.25rem 1.75rem;
          border-left: 4px solid var(--color-blue);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          font-weight: 600;
          color: var(--color-blue-dark) !important;
          margin-top: 1.5rem;
        }

        /* Mission Grid */
        .mission-section {
          padding: 4rem 0;
          background-color: var(--color-bg-light);
        }
        .mission-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 900px) {
          .mission-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .mission-box {
          background: #fff;
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-md);
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
          border-top: 4px solid var(--color-blue);
        }
        .vision-box {
          border-top-color: var(--color-blue);
        }
        .core-mission-box {
          border-top-color: var(--color-yellow);
        }
        .social-mission-box {
          border-top-color: #27c93f;
        }
        .mission-tag {
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-muted);
          margin-bottom: 0.75rem;
        }
        .mission-box h3 {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 1rem;
        }
        .mission-box p {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin: 0;
        }

        /* Values */
        .values-section {
          padding: 5rem 0;
        }
        .section-header-center {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3.5rem;
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
        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 600px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .values-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .value-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border-stone, #d6d1c4);
          border-radius: var(--radius-lg);
          padding: 2.25rem 2rem;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .value-card:hover {
          transform: translateY(-4px);
          border-color: #0f3d61;
          box-shadow: 0 12px 28px rgba(15, 61, 97, 0.08);
        }
        .val-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .val-icon-badge {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: var(--color-bg-warm, #FAF7F0);
          border: 1px solid var(--color-border-stone, #d6d1c4);
          color: #0f3d61;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }
        .value-card:hover .val-icon-badge {
          background: #0f3d61;
          color: #fbb63f;
          border-color: #0f3d61;
          transform: scale(1.05);
        }
        .val-mono-num {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 700;
          color: #a8a29e;
          letter-spacing: 0.5px;
          transition: color 0.2s ease;
        }
        .value-card:hover .val-mono-num {
          color: #C05621;
        }
        .value-card h3 {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }
        .value-card p {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* Impact Summary */
        .impact-section {
          padding: 5rem 0;
          background-color: var(--color-bg-light);
        }
        .impact-summary-card {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }
        .impact-narrative {
          font-size: 1.1rem;
          color: var(--color-text-dark);
          line-height: 1.7;
          max-width: 750px;
          margin: 0 auto 2.5rem;
        }
        .stats-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 768px) {
          .stats-row {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .stat-col {
          background: #fff;
          padding: 1.5rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-gray);
        }
        .stat-big {
          display: block;
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--color-blue);
          margin-bottom: 0.25rem;
        }
        .stat-desc {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-muted);
          text-transform: uppercase;
        }
        .verification-disclaimer {
          font-size: 0.78rem;
          color: var(--color-text-light);
          margin-top: 1rem;
        }

        /* Stories */
        .stories-section {
          padding: 5rem 0;
        }
        .stories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 900px) {
          .stories-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .story-item-card {
          background: #fff;
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .story-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 1.25rem;
        }
        .avatar-circle {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--color-blue-light);
          color: var(--color-blue);
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .story-header h3 {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 2px;
        }
        .pathway-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-yellow-dark);
        }
        .story-highlight-text {
          font-size: 0.92rem;
          color: var(--color-text-dark);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          font-weight: 500;
        }
        .story-quote {
          font-size: 0.88rem;
          font-style: italic;
          color: var(--color-text-muted);
          line-height: 1.55;
          border-left: 2px solid var(--color-yellow);
          padding-left: 12px;
          margin: 0;
          margin-top: auto;
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
          .cta-banner h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
