"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterTalentPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState("");
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
            <h2>Talent Account Created!</h2>
            <p>Thank you for registering as digital talent on Sasakazi. Please check your email to verify your account and start your onboarding assessment.</p>
            <Link href="/login" className="btn btn-primary">
              Proceed to Login
            </Link>
          </div>
        ) : (
          <>
            <div className="form-header">
              <h1>Create your Talent Account</h1>
              <p>Build your professional profile, learn new skills, get mentored, and connect with businesses for paid tech opportunities.</p>
            </div>

            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="input-field"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john@example.com"
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
                <label htmlFor="skills">Primary Tech Stack / Skills</label>
                <input
                  id="skills"
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="e.g. React, Node.js, UI/UX Design"
                  className="input-field"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full form-submit-btn">
                Create Talent Account
              </button>
            </form>

            <div className="form-footer">
              <p>Are you looking to hire talent instead? <Link href="/register/business" className="form-link">Register your Business</Link></p>
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
