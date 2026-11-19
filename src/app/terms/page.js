"use client";

import React from "react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="container text-center">
          <span className="badge-sub">Governed BPO Framework</span>
          <h1>Terms of Engagement</h1>
          <p className="terms-lead">
            The operational guidelines, milestone commitments, and acceptance standards governing SasaKazi business pilots and retainer services.
          </p>
        </div>
      </section>

      <section className="terms-content-section">
        <div className="container">
          <div className="terms-card">
            <h2>1. Introduction &amp; Operating Model</h2>
            <p>
              SasaKazi operates as a managed Business Process Outsourcing (BPO) capability powered by EldoHub. We provide fixed-price operational pilots (typically 30–45 days) and ongoing monthly support retainers for Kenyan SMEs. By engaging SasaKazi, clients enter into a governed commercial relationship designed to deliver specific, measurable outcomes.
            </p>

            <h2>2. Scope Definition &amp; Fixed-Price Pilots</h2>
            <p>
              Every pilot begins with an agreed Scope of Work (SOW) specifying deliverables, milestones, access requirements, and total fixed investment. SasaKazi guarantees that fixed pilot pricing will not increase unless the client explicitly requests out-of-scope additions in writing.
            </p>

            <h2>3. Client Responsibilities &amp; Read-Only Access</h2>
            <p>
              To ensure timely completion within the 30–45 day pilot window, the client agrees to:
            </p>
            <ul>
              <li>Provide timely access to relevant records, spreadsheets, product lists, or statement exports within 3 business days of kickoff.</li>
              <li>Designate a primary business point of contact for weekly check-ins and variance reviews.</li>
              <li>Provide <strong>read-only access</strong> only. Clients must never share banking login credentials, PINs, or sensitive authorization keys with SasaKazi personnel.</li>
            </ul>

            <h2>4. Quality Assurance &amp; Acceptance Standard</h2>
            <p>
              All pilot deliverables are audited by senior EldoHub operations and finance mentors. Pilots conclude with a structured sign-off meeting. If deliverable metrics (such as stock counts or payment ledger matching) do not satisfy the agreed tolerance criteria due to our error, SasaKazi will rectify the variance without additional cost.
            </p>

            <h2>5. Intellectual Property &amp; Handover Ownership</h2>
            <p>
              Upon receipt of final milestone payment, <strong>the client owns 100% of all deliverables</strong>, including custom spreadsheets, reconciled ledgers, customer tracking pipelines, and Standard Operating Procedure (SOP) documentation created during the engagement.
            </p>

            <h2>6. Monthly Retainer Continuity</h2>
            <p>
              Following successful pilot handover, clients may choose to retain their dedicated talent pod on a simple monthly support agreement. Monthly retainers operate on a 30-day rolling basis and can be paused or cancelled with 14 days' written notice.
            </p>

            <h2>7. Governing Law &amp; Inquiries</h2>
            <p>
              These terms are governed by the Laws of Kenya. For contractual questions, please reach our administrative team:
            </p>
            <div className="terms-contact-box">
              <p><strong>Email:</strong> <a href="mailto:info@sasakazi.co.ke">info@sasakazi.co.ke</a></p>
              <p><strong>Telephone / WhatsApp:</strong> +254 723 567 263</p>
              <p><strong>Headquarters:</strong> EldoHub Innovation Campus, Eldoret, Kenya</p>
            </div>

            <div className="terms-back-btn">
              <Link href="/" className="btn btn-teal">
                &larr; Return to SasaKazi Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .terms-page {
          background-color: var(--color-bg-light);
          min-height: 85vh;
        }

        .terms-hero {
          background: linear-gradient(180deg, #ffffff 0%, var(--color-bg-light) 100%);
          padding: 4rem 0 3rem 0;
          border-bottom: 1px solid var(--color-border);
        }

        .terms-hero h1 {
          font-size: 2.6rem;
          color: var(--color-navy);
          font-weight: 800;
          margin: 0.75rem 0 1rem 0;
          letter-spacing: -0.02em;
        }

        .terms-lead {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .terms-content-section {
          padding: 3.5rem 0 5rem 0;
        }

        .terms-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 3.5rem;
          max-width: 850px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .terms-card {
            padding: 2rem 1.5rem;
          }
        }

        .terms-card h2 {
          font-size: 1.35rem;
          color: var(--color-navy);
          font-weight: 700;
          margin: 2.25rem 0 0.75rem 0;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 0.5rem;
        }

        .terms-card h2:first-of-type {
          margin-top: 0;
        }

        .terms-card p {
          font-size: 0.96rem;
          color: var(--color-text-main);
          line-height: 1.65;
          margin-bottom: 1rem;
        }

        .terms-card ul {
          padding-left: 1.25rem;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .terms-card li {
          font-size: 0.95rem;
          color: var(--color-text-main);
          line-height: 1.55;
        }

        .terms-contact-box {
          background: var(--color-bg-light);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          margin: 1.5rem 0 2.5rem 0;
        }

        .terms-contact-box p {
          margin-bottom: 0.4rem;
        }

        .terms-contact-box a {
          color: var(--color-teal);
          font-weight: 600;
          text-decoration: none;
        }

        .terms-back-btn {
          text-align: center;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
}
