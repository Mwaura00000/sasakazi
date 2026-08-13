"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function ServicesPage() {
  // Scroll triggered entrance animations observer
  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observerOptions = {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.05
      };

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const targets = document.querySelectorAll(
        ".services-hero .container, .persona-nav-card, .overview-box, .category-card"
      );
      targets.forEach((t) => observer.observe(t));

      return () => observer.disconnect();
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="services-page">
      {/* Top Banner Area */}
      <section className="services-hero">
        <div className="container">
          <span className="badge badge-yellow">What Sasakazi Offers</span>
          <h1>What Sasakazi Offers</h1>
          <p className="intro-text">
            Sasakazi supports three groups — tech talent, businesses, and mentors — through one platform: developing skilled young professionals, matching them to real digital work, and guiding them toward long-term careers.
          </p>
        </div>
      </section>

      {/* 3-Column Persona Selection Deck (Smooth Scroll Anchors) */}
      <section className="persona-deck-section">
        <div className="container">
          <div className="grid grid-3 persona-nav-deck">
            <button className="persona-nav-card" onClick={() => scrollToSection("talent-section")}>
              <h3>For Talent</h3>
              <span>Build profile, get matched, grow career &rarr;</span>
            </button>

            <button className="persona-nav-card" onClick={() => scrollToSection("business-section")}>
              <h3>For Businesses</h3>
              <span>Get vetted talent for digital projects &rarr;</span>
            </button>

            <button className="persona-nav-card" onClick={() => scrollToSection("mentor-section")}>
              <h3>For Mentors</h3>
              <span>Guide the next generation of talent &rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* For Talent Section */}
      <section className="persona-details-section white-bg" id="talent-section">
        <div className="container">
          <div className="overview-box grid grid-2">
            {/* Text Left */}
            <div className="overview-content">
              <span className="badge badge-blue">For Talent</span>
              <h3>Build your profile, get matched, grow your career</h3>
              <p className="section-lead">Sasakazi helps young tech professionals turn skills into real opportunities.</p>
              
              <ul className="details-checklist-items">
                <li>
                  <strong>Create your profile</strong> — List your skills, showcase your work, and prepare for assessment and matching.
                </li>
                <li>
                  <strong>Learn and get assessed</strong> — Build both technical and soft skills, complete assessments, and improve your readiness for real projects.
                </li>
                <li>
                  <strong>Work on real projects</strong> — Get matched with businesses that need your skills — in web & fullstack engineering, mobile app development, or UI/UX product design.
                </li>
                <li>
                  <strong>Grow with mentorship</strong> — Access mentorship, internships, fellowships, and job opportunities as you build your track record.
                </li>
              </ul>

              <div className="btn-actions-row">
                <Link href="/register" className="btn btn-primary">
                  Build Your Profile &rarr;
                </Link>
              </div>
            </div>

            {/* Picture Right */}
            <div className="overview-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1200&q=80" 
                alt="Young African tech talent professional coding" 
                className="section-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses Section */}
      <section className="persona-details-section bg-light" id="business-section">
        <div className="container">
          <div className="overview-box grid grid-2">
            {/* Picture Left */}
            <div className="overview-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" 
                alt="African business team collaborating on project" 
                className="section-photo"
              />
            </div>

            {/* Text Right */}
            <div className="overview-content">
              <span className="badge badge-yellow">For Businesses</span>
              <h3>Get vetted talent for your digital projects</h3>
              <p className="section-lead">Sasakazi connects businesses with pre-assessed, ready-to-work tech talent — without the overhead of running your own hiring pipeline.</p>
              
              <ul className="details-checklist-items">
                <li>
                  <strong>Post your project</strong> — Describe what you need, from a short web build to an ongoing mobile or design engagement.
                </li>
                <li>
                  <strong>Get matched with vetted talent</strong> — Review candidates who've already been assessed for the skills your project needs.
                </li>
                <li>
                  <strong>Work with confidence</strong> — Talent is developed and supported through Sasakazi's mentorship pipeline, not just listed and left.
                </li>
                <li>
                  <strong>Scale as you grow</strong> — Whether it's one project or an ongoing need, bring in the right skills when you need them.
                </li>
              </ul>

              <div className="btn-actions-row">
                <Link href="/register/business" className="btn btn-accent">
                  Post a Project &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Mentors Section */}
      <section className="persona-details-section white-bg" id="mentor-section">
        <div className="container">
          <div className="overview-box grid grid-2">
            {/* Text Left */}
            <div className="overview-content">
              <span className="badge badge-blue">For Mentors</span>
              <h3>Guide the next generation of tech talent</h3>
              <p className="section-lead">Experienced professionals help Sasakazi's talent grow — from technical feedback to career guidance.</p>
              
              <ul className="details-checklist-items">
                <li>
                  <strong>Support talent development</strong> — Work directly with talent moving through the Learning & Assessment stage.
                </li>
                <li>
                  <strong>Shape real outcomes</strong> — Help talent build the skills and confidence needed to succeed on real business projects.
                </li>
                <li>
                  <strong>Build your own network and reputation</strong> — Mentorship connects you with the next wave of Kenyan tech talent.
                </li>
              </ul>

              <div className="btn-actions-row">
                <Link href="/register/business" className="btn btn-primary">
                  Become a Mentor &rarr;
                </Link>
              </div>
            </div>

            {/* Picture Right */}
            <div className="overview-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80" 
                alt="Relatable African senior tech mentor guiding young developer" 
                className="section-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech categories covered */}
      <section className="tech-categories-section bg-light">
        <div className="container">
          <div className="section-title text-center">
            <span className="badge badge-yellow">Tech Categories We Cover</span>
            <h2>Technology Categories We Cover</h2>
            <p>We connect skilled local developers and designers across three core engineering segments.</p>
          </div>

          <div className="grid grid-3 categories-grid">
            {/* Category 1 */}
            <div className="category-card">
              <div className="category-card-top-row">
                <span className="badge badge-verified">14 available</span>
              </div>
              <h3>Web & Fullstack Engineering</h3>
              <p>Pixel-perfect React, Next.js, and Node.js solutions built under senior developer supervision.</p>
              <div className="skills-chips">
                <span className="skill-chip">React</span>
                <span className="skill-chip">Next.js</span>
                <span className="skill-chip">Node.js</span>
                <span className="skill-chip">Tailwind</span>
              </div>
            </div>

            {/* Category 2 */}
            <div className="category-card">
              <div className="category-card-top-row">
                <span className="badge badge-verified">9 available</span>
              </div>
              <h3>Mobile App Development</h3>
              <p>Feature-rich Flutter and React Native mobile apps for iOS and Android built on clean structures.</p>
              <div className="skills-chips">
                <span className="skill-chip">React Native</span>
                <span className="skill-chip">Flutter</span>
                <span className="skill-chip">Swift</span>
                <span className="skill-chip">Kotlin</span>
              </div>
            </div>

            {/* Category 3 */}
            <div className="category-card">
              <div className="category-card-top-row">
                <span className="badge badge-verified">8 available</span>
              </div>
              <h3>UI/UX Product Design</h3>
              <p>Interactive Figma wireframes, mockups, design systems, and rapid responsive prototypes.</p>
              <div className="skills-chips">
                <span className="skill-chip">Figma</span>
                <span className="skill-chip">UI Systems</span>
                <span className="skill-chip">Prototyping</span>
                <span className="skill-chip">UX Audit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-page {
          overflow-x: hidden;
          font-family: var(--font-primary);
        }

        /* Hero Banner Styling */
        .services-hero {
          padding: 80px 0;
          background: linear-gradient(135deg, var(--color-blue) 0%, var(--color-blue-dark) 100%);
          color: var(--color-white);
          text-align: center;
          position: relative;
        }
        .services-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 12px;
          background: linear-gradient(90deg, var(--color-yellow) 0%, var(--color-blue-light) 100%);
        }
        .services-hero h1 {
          font-size: 2.8rem;
          font-weight: 800;
          color: #ffffff !important;
          margin: 16px 0;
          font-family: var(--font-serif);
        }
        .intro-text {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 760px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Persona selector deck */
        .persona-deck-section {
          padding: 40px 0;
          background-color: var(--color-bg-light);
          border-bottom: 1px solid var(--color-border-gray);
        }
        .persona-nav-deck {
          gap: 24px;
        }
        .persona-nav-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 28px 24px;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }
        .persona-nav-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(26, 91, 140, 0.07);
          border-color: var(--color-blue);
        }
        .persona-nav-card:active {
          transform: scale(0.98);
        }
        .persona-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .circle-blue {
          background-color: rgba(26, 91, 140, 0.08);
          color: var(--color-blue);
        }
        .circle-yellow {
          background-color: rgba(251, 182, 63, 0.15);
          color: var(--color-yellow-dark);
        }
        .persona-nav-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-blue-dark);
          margin-bottom: 6px;
        }
        .persona-nav-card span {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        /* Persona sections alternating content */
        .persona-details-section {
          padding: 90px 0;
        }
        .white-bg {
          background-color: var(--color-white);
        }
        .bg-light {
          background-color: var(--color-bg-light);
        }
        
        .overview-box {
          align-items: center;
          gap: 60px;
        }
        @media (max-width: 900px) {
          .overview-box {
            grid-template-columns: 1fr !important;
            gap: 40px;
          }
          .persona-details-section {
            padding: 60px 0;
          }
        }
        
        .overview-content {
          text-align: left;
        }
        .overview-content h3 {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-top: 8px;
          margin-bottom: 16px;
        }
        .section-lead {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-dark);
          line-height: 1.5;
          margin-bottom: 24px;
        }
        
        .details-checklist-items {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .details-checklist-items li {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text-muted);
          position: relative;
          padding-left: 24px;
        }
        .details-checklist-items li::before {
          content: "●";
          position: absolute;
          left: 0;
          color: var(--color-yellow-dark);
          font-size: 0.85rem;
        }
        .details-checklist-items li strong {
          color: var(--color-text-dark);
        }

        .btn-actions-row {
          display: flex;
          gap: 12px;
        }

        .overview-image-wrapper {
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(26, 91, 140, 0.08);
          border: 1px solid var(--color-border-gray);
        }
        .section-photo {
          width: 100%;
          height: 100%;
          max-height: 380px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .overview-image-wrapper:hover .section-photo {
          transform: scale(1.04);
        }

        /* Technology Categories covered */
        .tech-categories-section {
          padding: 90px 0;
        }
        .section-title h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 16px;
        }
        .section-title p {
          max-width: 600px;
          margin: 0 auto;
          color: var(--color-text-muted);
        }
        
        .category-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 32px;
          text-align: left;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.01);
        }
        .category-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-blue-light);
          box-shadow: 0 16px 36px rgba(26, 91, 140, 0.04);
        }
        .category-card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .category-icon-circle-small {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .category-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-blue-dark);
          margin-bottom: 10px;
        }
        .category-card p {
          font-size: 0.88rem;
          line-height: 1.55;
          color: var(--color-text-muted);
          margin-bottom: 20px;
        }
        .skills-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .skill-chip {
          font-size: 0.72rem;
          padding: 4px 8px;
          border-radius: 4px;
          background-color: var(--color-bg-light);
          border: 1px solid var(--color-border-gray);
          color: var(--color-text-dark);
          font-weight: 600;
        }

        /* Scroll animations base classes */
        .services-hero .container, .persona-nav-card, .overview-box, .category-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        
        .services-hero .container.is-visible,
        .persona-nav-card.is-visible,
        .overview-box.is-visible,
        .category-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .services-hero .container, .persona-nav-card, .overview-box, .category-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .persona-nav-card:hover, .category-card:hover, .overview-image-wrapper:hover .section-photo {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
