"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleModal = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Opportunities", href: "/opportunities" },
    { name: "Talents", href: "/talents" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="navbar-header">
        <div className="container navbar-container">
          {/* Logo & Brand Group */}
          <Link href="/" className="navbar-logo-link" onClick={() => setMobileMenuOpen(false)}>
            <Image 
              src="/logo.png" 
              alt="Sasakazi Logo" 
              width={140} 
              height={44} 
              priority
              className="navbar-logo-img"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar-desktop-nav">
            <ul className="navbar-nav-list">
              {navLinks.map((link) => {
                if (link.name === "Services") {
                  return (
                    <li key={link.href} className="navbar-nav-item has-dropdown">
                      <Link 
                        href={link.href}
                        className={`navbar-nav-link ${isActive(link.href) ? "active" : ""}`}
                      >
                        {link.name} <span className="dropdown-caret">&#9662;</span>
                      </Link>
                      <ul className="dropdown-menu glass">
                        <li>
                          <Link href="/services?tab=businesses" className="dropdown-link">
                            <span className="dropdown-title">For Businesses</span>
                            <span className="dropdown-desc">Outsource software development & design projects.</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services?tab=talent" className="dropdown-link">
                            <span className="dropdown-title">For Tech Talents</span>
                            <span className="dropdown-desc">Join apprenticeships and build practical projects.</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/services?tab=partners" className="dropdown-link">
                            <span className="dropdown-title">For Program Partners</span>
                            <span className="dropdown-desc">Assess candidates, verify pipelines, and sponsor.</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={link.href} className="navbar-nav-item">
                    <Link 
                      href={link.href}
                      className={`navbar-nav-link ${isActive(link.href) ? "active" : ""}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="navbar-actions-group">
              <Link href="/login" className="navbar-login-link">
                Login
              </Link>
              <button onClick={toggleModal} className="btn btn-primary btn-sm cta-btn">
                Join Sasakazi
              </button>
            </div>
          </nav>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Slide-out Menu (White Background Theme) */}
      <div className={`navbar-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="drawer-logo-group">
            <Image src="/logo.png" alt="Sasakazi Logo" width={110} height={36} className="drawer-logo" />
          </div>
          <button className="drawer-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            &times;
          </button>
        </div>
        <nav className="drawer-nav">
          <ul className="drawer-nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="drawer-nav-item">
                <Link
                  href={link.href}
                  className={`drawer-nav-link ${isActive(link.href) ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="drawer-actions-block">
            <Link 
              href="/login" 
              className="drawer-login-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                toggleModal();
              }}
              className="btn btn-primary drawer-cta-btn"
            >
              Join Sasakazi
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer backdrop */}
      {mobileMenuOpen && (
        <div className="navbar-overlay-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
      )}

      {/* Persona Chooser Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>&times;</button>
            
            <div className="modal-header">
              <h2>Join Sasakazi Platform</h2>
              <p>Select your path to get started with Kenya's premier talent platform</p>
            </div>

            <div className="modal-grid">
              {/* Talent Path */}
              <div className="modal-card">
                <div className="modal-card-icon talent-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <h3>I'm Digital Talent</h3>
                <p>Build your profile, match with projects, access mentorship, and grow your career.</p>
                <Link href="/register" className="btn btn-accent" onClick={toggleModal}>
                  Join as Talent
                </Link>
              </div>

              {/* Business Path */}
              <div className="modal-card">
                <div className="modal-card-icon business-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3>I'm a Business</h3>
                <p>Post tech projects, evaluate vetted applicants, and track secure milestone delivery.</p>
                <Link href="/register/business" className="btn btn-primary" onClick={toggleModal}>
                  Register Business
                </Link>
              </div>
            </div>
            
            <div className="modal-footer">
              <p>Are you a mentor or program partner? <Link href="/about" className="highlight-link" onClick={toggleModal}>Partner with Us</Link></p>
            </div>
          </div>
        </div>
      )}

      {/* Header and Drawer styles (matching Andreas Finishes navbar system but with white/slate overlay theme) */}
      <style jsx>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 70px;
          background-color: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          z-index: 10000;
          display: flex;
          align-items: center;
          transition: var(--transition-smooth);
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        .navbar-logo-link {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .navbar-logo-img {
          height: 42px;
          width: auto;
          object-fit: contain;
          transition: var(--transition-smooth);
        }
        .navbar-logo-link:hover .navbar-logo-img {
          transform: scale(1.05);
        }

        /* Desktop Nav */
        .navbar-desktop-nav {
          display: none;
          align-items: center;
          gap: 2.5rem;
        }
        @media (min-width: 992px) {
          .navbar-desktop-nav {
            display: flex;
          }
        }
        .navbar-nav-list {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        :global(.navbar-nav-link) {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--color-text-dark) !important;
          padding: 0.5rem 0;
          position: relative;
          transition: var(--transition-fast);
          text-decoration: none;
        }
        :global(.navbar-nav-link):hover,
        :global(.navbar-nav-link.active) {
          color: var(--color-blue) !important;
        }
        :global(.navbar-nav-link.active) {
          font-weight: 800;
        }
        :global(.navbar-nav-link)::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 3px;
          background-color: var(--color-yellow);
          transition: width 0.35s cubic-bezier(0.25, 1, 0.5, 1);
          display: block;
        }
        :global(.navbar-nav-link):hover::after,
        :global(.navbar-nav-link.active)::after {
          width: 100%;
        }
        .navbar-actions-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .navbar-login-link {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--color-text-muted);
        }
        .navbar-login-link:hover {
          color: var(--color-blue);
        }
        .cta-btn {
          padding: 0.6rem 1.4rem !important;
          font-size: 0.85rem !important;
        }

        /* Hamburger button */
        .navbar-mobile-toggle {
          display: flex;
          background: none;
          border: none;
          color: var(--color-blue);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--radius-md);
          transition: background 0.2s ease;
        }
        .navbar-mobile-toggle:hover {
          background: rgba(26, 91, 140, 0.06);
        }
        @media (min-width: 992px) {
          .navbar-mobile-toggle {
            display: none;
          }
        }

        /* ============================================================
           MOBILE DRAWER (White Background Theme)
           ============================================================ */
        .navbar-mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: -8px 0 32px rgba(26, 91, 140, 0.1);
          display: flex;
          flex-direction: column;
          padding: 0;
          transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                      visibility 0.35s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 1100;
          transform: translateX(100%);
          visibility: hidden;
          overflow-y: auto;
          overflow-x: hidden;
        }
        @media (min-width: 480px) {
          .navbar-mobile-drawer {
            width: 320px;
          }
        }
        .navbar-mobile-drawer.open {
          transform: translateX(0);
          visibility: visible;
        }
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--color-border-gray);
          flex-shrink: 0;
        }
        .drawer-logo {
          height: 36px;
          width: auto;
          flex-shrink: 0;
        }
        .drawer-close {
          background: var(--color-bg-light);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-full);
          color: var(--color-text-dark);
          cursor: pointer;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1.5rem;
          line-height: 1;
        }
        .drawer-close:hover {
          background: var(--color-blue-light);
          color: var(--color-blue);
        }
        .drawer-nav {
          padding: 0.75rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .drawer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0 0 auto 0;
          display: flex;
          flex-direction: column;
        }
        .drawer-nav-item {
          width: 100%;
          text-align: left;
        }
        :global(.drawer-nav-link) {
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid var(--color-border-gray);
          transition: color 0.2s ease, padding-left 0.2s ease;
          text-decoration: none;
        }
        :global(.drawer-nav-link):hover {
          color: var(--color-blue);
          padding-left: 0.5rem;
        }
        :global(.drawer-nav-link.active) {
          color: var(--color-blue);
          border-bottom-color: var(--color-yellow);
          padding-left: 0.5rem;
        }
        .drawer-actions-block {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
          width: 100%;
        }
        .drawer-login-link {
          color: var(--color-blue);
          font-weight: 600;
          text-align: center;
          padding: 0.5rem 0;
        }
        .drawer-cta-btn {
          width: 100%;
          justify-content: center;
        }

        /* Backdrop overlay */
        .navbar-overlay-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          z-index: 1050;
          animation: fadeInBackdrop 0.25s ease forwards;
        }
        @keyframes fadeInBackdrop {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Modal styling */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 16px;
          animation: fadeIn 0.2s ease-out;
        }
        .modal-content {
          position: relative;
          width: 100%;
          max-width: 680px;
          padding: 40px;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-premium);
          animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          font-size: 2rem;
          line-height: 1;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .modal-close:hover {
          color: var(--color-text-dark);
        }
        .modal-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .modal-header h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-blue);
          margin-bottom: 8px;
        }
        .modal-header p {
          color: var(--color-text-muted);
        }
        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        .modal-card {
          background-color: rgba(255, 255, 255, 0.6);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: var(--transition-smooth);
        }
        .modal-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-blue);
          box-shadow: var(--shadow-md);
        }
        .modal-card-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .talent-icon {
          background-color: var(--color-primary-light);
          color: var(--color-primary);
        }
        .business-icon {
          background-color: rgba(251, 182, 63, 0.15);
          color: var(--color-accent-dark);
        }
        .modal-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .modal-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .modal-card :global(.btn) {
          width: 100%;
        }
        .modal-footer {
          text-align: center;
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }
        .highlight-link {
          color: var(--color-blue);
          font-weight: 600;
        }
        .highlight-link:hover {
          text-decoration: underline;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 600px) {
          .modal-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .modal-content {
            padding: 24px;
          }
        }
      `}</style>
    </>
  );
}
