"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { mockOpportunities } from "@/data/mockTalents";

// Float & Int supporting AnimatedCount component
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

export default function OpportunitiesPage() {
  const [typeFilter, setTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [sortBy, setSortBy] = useState("closingSoon");
  const [search, setSearch] = useState("");
  const [selectedOpp, setSelectedOpp] = useState(mockOpportunities[0] || null);

  // Active filter chips
  const activeFilters = useMemo(() => {
    const filters = [];
    if (typeFilter) filters.push({ type: "type", label: `Type: ${typeFilter}` });
    if (locationFilter) filters.push({ type: "location", label: `Location: ${locationFilter}` });
    return filters;
  }, [typeFilter, locationFilter]);

  const handleRemoveFilter = (type) => {
    if (type === "type") setTypeFilter("");
    if (type === "location") setLocationFilter("");
  };

  const handleClearAll = () => {
    setTypeFilter("");
    setLocationFilter("");
    setSearch("");
  };

  // Instant filter & sort logic
  const filteredOpportunities = useMemo(() => {
    let list = [...mockOpportunities];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (opp) =>
          opp.title.toLowerCase().includes(q) ||
          opp.company.toLowerCase().includes(q) ||
          opp.description.toLowerCase().includes(q) ||
          opp.skills.some((s) => s.toLowerCase().includes(q))
      );
    }

    if (typeFilter) {
      list = list.filter((opp) => opp.type === typeFilter);
    }

    if (locationFilter) {
      if (locationFilter === "Other") {
        list = list.filter((opp) => opp.location !== "Nairobi" && opp.location !== "Remote");
      } else {
        list = list.filter((opp) => opp.location === locationFilter);
      }
    }

    if (sortBy === "closingSoon") {
      list.sort((a, b) => a.deadlineDays - b.deadlineDays);
    } else if (sortBy === "newest") {
      list.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    } else if (sortBy === "az") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [search, typeFilter, locationFilter, sortBy]);

  // SVG Icons per Opportunity Type (Replaces broken noimage placeholders)
  const getTypeIcon = (type) => {
    switch (type) {
      case "Job":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case "Internship":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        );
      case "Gig":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        );
      case "Apprenticeship":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        );
      case "Fellowship":
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
    }
  };

  // Color classes for types
  const getTypeBadgeClass = (type) => {
    switch (type) {
      case "Job": return "type-badge-job";
      case "Internship": return "type-badge-internship";
      case "Gig": return "type-badge-gig";
      case "Apprenticeship": return "type-badge-apprentice";
      case "Fellowship": return "type-badge-fellowship";
      default: return "type-badge-job";
    }
  };

  // Color shift for relative deadline urgency
  const getDeadlineUrgency = (days) => {
    if (days <= 2) {
      return { text: `Closes in ${days} ${days === 1 ? "day" : "days"} (Urgent)`, class: "urgency-red" };
    }
    if (days <= 5) {
      return { text: `Closes in ${days} days`, class: "urgency-amber" };
    }
    return { text: `Closes in ${days} days`, class: "urgency-neutral" };
  };

  return (
    <div className="container opportunities-container">
      {/* Header section with live count directly under */}
      <div className="directory-header">
        <span className="badge badge-yellow">Platform Opportunities</span>
        <h1>Discover Digital Opportunities</h1>
        <p>Explore internships, jobs, gigs, apprenticeships, fellowships, and workforce opportunities from businesses across Kenya.</p>
        
        <div className="live-count-pill">
          <span className="pulse-dot"></span>
          <strong><AnimatedCount value={filteredOpportunities.length} /> open opportunities</strong> available right now
        </div>
      </div>

      {/* Instant Filter Bar */}
      <section className="filter-bar glass">
        <div className="filters-grid">
          {/* Search Control */}
          <div className="filter-control search-control">
            <label htmlFor="search">Search</label>
            <div className="search-input-wrapper">
              <input
                id="search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title, organization, or skill..."
                className="input-field"
              />
              {search && (
                <button className="clear-search-btn" onClick={() => setSearch("")} aria-label="Clear search">
                  &times;
                </button>
              )}
            </div>
          </div>

          {/* Type Filter */}
          <div className="filter-control">
            <label htmlFor="typeFilter">Opportunity Type</label>
            <select
              id="typeFilter"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="input-field select-field"
            >
              <option value="">All Types</option>
              <option value="Job">Job</option>
              <option value="Internship">Internship</option>
              <option value="Gig">Gig</option>
              <option value="Apprenticeship">Apprenticeship</option>
              <option value="Fellowship">Fellowship</option>
            </select>
          </div>

          {/* Location Filter */}
          <div className="filter-control">
            <label htmlFor="locationFilter">Location</label>
            <select
              id="locationFilter"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="input-field select-field"
            >
              <option value="">All Locations</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Remote">Remote</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Sort Control */}
          <div className="filter-control">
            <label htmlFor="sortBy">Sort By</label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field select-field"
            >
              <option value="closingSoon">Closing Soon</option>
              <option value="newest">Newest First</option>
              <option value="az">A – Z</option>
            </select>
          </div>
        </div>

        {/* Active Chips Row */}
        {(activeFilters.length > 0 || search) && (
          <div className="filter-chips-row">
            <span className="chips-label">Active filters:</span>
            <div className="chips-list">
              {search && (
                <span className="filter-chip">
                  Search: "{search}"
                  <button onClick={() => setSearch("")} className="chip-remove">&times;</button>
                </span>
              )}
              {activeFilters.map((filter) => (
                <span key={filter.type} className="filter-chip">
                  {filter.label}
                  <button onClick={() => handleRemoveFilter(filter.type)} className="chip-remove">&times;</button>
                </span>
              ))}
              <button onClick={handleClearAll} className="clear-all-link">
                Clear all
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Main Grid: Master List + Detail View */}
      {filteredOpportunities.length > 0 ? (
        <div key={`${typeFilter}-${locationFilter}-${sortBy}-${search}`} className="opp-master-grid">
          {/* Left Listings Column */}
          <div className="opp-cards-column">
            {filteredOpportunities.map((opp) => {
              const urgency = getDeadlineUrgency(opp.deadlineDays);
              const badgeClass = getTypeBadgeClass(opp.type);
              const isSelected = selectedOpp?.id === opp.id;

              return (
                <div 
                  key={opp.id} 
                  className={`opportunity-card ${isSelected ? "selected-card" : ""}`}
                  onClick={() => setSelectedOpp(opp)}
                >
                  <div className="card-top-header">
                    {/* Visual Category Icon (Replaces missing broken noimage!) */}
                    <div className={`visual-icon-box ${badgeClass}`}>
                      {getTypeIcon(opp.type)}
                    </div>
                    <span className={`type-badge-pill ${badgeClass}`}>{opp.type}</span>
                  </div>

                  <h3 className="card-title">{opp.title}</h3>
                  <p className="card-desc-clamped">{opp.description}</p>
                  
                  {/* Merged Org + Location */}
                  <p className="org-location-line">
                    <strong>{opp.company}</strong> · 📍 {opp.location}
                  </p>

                  <div className="card-footer-meta">
                    {/* Visual weight deadline urgency */}
                    <span className={`deadline-tag ${urgency.class}`}>
                      ⏱ {urgency.text}
                    </span>

                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedOpp(opp);
                      }}
                    >
                      View Opportunity &rarr;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Opportunity Detail View Panel */}
          {selectedOpp && (
            <div className="opp-detail-sticky-column">
              <div className="opp-detail-card glass">
                <div className="opp-detail-top">
                  <span className={`type-badge-pill ${getTypeBadgeClass(selectedOpp.type)}`}>
                    {selectedOpp.type}
                  </span>
                  <h2>{selectedOpp.title}</h2>
                  <p className="company-org-sub">
                    Posted by <strong>{selectedOpp.company}</strong> · 📍 {selectedOpp.location}
                  </p>
                </div>

                <div className="highlights-row">
                  <div className="hl-item">
                    <span className="hl-label">Pay / Stipend</span>
                    <span className="hl-val">{selectedOpp.pay}</span>
                  </div>
                  <div className="hl-item">
                    <span className="hl-label">Duration</span>
                    <span className="hl-val">{selectedOpp.duration}</span>
                  </div>
                  <div className="hl-item">
                    <span className="hl-label">Deadline</span>
                    <span className={`hl-val ${getDeadlineUrgency(selectedOpp.deadlineDays).class}`}>
                      {getDeadlineUrgency(selectedOpp.deadlineDays).text}
                    </span>
                  </div>
                </div>

                <div className="detail-section-block">
                  <h3>Opportunity Overview</h3>
                  <p className="desc-text">{selectedOpp.description}</p>
                </div>

                <div className="detail-section-block">
                  <h3>Required Skills &amp; Stack</h3>
                  <div className="skills-tags">
                    {selectedOpp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-chip">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="detail-section-block guardrails-box">
                  <h3>Sasakazi Mentorship Guardrails</h3>
                  <p>
                    All Sasakazi projects and placements are supervised by a Senior Architect. Code reviews, milestone signoffs, and platform escrow protect both the business and talent.
                  </p>
                </div>

                {/* Apply Actions Block */}
                <div className="apply-actions-box">
                  <h4>Ready to Apply?</h4>
                  <p>Submit your verified Sasakazi talent profile for matching.</p>
                  <div className="apply-btns-row">
                    <Link href="/register" className="btn btn-primary btn-full">
                      Create Account &amp; Apply
                    </Link>
                    <Link href="/login" className="btn btn-outline btn-full">
                      Login &amp; Apply
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Empty / Low count state */
        <div className="no-results-box glass">
          <div className="empty-icon-circle">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <h3>No Matching Opportunities Found</h3>
          <p>New opportunities are added regularly — check back soon or clear your filters to explore all active listings.</p>
          <button onClick={handleClearAll} className="btn btn-primary">
            Clear All Filters
          </button>
        </div>
      )}

      <style jsx>{`
        .opportunities-container {
          padding-top: 48px;
          padding-bottom: 80px;
          text-align: left;
        }

        .directory-header {
          margin-bottom: 32px;
        }
        .directory-header h1 {
          font-size: 2.6rem;
          font-weight: 800;
          color: var(--color-blue);
          margin-top: 12px;
          margin-bottom: 8px;
          font-family: var(--font-serif);
        }
        .directory-header p {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          max-width: 680px;
          margin-bottom: 16px;
        }

        /* Live count badge directly under header */
        .live-count-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: var(--color-blue-light);
          color: var(--color-blue-dark);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          border: 1px solid rgba(26, 91, 140, 0.12);
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #10b981;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
          animation: pulseGreen 2s infinite;
        }
        @keyframes pulseGreen {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        /* Filter bar styles */
        .filter-bar {
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 36px;
          box-shadow: var(--shadow-sm);
        }
        .filters-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 16px;
          align-items: flex-end;
        }
        @media (max-width: 900px) {
          .filters-grid {
            grid-template-columns: 1fr 1fr;
          }
          .search-control {
            grid-column: span 2;
          }
        }
        @media (max-width: 600px) {
          .filters-grid {
            grid-template-columns: 1fr;
          }
          .search-control {
            grid-column: span 1;
          }
        }

        .filter-control {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .filter-control label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .search-input-wrapper {
          position: relative;
          width: 100%;
        }
        .clear-search-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.25rem;
          color: var(--color-text-muted);
          cursor: pointer;
        }
        .select-field {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%231a5b8c' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
          background-position: right 12px center;
          background-repeat: no-repeat;
          background-size: 1.25rem;
          padding-right: 36px;
        }

        /* Active filter chips */
        .filter-chips-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid var(--color-border-gray);
          flex-wrap: wrap;
        }
        .chips-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }
        .chips-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }
        .filter-chip {
          background-color: var(--color-blue-light);
          color: var(--color-blue);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 6px;
          border: 1px solid rgba(26, 91, 140, 0.1);
        }
        .chip-remove {
          background: none;
          border: none;
          color: var(--color-blue);
          font-weight: 800;
          cursor: pointer;
          font-size: 0.95rem;
          line-height: 1;
        }
        .clear-all-link {
          background: none;
          border: none;
          color: var(--color-yellow-dark);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          text-decoration: underline;
        }

        /* Master-Detail Layout Grid */
        .opp-master-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 32px;
          align-items: flex-start;
        }
        @media (max-width: 960px) {
          .opp-master-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Left Column Cards */
        .opp-cards-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .opportunity-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-md);
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .opportunity-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-blue);
          box-shadow: 0 10px 24px rgba(26, 91, 140, 0.08);
        }
        .opportunity-card.selected-card {
          border-color: var(--color-blue);
          background-color: #f8fafc;
          box-shadow: 0 12px 28px rgba(26, 91, 140, 0.12);
        }

        .card-top-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        /* Color-coded Icon Box per Type (replaces missing broken noimage!) */
        .visual-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .type-badge-pill {
          font-size: 0.72rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Color coding per type */
        .type-badge-job, .visual-icon-box.type-badge-job {
          background-color: rgba(26, 91, 140, 0.1);
          color: var(--color-blue);
        }
        .type-badge-internship, .visual-icon-box.type-badge-internship {
          background-color: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        .type-badge-gig, .visual-icon-box.type-badge-gig {
          background-color: rgba(249, 115, 22, 0.1);
          color: #f97316;
        }
        .type-badge-apprentice, .visual-icon-box.type-badge-apprentice {
          background-color: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
        }
        .type-badge-fellowship, .visual-icon-box.type-badge-fellowship {
          background-color: rgba(251, 182, 63, 0.18);
          color: var(--color-yellow-dark);
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-text-dark);
          margin-bottom: 8px;
          line-height: 1.35;
        }
        
        .card-desc-clamped {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 2.7rem;
        }

        .org-location-line {
          font-size: 0.88rem;
          color: var(--color-text-dark);
          margin-bottom: 20px;
        }
        .org-location-line strong {
          color: var(--color-blue-dark);
        }

        .card-footer-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid var(--color-border-gray);
          margin-top: auto;
        }

        /* Deadline relative urgency styles */
        .deadline-tag {
          font-size: 0.82rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .urgency-neutral {
          color: var(--color-text-muted);
        }
        .urgency-amber {
          color: var(--color-yellow-dark);
        }
        .urgency-red {
          color: #ef4444;
        }

        /* Right Sticky Detail Column */
        .opp-detail-sticky-column {
          position: sticky;
          top: 100px;
        }
        .opp-detail-card {
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 36px;
          box-shadow: var(--shadow-md);
        }
        .opp-detail-top {
          margin-bottom: 24px;
        }
        .opp-detail-top h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-top: 12px;
          margin-bottom: 6px;
          line-height: 1.25;
        }
        .company-org-sub {
          font-size: 0.95rem;
          color: var(--color-text-muted);
        }

        .highlights-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding: 16px 0;
          border-top: 1px solid var(--color-border-gray);
          border-bottom: 1px solid var(--color-border-gray);
          margin-bottom: 24px;
        }
        .hl-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .hl-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
        }
        .hl-val {
          font-size: 0.98rem;
          font-weight: 800;
          color: var(--color-blue);
        }

        .detail-section-block {
          margin-bottom: 24px;
        }
        .detail-section-block h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-blue);
          margin-bottom: 8px;
        }
        .desc-text {
          font-size: 0.95rem;
          color: var(--color-text-dark);
          line-height: 1.6;
        }
        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .skill-chip {
          font-size: 0.8rem;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          background-color: var(--color-bg-light);
          border: 1px solid var(--color-border-gray);
          font-weight: 600;
        }

        .guardrails-box {
          background-color: var(--color-blue-light);
          padding: 16px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(26, 91, 140, 0.1);
        }
        .guardrails-box h3 {
          color: var(--color-blue-dark);
          margin-bottom: 4px;
        }
        .guardrails-box p {
          font-size: 0.85rem;
          color: var(--color-text-dark);
          line-height: 1.5;
          margin: 0;
        }

        .apply-actions-box {
          border-top: 1px solid var(--color-border-gray);
          padding-top: 24px;
          margin-top: 24px;
          text-align: center;
        }
        .apply-actions-box h4 {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 4px;
        }
        .apply-actions-box p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          margin-bottom: 16px;
        }
        .apply-btns-row {
          display: flex;
          gap: 12px;
        }
        .btn-full {
          flex: 1;
        }

        /* Empty State Styling */
        .no-results-box {
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 64px 32px;
          text-align: center;
          margin-top: 24px;
        }
        .empty-icon-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background-color: var(--color-blue-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px auto;
        }
        .no-results-box h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 8px;
        }
        .no-results-box p {
          max-width: 480px;
          margin: 0 auto 24px auto;
          color: var(--color-text-muted);
        }

        @media (prefers-reduced-motion: reduce) {
          .opportunity-card:hover {
            transform: none !important;
          }
          .pulse-dot {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
