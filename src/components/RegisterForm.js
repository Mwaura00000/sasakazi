"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function RegisterForm({ defaultRole = "talent" }) {
  const searchParams = useSearchParams();
  const queryRole = searchParams.get("role") || searchParams.get("type");

  const [role, setRole] = useState(
    queryRole === "business" || defaultRole === "business" ? "business" : "talent"
  );

  useEffect(() => {
    if (queryRole === "business") {
      setRole("business");
    } else if (queryRole === "talent") {
      setRole("talent");
    }
  }, [queryRole]);

  // Talent form state
  const [talentData, setTalentData] = useState({
    name: "",
    email: "",
    phone: "",
    track: "Stock & Inventory Operations",
    experience: "Intermediate (1–3 years)",
    location: "Eldoret Node / Innovation Campus",
    portfolio: "",
    password: "",
    agreeTerms: true
  });

  // Business form state
  const [businessData, setBusinessData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    projectNeed: "Stock & Inventory Visibility",
    teamSize: "Growing Business (11–50 employees)",
    location: "Eldoret & North Rift",
    password: "",
    agreeTerms: true
  });

  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refId, setRefId] = useState("");
  const [errors, setErrors] = useState({});

  const handleTalentChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTalentData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleBusinessChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBusinessData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validateTalent = () => {
    const errs = {};
    if (!talentData.name || talentData.name.trim().length < 2) {
      errs.name = "Please enter your full name (at least 2 characters)";
    }
    if (!talentData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(talentData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    const cleanPhone = talentData.phone.replace(/[\s\-]/g, "");
    if (!cleanPhone || cleanPhone.length < 9) {
      errs.phone = "Please enter a valid phone number (e.g. +254 712 345 678)";
    }
    if (!talentData.password || talentData.password.length < 8) {
      errs.password = "Password must be at least 8 characters long";
    }
    if (!talentData.agreeTerms) {
      errs.agreeTerms = "You must accept the terms & safeguarding policies";
    }
    return errs;
  };

  const validateBusiness = () => {
    const errs = {};
    if (!businessData.companyName || businessData.companyName.trim().length < 2) {
      errs.companyName = "Please enter your company or business name";
    }
    if (!businessData.contactPerson || businessData.contactPerson.trim().length < 2) {
      errs.contactPerson = "Please enter the contact person's name";
    }
    if (!businessData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessData.email.trim())) {
      errs.email = "Please enter a valid business email address";
    }
    const cleanPhone = businessData.phone.replace(/[\s\-]/g, "");
    if (!cleanPhone || cleanPhone.length < 9) {
      errs.phone = "Please enter a valid phone number (e.g. +254 712 345 678)";
    }
    if (!businessData.password || businessData.password.length < 8) {
      errs.password = "Password must be at least 8 characters long";
    }
    if (!businessData.agreeTerms) {
      errs.agreeTerms = "You must accept the terms & safeguarding policies";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = role === "talent" ? validateTalent() : validateBusiness();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    const newRef = (role === "talent" ? "SK-T-" : "SK-B-") + Math.floor(1000 + Math.random() * 9000);
    setRefId(newRef);

    try {
      if (typeof window !== "undefined") {
        const key = role === "talent" ? "sasakazi_talent_registrations" : "sasakazi_business_registrations";
        const existing = JSON.parse(localStorage.getItem(key) || "[]");
        existing.unshift({
          refId: newRef,
          role,
          data: role === "talent" ? talentData : businessData,
          registeredAt: new Date().toISOString()
        });
        localStorage.setItem(key, JSON.stringify(existing.slice(0, 50)));
      }
    } catch (err) {}

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        {/* Left Column: Brand & Trust Showcase */}
        <div className="register-showcase">
          <div className="showcase-content">
            {/* Top Pill */}
            <div className="hub-badge-pill">
              <span className="live-dot"></span>
              <span>Powered by <strong>EldoHub</strong> • Eldoret &amp; Nairobi</span>
            </div>

            {role === "talent" ? (
              <>
                <h1 className="showcase-title">
                  Turn Your Skills Into <span className="highlight-text">Supervised Commercial Contracts</span>
                </h1>
                <p className="showcase-desc">
                  Join Kenya&apos;s vetted digital talent network. Work on real business projects across inventory, payments reconciliation, and customer operations with senior EldoHub mentorship and guaranteed milestone pay.
                </p>

                <div className="benefit-items">
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <div>
                      <strong>Guaranteed Milestone Pay</strong>
                      <p>Structured commercial rates paid via M-Pesa or bank upon accepted deliverables. Zero unpaid pitch work.</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                    </div>
                    <div>
                      <strong>EldoHub Senior Mentorship</strong>
                      <p>Continuous coaching from industry veterans before, during, and after client deployments.</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <strong>Specialized Squad Pods</strong>
                      <p>Work alongside complementary talent peers in managed 3–4 person squads with clear quality standards.</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="showcase-quote">
                  <p>
                    &ldquo;SasaKazi eliminated the endless search for verified gigs. Within two weeks of my practical assessment, I was deployed in a stock reconciliation pod with guaranteed milestone pay.&rdquo;
                  </p>
                  <div className="quote-author">
                    <div className="author-avatar">BK</div>
                    <div>
                      <strong>Brian K.</strong>
                      <small>Financial Reconciliation Pod Lead • Eldoret</small>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="showcase-title">
                  Scale Your Business With <span className="highlight-text">Supervised Local Pods</span>
                </h1>
                <p className="showcase-desc">
                  Eliminate stock shrinkage, missing payments, and lost sales leads. SasaKazi deploys vetted digital pods in 3–5 days with dedicated EldoHub mentor supervision and fixed 30–45 day sprint milestones.
                </p>

                <div className="benefit-items">
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <strong>30–45 Day Fixed Sprints</strong>
                      <p>Clear acceptance criteria and upfront milestone pricing. No expensive software lock-in.</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <div>
                      <strong>NDA &amp; Strict Data Safeguarding</strong>
                      <p>Read-only access policies, rigorous confidentiality, and compliant operational governance.</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <polyline points="16 11 18 13 22 9"></polyline>
                      </svg>
                    </div>
                    <div>
                      <strong>Senior Quality Oversight</strong>
                      <p>Every pod deliverable is pre-audited by an EldoHub mentor before submission to your desk.</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="showcase-quote">
                  <p>
                    &ldquo;Our daily stock records used to be 4 days late every week. SasaKazi&apos;s inventory pod had our shop synchronized to POS within 21 days with zero business disruption.&rdquo;
                  </p>
                  <div className="quote-author">
                    <div className="author-avatar">SK</div>
                    <div>
                      <strong>Samuel K.</strong>
                      <small>Managing Director • Rift Wholesale Distributors</small>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Metrics Strip */}
            <div className="showcase-stats">
              <div className="stat-unit">
                <span className="stat-val">500+</span>
                <span className="stat-lbl">Vetted Talents</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-unit">
                <span className="stat-val">30–45d</span>
                <span className="stat-lbl">Sprint Milestones</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-unit">
                <span className="stat-val">KES 0</span>
                <span className="stat-lbl">Bidding Wars</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Account Creation Card */}
        <div className="register-form-card">
          {submitted ? (
            <div className="success-state">
              <div className="success-icon">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span className="ref-badge">Registration Reference: #{refId}</span>
              <h2>Welcome to SasaKazi!</h2>
              <p className="success-lead">
                {role === "talent"
                  ? `Your talent profile for ${talentData.name} has been submitted.`
                  : `Your business profile for ${businessData.companyName} has been recorded.`}
              </p>

              <div className="next-steps-card">
                <h4>What Happens Next?</h4>
                <div className="steps-list">
                  <div className="step-item">
                    <span className="step-badge">1</span>
                    <div>
                      <strong>Verification &amp; Profile Review</strong>
                      <p>Our EldoHub admissions pod reviews your details within 1 business day.</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-badge">2</span>
                    <div>
                      <strong>{role === "talent" ? "Practical Skills Assessment" : "15-Minute Diagnostic Call"}</strong>
                      <p>{role === "talent" ? "Complete a short, practical simulation based on your chosen track." : "A solutions lead aligns on your milestone scope and timeline."}</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <span className="step-badge">3</span>
                    <div>
                      <strong>{role === "talent" ? "Pod Placement & Milestone Pay" : "Pod Deployment & Results"}</strong>
                      <p>{role === "talent" ? "Get assigned to commercial projects with supervised quality review." : "Supervised talent begins execution with regular sprint check-ins."}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="success-actions">
                <Link href="/login" className="btn btn-teal w-full">
                  Proceed to Login →
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(new CustomEvent("open-sasakazi-chat"));
                    }
                  }}
                  className="btn btn-outline-navy w-full"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Chat with SasaBot Concierge
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Segmented Role Switcher */}
              <div className="role-selector-header">
                <div className="role-switch-container">
                  <button
                    type="button"
                    onClick={() => {
                      setRole("talent");
                      setErrors({});
                    }}
                    className={`role-tab ${role === "talent" ? "active" : ""}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Digital Talent</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRole("business");
                      setErrors({});
                    }}
                    className={`role-tab ${role === "business" ? "active" : ""}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span>Business / Employer</span>
                  </button>
                </div>
              </div>

              <div className="form-heading">
                <h2>{role === "talent" ? "Create Your Talent Account" : "Register Your Business"}</h2>
                <p>
                  {role === "talent"
                    ? "Get vetted by EldoHub, join mentor-supervised pods, and access paid commercial work."
                    : "Post commercial projects, deploy vetted digital pods, and scale your operations."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="account-form" noValidate>
                {role === "talent" ? (
                  <>
                    {/* Full Name */}
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <div className="input-with-icon">
                        <svg className="field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={talentData.name}
                          onChange={handleTalentChange}
                          placeholder="e.g. Kiprono Kimutai"
                          className={errors.name ? "input-field input-error" : "input-field"}
                        />
                      </div>
                      {errors.name && <span className="field-error-msg">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <div className="input-with-icon">
                        <svg className="field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={talentData.email}
                          onChange={handleTalentChange}
                          placeholder="e.g. kiprono@example.com"
                          className={errors.email ? "input-field input-error" : "input-field"}
                        />
                      </div>
                      {errors.email && <span className="field-error-msg">{errors.email}</span>}
                    </div>

                    {/* Phone Number */}
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp (+254) *</label>
                      <div className="input-with-icon">
                        <svg className="field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={talentData.phone}
                          onChange={handleTalentChange}
                          placeholder="e.g. +254 712 345 678"
                          className={errors.phone ? "input-field input-error" : "input-field"}
                        />
                      </div>
                      {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                    </div>

                    {/* Track Selection */}
                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="track">Primary Track / Skill</label>
                        <select
                          id="track"
                          name="track"
                          value={talentData.track}
                          onChange={handleTalentChange}
                          className="input-field"
                        >
                          <option value="Stock & Inventory Operations">Stock &amp; Inventory Operations</option>
                          <option value="Payments & Financial Reconciliation">Payments &amp; Financial Reconciliation</option>
                          <option value="Customer Follow-up & Sales Operations">Customer Follow-up &amp; Sales Operations</option>
                          <option value="Software & Web Development">Software &amp; Web Development</option>
                          <option value="Data Analysis & Business Intelligence">Data Analysis &amp; BI (Excel/SQL)</option>
                          <option value="UI/UX Product Design">UI/UX Product Design</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="experience">Experience Level</label>
                        <select
                          id="experience"
                          name="experience"
                          value={talentData.experience}
                          onChange={handleTalentChange}
                          className="input-field"
                        >
                          <option value="Entry / Fresh Graduate (0–1 years)">Entry / Junior (0–1 years)</option>
                          <option value="Intermediate (1–3 years)">Intermediate (1–3 years)</option>
                          <option value="Experienced Specialist (3–5 years)">Experienced (3–5 years)</option>
                          <option value="Senior / Pod Lead (5+ years)">Senior Lead (5+ years)</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Hub Node */}
                    <div className="form-group">
                      <label htmlFor="location">Preferred Hub Node</label>
                      <select
                        id="location"
                        name="location"
                        value={talentData.location}
                        onChange={handleTalentChange}
                        className="input-field"
                      >
                        <option value="Eldoret Node / Innovation Campus">Eldoret Hub (Innovation Campus)</option>
                        <option value="Nairobi Hub">Nairobi Node</option>
                        <option value="Remote / Hybrid (Kenya-wide)">Remote / Hybrid (Kenya-wide)</option>
                      </select>
                    </div>

                    {/* Portfolio URL */}
                    <div className="form-group">
                      <label htmlFor="portfolio">Portfolio, GitHub, or LinkedIn (Optional)</label>
                      <input
                        id="portfolio"
                        name="portfolio"
                        type="url"
                        value={talentData.portfolio}
                        onChange={handleTalentChange}
                        placeholder="e.g. https://linkedin.com/in/username"
                        className="input-field"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Business Form */}
                    <div className="form-group">
                      <label htmlFor="companyName">Business / Company Name *</label>
                      <div className="input-with-icon">
                        <svg className="field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        <input
                          id="companyName"
                          name="companyName"
                          type="text"
                          required
                          value={businessData.companyName}
                          onChange={handleBusinessChange}
                          placeholder="e.g. Rift Valley Distributors Ltd"
                          className={errors.companyName ? "input-field input-error" : "input-field"}
                        />
                      </div>
                      {errors.companyName && <span className="field-error-msg">{errors.companyName}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contactPerson">Contact Person &amp; Role *</label>
                      <div className="input-with-icon">
                        <svg className="field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input
                          id="contactPerson"
                          name="contactPerson"
                          type="text"
                          required
                          value={businessData.contactPerson}
                          onChange={handleBusinessChange}
                          placeholder="e.g. Sarah Chebet (Operations Director)"
                          className={errors.contactPerson ? "input-field input-error" : "input-field"}
                        />
                      </div>
                      {errors.contactPerson && <span className="field-error-msg">{errors.contactPerson}</span>}
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="email">Work Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={businessData.email}
                          onChange={handleBusinessChange}
                          placeholder="info@company.co.ke"
                          className={errors.email ? "input-field input-error" : "input-field"}
                        />
                        {errors.email && <span className="field-error-msg">{errors.email}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Direct Phone *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={businessData.phone}
                          onChange={handleBusinessChange}
                          placeholder="+254 712 345 678"
                          className={errors.phone ? "input-field input-error" : "input-field"}
                        />
                        {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="projectNeed">Primary Need</label>
                        <select
                          id="projectNeed"
                          name="projectNeed"
                          value={businessData.projectNeed}
                          onChange={handleBusinessChange}
                          className="input-field"
                        >
                          <option value="Stock & Inventory Visibility">Stock &amp; Inventory Visibility</option>
                          <option value="Payments Reconciliation">Payments Reconciliation</option>
                          <option value="Customer Follow-up">Customer Follow-up &amp; Leads</option>
                          <option value="Custom Digital Pod">Custom Pod / Web Software</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="teamSize">Team Scale</label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          value={businessData.teamSize}
                          onChange={handleBusinessChange}
                          className="input-field"
                        >
                          <option value="Small SME (1–10 employees)">Small SME (1–10 employees)</option>
                          <option value="Growing Business (11–50 employees)">Growing Business (11–50 employees)</option>
                          <option value="Mid-Sized Enterprise (50+ employees)">Mid-Sized (50+ employees)</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="location">Operating Region</label>
                      <select
                        id="location"
                        name="location"
                        value={businessData.location}
                        onChange={handleBusinessChange}
                        className="input-field"
                      >
                        <option value="Eldoret & North Rift">Eldoret &amp; North Rift</option>
                        <option value="Nairobi & Central">Nairobi &amp; Central</option>
                        <option value="Western Kenya">Western Kenya</option>
                        <option value="Coast Region">Coast Region</option>
                        <option value="Nationwide / Multiple Branches">Nationwide / Multiple Branches</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Password Field (Common to both) */}
                <div className="form-group">
                  <label htmlFor="password">Create Secure Password *</label>
                  <div className="input-with-icon">
                    <svg className="field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={role === "talent" ? talentData.password : businessData.password}
                      onChange={role === "talent" ? handleTalentChange : handleBusinessChange}
                      placeholder="Minimum 8 characters"
                      className={errors.password ? "input-field input-error" : "input-field"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="password-toggle-btn"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.password && <span className="field-error-msg">{errors.password}</span>}
                </div>

                {/* Terms and Safeguarding Checkbox */}
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={role === "talent" ? talentData.agreeTerms : businessData.agreeTerms}
                      onChange={role === "talent" ? handleTalentChange : handleBusinessChange}
                    />
                    <span>
                      I agree to SasaKazi&apos;s <Link href="/terms" target="_blank" className="text-link">Terms</Link>, <Link href="/privacy" target="_blank" className="text-link">Privacy Policy</Link>, and <Link href="/safeguarding" target="_blank" className="text-link">Safeguarding Code</Link>.
                    </span>
                  </label>
                  {errors.agreeTerms && <span className="field-error-msg">{errors.agreeTerms}</span>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-teal btn-submit" disabled={submitting}>
                  {submitting ? (
                    "Processing Registration..."
                  ) : (
                    <>
                      {role === "talent" ? "Create Digital Talent Account" : "Register Business Account"}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Form Footer */}
              <div className="form-card-footer">
                <p>
                  Already registered on SasaKazi?{" "}
                  <Link href="/login" className="login-link">
                    Sign in to your account →
                  </Link>
                </p>
                <div className="concierge-tip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                  <span>
                    Have quick questions before registering?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new CustomEvent("open-sasakazi-chat"));
                        }
                      }}
                      className="chat-link-btn"
                    >
                      Chat with SasaBot
                    </button>
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .register-wrapper {
          background-color: var(--color-bg-light, #f8fafc);
          min-height: 90vh;
          padding: 3.5rem 1.25rem 5rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .register-container {
          width: 100%;
          max-width: 1180px;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 2.5rem;
          align-items: stretch;
        }

        /* Left Showcase Panel */
        .register-showcase {
          background: linear-gradient(145deg, var(--color-navy, #1F4E79) 0%, #0d2842 100%);
          border-radius: 24px;
          padding: 3rem 2.5rem;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(15, 47, 77, 0.18);
        }

        .register-showcase::after {
          content: "";
          position: absolute;
          bottom: -40px;
          right: -40px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .showcase-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .hub-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 6px 14px;
          border-radius: var(--radius-full, 9999px);
          font-size: 0.82rem;
          color: #e2e8f0;
          align-self: flex-start;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        .showcase-title {
          font-size: 2.15rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .highlight-text {
          color: #5eead4;
        }

        .showcase-desc {
          font-size: 0.98rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.6;
          margin: 0;
        }

        .benefit-items {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 0.5rem;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .benefit-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(13, 148, 136, 0.25);
          color: #5eead4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .benefit-item strong {
          display: block;
          font-size: 0.94rem;
          color: #ffffff;
          margin-bottom: 2px;
        }

        .benefit-item p {
          margin: 0;
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.45;
        }

        .showcase-quote {
          background: rgba(255, 255, 255, 0.07);
          border-left: 3px solid #5eead4;
          padding: 1rem 1.25rem;
          border-radius: 0 12px 12px 0;
          margin-top: 0.5rem;
        }

        .showcase-quote p {
          margin: 0 0 10px 0;
          font-size: 0.88rem;
          font-style: italic;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
        }

        .quote-author {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .author-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--color-teal, #0d9488);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .quote-author strong {
          display: block;
          font-size: 0.82rem;
          color: #ffffff;
        }

        .quote-author small {
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.65);
        }

        .showcase-stats {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 14px;
          padding: 12px 18px;
          margin-top: 1rem;
        }

        .stat-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-val {
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
        }

        .stat-lbl {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.65);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-divider {
          width: 1px;
          height: 28px;
          background: rgba(255, 255, 255, 0.15);
        }

        /* Right Form Card */
        .register-form-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 2.75rem 2.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--color-border, #e2e8f0);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Segmented Role Switcher */
        .role-selector-header {
          margin-bottom: 1.5rem;
        }

        .role-switch-container {
          background: #f1f5f9;
          border-radius: 14px;
          padding: 4px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }

        .role-tab {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 10px;
          border: none;
          background: transparent;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .role-tab:hover:not(.active) {
          color: var(--color-navy, #1f4e79);
        }

        .role-tab.active {
          background: #ffffff;
          color: var(--color-navy, #1f4e79);
          font-weight: 700;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
        }

        .form-heading {
          margin-bottom: 1.5rem;
        }

        .form-heading h2 {
          font-size: 1.65rem;
          font-weight: 800;
          color: var(--color-navy, #1f4e79);
          margin: 0 0 4px 0;
          letter-spacing: -0.01em;
        }

        .form-heading p {
          font-size: 0.9rem;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        .account-form {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          width: 100%;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1e293b;
        }

        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .field-icon {
          position: absolute;
          left: 12px;
          color: #94a3b8;
          pointer-events: none;
        }

        .input-with-icon .input-field {
          padding-left: 38px;
        }

        .input-field {
          width: 100%;
          box-sizing: border-box;
          padding: 0.75rem 1rem;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-family: inherit;
          font-size: 0.92rem;
          color: #0f172a;
          background: #ffffff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .input-field:focus {
          outline: none;
          border-color: var(--color-teal, #0d9488);
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.15);
        }

        .input-error {
          border-color: #ef4444 !important;
          background-color: #fef2f2 !important;
        }

        .field-error-msg {
          font-size: 0.78rem;
          color: #ef4444;
          font-weight: 600;
        }

        .password-toggle-btn {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .password-toggle-btn:hover {
          color: var(--color-navy, #1f4e79);
        }

        .checkbox-group {
          margin-top: 0.25rem;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
          font-size: 0.84rem;
          color: #475569;
          line-height: 1.45;
        }

        .checkbox-label input {
          margin-top: 3px;
          accent-color: var(--color-teal, #0d9488);
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        .text-link {
          color: var(--color-teal, #0d9488);
          font-weight: 600;
          text-decoration: none;
        }

        .text-link:hover {
          text-decoration: underline;
        }

        .btn-submit {
          margin-top: 0.5rem;
          width: 100%;
          padding: 0.9rem;
          font-size: 0.98rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .form-card-footer {
          margin-top: 1.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid #f1f5f9;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-card-footer p {
          margin: 0;
          font-size: 0.88rem;
          color: #64748b;
        }

        .login-link {
          color: var(--color-navy, #1f4e79);
          font-weight: 700;
          text-decoration: none;
        }

        .login-link:hover {
          color: var(--color-teal, #0d9488);
          text-decoration: underline;
        }

        .concierge-tip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.82rem;
          color: #64748b;
          background: #f8fafc;
          padding: 6px 12px;
          border-radius: var(--radius-full, 9999px);
          margin-top: 2px;
        }

        .chat-link-btn {
          background: none;
          border: none;
          padding: 0;
          color: var(--color-teal, #0d9488);
          font-weight: 700;
          cursor: pointer;
          text-decoration: underline;
          font-family: inherit;
        }

        /* Success State */
        .success-state {
          text-align: center;
          padding: 1rem 0;
        }

        .success-icon {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: rgba(13, 148, 136, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
        }

        .ref-badge {
          display: inline-block;
          background: rgba(31, 78, 121, 0.08);
          color: var(--color-navy, #1f4e79);
          font-family: monospace;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 4px 14px;
          border-radius: var(--radius-full, 9999px);
          margin-bottom: 0.75rem;
          border: 1px solid rgba(31, 78, 121, 0.15);
        }

        .success-state h2 {
          font-size: 1.7rem;
          color: var(--color-navy, #1f4e79);
          font-weight: 800;
          margin: 0 0 0.5rem 0;
        }

        .success-lead {
          font-size: 0.98rem;
          color: #475569;
          margin: 0 0 1.5rem 0;
          line-height: 1.55;
        }

        .next-steps-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.25rem 1.5rem;
          text-align: left;
          margin-bottom: 1.75rem;
        }

        .next-steps-card h4 {
          font-size: 0.96rem;
          color: var(--color-navy, #1f4e79);
          font-weight: 700;
          margin: 0 0 1rem 0;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.5rem;
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .step-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .step-badge {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--color-teal, #0d9488);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.78rem;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .step-item strong {
          display: block;
          font-size: 0.88rem;
          color: var(--color-navy, #1f4e79);
          margin-bottom: 2px;
        }

        .step-item p {
          margin: 0;
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.45;
        }

        .success-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 960px) {
          .register-container {
            grid-template-columns: 1fr;
          }
          .register-showcase {
            padding: 2.25rem 1.75rem;
          }
          .register-form-card {
            padding: 2rem 1.5rem;
          }
          .showcase-title {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 540px) {
          .register-wrapper {
            padding: 2rem 1rem 3.5rem 1rem;
          }
          .form-row-2 {
            grid-template-columns: 1fr;
          }
          .showcase-stats {
            flex-direction: column;
            gap: 10px;
          }
          .stat-divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
