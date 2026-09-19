"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function OpportunitiesClient() {
  const [activeAudience, setActiveAudience] = useState("talent");
  const [filterType, setFilterType] = useState("All");

  const talentJourneySteps = [
    { num: "01", title: "Create and complete your profile" },
    { num: "02", title: "Add your skills, experience and portfolio" },
    { num: "03", title: "Complete relevant technical assessments" },
    { num: "04", title: "Apply for or be matched with opportunities" },
    { num: "05", title: "Complete client onboarding and setup" },
    { num: "06", title: "Deliver professionally and receive feedback" },
    { num: "07", title: "Strengthen your profile and progress to higher roles" }
  ];

  const sampleOpportunities = [
    {
      id: 1,
      title: "Full-Stack React & Node Developer",
      type: "Client Project",
      category: "Engineering",
      skills: ["React", "Node.js", "PostgreSQL", "REST APIs"],
      location: "Remote (Africa)",
      duration: "3 Months (Extendable)",
      compensation: "Competitive (Project-Based Escrow)",
      deadline: "Rolling Application",
      description: "Build a scalable fintech onboarding portal for an East African SME with automated identity verification."
    },
    {
      id: 2,
      title: "Data Annotation & AI Validation Specialist",
      type: "BPO / Managed Service",
      category: "Data & AI",
      skills: ["Data Cleaning", "Python", "Annotation Tooling", "Quality Assurance"],
      location: "Remote / Hybrid (Kenya)",
      duration: "6 Months Dedicated",
      compensation: "Monthly Retainer",
      deadline: "Open",
      description: "Perform structured text and image annotation workflows supporting machine learning model training datasets."
    },
    {
      id: 3,
      title: "Digital Marketing & Social Growth Lead",
      type: "Apprenticeship",
      category: "Digital Business",
      skills: ["SEO", "Meta Ads", "Content Creation", "Google Analytics"],
      location: "Remote (Kenya)",
      duration: "3 Months Apprenticeship",
      compensation: "Stipend + Performance Bonus",
      deadline: "Closes in 2 Weeks",
      description: "Design and execute lead generation campaigns for regional agribusiness tech startups under senior mentor supervision."
    },
    {
      id: 4,
      title: "UI/UX Product Designer",
      type: "Contract Assignment",
      category: "Design",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
      location: "Remote (Pan-Africa)",
      duration: "2 Months",
      compensation: "Milestone-Based",
      deadline: "Open",
      description: "Redesign the core mobile experience for an agricultural supply chain platform with accessible UX patterns."
    }
  ];

  const filteredOpps = filterType === "All" 
    ? sampleOpportunities 
    : sampleOpportunities.filter(o => o.type === filterType || o.category === filterType);

  return (
    <div className="opportunities-page">
      {/* 1. PAGE BANNER */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content">
            <span className="badge-pill">Opportunities Ecosystem</span>
            <h1>Find Your Place in Africa’s Digital Future</h1>
            <p className="banner-lead">
              Whether you are seeking work, hiring talent, offering mentorship or building a partnership, SasaKazi creates pathways for meaningful collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* 2. AUDIENCE PATHWAYS (TABS) */}
      <section className="pathways-section">
        <div className="container">
          <div className="audience-tabs">
            <button
              className={`aud-tab-btn ${activeAudience === "talent" ? "active" : ""}`}
              onClick={() => setActiveAudience("talent")}
            >
              For Tech Talent
            </button>
            <button
              className={`aud-tab-btn ${activeAudience === "employers" ? "active" : ""}`}
              onClick={() => setActiveAudience("employers")}
            >
              For Employers
            </button>
            <button
              className={`aud-tab-btn ${activeAudience === "mentors" ? "active" : ""}`}
              onClick={() => setActiveAudience("mentors")}
            >
              For Tech Mentors
            </button>
            <button
              className={`aud-tab-btn ${activeAudience === "partners" ? "active" : ""}`}
              onClick={() => setActiveAudience("partners")}
            >
              For Partners
            </button>
          </div>

          {/* ACTIVE AUDIENCE VIEW */}
          <div className="audience-panel glass-panel">
            {/* For Tech Talent */}
            {activeAudience === "talent" && (
              <div className="aud-content">
                <div className="aud-header">
                  <span className="sub-heading-badge">Talent Pathways</span>
                  <h2>Turn Capabilities into Verifiable Projects &amp; Jobs</h2>
                  <p>
                    Opportunities may include digital apprenticeships, client projects, internships, fellowships, contract assignments, dedicated-team roles, permanent employment, mentorship and remote work.
                  </p>
                </div>

                <div className="talent-journey-block">
                  <h3>The 7-Step Talent Journey</h3>
                  <div className="talent-steps-grid">
                    {talentJourneySteps.map((s) => (
                      <div key={s.num} className="t-step-card">
                        <span className="t-step-num">{s.num}</span>
                        <p>{s.title}</p>
                      </div>
                    ))}
                  </div>
                  <div className="disclaimer-note">
                    *Registration does not guarantee placement. Matching depends on demand, capability, assessment results, availability and professional readiness.
                  </div>
                </div>

                <div className="aud-actions">
                  <Link href="/register" className="btn btn-primary btn-lg">
                    Create Your Profile
                  </Link>
                  <a href="#listings" className="btn btn-secondary btn-lg">
                    View Open Opportunities
                  </a>
                </div>
              </div>
            )}

            {/* For Employers */}
            {activeAudience === "employers" && (
              <div className="aud-content">
                <div className="aud-header">
                  <span className="sub-heading-badge">Employer Solutions</span>
                  <h2>Build High-Performance Delivery Capacity</h2>
                  <p>
                    Businesses can hire an assessed professional, commission a project, assemble a multidisciplinary team, augment internal capacity or outsource a digital or business-support function.
                  </p>
                </div>

                <div className="employer-offer-grid">
                  <div className="e-card">
                    <h4>Assessed Professionals</h4>
                    <p>Direct placement of top-decile developers, designers, and BPO leads.</p>
                  </div>
                  <div className="e-card">
                    <h4>Commission a Project</h4>
                    <p>Fixed-scope delivery governed by milestone escrow and QA guardrails.</p>
                  </div>
                  <div className="e-card">
                    <h4>Dedicated Teams</h4>
                    <p>Full digital pods working exclusively on your product roadmap.</p>
                  </div>
                  <div className="e-card">
                    <h4>Managed BPO Services</h4>
                    <p>Turnkey back-office, customer support, and data annotation workflows.</p>
                  </div>
                </div>

                <div className="aud-actions">
                  <Link href="/register/business" className="btn btn-primary btn-lg">
                    Submit a Business Requirement
                  </Link>
                  <a href="https://wa.me/254723567263?text=Hello%20SasaKazi%2C%20I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                    Book a Consultation
                  </a>
                </div>
              </div>
            )}

            {/* For Tech Mentors */}
            {activeAudience === "mentors" && (
              <div className="aud-content" id="mentors">
                <div className="aud-header">
                  <span className="sub-heading-badge">Leadership &amp; Mentorship</span>
                  <h2>Guide Emerging African Tech Professionals</h2>
                  <p>
                    Mentors can provide career guidance, technical feedback, workplace-readiness coaching, portfolio preparation, group sessions and industry talks.
                  </p>
                </div>

                <div className="mentor-obligations-box">
                  <h4>Mentor Safeguarding &amp; Conduct Standard:</h4>
                  <p>
                    Mentors must maintain professional boundaries, protect confidential information and proactively report safeguarding or ethical concerns.
                  </p>
                </div>

                <div className="aud-actions">
                  <Link href="/register?role=mentor" className="btn btn-primary btn-lg">
                    Become a Tech Mentor
                  </Link>
                </div>
              </div>
            )}

            {/* For Partners */}
            {activeAudience === "partners" && (
              <div className="aud-content" id="partners">
                <div className="aud-header">
                  <span className="sub-heading-badge">Ecosystem Collaboration</span>
                  <h2>Institutional &amp; Programmatic Partnerships</h2>
                  <p>
                    Partnership opportunities include talent development, project pipelines, BPO delivery, platform integrations, mentorship, research, inclusion initiatives and market expansion.
                  </p>
                </div>

                <div className="partner-areas-grid">
                  <div className="p-area-item">
                    <span className="p-area-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v8" />
                        <path d="m4.93 10.93 1.41 1.41" />
                        <path d="M2 18h2" />
                        <path d="M20 18h2" />
                        <path d="m19.07 10.93-1.41 1.41" />
                        <path d="M22 22H2" />
                        <path d="m8 22 4-10 4 10" />
                      </svg>
                    </span>
                    <span>Inclusive Employment Programs</span>
                  </div>
                  <div className="p-area-item">
                    <span className="p-area-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                    </span>
                    <span>Enterprise BPO Pipelines</span>
                  </div>
                  <div className="p-area-item">
                    <span className="p-area-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </span>
                    <span>University &amp; TVET Tech Integration</span>
                  </div>
                  <div className="p-area-item">
                    <span className="p-area-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </span>
                    <span>Digital Economy Research</span>
                  </div>
                </div>

                <div className="aud-actions">
                  <a href="mailto:info@sasakazi.com?subject=Partnership%20Proposal%20with%20SasaKazi" className="btn btn-primary btn-lg">
                    Propose a Partnership
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. OPPORTUNITY LISTINGS */}
      <section className="listings-section" id="listings">
        <div className="container">
          <div className="section-header-center">
            <span className="sub-heading-badge">Live Pipeline</span>
            <h2>Opportunity Listings</h2>
            <p>Every listing outlines required skills, duration, compensation parameters, and selection process.</p>
          </div>

          {/* Filter Bar */}
          <div className="filter-pill-bar">
            {["All", "Client Project", "BPO / Managed Service", "Apprenticeship", "Contract Assignment"].map((f) => (
              <button
                key={f}
                className={`pill-btn ${filterType === f ? "active" : ""}`}
                onClick={() => setFilterType(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="opp-listings-grid">
            {filteredOpps.map((opp) => (
              <div key={opp.id} className="opp-card">
                <div className="opp-top">
                  <span className="opp-type-badge">{opp.type}</span>
                  <span className="opp-deadline">{opp.deadline}</span>
                </div>
                <h3>{opp.title}</h3>
                <p className="opp-desc">{opp.description}</p>
                
                <div className="opp-skills-list">
                  {opp.skills.map((sk, i) => (
                    <span key={i} className="skill-chip">{sk}</span>
                  ))}
                </div>

                <div className="opp-meta-row">
                  <div>
                    <span className="meta-lbl">Duration</span>
                    <span className="meta-val">{opp.duration}</span>
                  </div>
                  <div>
                    <span className="meta-lbl">Working Arrangement</span>
                    <span className="meta-val">{opp.location}</span>
                  </div>
                  <div>
                    <span className="meta-lbl">Compensation</span>
                    <span className="meta-val">{opp.compensation}</span>
                  </div>
                </div>

                <div className="opp-action-footer">
                  <Link href={`/register?apply=${opp.id}`} className="btn btn-primary btn-sm">
                    Apply Now
                  </Link>
                  <span className="opp-id-lbl">Ref: #SK-00{opp.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EQUAL OPPORTUNITY AND SAFETY */}
      <section className="safety-section">
        <div className="container">
          <div className="safety-card glass-panel">
            <div className="safety-icon-header">
              <span className="shield-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <h2>Equal Opportunity &amp; Safety Commitment</h2>
            </div>
            <div className="safety-body">
              <p>
                SasaKazi is committed to safe, respectful and inclusive opportunities. Discrimination, harassment, exploitation, retaliation and abuse are strictly not acceptable across any touchpoint.
              </p>
              <div className="anti-fee-alert">
                <strong>Important Anti-Exploitation Policy:</strong>
                <p>
                  Applicants should never pay an unofficial fee to access an opportunity. Suspicious requests or fee solicitations should be immediately reported through official SasaKazi channels.
                </p>
              </div>
            </div>
            <div className="safety-footer-action">
              <Link href="/safeguarding" className="btn btn-outline">
                Read Full Safeguarding Statement
              </Link>
              <Link href="/report-concern" className="btn btn-secondary">
                Report a Concern
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .opportunities-page {
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

        /* Pathways Tabs */
        .pathways-section {
          padding: 4rem 0;
        }
        .audience-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .aud-tab-btn {
          padding: 0.8rem 2rem;
          font-size: 1rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border-gray);
          background: var(--color-bg-light);
          color: var(--color-text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .aud-tab-btn:hover {
          color: var(--color-blue);
          background: #fff;
        }
        .aud-tab-btn.active {
          background-color: var(--color-blue);
          color: #fff;
          border-color: var(--color-blue);
          box-shadow: 0 4px 15px rgba(26, 91, 140, 0.2);
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 3.5rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);
        }
        .audience-panel {
          max-width: 950px;
          margin: 0 auto;
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
        .aud-header h2 {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 1rem;
        }
        .aud-header p {
          font-size: 1.05rem;
          color: var(--color-text-dark);
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        /* Talent Journey */
        .talent-journey-block h3 {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 1.5rem;
        }
        .talent-steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        @media (min-width: 600px) {
          .talent-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 900px) {
          .talent-steps-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .t-step-card {
          background: var(--color-bg-light);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-gray);
        }
        .t-step-num {
          display: block;
          font-weight: 900;
          color: var(--color-yellow-dark);
          font-size: 1.1rem;
          margin-bottom: 0.4rem;
        }
        .t-step-card p {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-dark);
          line-height: 1.4;
          margin: 0;
        }
        .disclaimer-note {
          font-size: 0.82rem;
          font-style: italic;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }

        /* Employer grid inside panel */
        .employer-offer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        @media (min-width: 700px) {
          .employer-offer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .e-card {
          background: var(--color-bg-light);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-gray);
        }
        .e-card h4 {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 0.5rem;
        }
        .e-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }

        /* Mentor box */
        .mentor-obligations-box {
          background: var(--color-blue-light);
          border-left: 4px solid var(--color-blue);
          padding: 1.5rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-bottom: 2rem;
        }
        .mentor-obligations-box h4 {
          font-size: 1rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 0.5rem;
        }
        .mentor-obligations-box p {
          font-size: 0.92rem;
          color: var(--color-text-dark);
          margin: 0;
        }

        /* Partner areas */
        .partner-areas-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        @media (min-width: 600px) {
          .partner-areas-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .p-area-item {
          background: #FAF7F0;
          border: 1px solid #d6d1c4;
          padding: 0.9rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          color: var(--color-text-dark);
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.2s ease;
        }
        .p-area-item:hover {
          border-color: #0f3d61;
          transform: translateY(-2px);
        }
        .p-area-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          background: #ffffff;
          border: 1px solid #e7e2d6;
          border-radius: 8px;
          color: #0f3d61;
          flex-shrink: 0;
        }

        .aud-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Listings Section */
        .listings-section {
          padding: 5rem 0;
          background-color: var(--color-bg-light);
        }
        .section-header-center {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 2.5rem;
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
        }
        .filter-pill-bar {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .pill-btn {
          padding: 0.5rem 1.25rem;
          font-size: 0.88rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border-gray);
          background: #fff;
          color: var(--color-text-muted);
          cursor: pointer;
        }
        .pill-btn.active {
          background: var(--color-blue);
          color: #fff;
          border-color: var(--color-blue);
        }
        .opp-listings-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }
        @media (min-width: 768px) {
          .opp-listings-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .opp-card {
          background: #fff;
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease;
        }
        .opp-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-blue);
          box-shadow: 0 12px 25px rgba(26, 91, 140, 0.08);
        }
        .opp-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .opp-type-badge {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          background: var(--color-blue-light);
          color: var(--color-blue);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }
        .opp-deadline {
          font-size: 0.78rem;
          color: var(--color-yellow-dark);
          font-weight: 700;
        }
        .opp-card h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 0.75rem;
        }
        .opp-desc {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }
        .opp-skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 1.5rem;
        }
        .skill-chip {
          font-size: 0.75rem;
          font-weight: 600;
          background: var(--color-bg-light);
          color: var(--color-text-dark);
          padding: 3px 8px;
          border-radius: 4px;
        }
        .opp-meta-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          padding: 1rem 0;
          border-top: 1px solid var(--color-border-gray);
          border-bottom: 1px solid var(--color-border-gray);
          margin-bottom: 1.5rem;
          font-size: 0.8rem;
        }
        .meta-lbl {
          display: block;
          color: var(--color-text-light);
          text-transform: uppercase;
          font-size: 0.7rem;
          font-weight: 700;
          margin-bottom: 2px;
        }
        .meta-val {
          font-weight: 600;
          color: var(--color-text-dark);
        }
        .opp-action-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }
        .opp-id-lbl {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          font-family: monospace;
        }

        /* Safety Section */
        .safety-section {
          padding: 5rem 0;
        }
        .safety-card {
          max-width: 850px;
          margin: 0 auto;
        }
        .safety-icon-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.25rem;
        }
        .shield-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: #FAF7F0;
          border: 1px solid #d6d1c4;
          border-radius: 10px;
          color: #0f3d61;
          flex-shrink: 0;
        }
        .safety-icon-header h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin: 0;
        }
        .safety-body p {
          font-size: 1rem;
          color: var(--color-text-dark);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }
        .anti-fee-alert {
          background: rgba(251, 182, 63, 0.15);
          border-left: 4px solid var(--color-yellow-dark);
          padding: 1.25rem 1.5rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-bottom: 2rem;
        }
        .anti-fee-alert strong {
          display: block;
          color: var(--color-text-dark);
          margin-bottom: 4px;
        }
        .anti-fee-alert p {
          margin: 0;
          font-size: 0.92rem;
        }
        .safety-footer-action {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .glass-panel {
            padding: 1.75rem;
          }
          .opp-meta-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
