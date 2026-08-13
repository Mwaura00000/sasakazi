"use client";

import { use, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { mockTalents } from "@/data/mockTalents";
import { notFound } from "next/navigation";

const AnimatedCount = ({ value, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setCount(value);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!hasStarted) return;

    const rawEnd = parseFloat(value);
    if (isNaN(rawEnd)) {
      setCount(value);
      return;
    }

    const isFloat = value.toString().includes(".");
    const increment = rawEnd / (duration / 16);
    let current = 0;

    const counter = setInterval(() => {
      current += increment;
      if (current >= rawEnd) {
        setCount(rawEnd);
        clearInterval(counter);
      } else {
        setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [hasStarted, value, duration]);

  const suffix = value.toString().replace(/^[0-9.]+/, "");
  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

// AnimatedProgressBar component
const AnimatedProgressBar = ({ value, duration = 1200 }) => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setWidth(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(value);
          }, 100);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="progress-bar-container" ref={elementRef}>
      <div 
        className="progress-bar-fill animate-bar" 
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default function TalentProfilePage({ params }) {
  const { id } = use(params);
  
  const talent = mockTalents.find((t) => t.id === id);

  if (!talent) {
    notFound();
  }

  return (
    <div className="container profile-container">
      <div className="back-link-row">
        <Link href="/talents" className="back-link">
          &larr; Back to Talent Directory
        </Link>
      </div>

      <div className="profile-grid">
        {/* Left Column: Summary Card */}
        <div className="profile-summary-card glass">
          <div className="avatar-large">
            {talent.name.charAt(0)}
          </div>
          
          <div className="profile-header-meta">
            <h1>{talent.name}</h1>
            <p className="headline">{talent.headline}</p>
            <p className="location-info">📍 {talent.location} · {talent.workStatus}</p>
          </div>

          <div className="ratings-summary">
            <span className="star-rating">⭐ <AnimatedCount value={talent.rating} /></span>
            <span className="reviews-text"><AnimatedCount value={talent.reviewCount} /> client reviews</span>
          </div>

          <div className="badges-list">
            {talent.verified && (
              <span className="badge badge-verified">✓ Verified Talent</span>
            )}
            <span className={`badge ${talent.availability === "Available" ? "badge-available" : "badge-busy"}`}>
              ● {talent.availability}
            </span>
          </div>

          <div className="active-timestamp">
            <span>{talent.activeTime}</span>
          </div>

          <div className="cta-block">
            <button className="btn btn-primary w-full">
              Interview {talent.name.split(" ")[0]}
            </button>
            <button className="btn btn-outline w-full btn-save">
              Save Profile
            </button>
          </div>
        </div>

        {/* Right Column: Details & Capabilities */}
        <div className="profile-details-column">
          {/* Bio Section */}
          <section className="profile-section card-box">
            <h2>Professional Summary</h2>
            <p className="bio-text">{talent.bio}</p>
          </section>

          {/* Trust Signals Section */}
          <section className="profile-section card-box trust-signals-section">
            <h2>Workforce Trust Indicators</h2>
            <div className="trust-grid">
              {/* Workforce Reputation */}
              <div className="trust-card">
                <div className="trust-card-header">
                  <h3>Workforce Reputation</h3>
                  <span className="percentage-highlight"><AnimatedCount value={talent.workforceReputation} />%</span>
                </div>
                <AnimatedProgressBar value={talent.workforceReputation} />
                <p className="trust-description">Measured based on client ratings, milestone completion rate, punctuality, and mentor recommendations.</p>
              </div>

              {/* Workforce Readiness */}
              <div className="trust-card">
                <div className="trust-card-header">
                  <h3>Workforce Readiness</h3>
                  <span className="stage-badge">{talent.readinessStage}</span>
                </div>
                <p className="trust-description">Calculated based on Sasakazi onboarding assessments, practical technical projects, and soft-skill readiness reviews.</p>
              </div>
            </div>
          </section>

          {/* Capability Intelligence Section */}
          <section className="profile-section card-box">
            <h2>Capability Intelligence</h2>
            <p className="section-intro">Detailed evaluation scores from technical assessments verified by expert mentors.</p>
            
            <div className="capabilities-list">
              {talent.capabilities.map((capability, index) => (
                <div key={index} className="capability-row">
                  <div className="capability-meta">
                    <span className="capability-name">{capability.name}</span>
                    <span className="capability-score"><AnimatedCount value={capability.score} />%</span>
                  </div>
                  <AnimatedProgressBar value={capability.score} />
                </div>
              ))}
            </div>
          </section>

          {/* Verified Skills tags */}
          <section className="profile-section card-box">
            <h2>Technical Skills</h2>
            <div className="skills-container">
              {talent.skills.map((skill, index) => (
                <span key={index} className="skill-tag-large">{skill}</span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .profile-container {
          padding-top: 40px;
          padding-bottom: 80px;
        }
        .back-link-row {
          margin-bottom: 24px;
          text-align: left;
        }
        .back-link {
          font-weight: 600;
          color: var(--color-blue);
        }
        .back-link:hover {
          color: var(--color-blue-dark);
        }
        
        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 40px;
          align-items: start;
        }

        /* Summary card styling */
        .profile-summary-card {
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 40px 32px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: var(--shadow-sm);
        }
        .avatar-large {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: var(--color-blue-light);
          color: var(--color-blue);
          font-size: 2.5rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .profile-header-meta {
          margin-bottom: 20px;
          text-align: center;
        }
        .profile-header-meta h1 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .profile-header-meta .headline {
          color: var(--color-blue);
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        .profile-header-meta .location-info {
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }
        .ratings-summary {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }
        .star-rating {
          font-weight: 700;
          background-color: var(--color-bg-light);
          padding: 4px 10px;
          border-radius: 50px;
        }
        .reviews-text {
          color: var(--color-text-muted);
        }
        .badges-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          margin-bottom: 16px;
        }
        .badges-list :global(.badge) {
          justify-content: center;
          padding: 8px 12px;
        }
        .active-timestamp {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 32px;
        }
        .cta-block {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .btn-save {
          border-color: var(--color-border-gray);
          color: var(--color-text-dark);
        }
        .btn-save:hover {
          background-color: var(--color-bg-light);
        }

        /* Details column */
        .profile-details-column {
          display: flex;
          flex-direction: column;
          gap: 32px;
          text-align: left;
        }
        .card-box {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-md);
          padding: 32px;
          box-shadow: var(--shadow-sm);
        }
        .profile-section h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--color-blue);
          margin-bottom: 20px;
          border-bottom: 2px solid var(--color-bg-light);
          padding-bottom: 10px;
        }
        .bio-text {
          font-size: 1.05rem;
          color: var(--color-text-dark);
          line-height: 1.7;
        }

        /* Trust Indicators Section */
        .trust-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .trust-card {
          background-color: var(--color-bg-light);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-sm);
          padding: 20px;
        }
        .trust-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .trust-card-header h3 {
          font-size: 1rem;
          font-weight: 700;
        }
        .percentage-highlight {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-blue);
        }
        .stage-badge {
          background-color: var(--color-blue-light);
          color: var(--color-blue);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 4px;
        }
        .trust-description {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-top: 12px;
        }

        /* Progress bars */
        .progress-bar-container {
          width: 100%;
          height: 8px;
          background-color: var(--color-border-gray);
          border-radius: 4px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background-color: var(--color-blue);
          border-radius: 4px;
        }
        .animate-bar {
          transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn:active {
          transform: scale(0.96) !important;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-bar {
            transition: none !important;
          }
          .btn:active {
            transform: none !important;
          }
        }

        /* Capabilities List */
        .section-intro {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          margin-bottom: 24px;
        }
        .capability-row {
          margin-bottom: 20px;
        }
        .capability-meta {
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 8px;
        }
        .capability-name {
          color: var(--color-text-dark);
        }
        .capability-score {
          color: var(--color-blue);
        }

        /* Skills large tags */
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-tag-large {
          font-size: 0.9rem;
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          background-color: var(--color-bg-light);
          border: 1px solid var(--color-border-gray);
          color: var(--color-text-dark);
          font-weight: 600;
        }

        .w-full {
          width: 100%;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .profile-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .trust-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
