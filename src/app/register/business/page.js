"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterBusinessPage() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [projectInterest, setProjectInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container form-page-container">
      <div className="form-card glass">
        {submitted ? (
          <div className="success-state">
            <div className="success-icon">✓</div>
            <h2>Business Registered!</h2>
            <p>Thank you for registering your company on Sasakazi. An account manager will reach out shortly to verify your company details and help you post your first digital tech project.</p>
            <Link href="/login" className="btn btn-primary">
              Proceed to Login
            </Link>
          </div>
        ) : (
          <>
            <div className="form-header">
              <h1>Register your Business</h1>
              <p>Outsource tech projects, review vetted candidates, assign milestones, and collaborate with mentors to scale your business operations securely.</p>
            </div>

            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="companyName">Company / Organization Name</label>
                <input
                  id="companyName"
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Acme Tech Kenya"
                  className="input-field"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Work Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. contact@acmetechnology.co.ke"
                  className="input-field"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="input-field"
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectInterest">Type of Project Interest</label>
                <select
                  id="projectInterest"
                  value={projectInterest}
                  onChange={(e) => setProjectInterest(e.target.value)}
                  className="input-field select-field"
                  required
                >
                  <option value="">Select Project Scope</option>
                  <option value="Web Development">Web App Development</option>
                  <option value="Mobile App">Mobile App Development</option>
                  <option value="UI/UX Design">UI/UX Product Design</option>
                  <option value="Digital Marketing">Digital Marketing & SEO</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary w-full form-submit-btn">
                Register Business Account
              </button>
            </form>

            <div className="form-footer">
              <p>Are you a digital professional looking for work? <Link href="/register" className="form-link">Join as Talent</Link></p>
              <p>Already have an account? <Link href="/login" className="form-link">Login here</Link></p>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .form-page-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 64px 24px;
          min-height: calc(100vh - 160px);
        }
        .form-card {
          width: 100%;
          max-width: 500px;
          padding: 40px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-lg);
        }
        .form-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .form-header h1 {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 8px;
        }
        .form-header p {
          font-size: 0.95rem;
          color: var(--color-text-light);
          line-height: 1.5;
        }
        .register-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-light);
        }
        .select-field {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
          background-position: right 12px center;
          background-repeat: no-repeat;
          background-size: 1.25rem;
          padding-right: 36px;
        }
        .form-submit-btn {
          margin-top: 8px;
        }
        .form-footer {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--color-border);
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--color-text-light);
        }
        .form-link {
          color: var(--color-primary);
          font-weight: 600;
        }
        .form-link:hover {
          text-decoration: underline;
        }
        
        .success-state {
          text-align: center;
          padding: 24px 0;
        }
        .success-icon {
          width: 64px;
          height: 64px;
          background-color: var(--color-primary-light);
          color: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 auto 24px auto;
        }
        .success-state h2 {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 12px;
        }
        .success-state p {
          color: var(--color-text-light);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 32px;
        }
        
        .w-full {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
