"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            <h2>Successfully Logged In!</h2>
            <p>Welcome back to Sasakazi platform. Redirecting to your dashboard...</p>
            <Link href="/" className="btn btn-primary">
              Go to Homepage
            </Link>
          </div>
        ) : (
          <>
            <div className="form-header">
              <h1>Login to Sasakazi</h1>
              <p>Enter your credentials to access your talent profile, post projects, or track active milestones.</p>
            </div>

            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. email@domain.com"
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
                  placeholder="Enter your password"
                  className="input-field"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full form-submit-btn">
                Log In
              </button>
            </form>

            <div className="form-footer">
              <p>Don't have an account yet?</p>
              <div className="footer-signup-buttons">
                <Link href="/register" className="btn btn-outline btn-sm flex-1">
                  Join as Talent
                </Link>
                <Link href="/register/business" className="btn btn-primary btn-sm flex-1 font-semibold">
                  Register Business
                </Link>
              </div>
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
          gap: 16px;
          font-size: 0.9rem;
          color: var(--color-text-light);
        }
        .footer-signup-buttons {
          display: flex;
          gap: 12px;
          width: 100%;
          margin-top: 4px;
        }
        .flex-1 {
          flex: 1;
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
