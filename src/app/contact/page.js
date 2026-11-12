"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    service: "Stock & Inventory Visibility",
    description: "",
    preferredTime: "Morning (9am - 12pm)"
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate instant form submission
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello SasaKazi! I would like to book a call regarding ${formData.service || "BPO services"} for my business.`
  );
  const whatsappUrl = `https://wa.me/254723567263?text=${whatsappMessage}`;

  return (
    <div className="contact-page">
      {/* Hero Header */}
      <section className="contact-hero">
        <div className="container text-center">
          <span className="badge-sub">Start with a 15-Minute Conversation</span>
          <h1 className="contact-title">Let’s solve one practical problem together</h1>
          <p className="contact-subtitle">
            We respond within one business day. No long sales process, no aggressive pitches—just a clear assessment of your operational bottleneck.
          </p>
          <div className="contact-trust-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Guaranteed response within 24 business hours</span>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Direct Channels */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            {/* Form Column */}
            <div className="contact-form-card">
              {submitted ? (
                <div className="submission-success">
                  <div className="success-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3>Thank you, {formData.name || "there"}!</h3>
                  <p>
                    We have received your pilot inquiry for <strong>{formData.businessName || "your business"}</strong>. A SasaKazi solutions lead from our Eldoret hub will reach out to you via WhatsApp or phone ({formData.phone}) within one business day.
                  </p>
                  <div className="success-action">
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-teal"
                    >
                      Connect on WhatsApp Now for Faster Response
                    </a>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="btn btn-outline-navy btn-sm"
                    style={{ marginTop: '1.25rem' }}
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bpo-inquiry-form">
                  <div className="form-header">
                    <h3>Request a Pilot Consultation</h3>
                    <p>Fill in this short form or connect via WhatsApp directly.</p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Your Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="e.g. Kiprono Kimutai"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="businessName">Business / Company Name *</label>
                    <input 
                      type="text" 
                      id="businessName" 
                      name="businessName" 
                      required 
                      placeholder="e.g. Rift Valley Distributors Ltd"
                      value={formData.businessName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="e.g. +254 712 345 678"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Which Service Interests You?</label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="Stock & Inventory Visibility">Stock &amp; Inventory Visibility (From KES 25,000)</option>
                      <option value="Payments Reconciliation">Payments Reconciliation (From KES 20,000)</option>
                      <option value="Customer Follow-up">Customer Follow-up (From KES 18,000)</option>
                      <option value="Custom BPO / Other Need">Custom SME Workflow / Other Need</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Short Description of Your Need / Bottleneck</label>
                    <textarea 
                      id="description" 
                      name="description" 
                      rows="3" 
                      placeholder="e.g. We have discrepancies between physical shop stock and our sales records every week."
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferredTime">Preferred Contact Time</label>
                    <select 
                      id="preferredTime" 
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                    >
                      <option value="Morning (9am - 12pm)">Morning (9am - 12pm EAT)</option>
                      <option value="Afternoon (1pm - 5pm)">Afternoon (1pm - 5pm EAT)</option>
                      <option value="Anytime via WhatsApp">Anytime via WhatsApp</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-teal btn-submit">
                    Book a Short Call
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>

                  <p className="form-note">
                    🔒 No spam. Your information is kept strictly confidential under SasaKazi &amp; EldoHub policies.
                  </p>
                </form>
              )}
            </div>

            {/* Direct Channels & Office Info Column */}
            <div className="contact-info-col">
              {/* WhatsApp Fast Track Card */}
              <div className="fast-track-card">
                <div className="fast-track-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3>Prefer WhatsApp?</h3>
                <p>
                  Chat immediately with our solutions team. Send us a message and we'll reply right away during business hours.
                </p>
                <a 
                  href="https://wa.me/254723567263?text=Hello%20SasaKazi%2C%20I%20am%20interested%20in%20discussing%20a%20practical%20digital%20BPO%20service." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-teal"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Chat on WhatsApp (+254 723 567 263)
                </a>
              </div>

              {/* Direct Info List */}
              <div className="office-details-card">
                <h4>Direct Communication</h4>
                <ul className="office-list">
                  <li>
                    <div className="detail-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Telephone</strong>
                      <a href="tel:+254723567263">+254 723 567 263</a>
                    </div>
                  </li>

                  <li>
                    <div className="detail-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <strong>Email Address</strong>
                      <a href="mailto:info@sasakazi.co.ke">info@sasakazi.co.ke</a>
                    </div>
                  </li>

                  <li>
                    <div className="detail-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <strong>Eldoret Hub (Headquarters)</strong>
                      <span>EldoHub Campus, Sirikwa, Eldoret, Kenya</span>
                    </div>
                  </li>

                  <li>
                    <div className="detail-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="20" height="14" x="2" y="7" rx="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <div>
                      <strong>Nairobi Operations</strong>
                      <span>Digital Delivery &amp; Partner Coordination, Nairobi</span>
                    </div>
                  </li>
                </ul>

                <div className="eldohub-endorsement">
                  <span>An Initiative Powered by <strong>EldoHub</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          background-color: var(--color-bg-light, #F8FAFC);
          min-height: 80vh;
          padding-bottom: 5rem;
        }
        .contact-hero {
          padding: 4.5rem 0 3rem 0;
          background: #ffffff;
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
        .contact-title {
          font-size: 2.4rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 1rem;
        }
        @media (min-width: 768px) {
          .contact-title {
            font-size: 3rem;
          }
        }
        .contact-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          max-width: 640px;
          margin: 0 auto 1.5rem auto;
          line-height: 1.6;
        }
        .contact-trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--color-teal-light);
          color: var(--color-teal-dark);
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          border: 1px solid rgba(13, 148, 136, 0.25);
        }

        .contact-content-section {
          padding: 3.5rem 0;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          max-width: 1050px;
          margin: 0 auto;
        }
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1.35fr 1fr;
            gap: 3rem;
          }
        }

        /* Form Card */
        .contact-form-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid var(--color-border-gray);
          box-shadow: 0 8px 24px rgba(31, 78, 121, 0.06);
          padding: 2.5rem;
        }
        .form-header {
          margin-bottom: 2rem;
        }
        .form-header h3 {
          font-size: 1.45rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.35rem;
        }
        .form-header p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 0;
        }
        .bpo-inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-navy);
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.85rem 1rem;
          border: 1px solid var(--color-border-gray);
          border-radius: 8px;
          font-family: var(--font-primary);
          font-size: 0.95rem;
          background: var(--color-bg-light);
          color: var(--color-text-dark);
          transition: border-color 0.2s ease;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-teal);
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.12);
        }
        .btn-submit {
          width: 100%;
          padding: 1rem !important;
          font-size: 1.05rem !important;
          margin-top: 0.5rem;
        }
        .form-note {
          font-size: 0.78rem;
          color: var(--color-text-light);
          text-align: center;
          margin-top: 0.5rem;
          margin-bottom: 0;
        }

        /* Success Card */
        .submission-success {
          text-align: center;
          padding: 2rem 1rem;
        }
        .success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--color-teal-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
        }
        .submission-success h3 {
          font-size: 1.5rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.75rem;
        }
        .submission-success p {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        /* Info Column */
        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .fast-track-card {
          background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 100%);
          color: #ffffff;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 10px 24px rgba(15, 47, 77, 0.2);
        }
        .fast-track-icon {
          color: #5eead4;
          margin-bottom: 0.75rem;
        }
        .fast-track-card h3 {
          font-size: 1.3rem;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .fast-track-card p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .office-details-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid var(--color-border-gray);
          padding: 2rem;
        }
        .office-details-card h4 {
          font-size: 1.05rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--color-border-gray);
        }
        .office-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .office-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.88rem;
        }
        .detail-icon {
          color: var(--color-teal);
          background: var(--color-teal-light);
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .office-list strong {
          display: block;
          color: var(--color-navy);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        .office-list a, .office-list span {
          color: var(--color-text-dark);
          text-decoration: none;
        }
        .office-list a:hover {
          color: var(--color-teal);
          text-decoration: underline;
        }
        .eldohub-endorsement {
          background: var(--color-bg-light);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 0.82rem;
          color: var(--color-navy);
          text-align: center;
        }
      `}</style>
    </div>
  );
}

