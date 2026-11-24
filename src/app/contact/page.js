"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Form Component that reads useSearchParams inside Suspense
function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const serviceMapping = {
    "stock-inventory": "Stock & Inventory Visibility",
    "payments-reconciliation": "Payments Reconciliation",
    "customer-follow-up": "Customer Follow-up",
    "other": "Custom SME Workflow / Other Need"
  };

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    service: "Stock & Inventory Visibility",
    description: "",
    preferredTime: "Morning (9am - 12pm)"
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync service from query parameter ?service=
  useEffect(() => {
    if (serviceParam && serviceMapping[serviceParam]) {
      setFormData((prev) => ({
        ...prev,
        service: serviceMapping[serviceParam]
      }));
    }
  }, [serviceParam]);

  const validate = () => {
    const errs = {};
    if (!formData.name || formData.name.trim().length < 2) {
      errs.name = "Please enter your name (minimum 2 characters)";
    }
    if (!formData.businessName || formData.businessName.trim().length < 2) {
      errs.businessName = "Please enter your business or company name";
    }
    const cleanPhone = formData.phone.replace(/[\s\-]/g, "");
    if (!cleanPhone || cleanPhone.length < 9) {
      errs.phone = "Please enter a valid phone number (e.g. +254 712 345 678)";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    // Simulate swift validation & submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
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
            <p className="success-lead">
              We will respond within <strong>one business day</strong>. No long sales process.
            </p>
            <p className="success-detail">
              We received your request for <strong>{formData.businessName}</strong> regarding <strong>{formData.service}</strong>. A SasaKazi solutions lead from our Eldoret hub will contact you on <strong>{formData.phone}</strong>.
            </p>
            <div className="success-action">
              <button 
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent('open-sasakazi-chat'));
                  }
                }}
                className="btn btn-teal"
                style={{ width: "100%", justifyContent: "center", cursor: "pointer" }}
              >
                💬 Chat with SasaKazi Concierge
              </button>
            </div>
            <button 
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  businessName: "",
                  phone: "",
                  service: "Stock & Inventory Visibility",
                  description: "",
                  preferredTime: "Morning (9am - 12pm)"
                });
              }} 
              className="btn btn-outline-navy btn-sm"
              style={{ marginTop: "1.25rem" }}
            >
              Submit another inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bpo-inquiry-form" noValidate>
            <div className="form-header">
              <h3>Request a Pilot Consultation</h3>
              <p>Fill in this 6-field form or chat with our live concierge widget.</p>
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
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="field-error-msg">{errors.name}</span>}
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
                className={errors.businessName ? "input-error" : ""}
              />
              {errors.businessName && <span className="field-error-msg">{errors.businessName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Direct Telephone Number *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required 
                placeholder="e.g. +254 712 345 678"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
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
                <option value="Custom SME Workflow / Other Need">Custom SME Workflow / Other Need</option>
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
                <option value="Anytime during business hours">Anytime during business hours</option>
              </select>
            </div>

            <button type="submit" className="btn btn-teal btn-submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Request Conversation"}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>

            <p className="form-note">
              🔒 No spam. We respond within one business day. No long sales process.
            </p>
          </form>
        )}
      </div>

      {/* Direct Channels & Office Info Column */}
      <div className="contact-info-col">
        {/* Concierge Fast Track Card */}
        <div className="fast-track-card">
          <div className="fast-track-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h3>SasaKazi Concierge</h3>
          <p>
            Have immediate questions regarding pilot deliverables, pricing, or talent matching? Chat directly with our concierge widget.
          </p>
          <button 
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent('open-sasakazi-chat'));
              }
            }}
            className="btn btn-teal"
            style={{ width: "100%", justifyContent: "center", cursor: "pointer" }}
          >
            💬 Open Concierge Chat
          </button>
        </div>

        {/* Direct Info List */}
        <div className="office-details-card">
          <h4>Direct Communication Channels</h4>
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
                <strong>Eldoret Headquarters</strong>
                <span>EldoHub Innovation Campus, Eldoret, Kenya</span>
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
                <strong>Nairobi Operations</strong>
                <span>Nairobi Node, Kenya</span>
              </div>
            </li>
          </ul>

          <div className="response-guarantee">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Guaranteed 24-hour turnaround on business inquiries</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
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
            <span>We respond within one business day. No long sales process.</span>
          </div>
        </div>
      </section>

      {/* Main Grid: Form (Suspense Wrapped) + Direct Channels */}
      <section className="contact-content-section">
        <div className="container">
          <Suspense fallback={<div style={{ textAlign: "center", padding: "3rem" }}>Loading inquiry form...</div>}>
            <ContactFormContent />
          </Suspense>
        </div>
      </section>

      {/* FAQ Strip */}
      <section className="contact-faq-section">
        <div className="container">
          <div className="faq-box text-center">
            <h3>What happens after you reach out?</h3>
            <div className="faq-steps-row">
              <div className="faq-mini-step">
                <span className="step-num">1</span>
                <strong>Diagnostic Call</strong>
                <p>15 minutes to understand your inventory, payments, or customer follow-up bottleneck.</p>
              </div>
              <div className="faq-mini-step">
                <span className="step-num">2</span>
                <strong>Fixed Scope &amp; Pilot Plan</strong>
                <p>We present a clear 30-45 day scope with fixed milestone pricing and acceptance criteria.</p>
              </div>
              <div className="faq-mini-step">
                <span className="step-num">3</span>
                <strong>Deployment &amp; Results</strong>
                <p>Vetted local talent pod begins work under senior EldoHub mentorship within 3-5 days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          background-color: var(--color-bg-light);
          min-height: 85vh;
        }

        .contact-hero {
          background: linear-gradient(180deg, #ffffff 0%, var(--color-bg-light) 100%);
          padding: 3.5rem 0 2.5rem 0;
          border-bottom: 1px solid var(--color-border);
        }

        .contact-title {
          font-size: 2.4rem;
          color: var(--color-navy);
          font-weight: 800;
          margin: 0.75rem 0;
          letter-spacing: -0.02em;
        }

        .contact-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          max-width: 680px;
          margin: 0 auto 1.5rem auto;
          line-height: 1.6;
        }

        .contact-trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(13, 148, 136, 0.1);
          color: var(--color-teal);
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
        }

        .contact-content-section {
          padding: 3rem 0 4rem 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 2.5rem;
          align-items: start;
        }

        /* Form Card */
        .contact-form-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          padding: 2.25rem;
        }

        .form-header {
          margin-bottom: 1.75rem;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 1.25rem;
        }

        .form-header h3 {
          font-size: 1.4rem;
          color: var(--color-navy);
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .form-header p {
          font-size: 0.92rem;
          color: var(--color-text-muted);
        }

        .bpo-inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-text-main);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.75rem 1rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: inherit;
          font-size: 0.95rem;
          color: var(--color-text-main);
          background: #ffffff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-teal);
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.15);
        }

        .form-group input.input-error {
          border-color: #ef4444;
          background-color: #fef2f2;
        }

        .field-error-msg {
          font-size: 0.8rem;
          color: #ef4444;
          font-weight: 600;
        }

        .btn-submit {
          margin-top: 0.5rem;
          width: 100%;
          justify-content: center;
          padding: 0.9rem;
          font-size: 1rem;
          font-weight: 700;
        }

        .form-note {
          font-size: 0.82rem;
          color: var(--color-text-muted);
          text-align: center;
          margin-top: 0.5rem;
        }

        /* Submission Success */
        .submission-success {
          text-align: center;
          padding: 2.5rem 1rem;
        }

        .success-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(13, 148, 136, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
        }

        .submission-success h3 {
          font-size: 1.6rem;
          color: var(--color-navy);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .success-lead {
          font-size: 1.05rem;
          color: var(--color-teal);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .success-detail {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          max-width: 460px;
          margin: 0 auto 1.75rem auto;
        }

        /* Right Column Cards */
        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .fast-track-card {
          background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 100%);
          border-radius: var(--radius-lg);
          padding: 2rem;
          color: #ffffff;
          box-shadow: var(--shadow-md);
        }

        .fast-track-icon {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          background: rgba(13, 148, 136, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          color: #5eead4;
        }

        .fast-track-card h3 {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .fast-track-card p {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.55;
          margin-bottom: 1.5rem;
        }

        .office-details-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 2rem;
        }

        .office-details-card h4 {
          font-size: 1.15rem;
          color: var(--color-navy);
          font-weight: 700;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 0.75rem;
        }

        .office-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .office-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .detail-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(31, 78, 121, 0.08);
          color: var(--color-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .office-list li div {
          display: flex;
          flex-direction: column;
          font-size: 0.92rem;
        }

        .office-list li strong {
          color: var(--color-navy);
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .office-list li a {
          color: var(--color-teal);
          font-weight: 600;
          text-decoration: none;
        }

        .office-list li a:hover {
          text-decoration: underline;
        }

        .office-list li span {
          color: var(--color-text-muted);
        }

        .response-guarantee {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(13, 148, 136, 0.08);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-navy);
        }

        /* FAQ Mini Strip */
        .contact-faq-section {
          padding: 0 0 4rem 0;
        }

        .faq-box {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2.5rem 2rem;
        }

        .faq-box h3 {
          font-size: 1.4rem;
          color: var(--color-navy);
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .faq-steps-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          text-align: left;
        }

        .faq-mini-step {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .step-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-teal);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .faq-mini-step strong {
          font-size: 1.05rem;
          color: var(--color-navy);
        }

        .faq-mini-step p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .faq-steps-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
