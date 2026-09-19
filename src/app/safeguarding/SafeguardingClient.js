"use client";

import Link from "next/link";

export default function SafeguardingClient() {
  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-card glass-panel">
          <span className="badge-pill">Safety &amp; Ethics</span>
          <h1>Safeguarding Statement</h1>
          
          <div className="policy-content">
            <p className="lead">
              SasaKazi is strictly committed to safe, respectful and inclusive opportunities. Discrimination, harassment, exploitation, retaliation and abuse are not acceptable across any touchpoint in our talent ecosystem.
            </p>

            <h2>1. Zero-Tolerance for Exploitation</h2>
            <p>
              Applicants should <strong>never pay any unofficial fee</strong> to access an opportunity, interview, test, or placement on SasaKazi. Suspicious requests or fee solicitations should be immediately reported to our integrity team.
            </p>

            <h2>2. Workplace Safety &amp; Professional Boundaries</h2>
            <p>
              Mentors, employers, and talent must maintain professional boundaries. All client-talent communication is expected to adhere to high standards of professional conduct, mutual dignity, and safety.
            </p>

            <h2>3. Reporting a Concern</h2>
            <p>
              If you observe or experience any violation of our safeguarding standards, unethical behavior, or fee extortion, please contact us immediately at <a href="mailto:info@sasakazi.com">info@sasakazi.com</a> or via phone at <a href="tel:+254723567263">+254 723 567 263</a>.
            </p>

            <div className="policy-actions">
              <Link href="/" className="btn btn-primary">
                Return Home
              </Link>
              <Link href="/opportunities" className="btn btn-secondary">
                Explore Opportunities
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .policy-page {
          padding: 8rem 0 5rem;
          min-height: 80vh;
        }
        .policy-card {
          max-width: 800px;
          margin: 0 auto;
          background: #fff;
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 3.5rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);
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
        h1 {
          font-size: 2.4rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin-bottom: 1.5rem;
        }
        .lead {
          font-size: 1.15rem;
          color: var(--color-text-dark);
          line-height: 1.65;
          margin-bottom: 2rem;
        }
        h2 {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-blue-dark);
          margin: 2rem 0 0.75rem;
        }
        p {
          font-size: 1rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin-bottom: 1rem;
        }
        .policy-actions {
          display: flex;
          gap: 1rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border-gray);
        }
        @media (max-width: 768px) {
          .policy-card {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
