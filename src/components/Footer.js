"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid-container">
        {/* Brand Block */}
        <div className="footer-col brand-col">
          <Link href="/" className="footer-logo-link">
            <Image 
              src="/logo.png" 
              alt="Sasakazi Logo" 
              width={140} 
              height={44} 
              className="footer-logo-img"
            />
          </Link>
          <p className="footer-tagline">
            Sasakazi connects young Kenyan tech talent with skills training, mentorship, assessments, and real business projects under mentor guardrails.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com/Sasakazi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://facebook.com/Sasakazi" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://twitter.com/Sasakazi" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="https://wa.me/254723567263?text=Hello%20Sasakazi%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20digital%20talent%2C%20training%2C%20and%20project%20opportunities." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Contact">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
            </a>
          </div>
        </div>

        {/* Links Column 1: Platform */}
        <div className="footer-col links-col">
          <h3>Platform</h3>
          <ul className="footer-links-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Sasakazi</Link></li>
            <li><Link href="/services">Our Services</Link></li>
            <li><Link href="/opportunities">Opportunities</Link></li>
            <li><Link href="/talents">Talents Directory</Link></li>
          </ul>
        </div>

        {/* Links Column 2: Support */}
        <div className="footer-col links-col">
          <h3>Support</h3>
          <ul className="footer-links-list">
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            <li><Link href="/contact">Contact Support</Link></li>
          </ul>
        </div>

        {/* Links Column 3: Contact */}
        <div className="footer-col contact-col">
          <h3>Contact Details</h3>
          <ul className="footer-contact-list">
            <li>
              <span className="contact-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <a href="tel:+254723567263">+254 723 567 263</a>
              </div>
            </li>
            <li>
              <span className="contact-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <a href="mailto:info@sasakazi.com">info@sasakazi.com</a>
            </li>
            <li>
              <span className="contact-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {currentYear} Sasakazi Platform. Built with &hearts; in Kenya. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/contact">Support Center</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background-color: var(--color-bg-light);
          color: var(--color-text-dark);
          padding: var(--spacing-xl) 0 0 0;
          border-top: 4px solid transparent;
          border-image: linear-gradient(90deg, var(--color-blue) 0%, var(--color-yellow) 50%, var(--color-blue) 100%) 1;
          font-family: var(--font-primary);
        }
        
        .footer-grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
          text-align: left;
        }
        
        @media (min-width: 576px) {
          .footer-grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 992px) {
          .footer-grid-container {
            grid-template-columns: 2.2fr 1fr 1fr 1.5fr;
          }
        }
        
        .footer-col h3 {
          color: var(--color-blue-dark);
          font-size: 1rem;
          font-weight: 800;
          margin-bottom: var(--spacing-lg);
          position: relative;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        
        .footer-col h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 24px;
          height: 3px;
          background-color: var(--color-yellow);
          border-radius: var(--radius-full);
        }
        
        /* Brand Column */
        .brand-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        
        .footer-logo-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: transform 0.3s ease;
        }
        .footer-logo-link:hover {
          transform: scale(1.02);
        }
        
        .footer-tagline {
          color: var(--color-text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          max-width: 320px;
          margin-top: 0.25rem;
        }
        
        .footer-socials {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        
        .footer-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background-color: var(--color-white);
          color: var(--color-blue);
          border: 1px solid var(--color-border-gray);
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .footer-socials a:hover {
          background-color: var(--color-blue);
          color: var(--color-white);
          border-color: var(--color-blue);
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 10px 20px rgba(26, 91, 140, 0.1);
        }
        
        /* Links Column */
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        
        .footer-links-list a {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
        }
        
        .footer-links-list a::before {
          content: '→';
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          color: var(--color-yellow-dark);
          font-weight: 800;
        }
        
        .footer-links-list a:hover {
          color: var(--color-blue);
          padding-left: 10px;
        }
        
        .footer-links-list a:hover::before {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Contact Column */
        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        
        .footer-contact-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.92rem;
          line-height: 1.4;
          color: var(--color-text-muted);
        }
        
        .contact-icon-svg {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background-color: var(--color-blue-light);
          color: var(--color-blue);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        
        .footer-contact-list li:hover .contact-icon-svg {
          background-color: var(--color-yellow-light);
          color: var(--color-yellow-dark);
          transform: scale(1.1);
          box-shadow: 0 4px 10px rgba(251, 182, 63, 0.1);
        }
        
        .footer-contact-list a {
          color: var(--color-text-muted);
          text-decoration: none;
          transition: var(--transition-fast);
        }
        
        .footer-contact-list a:hover {
          color: var(--color-blue);
        }
        
        /* Bottom Bar */
        .footer-bottom {
          border-top: 1px solid var(--color-border-gray);
          padding: 1.75rem 0;
          margin-top: var(--spacing-xl);
          background-color: rgba(26, 91, 140, 0.02);
          font-size: 0.85rem;
        }
        
        .footer-bottom-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          text-align: center;
          color: var(--color-text-muted);
        }
        
        @media (min-width: 768px) {
          .footer-bottom-container {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
        
        .footer-bottom-links a {
          color: var(--color-text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .footer-bottom-links a:hover {
          color: var(--color-blue);
        }
      `}</style>
    </footer>
  );
}
