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
              src="/logo-white.svg" 
              alt="SasaKazi Logo" 
              width={160} 
              height={48} 
              className="footer-logo-img"
            />
          </Link>
          <p className="footer-tagline">
            Practical digital BPO for Kenyan businesses. Delivered by vetted local talent. Clear outcomes in 30–45 days with no expensive software lock-in.
          </p>
          <div className="footer-powered-by">
            <span>Powered by <strong>EldoHub</strong> • Eldoret &amp; Nairobi</span>
          </div>
          <div className="footer-socials">
            <a href="https://facebook.com/Sasakazi" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://twitter.com/Sasakazi" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="https://instagram.com/Sasakazi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        {/* Links Column 1: Core BPO Services */}
        <div className="footer-col links-col">
          <h3>BPO Services</h3>
          <ul className="footer-links-list">
            <li><Link href="/services/stock-inventory">Stock &amp; Inventory Visibility</Link></li>
            <li><Link href="/services/payments-reconciliation">Payments Reconciliation</Link></li>
            <li><Link href="/services/customer-follow-up">Customer Follow-up</Link></li>
            <li><Link href="/services">View All Services ↗</Link></li>
          </ul>
        </div>

        {/* Links Column 2: Company */}
        <div className="footer-col links-col">
          <h3>Company</h3>
          <ul className="footer-links-list">
            <li><Link href="/about">About SasaKazi</Link></li>
            <li><Link href="/how-it-works">How Delivery Works</Link></li>
            <li><Link href="/for-businesses">For Businesses</Link></li>
            <li><Link href="/contact">Talk to Us / Book a Call</Link></li>
            <li><a href="https://eldohub.co.ke" target="_blank" rel="noopener noreferrer">EldoHub Ecosystem ↗</a></li>
          </ul>
        </div>

        {/* Links Column 3: Contact & Eldoret Address */}
        <div className="footer-col contact-col">
          <h3>Contact Details</h3>
          <ul className="footer-contact-list">
            <li>
              <span className="contact-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <div>
                <span className="contact-label">Email Us</span>
                <a href="mailto:info@sasakazi.co.ke">info@sasakazi.co.ke</a>
              </div>
            </li>
            <li>
              <span className="contact-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <span className="contact-label">Direct Telephone</span>
                <a href="tel:+254723567263">+254 723 567 263</a>
              </div>
            </li>
            <li>
              <span className="contact-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <span className="contact-label">Location</span>
                <span>EldoHub Campus, Eldoret &amp; Nairobi, Kenya</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Talent Secondary Note */}
      <div className="footer-talent-strip">
        <div className="container footer-talent-container">
          <p>
            <strong>Are you a local tech, data, or operations professional?</strong>{" "}
            <Link href="/register" className="footer-talent-link">
              Enrol to join the SasaKazi vetted talent roster &rarr;
            </Link>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {currentYear} SasaKazi. A modern practical digital BPO capability powered by EldoHub.</p>
          <div className="footer-bottom-links">
            <Link href="/safeguarding">Safeguarding</Link>
            <span className="sep">•</span>
            <Link href="/privacy">Privacy</Link>
            <span className="sep">•</span>
            <Link href="/terms">Terms</Link>
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
            grid-template-columns: 1.8fr 1.2fr 1.2fr 1.5fr;
          }
        }
        
        .footer-col h3 {
          color: var(--color-navy);
          font-size: 0.95rem;
          font-weight: 800;
          margin-bottom: var(--spacing-lg);
          position: relative;
          text-transform: uppercase;
          letter-spacing: 1.2px;
        }
        
        .footer-col h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 24px;
          height: 3px;
          background-color: var(--color-teal);
          border-radius: var(--radius-full);
        }
        
        /* Brand Column */
        .brand-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        
        .footer-logo-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }
        .footer-logo-lockup {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-bpo-tag {
          background-color: var(--color-navy);
          color: #ffffff;
          font-family: var(--font-primary);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.8px;
          padding: 2px 7px;
          border-radius: 4px;
          line-height: 1.3;
        }
        
        .footer-tagline {
          color: var(--color-text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          max-width: 320px;
          margin-top: 0.25rem;
        }

        .footer-powered-by {
          font-size: 0.85rem;
          color: var(--color-navy);
          background-color: var(--color-navy-light);
          padding: 6px 12px;
          border-radius: 6px;
          display: inline-block;
          width: fit-content;
        }
        
        .footer-socials {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.25rem;
        }
        
        .footer-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background-color: var(--color-white);
          color: var(--color-navy);
          border: 1px solid var(--color-border-gray);
          transition: all 0.25s ease;
        }
        
        .footer-socials a:hover {
          background-color: var(--color-teal);
          color: var(--color-white);
          border-color: var(--color-teal);
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(13, 148, 136, 0.25);
        }
        
        /* Links Column */
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-links-list a {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
        }
        
        .footer-links-list a:hover {
          color: var(--color-teal);
          padding-left: 6px;
        }
        
        /* Contact Column */
        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        
        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.9rem;
          line-height: 1.4;
          color: var(--color-text-muted);
        }

        .contact-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-text-light);
          font-weight: 700;
          margin-bottom: 2px;
        }
        
        .contact-icon-svg {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background-color: var(--color-navy-light);
          color: var(--color-navy);
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.2s ease;
        }
        
        .footer-contact-list li:hover .contact-icon-svg {
          background-color: var(--color-teal-light);
          color: var(--color-teal);
          transform: scale(1.08);
        }
        
        .footer-contact-list a {
          color: var(--color-text-muted);
          text-decoration: none;
          transition: var(--transition-fast);
        }
        
        .footer-contact-list a:hover {
          color: var(--color-navy);
        }

        /* Talent Strip */
        .footer-talent-strip {
          border-top: 1px dashed var(--color-border-gray);
          background-color: rgba(31, 78, 121, 0.03);
          padding: 1rem 0;
          font-size: 0.88rem;
          color: var(--color-text-muted);
        }
        .footer-talent-container {
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .footer-talent-link {
          color: var(--color-teal);
          font-weight: 700;
          text-decoration: underline;
        }
        .footer-talent-link:hover {
          color: var(--color-teal-dark);
        }
        
        /* Bottom Bar */
        .footer-bottom {
          border-top: 1px solid var(--color-border-gray);
          padding: 1.5rem 0;
          background-color: #ffffff;
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
        
        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-bottom-links a {
          color: var(--color-text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .footer-bottom-links a:hover {
          color: var(--color-blue);
        }

        .sep {
          color: var(--color-border-gray);
        }
      `}</style>
    </footer>
  );
}
