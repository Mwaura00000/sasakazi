"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="policy-page">
      <section className="policy-hero">
        <div className="container text-center">
          <span className="badge-sub">Legal &amp; Compliance</span>
          <h1>Privacy Policy</h1>
          <p className="policy-lead">
            How SasaKazi and EldoHub collect, protect, and manage client and talent information in compliance with the Kenya Data Protection Act, 2019.
          </p>
        </div>
      </section>

      <section className="policy-content-section">
        <div className="container">
          <div className="policy-card">
            <h2>1. Commitment to Data Protection</h2>
            <p>
              SasaKazi, an initiative powered by EldoHub, is committed to safeguarding the privacy and operational confidentiality of our client businesses, partners, and talent participants. This policy outlines our standards for handling personal and operational data.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect and process only the minimum information necessary to execute governed BPO services:</p>
            <ul>
              <li><strong>Business Contact Information:</strong> Name, business name, official phone number, WhatsApp contact, and email address submitted via consultation forms.</li>
              <li><strong>Operational &amp; Financial Scope Data:</strong> Inventory listings, product SKUs, and read-only financial transaction exports necessary to perform agreed pilot deliverables.</li>
              <li><strong>Talent Information:</strong> Professional resumes, identification details, case study assessments, and bank disbursement information for vetted talent.</li>
            </ul>

            <h2>3. Strict Banking &amp; Financial Privacy</h2>
            <p>
              Under our governed delivery model, <strong>we strictly enforce read-only data access</strong>:
            </p>
            <ul>
              <li>SasaKazi professionals and mentors will <strong>never</strong> ask for or store banking passwords, portal login credentials, ATM PINs, or One-Time Passwords (OTPs).</li>
              <li>Reconciliation pilots operate solely on client-provided historical statements (CSV, Excel, or PDF exports).</li>
              <li>All transactional data is stored in restricted-access workspaces and deleted or handed over upon project sign-off.</li>
            </ul>

            <h2>4. Non-Disclosure &amp; Confidentiality</h2>
            <p>
              Every vetted talent pod member and senior mentor signs a binding Non-Disclosure Agreement (NDA) prior to receiving access to client spreadsheets, customer lists, or sales logs. Your trade secrets, supplier pricing, and customer contact information remain 100% confidential.
            </p>

            <h2>5. Data Retention &amp; Rights</h2>
            <p>
              Under the Kenya Data Protection Act, you have the right to request access to, correction of, or deletion of your business records held in our systems. Following pilot conclusion and sign-off, client spreadsheets and working files are archived or handed over to the business owner according to agreed contract terms.
            </p>

            <h2>6. Contact Our Data Compliance Team</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to exercise your data rights, please contact our Eldoret office:
            </p>
            <div className="policy-contact-box">
              <p><strong>Email:</strong> <a href="mailto:info@sasakazi.co.ke">info@sasakazi.co.ke</a></p>
              <p><strong>Telephone / WhatsApp:</strong> +254 723 567 263</p>
              <p><strong>Physical Address:</strong> EldoHub Innovation Campus, Eldoret, Kenya</p>
            </div>

            <div className="policy-back-btn">
              <Link href="/" className="btn btn-teal">
                &larr; Return to SasaKazi Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .policy-page {
          background-color: var(--color-bg-light);
          min-height: 85vh;
        }

        .policy-hero {
          background: linear-gradient(180deg, #ffffff 0%, var(--color-bg-light) 100%);
          padding: 4rem 0 3rem 0;
          border-bottom: 1px solid var(--color-border);
        }

        .policy-hero h1 {
          font-size: 2.6rem;
          color: var(--color-navy);
          font-weight: 800;
          margin: 0.75rem 0 1rem 0;
          letter-spacing: -0.02em;
        }

        .policy-lead {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .policy-content-section {
          padding: 3.5rem 0 5rem 0;
        }

        .policy-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 3.5rem;
          max-width: 850px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .policy-card {
            padding: 2rem 1.5rem;
          }
        }

        .policy-card h2 {
          font-size: 1.35rem;
          color: var(--color-navy);
          font-weight: 700;
          margin: 2.25rem 0 0.75rem 0;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 0.5rem;
        }

        .policy-card h2:first-of-type {
          margin-top: 0;
        }

        .policy-card p {
          font-size: 0.96rem;
          color: var(--color-text-main);
          line-height: 1.65;
          margin-bottom: 1rem;
        }

        .policy-card ul {
          padding-left: 1.25rem;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .policy-card li {
          font-size: 0.95rem;
          color: var(--color-text-main);
          line-height: 1.55;
        }

        .policy-contact-box {
          background: var(--color-bg-light);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          margin: 1.5rem 0 2.5rem 0;
        }

        .policy-contact-box p {
          margin-bottom: 0.4rem;
        }

        .policy-contact-box a {
          color: var(--color-teal);
          font-weight: 600;
          text-decoration: none;
        }

        .policy-back-btn {
          text-align: center;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
}
