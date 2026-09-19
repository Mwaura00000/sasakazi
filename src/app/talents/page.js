"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { mockTalents } from "@/data/mockTalents";

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

export default function TalentsPage() {
  const [search, setSearch] = useState("");
  const [experience, setExperience] = useState("");
  const [availability, setAvailability] = useState("");
  const [workStatus, setWorkStatus] = useState("");
  const [sortBy, setSortBy] = useState("relevant");

  // Get active filter count and chips
  const activeFilters = useMemo(() => {
    const filters = [];
    if (experience) filters.push({ type: "experience", label: experience, value: experience });
    if (availability) filters.push({ type: "availability", label: availability, value: availability });
    if (workStatus) filters.push({ type: "workStatus", label: workStatus, value: workStatus });
    return filters;
  }, [experience, availability, workStatus]);

  const handleRemoveFilter = (type) => {
    if (type === "experience") setExperience("");
    if (type === "availability") setAvailability("");
    if (type === "workStatus") setWorkStatus("");
  };

  const handleClearAll = () => {
    setExperience("");
    setAvailability("");
    setWorkStatus("");
    setSearch("");
  };

  // Instant filter & sort logic
  const filteredAndSortedTalents = useMemo(() => {
    let result = [...mockTalents];

    // Search filter
    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(
        (talent) =>
          talent.name.toLowerCase().includes(query) ||
          talent.headline.toLowerCase().includes(query) ||
          talent.location.toLowerCase().includes(query) ||
          talent.skills.some((skill) => skill.toLowerCase().includes(query))
      );
    }

    // Dropdown filters
    if (experience) {
      result = result.filter((talent) => talent.experience === experience);
    }
    if (availability) {
      result = result.filter((talent) => talent.availability === availability);
    }
    if (workStatus) {
      result = result.filter((talent) => talent.workStatus === workStatus);
    }

    // Sort logic
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "newest") {
      result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    } else {
      // "relevant" - sorts by reputation score
      result.sort((a, b) => b.workforceReputation - a.workforceReputation);
    }

    return result;
  }, [search, experience, availability, workStatus, sortBy]);

  return (
    <div className="container talents-directory-container">
      <div className="directory-header">
        <h1>Vetted Digital Talent</h1>
        <p>Showing quality public profiles with workforce trust, readiness, and verified skill levels.</p>
      </div>

      {/* Filter and Sort Bar */}
      <section className="filter-bar glass">
        <div className="filters-grid">
          {/* Search Input */}
          <div className="filter-control search-control">
            <label htmlFor="search">Search</label>
            <div className="search-input-wrapper">
              <input
                id="search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, headline, skill, or location..."
                className="input-field"
              />
              {search && (
                <button className="clear-search-btn" onClick={() => setSearch("")} aria-label="Clear Search">
                  &times;
                </button>
              )}
            </div>
          </div>

          {/* Experience Select */}
          <div className="filter-control">
            <label htmlFor="experience">Experience</label>
            <select
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="input-field select-field"
            >
              <option value="">All Levels</option>
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          {/* Availability Select */}
          <div className="filter-control">
            <label htmlFor="availability">Availability</label>
            <select
              id="availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="input-field select-field"
            >
              <option value="">All Types</option>
              <option value="Available">Available</option>
              <option value="Busy">Busy</option>
            </select>
          </div>

          {/* Work Status Select */}
          <div className="filter-control">
            <label htmlFor="workStatus">Work Status</label>
            <select
              id="workStatus"
              value={workStatus}
              onChange={(e) => setWorkStatus(e.target.value)}
              className="input-field select-field"
            >
              <option value="">All Statuses</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* Sort By Dropdown */}
          <div className="filter-control sort-control">
            <label htmlFor="sortBy">Sort By</label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field select-field"
            >
              <option value="relevant">Most Relevant</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Filter Chips and Clear Actions */}
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

      {/* Talents Results Count */}
      <div className="results-count-row">
        <span>Showing <strong>{filteredAndSortedTalents.length}</strong> matching profiles</span>
      </div>

      {/* Redesigned Card Layout Grid */}
      {filteredAndSortedTalents.length > 0 ? (
        <div key={`${experience}-${availability}-${workStatus}-${sortBy}-${search.length}`} className="talents-directory-grid">
          {filteredAndSortedTalents.map((talent) => (
            <div key={talent.id} className="talent-card-redesign">
              {/* Header: Star Rating (Dominant Trust Signal) */}
              <div className="card-header-row">
                <div className="avatar-placeholder">
                  {talent.name.charAt(0)}
                </div>
                <div className="rating-box">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#fbb63f" stroke="#fbb63f" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="rating-num"><AnimatedCount value={talent.rating} /></span>
                  <span className="review-count">(<AnimatedCount value={talent.reviewCount} />)</span>
                </div>
              </div>

              {/* Profile Meta */}
              <div className="talent-meta">
                <h3>{talent.name}</h3>
                <p className="headline">{talent.headline}</p>
                <p className="location-work">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "-1px", marginRight: "5px" }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {talent.location} · {talent.workStatus} · {talent.experience} Level
                </p>
              </div>

              {/* Badges: Max 3 (Verified + Available + Reputation) */}
              <div className="badge-row">
                {talent.verified && (
                  <span className="badge badge-verified">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "-1px", marginRight: "3px" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Verified
                  </span>
                )}
                <span className={`badge ${talent.availability === "Available" ? "badge-available" : "badge-busy"}`}>
                  ● {talent.availability}
                </span>
                <span className="badge badge-reputation">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "-1px", marginRight: "4px" }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <AnimatedCount value={talent.workforceReputation} />% Trust
                </span>
              </div>

              {/* Skills tags preview */}
              <div className="skills-row">
                {talent.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>

              {/* Action Button */}
              <Link href={`/talents/${talent.id}`} className="btn btn-primary btn-sm btn-full">
                View Profile &rarr;
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results glass">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--color-blue)" }}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <h3>No Talents Found</h3>
          <p>We couldn't find any digital professionals matching your filter criteria. Try expanding your search query or resetting filters.</p>
          <button onClick={handleClearAll} className="btn btn-primary btn-sm">
            Reset Filters
          </button>
        </div>
      )}

      <style jsx>{`
        .talents-directory-container {
          padding-top: 48px;
          padding-bottom: 80px;
        }
        .directory-header {
          margin-bottom: 40px;
          text-align: left;
        }
        .directory-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-blue);
          margin-bottom: 8px;
        }
        .directory-header p {
          color: var(--color-text-muted);
          font-size: 1.1rem;
        }

        /* Filter bar styles */
        .filter-bar {
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 32px;
          box-shadow: var(--shadow-sm);
        }
        .filters-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 16px;
          align-items: flex-end;
        }
        .filter-control {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }
        .filter-control label {
          font-size: 0.85rem;
          font-weight: 600;
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

        /* Chips row styles */
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

        .results-count-row {
          margin-bottom: 24px;
          font-size: 0.95rem;
          color: var(--color-text-muted);
          text-align: left;
        }

        /* Talent Card Redesign */
        .talents-directory-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        
         @keyframes cardFadeIn {
           from {
             opacity: 0;
             transform: translateY(16px) scale(0.98);
           }
           to {
             opacity: 1;
             transform: translateY(0) scale(1);
           }
         }
         .talent-card-redesign {
           background-color: var(--color-white);
           border: 1px solid var(--color-border-gray);
           border-radius: var(--radius-md);
           padding: 24px;
           display: flex;
           flex-direction: column;
           box-shadow: var(--shadow-sm);
           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
           opacity: 0;
           animation: cardFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
         }
         .talent-card-redesign:nth-child(1) { animation-delay: 0.03s; }
         .talent-card-redesign:nth-child(2) { animation-delay: 0.06s; }
         .talent-card-redesign:nth-child(3) { animation-delay: 0.09s; }
         .talent-card-redesign:nth-child(4) { animation-delay: 0.12s; }
         .talent-card-redesign:nth-child(5) { animation-delay: 0.15s; }
         .talent-card-redesign:nth-child(6) { animation-delay: 0.18s; }
         .talent-card-redesign:nth-child(7) { animation-delay: 0.21s; }
         .talent-card-redesign:nth-child(8) { animation-delay: 0.24s; }
         .talent-card-redesign:nth-child(n+9) { animation-delay: 0.27s; }

         .talent-card-redesign:hover {
           transform: translateY(-6px);
           box-shadow: 0 12px 24px rgba(26, 91, 140, 0.08);
           border-color: var(--color-blue);
         }
         .btn:active {
           transform: scale(0.96) !important;
         }
         @media (prefers-reduced-motion: reduce) {
           .talent-card-redesign {
             opacity: 1 !important;
             transform: none !important;
             animation: none !important;
           }
           .talent-card-redesign:hover {
             transform: none !important;
           }
           .btn:active {
             transform: none !important;
           }
         }
        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .avatar-placeholder {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--color-blue-light);
          color: var(--color-blue);
          font-size: 1.25rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rating-box {
          display: flex;
          align-items: center;
          gap: 4px;
          background-color: var(--color-bg-light);
          padding: 6px 12px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .review-count {
          color: var(--color-text-muted);
          font-size: 0.8rem;
          font-weight: 400;
        }
        .talent-meta {
          margin-bottom: 16px;
          text-align: left;
        }
        .talent-meta h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .talent-meta .headline {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .talent-meta .location-work {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }
        .badge-row {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .badge-reputation {
          background-color: var(--color-blue-light);
          color: var(--color-blue);
          border: 1px solid rgba(26, 91, 140, 0.12);
        }
        .skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
          flex-grow: 1;
        }
        .skill-tag {
          font-size: 0.75rem;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          background-color: var(--color-bg-light);
          border: 1px solid var(--color-border-gray);
          color: var(--color-text-dark);
          font-weight: 500;
        }
        .btn-full {
          width: 100%;
        }

        /* Empty state styles */
        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 64px 32px;
          text-align: center;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-gray);
          color: var(--color-text-muted);
        }
        .no-results svg {
          margin-bottom: 16px;
        }
        .no-results h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-blue);
          margin-bottom: 8px;
        }
        .no-results p {
          max-width: 480px;
          margin-bottom: 24px;
          font-size: 0.95rem;
        }

        /* Responsive styling */
        @media (max-width: 1024px) {
          .talents-directory-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .filters-grid {
            grid-template-columns: 2fr 1fr 1fr;
          }
        }
        @media (max-width: 768px) {
          .filters-grid {
            grid-template-columns: 1fr 1fr;
          }
          .search-control {
            grid-column: span 2;
          }
        }
        @media (max-width: 600px) {
          .talents-directory-grid {
            grid-template-columns: 1fr;
          }
          .filters-grid {
            grid-template-columns: 1fr;
          }
          .search-control {
            grid-column: span 1;
          }
          .directory-header h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
