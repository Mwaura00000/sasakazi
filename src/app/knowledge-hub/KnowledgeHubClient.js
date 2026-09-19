"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function KnowledgeHubClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    {
      id: "transformation",
      name: "Business Digital Transformation",
      desc: "Project scoping, outsourcing decisions, SME digitisation, remote-team management, digital-investment measurement and data protection."
    },
    {
      id: "careers",
      name: "Careers and Employability",
      desc: "Portfolio development, technical-assessment preparation, professional communication, client management, mentorship and intellectual property."
    },
    {
      id: "bpo",
      name: "BPO and the Future of Work",
      desc: "African BPO opportunities, global delivery standards, ethical digital work, international client readiness and data and AI-enabled services."
    },
    {
      id: "mentorship",
      name: "Mentorship Resources",
      desc: "Effective mentoring conversations, constructive feedback, professional boundaries, junior-talent support and safeguarding."
    },
    {
      id: "stories",
      name: "Success Stories",
      desc: "Evidence-based stories explaining the client challenge, SasaKazi solution, work delivered, business result and talent outcome."
    },
    {
      id: "reports",
      name: "Reports and Publications",
      desc: "Approved research, programme reports, learning briefs and downloadable tools produced by SasaKazi and its partners."
    }
  ];

  const articles = [
    {
      id: 1,
      title: "How African SMEs Can De-Risk First-Time Digital Outsourcing",
      category: "Business Digital Transformation",
      summary: "A practical framework for scoping software projects, establishing milestone deliverables, and ensuring data privacy.",
      author: "SasaKazi Advisory Team",
      date: "May 2024",
      readTime: "6 min read",
      theme: "SME Digitisation",
      format: "Guide"
    },
    {
      id: 2,
      title: "Building an Impactful Engineering Portfolio for Global Roles",
      category: "Careers and Employability",
      summary: "How young developers can showcase production case studies, system architecture diagrams, and verified client outcomes.",
      author: "Technical Talent Lead",
      date: "April 2024",
      readTime: "8 min read",
      theme: "Career Readiness",
      format: "Toolkit"
    },
    {
      id: 3,
      title: "The Rise of African ITES & AI-Driven BPO Operations",
      category: "BPO and the Future of Work",
      summary: "Exploring the shifting paradigm in global tech outsourcing towards high-value African delivery centres.",
      author: "Market Research Unit",
      date: "March 2024",
      readTime: "10 min read",
      theme: "Global Outsourcing",
      format: "Research Paper"
    },
    {
      id: 4,
      title: "Mentoring for High-Accountability Remote Engineering Squads",
      category: "Mentorship Resources",
      summary: "Core protocols for code reviews, empathetic feedback loops, and professional boundary management.",
      author: "Mentor Guild Secretariat",
      date: "February 2024",
      readTime: "5 min read",
      theme: "Mentorship",
      format: "Handbook"
    },
    {
      id: 5,
      title: "Case Study: Modernising Agricultural Supply Chains in Western Kenya",
      category: "Success Stories",
      summary: "How an agribusiness scaled digital inventory workflows with a 3-person SasaKazi delivery pod.",
      author: "Client Solutions Pod",
      date: "January 2024",
      readTime: "7 min read",
      theme: "Fintech & AgriTech",
      format: "Case Study"
    },
    {
      id: 6,
      title: "Digital Apprenticeship Learning Brief: Measuring 3-Year Absorption",
      category: "Reports and Publications",
      summary: "An evaluative report highlighting the longitudinal employment outcomes of digital apprenticeships across Kenya.",
      author: "EldoHub / SasaKazi Research",
      date: "December 2023",
      readTime: "15 min read",
      theme: "Ecosystem Data",
      format: "PDF Report"
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const filteredArticles = articles.filter((art) => {
    const matchesCat = selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="knowledge-hub-page">
      {/* 1. PAGE BANNER */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content">
            <span className="badge-pill">Knowledge &amp; Insights</span>
            <h1>Knowledge for Africa’s Digital Future</h1>
            <p className="banner-lead">
              Explore insights, research, practical tools and stories for businesses, professionals, mentors and partners building the future of digital work.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES OVERVIEW */}
      <section className="categories-overview-section">
        <div className="container">
          <div className="section-header-center">
            <span className="sub-heading-badge">Content Pillars</span>
            <h2>Core Knowledge Categories</h2>
            <p>Practical intelligence tailored to digital growth, talent development, and BPO operations.</p>
          </div>

          <div className="categories-cards-grid">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                className={`cat-summary-card ${selectedCategory === cat.name ? "active-cat" : ""}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
                <span className="filter-tag-hint">
                  {selectedCategory === cat.name ? "Currently Filtered ✓" : "Click to Filter →"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEARCH & RESOURCE FEED */}
      <section className="resources-feed-section">
        <div className="container">
          {/* Filter and Search Bar */}
          <div className="search-filter-bar glass-panel">
            <div className="search-input-group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search resources, topics, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="clear-search-btn" onClick={() => setSearchQuery("")}>&times;</button>
              )}
            </div>

            <div className="category-select-group">
              <label>Filter Theme:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Feed Grid */}
          <div className="articles-grid">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((art) => (
                <article key={art.id} className="article-card">
                  <div className="article-top-meta">
                    <span className="art-format">{art.format}</span>
                    <span className="art-time">{art.readTime}</span>
                  </div>
                  <h3>{art.title}</h3>
                  <p className="art-summary">{art.summary}</p>
                  
                  <div className="art-footer-meta">
                    <div className="author-meta">
                      <span className="author-name">{art.author}</span>
                      <span className="pub-date">{art.date}</span>
                    </div>
                    <span className="theme-tag">{art.theme}</span>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-results-box glass-panel">
                <p>No resources found matching your search criteria.</p>
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER CALL TO ACTION */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-banner">
            <div className="newsletter-content">
              <span className="sub-heading-badge" style={{ color: "#fbb63f" }}>Ecosystem Updates</span>
              <h2>Stay Connected to Africa’s Digital Talent Ecosystem</h2>
              <p>
                Receive vetted opportunities, learning briefs, success stories and strategic insights from SasaKazi straight to your inbox.
              </p>

              {subscribed ? (
                <div className="sub-success-box">
                  <span className="check-icon">✓</span>
                  <strong>Thank you for subscribing!</strong> You are now connected to SasaKazi updates.
                </div>
              ) : (
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary btn-lg">
                    Subscribe for Updates
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .knowledge-hub-page {
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

        /* Categories Section */
        .categories-overview-section {
          padding: 4rem 0;
        }
        .section-header-center {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3rem;
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
        .categories-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 600px) {
          .categories-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .categories-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .cat-summary-card {
          background: #fff;
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-md);
          padding: 2rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }
        .cat-summary-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-blue);
          box-shadow: 0 10px 25px rgba(26, 91, 140, 0.08);
        }
        .cat-summary-card.active-cat {
          border-color: var(--color-blue);
          background: var(--color-blue-light);
        }
        .cat-summary-card h3 {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 0.75rem;
        }
        .cat-summary-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .filter-tag-hint {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-blue);
        }

        /* Resources Feed */
        .resources-feed-section {
          padding: 4rem 0 6rem;
          background-color: var(--color-bg-light);
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 1.5rem 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }
        .search-filter-bar {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 3rem;
        }
        @media (min-width: 768px) {
          .search-filter-bar {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
        .search-input-group {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--color-bg-light);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border-gray);
          flex-grow: 1;
          max-width: 500px;
        }
        .search-input-group input {
          border: none;
          background: transparent;
          width: 100%;
          outline: none;
          font-size: 0.95rem;
          color: var(--color-text-dark);
        }
        .clear-search-btn {
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          color: var(--color-text-muted);
        }
        .category-select-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .category-select-group label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-muted);
          white-space: nowrap;
        }
        .category-select-group select {
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-gray);
          background: #fff;
          font-size: 0.9rem;
          color: var(--color-text-dark);
          outline: none;
          cursor: pointer;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .articles-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .article-card {
          background: #fff;
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease;
        }
        .article-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-blue);
          box-shadow: 0 12px 25px rgba(26, 91, 140, 0.08);
        }
        .article-top-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .art-format {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          background: var(--color-blue-light);
          color: var(--color-blue);
          padding: 3px 8px;
          border-radius: 4px;
        }
        .art-time {
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        .article-card h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 0.75rem;
          line-height: 1.35;
        }
        .art-summary {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .art-footer-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-gray);
        }
        .author-meta {
          display: flex;
          flex-direction: column;
        }
        .author-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-text-dark);
        }
        .pub-date {
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        .theme-tag {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-yellow-dark);
          background: var(--color-yellow-light);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .no-results-box {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
        }

        /* Newsletter Section */
        .newsletter-section {
          padding: 0 0 5rem 0;
        }
        .newsletter-banner {
          background: linear-gradient(135deg, var(--color-blue-dark) 0%, var(--color-blue) 100%);
          border-radius: var(--radius-lg);
          padding: 4rem 2rem;
          text-align: center;
          color: #fff;
          box-shadow: 0 20px 40px rgba(26, 91, 140, 0.2);
        }
        .newsletter-content {
          max-width: 680px;
          margin: 0 auto;
        }
        .newsletter-banner h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 1rem;
        }
        .newsletter-banner p {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 2.25rem;
        }
        .newsletter-form {
          display: flex;
          gap: 1rem;
          flex-direction: column;
        }
        @media (min-width: 576px) {
          .newsletter-form {
            flex-direction: row;
          }
        }
        .newsletter-form input {
          flex-grow: 1;
          padding: 1rem 1.5rem;
          border-radius: var(--radius-md);
          border: none;
          font-size: 1rem;
          outline: none;
        }
        .sub-success-box {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 1.25rem 2rem;
          border-radius: var(--radius-md);
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 1rem;
        }
        .check-icon {
          background: #27c93f;
          color: #fff;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }

        @media (max-width: 768px) {
          .newsletter-banner h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
