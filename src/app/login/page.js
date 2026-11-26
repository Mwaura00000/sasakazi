"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState("talent");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        {/* Left Side: Brand Showcase */}
        <div className="login-showcase">
          <div className="showcase-content">
            <div className="hub-badge-pill">
              <span className="live-dot"></span>
              <span>Powered by <strong>EldoHub</strong> • Eldoret &amp; Nairobi</span>
            </div>

            <h1 className="showcase-title">
              Sign In to Your <span className="highlight-text">SasaKazi Portal</span>
            </h1>
            <p className="showcase-desc">
              Access active operational sprints, review milestone deliverables, track payouts, or communicate with your assigned EldoHub mentor lead.
            </p>

            <div className="login-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <strong>Secure Single Sign-On</strong>
                  <p>Enterprise data safeguarding and role-based access for talent &amp; employers.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div>
                  <strong>Milestone Disbursements</strong>
                  <p>Real-time tracking of completed deliverables and accepted sprint milestones.</p>
                </div>
              </div>
            </div>

            <div className="showcase-footer-box">
              <p>
                Need to speak with a solutions architect about a new commercial pilot?
              </p>
              <Link href="/contact" className="contact-link">
                Request a Pilot Consultation →
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="login-form-card">
          {submitted ? (
            <div className="success-state">
              <div className="success-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2>Welcome Back!</h2>
              <p className="success-lead">
                Authenticating session for <strong>{email}</strong>...
              </p>
              <div className="redirect-box">
                <span>Redirecting to your dashboard...</span>
              </div>
              <Link href="/" className="btn btn-teal w-full" style={{ marginTop: "1rem" }}>
                Return to Homepage
              </Link>
            </div>
          ) : (
            <>
              {/* Role Toggle */}
              <div className="role-switch-container">
                <button
                  type="button"
                  onClick={() => setRole("talent")}
                  className={`role-tab ${role === "talent" ? "active" : ""}`}
                >
                  Digital Talent
                </button>
                <button
                  type="button"
                  onClick={() => setRole("business")}
                  className={`role-tab ${role === "business" ? "active" : ""}`}
                >
                  Business / Employer
                </button>
              </div>

              <div className="form-heading">
                <h2>Welcome back</h2>
                <p>
                  Enter your credentials to manage your {role === "talent" ? "talent pod assignments" : "business pilot sprints"}.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="account-form">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-with-icon">
                    <svg className="field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. user@domain.com"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="label-row">
                    <label htmlFor="password">Password</label>
                    <a href="#" onClick={(e) => { e.preventDefault(); alert("Password reset link will be sent to your registered email."); }} className="forgot-link">
                      Forgot password?
                    </a>
                  </div>
                  <div className="input-with-icon">
                    <svg className="field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="input-field"
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
                </div>

                <button type="submit" className="btn btn-teal btn-submit">
                  Sign In to Dashboard →
                </button>
              </form>

              <div className="form-card-footer">
                <p>Don&apos;t have an account yet?</p>
                <div className="register-actions">
                  <Link href="/register" className="btn btn-outline-navy btn-sm flex-1">
                    Join as Talent
                  </Link>
                  <Link href="/register/business" className="btn btn-primary btn-sm flex-1">
                    Register Business
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .login-wrapper {
          background-color: var(--color-bg-light, #f8fafc);
          min-height: 85vh;
          padding: 4rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .login-container {
          width: 100%;
          max-width: 1050px;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 2.5rem;
          align-items: stretch;
        }

        .login-showcase {
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

        .showcase-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 100%;
          justify-content: space-between;
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
          font-size: 2.1rem;
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
          font-size: 0.96rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.6;
          margin: 0;
        }

        .login-features {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .feature-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(13, 148, 136, 0.25);
          color: #5eead4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-item strong {
          display: block;
          font-size: 0.92rem;
          color: #ffffff;
          margin-bottom: 2px;
        }

        .feature-item p {
          margin: 0;
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.45;
        }

        .showcase-footer-box {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 1.25rem;
        }

        .showcase-footer-box p {
          margin: 0 0 8px 0;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.85);
        }

        .contact-link {
          color: #5eead4;
          font-weight: 700;
          font-size: 0.86rem;
          text-decoration: none;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        /* Right Card */
        .login-form-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 2.75rem 2.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--color-border, #e2e8f0);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .role-switch-container {
          background: #f1f5f9;
          border-radius: 12px;
          padding: 4px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          margin-bottom: 1.75rem;
        }

        .role-tab {
          padding: 8px 14px;
          border-radius: 9px;
          border: none;
          background: transparent;
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .role-tab.active {
          background: #ffffff;
          color: var(--color-navy, #1f4e79);
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .form-heading {
          margin-bottom: 1.75rem;
        }

        .form-heading h2 {
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--color-navy, #1f4e79);
          margin: 0 0 6px 0;
        }

        .form-heading p {
          font-size: 0.92rem;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        .account-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group label {
          font-size: 0.86rem;
          font-weight: 600;
          color: #1e293b;
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .forgot-link {
          font-size: 0.8rem;
          color: var(--color-teal, #0d9488);
          font-weight: 600;
          text-decoration: none;
        }

        .forgot-link:hover {
          text-decoration: underline;
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
          padding: 0.8rem 1rem;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-family: inherit;
          font-size: 0.94rem;
          color: #0f172a;
          background: #ffffff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .input-field:focus {
          outline: none;
          border-color: var(--color-teal, #0d9488);
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.15);
        }

        .password-toggle-btn {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 4px;
        }

        .btn-submit {
          margin-top: 0.5rem;
          width: 100%;
          padding: 0.9rem;
          font-size: 1rem;
          font-weight: 700;
          justify-content: center;
        }

        .form-card-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #f1f5f9;
          text-align: center;
        }

        .form-card-footer p {
          margin: 0 0 12px 0;
          font-size: 0.88rem;
          color: #64748b;
        }

        .register-actions {
          display: flex;
          gap: 12px;
        }

        .flex-1 {
          flex: 1;
        }

        /* Success State */
        .success-state {
          text-align: center;
          padding: 1.5rem 0;
        }

        .success-icon {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(13, 148, 136, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
        }

        .redirect-box {
          background: #f1f5f9;
          border-radius: 8px;
          padding: 10px;
          font-size: 0.88rem;
          color: #475569;
          margin: 1.25rem 0;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 960px) {
          .login-container {
            grid-template-columns: 1fr;
          }
          .login-showcase {
            padding: 2.25rem 1.75rem;
          }
          .login-form-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
