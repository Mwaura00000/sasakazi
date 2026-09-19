"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function WhoWeAreClient() {
  const [activePersona, setActivePersona] = useState("employers");

  const employerPoints = [
    "Access vetted African technology professionals.",
    "Reduce the time and complexity of sourcing and assessment.",
    "Build flexible capacity without expanding permanent headcount for every requirement.",
    "Access specialised digital capabilities for transformation and growth.",
    "Strengthen delivery through structured onboarding and coordination.",
    "Create social impact through meaningful work opportunities."
  ];

  const talentPoints = [
    "Access genuine projects, apprenticeships, internships and employment.",
    "Apply technical knowledge to real business challenges.",
    "Build credible portfolios and professional references.",
    "Receive mentorship and career guidance.",
    "Strengthen communication, teamwork and accountability.",
    "Progress into repeat assignments, employment or entrepreneurship."
  ];

  const mentorPoints = [
    "Create meaningful professional impact for emerging builders.",
    "Strengthen your leadership, coaching and evaluation skills.",
    "Share high-level industry knowledge and best practices.",
    "Expand your professional network across the African continent.",
    "Support an ethical, globally competitive African talent pipeline."
  ];

  const clientSegments = [
    {
      num: "01",
      title: "Startups and SMEs",
      desc: "Specialised skills without building every function internally.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Corporates",
      desc: "Project teams, dedicated professionals and managed services.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Government & Development Organisations",
      desc: "Inclusive digital-work and employment programmes.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="2" y1="22" x2="22" y2="22" />
          <line x1="6" y1="18" x2="6" y2="11" />
          <line x1="10" y1="18" x2="10" y2="11" />
          <line x1="14" y1="18" x2="14" y2="11" />
          <line x1="18" y1="18" x2="18" y2="11" />
          <polygon points="12 2 20 7 4 7" />
        </svg>
      )
    },
    {
      num: "04",
      title: "International BPO & ITES Buyers",
      desc: "Flexible African delivery teams aligned with global standards.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Training Institutions & Partners",
      desc: "Pathways connecting skills to real market opportunities.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    }
  ];

  const engagementModels = [
    {
      num: "01",
      title: "Managed BPO Services",
      desc: "Delivery of defined processes against agreed outputs, SLAs, and dedicated quality oversight.",
      badge: "Turnkey Execution"
    },
    {
      num: "02",
      title: "Dedicated Teams",
      desc: "Recurring professional or team support embedded directly into your ongoing operations.",
      badge: "Ongoing Support"
    },
    {
      num: "03",
      title: "Talent-as-a-Service",
      desc: "Assessed professionals engaged for a defined period to hit targeted milestone deliverables.",
      badge: "Flexible Scope"
    },
    {
      num: "04",
      title: "Staff Augmentation",
      desc: "Additional capability seamlessly embedded into your existing engineering or operations squad.",
      badge: "Direct Injection"
    },
    {
      num: "05",
      title: "Recruitment and Placement",
      desc: "Direct hiring through a structured selection, vetting, and interview screening process.",
      badge: "Permanent Hire"
    }
  ];

  return (
    <div className="who-we-are-page">
      {/* 1. PAGE BANNER */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content">
            <span className="badge-pill">Who We Are</span>
            <h1>Building the Bridge Between Business Demand and African Talent</h1>
            <p className="banner-lead">
              Africa has a growing pool of talented technology professionals. Businesses need reliable digital capabilities to innovate and remain competitive. SasaKazi provides the trusted connection between these two needs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR ORGANISATION */}
      <section className="organisation-section">
        <div className="container">
          <div className="org-card glass-panel">
            <div className="org-text">
              <span className="sub-heading-badge">Our Organisation</span>
              <h2>A Technology-Enabled Digital Talent &amp; BPO Company</h2>
              <p>
                SasaKazi combines a digital platform, structured assessment, mentorship and managed delivery to help organisations access suitable professionals while enabling talent to gain practical experience and build sustainable careers.
              </p>
              <p>
                Our model supports project assignments, dedicated talent, managed teams, outsourced business functions and direct recruitment.
              </p>
              <div className="org-features-row">
                <div className="org-feat-item">
                  <span className="feat-check">✓</span>
                  <span>Digital Assessment Engine</span>
                </div>
                <div className="org-feat-item">
                  <span className="feat-check">✓</span>
                  <span>Senior Mentorship Guardrails</span>
                </div>
                <div className="org-feat-item">
                  <span className="feat-check">✓</span>
                  <span>Milestone-Based Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITIONS (TABS) */}
      <section className="value-props-section">
        <div className="container">
          <div className="section-header-center">
            <span className="sub-heading-badge">Tailored Value</span>
            <h2>Our Value Propositions</h2>
            <p>Targeted capabilities and real impact for every stakeholder in our ecosystem.</p>
          </div>

          <div className="persona-tabs">
            <button
              className={`persona-tab-btn ${activePersona === "employers" ? "active" : ""}`}
              onClick={() => setActivePersona("employers")}
            >
              For Employers
            </button>
            <button
              className={`persona-tab-btn ${activePersona === "talent" ? "active" : ""}`}
              onClick={() => setActivePersona("talent")}
            >
              For Tech Talent
            </button>
            <button
              className={`persona-tab-btn ${activePersona === "mentors" ? "active" : ""}`}
              onClick={() => setActivePersona("mentors")}
            >
              For Tech Mentors
            </button>
          </div>

          <div className="persona-display-card glass-panel">
            {activePersona === "employers" && (
              <div className="persona-content">
                <div className="persona-header">
                  <h3>Access the Skills You Need, When You Need Them</h3>
                  <p>SasaKazi enables businesses and institutions to scale on demand with vetted African professionals.</p>
                </div>
                <div className="points-grid">
                  {employerPoints.map((item, idx) => (
                    <div key={idx} className="point-item">
                      <span className="point-icon">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="persona-footer">
                  <Link href="/register/business" className="btn btn-primary">
                    Hire Tech Talent
                  </Link>
                </div>
              </div>
            )}

            {activePersona === "talent" && (
              <div className="persona-content">
                <div className="persona-header">
                  <h3>Turn Your Skills Into Real Work and Career Growth</h3>
                  <p>Gain real project experience, mentorship, and clear pathways to sustainable careers.</p>
                </div>
                <div className="points-grid">
                  {talentPoints.map((item, idx) => (
                    <div key={idx} className="point-item">
                      <span className="point-icon">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="persona-footer">
                  <Link href="/register" className="btn btn-primary">
                    Join as Tech Talent
                  </Link>
                </div>
              </div>
            )}

            {activePersona === "mentors" && (
              <div className="persona-content">
                <div className="persona-header">
                  <h3>Use Your Experience to Shape Africa’s Next Generation</h3>
                  <p>SasaKazi gives mentors an opportunity to create professional impact and support an ethical talent pipeline.</p>
                </div>
                <div className="points-grid">
                  {mentorPoints.map((item, idx) => (
                    <div key={idx} className="point-item">
                      <span className="point-icon">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="persona-footer">
                  <Link href="/opportunities#mentors" className="btn btn-primary">
                    Become a Mentor
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. WHO WE SERVE */}
      <section className="who-serve-section">
        <div className="container">
          <div className="section-header-center">
            <span className="sub-heading-badge">Target Clients</span>
            <h2>Who We Serve</h2>
            <p>From fast-growing ventures to global institutions, we tailor delivery to your organisational context.</p>
          </div>

          <div className="client-segments-grid">
            {clientSegments.map((segment, idx) => (
              <div key={idx} className="segment-card">
                <div className="segment-top-row">
                  <div className="segment-icon-box">{segment.icon}</div>
                  <span className="segment-mono-num">{segment.num}</span>
                </div>
                <h3>{segment.title}</h3>
                <p>{segment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW CLIENTS CAN ENGAGE US (5 ENGAGEMENT MODELS) */}
      <section className="engagement-section" id="engagement-models">
        <div className="container">
          <div className="section-header-center">
            <span className="sub-heading-badge">Engagement Architecture</span>
            <h2>How Clients Can Engage Us</h2>
            <p>Flexible engagement models designed for agility, scale, and high-performance delivery.</p>
          </div>

          <div className="engagement-grid">
            {engagementModels.map((model) => (
              <div key={model.num} className="engagement-card">
                <div className="engagement-top">
                  <span className="model-num">{model.num}</span>
                  <span className="model-badge">{model.badge}</span>
                </div>
                <h3>{model.title}</h3>
                <p>{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR BLENDED MISSION */}
      <section className="blended-mission-section">
        <div className="container">
          <div className="blended-box">
            <span className="sub-heading-badge" style={{ color: "#fbb63f" }}>Social + Commercial</span>
            <h2>Our Blended Mission</h2>
            <p className="blended-text">
              SasaKazi’s commercial growth and social mission reinforce each other. Every new client, project and outsourced service creates an opportunity for African talent to work, earn, gain experience and build a career.
            </p>
            <div className="blended-actions">
              <Link href="/register/business" className="btn btn-primary btn-lg">
                Submit a Business Requirement
              </Link>
              <Link href="/how-it-works" className="btn btn-outline-white btn-lg">
                Explore The Delivery Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .who-we-are-page {
          padding-top: 0;
        }

        /* Banner */
        .page-banner {
          padding: 5rem 0 3.5rem;
          background: linear-gradient(180deg, rgba(26, 91, 140, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
          text-align: center;
        }
        .banner-content {
          max-width: 800px;
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
          font-size: 2.6rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          line-height: 1.2;
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

        /* Organisation Section */
        .organisation-section {
          padding: 3.5rem 0;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 3rem;
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
        .org-text h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 1.25rem;
        }
        .org-text p {
          font-size: 1.05rem;
          color: var(--color-text-dark);
          line-height: 1.65;
          margin-bottom: 1rem;
        }
        .org-features-row {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border-gray);
        }
        .org-feat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: var(--color-text-dark);
        }
        .feat-check {
          color: #1b8a2c;
          font-weight: 900;
          background: rgba(39, 201, 63, 0.15);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
        }

        /* Section Header Center */
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

        /* Value Props */
        .value-props-section {
          padding: 5rem 0;
          background-color: var(--color-bg-light);
        }
        .persona-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .persona-tab-btn {
          padding: 0.8rem 2rem;
          font-size: 1rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border-gray);
          background: #fff;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .persona-tab-btn.active {
          background-color: var(--color-blue);
          color: #fff;
          border-color: var(--color-blue);
          box-shadow: 0 4px 15px rgba(26, 91, 140, 0.2);
        }
        .persona-display-card {
          max-width: 900px;
          margin: 0 auto;
        }
        .persona-header {
          margin-bottom: 2rem;
        }
        .persona-header h3 {
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 0.5rem;
        }
        .persona-header p {
          font-size: 1.05rem;
          color: var(--color-text-muted);
        }
        .points-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        @media (min-width: 768px) {
          .points-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.95rem;
          line-height: 1.5;
          color: var(--color-text-dark);
        }
        .point-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(39, 201, 63, 0.15);
          color: #1b8a2c;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.75rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Who We Serve */
        .who-serve-section {
          padding: 5rem 0;
        }
        .client-segments-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 600px) {
          .client-segments-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 992px) {
          .client-segments-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .segment-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border-stone, #d6d1c4);
          border-radius: var(--radius-lg);
          padding: 2.25rem 2rem;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .segment-card:hover {
          transform: translateY(-4px);
          border-color: #0f3d61;
          box-shadow: 0 12px 28px rgba(15, 61, 97, 0.08);
        }
        .segment-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .segment-icon-box {
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
        .segment-card:hover .segment-icon-box {
          background: #0f3d61;
          color: #fbb63f;
          border-color: #0f3d61;
          transform: scale(1.05);
        }
        .segment-mono-num {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 700;
          color: #a8a29e;
          letter-spacing: 0.5px;
          transition: color 0.2s ease;
        }
        .segment-card:hover .segment-mono-num {
          color: #C05621;
        }
        .segment-card h3 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }
        .segment-card p {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* Engagement Models */
        .engagement-section {
          padding: 5rem 0;
          background-color: var(--color-bg-light);
        }
        .engagement-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 600px) {
          .engagement-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .engagement-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .engagement-card {
          background: #fff;
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease;
        }
        .engagement-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-blue);
        }
        .engagement-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .model-num {
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--color-blue);
        }
        .model-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          background: var(--color-bg-light);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }
        .engagement-card h3 {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 0.75rem;
        }
        .engagement-card p {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* Blended Mission */
        .blended-mission-section {
          padding: 5rem 0;
        }
        .blended-box {
          background: linear-gradient(135deg, var(--color-blue-dark) 0%, var(--color-blue) 100%);
          border-radius: var(--radius-lg);
          padding: 4rem 2rem;
          text-align: center;
          color: #fff;
          box-shadow: 0 20px 40px rgba(26, 91, 140, 0.2);
        }
        .blended-box h2 {
          font-size: 2.4rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 1.25rem;
        }
        .blended-text {
          max-width: 750px;
          margin: 0 auto 2.5rem;
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.7;
        }
        .blended-actions {
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
          .blended-box h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
