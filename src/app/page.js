"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Kinetic Animated Counter Component
const AnimatedCounter = ({ value, suffix = "", duration = 1600 }) => {
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const counterRef = React.useRef(null);

  useEffect(() => {
    if (!counterRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasTriggered]);

  useEffect(() => {
    if (!hasTriggered) return;
    let start = 0;
    const startTime = performance.now();
    let frameId;

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * (value - start) + start));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [hasTriggered, value, duration]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  // Scroll Reveal Observer
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observerOptions = {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      ".reveal-on-scroll, .reveal-left, .reveal-right, .reveal-card"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const coreServices = [
    {
      id: "stock-inventory",
      title: "Stock & Inventory Visibility",
      price: "From KES 25,000",
      timeframe: "30-Day Pilot",
      headline: "Stop unexplained stock shrinkage and gain daily inventory clarity.",
      description: "We organize your catalog, audit physical stock, implement daily stock-count tracking, and configure simple discrepancy alert sheets.",
      deliverables: [
        "Full itemized catalog audit",
        "Daily physical count & variance tracker",
        "Weekly stock movement dashboard",
        "Staff training on daily record keeping"
      ],
      href: "/services/stock-inventory",
      badge: "Retail & Distribution",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      )
    },
    {
      id: "payments-reconciliation",
      title: "Payments Reconciliation",
      price: "From KES 20,000",
      timeframe: "30-Day Pilot",
      headline: "Match every M-Pesa till payment, bank deposit, and sales invoice.",
      description: "Eliminate end-of-month accounting nightmares. We map your mobile money transactions to customer invoices with zero missing shillings.",
      deliverables: [
        "Daily M-Pesa till to bank deposit match",
        "Unallocated customer payment log",
        "Accounts receivable aging schedule",
        "End-of-week reconciliation sign-off"
      ],
      href: "/services/payments-reconciliation",
      badge: "Finance & Accounts",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
          <circle cx="7" cy="15" r="1" />
          <circle cx="11" cy="15" r="1" />
        </svg>
      )
    },
    {
      id: "customer-follow-up",
      title: "Customer Follow-up",
      price: "From KES 18,000",
      timeframe: "30-Day Pilot",
      headline: "Revive dormant inquiries and close quotes waiting on customer replies.",
      description: "Stop letting valuable inquiries slip through WhatsApp and email. Dedicated local professionals follow up on outstanding quotes and nurture repeat sales.",
      deliverables: [
        "Customer contact & lead cleanup",
        "WhatsApp & phone follow-up cadence",
        "Quote status tracker & CRM update",
        "Weekly customer feedback insights"
      ],
      href: "/services/customer-follow-up",
      badge: "Sales & Client Service",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14 2v4" />
          <path d="M18 6v4" />
        </svg>
      )
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Qualify",
      description: "A focused 15-minute diagnostic call to understand your immediate operational bottleneck."
    },
    {
      number: "2",
      title: "Assess Needs",
      description: "We define precise 30–45 day pilot deliverables, milestones, and acceptance criteria."
    },
    {
      number: "3",
      title: "Match Talent",
      description: "We deploy vetted, trained local professionals matched specifically to your operational stack."
    },
    {
      number: "4",
      title: "Deliver with QA",
      description: "Structured execution backed by weekly review checkpoints and senior EldoHub mentorship."
    },
    {
      number: "5",
      title: "Handover",
      description: "Clean sign-off, documented process handover, with the option for ongoing monthly support."
    }
  ];

  const differentiators = [
    {
      title: "No Expensive Software",
      desc: "We work directly inside your existing spreadsheets, WhatsApp Business, POS, or cloud files. No costly licenses or complex ERP setups required.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
      )
    },
    {
      title: "Senior Mentorship & QA",
      desc: "Every talent pod is paired with a seasoned operations mentor to oversee quality gates, audit accuracy, and uphold enterprise standards.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: "Fixed-Price Transparency",
      desc: "Clear upfront pilot pricing with agreed milestones. You know exactly what you get and what you pay from day one.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )
    },
    {
      title: "Results in 30–45 Days",
      desc: "Fast, measurable results. We don't drag out long discovery phases—we deliver tangible business clarity within the first month.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      q: "What makes SasaKazi different from hiring a freelancer?",
      a: "SasaKazi is a managed BPO service, not an unvetted gig marketplace. You get a governed engagement with clear pilot deliverables, senior mentor QA oversight, structured milestones, and a guaranteed handover standard."
    },
    {
      q: "Do I need to buy expensive software or systems for this to work?",
      a: "No. We believe in practical solutions. We build workflows using the tools you already have—Excel, Google Sheets, WhatsApp Business, your existing POS, or cloud drives—saving you tens of thousands in software subscriptions."
    },
    {
      q: "What happens after the 30–45 day pilot finishes?",
      a: "You receive clean, documented deliverables and training for your internal staff. If you prefer continuous peace of mind, you can retain your dedicated talent on a simple monthly support agreement."
    },
    {
      q: "How fast can we start a pilot?",
      a: "Following our initial qualification call and scope agreement, we match and deploy your talent pod within 3 to 5 business days."
    }
  ];

  return (
    <div className="bpo-home-page">
      {/* 1. HERO SECTION (Tightly padded with no excess top margin, badge removed) */}
      <section className="bpo-hero-section">
        <div className="container hero-container">
          {/* Left Column: Hero Copy */}
          <div className="hero-content reveal-left">
            <h1 className="hero-title">
              Practical digital BPO for Kenyan businesses
            </h1>
            
            <p className="hero-subtitle">
              Delivered by vetted local talent. Clear outcomes in 30–45 days. No expensive software.
            </p>

            <div className="hero-cta-group">
              <Link href="/contact" className="btn btn-teal hero-primary-btn">
                Book a short call
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link href="/services" className="btn btn-outline-navy hero-secondary-btn">
                View our services
              </Link>
            </div>

            <div className="hero-reassurance-row">
              <div className="reassurance-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Fixed-Price Pilots</span>
              </div>
              <div className="reassurance-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Vetted Local Talent</span>
              </div>
              <div className="reassurance-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Senior QA Mentorship</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, High-Impact BPO Pilot Model Card */}
          <div className="hero-visual-card reveal-right">
            <div className="clean-bpo-card">
              {/* Card Header */}
              <div className="card-top-row">
                <span className="card-title-text">Active SasaKazi Pilot Model</span>
                <span className="card-status-pill">Governed Delivery</span>
              </div>

              {/* Two Prominent Metrics */}
              <div className="card-metrics-duo">
                <div className="clean-metric-box">
                  <span className="metric-large">30–45</span>
                  <span className="metric-caption">Days to Outcome</span>
                </div>
                <div className="clean-metric-box">
                  <span className="metric-large">100%</span>
                  <span className="metric-caption">QA Supervised</span>
                </div>
              </div>

              {/* Three Clean Benefit Items */}
              <div className="card-checklist">
                <div className="check-row">
                  <div className="check-circle">✓</div>
                  <div className="check-text">
                    <strong>Inventory Tracking:</strong> Daily stock reconciliation without stockouts
                  </div>
                </div>

                <div className="check-row">
                  <div className="check-circle">✓</div>
                  <div className="check-text">
                    <strong>Payment Audits:</strong> Seamless M-Pesa to bank ledger matching
                  </div>
                </div>

                <div className="check-row">
                  <div className="check-circle">✓</div>
                  <div className="check-text">
                    <strong>Customer Cadence:</strong> Converting cold quotes into active revenue
                  </div>
                </div>
              </div>

              {/* Subtle Trust Footer */}
              <div className="card-bottom-pill">
                <span>EldoHub Verified Standards • Eldoret HQ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROOF / TRUST BAR (Dark Navy Background with Scroll Stagger) */}
      <section className="bpo-proof-bar reveal-on-scroll">
        <div className="container">
          <div className="bpo-proof-grid">
            <div className="bpo-proof-item reveal-card" style={{ transitionDelay: '0.05s' }}>
              <div className="bpo-proof-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="bpo-proof-text">
                <strong><AnimatedCounter value={50} suffix="+" /></strong>
                <span>Businesses Supported</span>
              </div>
            </div>

            <div className="bpo-proof-item reveal-card" style={{ transitionDelay: '0.15s' }}>
              <div className="bpo-proof-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="bpo-proof-text">
                <strong>Vetted Local Talent</strong>
                <span>Trained in Eldoret &amp; Nairobi</span>
              </div>
            </div>

            <div className="bpo-proof-item reveal-card" style={{ transitionDelay: '0.25s' }}>
              <div className="bpo-proof-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <div className="bpo-proof-text">
                <strong>Fixed-Price Pilots</strong>
                <span>Clear upfront scopes</span>
              </div>
            </div>

            <div className="bpo-proof-item reveal-card" style={{ transitionDelay: '0.35s' }}>
              <div className="bpo-proof-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="bpo-proof-text">
                <strong>Mentorship Included</strong>
                <span>Senior QA oversight on work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES (Three Equal Cards with Price Entry Points & Staggered Animations) */}
      <section className="bpo-services-section" id="services">
        <div className="container">
          <div className="section-head text-center reveal-on-scroll">
            <span className="badge-sub">Packaged BPO Pilots</span>
            <h2 className="section-title">Our Core BPO Services</h2>
            <p className="section-desc">
              Packaged, outcome-driven operational pilots built specifically for Kenyan SMEs. Start with one defined problem and see results in 30 days.
            </p>
          </div>

          <div className="services-cards-grid">
            {coreServices.map((service, index) => (
              <div 
                key={service.id} 
                className="bpo-service-card reveal-card"
                style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
              >
                <div className="service-card-top">
                  <span className="bpo-service-badge">{service.badge}</span>
                  <div className="service-icon-wrap">{service.icon}</div>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <div className="bpo-service-price">
                  {service.price} <span>/ 30-day pilot</span>
                </div>

                <p className="service-card-headline">{service.headline}</p>
                <p className="service-card-desc">{service.description}</p>

                <div className="service-deliverables">
                  <span className="deliverables-title">What you get:</span>
                  <ul>
                    {service.deliverables.map((item, i) => (
                      <li key={i}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-footer">
                  <Link href={service.href} className="btn btn-teal service-btn">
                    Learn more &amp; Request Pilot
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="services-extra-note text-center reveal-on-scroll">
            <p>
              Need a tailored workflow or broader business process outsourcing?{" "}
              <Link href="/contact" className="text-teal-bold">
                Talk to our solutions team for a custom scope &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (Five-Step Horizontal Process with Stagger) */}
      <section className="bpo-process-section" id="how-it-works">
        <div className="container">
          <div className="section-head text-center reveal-on-scroll">
            <span className="badge-sub">Governed Execution</span>
            <h2 className="section-title">How Delivery Works</h2>
            <p className="section-desc">
              From our first diagnostic conversation to milestone handover, every step is transparent and supervised.
            </p>
          </div>

          <div className="process-timeline-grid">
            {processSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="bpo-process-step reveal-card"
                style={{ transitionDelay: `${0.08 + idx * 0.12}s` }}
              >
                <div className="bpo-step-number">{step.number}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="process-cta-box text-center reveal-on-scroll">
            <Link href="/how-it-works" className="btn btn-outline-navy">
              Explore Our Full Governed Process &amp; QA Standards
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY SASAKAZI (4 SME Differentiators) */}
      <section className="bpo-why-section">
        <div className="container">
          <div className="why-content-wrapper">
            <div className="why-intro reveal-left">
              <span className="badge-sub">The SasaKazi Advantage</span>
              <h2>Why Kenyan SMEs Choose SasaKazi</h2>
              <p>
                Most business software fails because it is either too expensive, too complicated, or requires weeks of staff training. We solve the problem with real people and governed delivery.
              </p>
              <div className="why-callout">
                <p>
                  <strong>Backed by EldoHub:</strong> SasaKazi combines real market problem-solving for enterprises with rigorous digital career progression for African youth.
                </p>
              </div>
            </div>

            <div className="why-grid">
              {differentiators.map((item, idx) => (
                <div 
                  key={idx} 
                  className="why-card reveal-card"
                  style={{ transitionDelay: `${0.1 + idx * 0.15}s` }}
                >
                  <div className="why-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ PREVIEW */}
      <section className="bpo-faq-section" id="faqs">
        <div className="container faq-container">
          <div className="section-head text-center reveal-on-scroll">
            <span className="badge-sub">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Everything you need to know about our pilot structure, pricing, and handover.
            </p>
          </div>

          <div className="faq-accordion reveal-on-scroll">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? "open" : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <div className="faq-arrow">{activeFaq === index ? "−" : "+"}</div>
                </div>
                {activeFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 DEDICATED TECH TALENT ENROLMENT CTA */}
      <section className="bpo-talent-enrol-section">
        <div className="container">
          <div className="talent-enrol-card reveal-on-scroll">
            <div className="talent-enrol-content">
              <span className="talent-enrol-pill">For Kenyan Tech &amp; Operations Talent</span>
              <h2>Are You a Skilled Tech, Data, or Operations Talent?</h2>
              <p className="talent-enrol-desc">
                SasaKazi connects vetted Kenyan digital talent to real business projects across inventory management, financial reconciliation, and customer operations. Gain practical client experience, EldoHub mentorship, and paid contract opportunities.
              </p>
              
              <div className="talent-perks-row">
                <div className="talent-perk-badge">
                  <div className="perk-icon-svg">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div className="perk-text">
                    <strong>Paid Engagements</strong>
                    <small>Real business projects</small>
                  </div>
                </div>
                <div className="talent-perk-badge">
                  <div className="perk-icon-svg">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div className="perk-text">
                    <strong>EldoHub Mentorship</strong>
                    <small>Continuous upskilling</small>
                  </div>
                </div>
                <div className="talent-perk-badge">
                  <div className="perk-icon-svg">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <div className="perk-text">
                    <strong>Verified Portfolio</strong>
                    <small>Proven track record</small>
                  </div>
                </div>
              </div>

              <div className="talent-enrol-actions">
                <Link href="/register" className="btn btn-teal btn-lg">
                  Enrol as Tech Talent Now
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/talents" className="btn btn-outline-navy btn-lg">
                  Browse Talent Roster
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL HIGH-CONVERSION CTA */}
      <section className="bpo-final-cta-section">
        <div className="container">
          <div className="final-cta-card reveal-on-scroll">
            <div className="final-cta-content text-center">
              <span className="final-pill">No Long Sales Cycle • Fast 24h Response</span>
              <h2>Ready to solve one practical problem?</h2>
              <p>
                Stop losing sleep over manual stock counts, delayed reconciliations, or unanswered customer quotes. Let’s scope a clear 30-day pilot together.
              </p>
              <div className="final-cta-btns">
                <Link href="/contact" className="btn btn-teal btn-lg">
                  Book a short call
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <button 
                  type="button"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(new CustomEvent('open-sasakazi-chat'));
                    }
                  }}
                  className="btn btn-outline-white btn-lg"
                  style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Chat with SasaBot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styled JSX Scoped to Homepage */}
      <style jsx>{`
        .bpo-home-page {
          background-color: var(--color-bg-light, #F8FAFC);
          overflow-x: hidden;
        }

        /* =========================================================
           SCROLL ANIMATIONS SYSTEM
           ========================================================= */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-left {
          opacity: 0;
          transform: translateX(-32px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal-left.revealed {
          opacity: 1;
          transform: translateX(0);
        }

        .reveal-right {
          opacity: 0;
          transform: translateX(32px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal-right.revealed {
          opacity: 1;
          transform: translateX(0);
        }

        .reveal-card {
          opacity: 0;
          transform: translateY(24px) scale(0.98);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal-card.revealed {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* 1. HERO SECTION (Tightened top padding, no badge) */
        .bpo-hero-section {
          padding: 1.25rem 0 3.5rem 0;
          background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
          border-bottom: 1px solid var(--color-border-gray, #E2E8F0);
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 992px) {
          .hero-container {
            grid-template-columns: 1.2fr 1fr;
            gap: 3.5rem;
          }
        }
        .hero-content {
          padding-top: 0.5rem;
        }
        .hero-title {
          font-size: 2.5rem;
          line-height: 1.15;
          color: var(--color-navy);
          font-weight: 800;
          margin-top: 0;
          margin-bottom: 1.25rem;
          letter-spacing: -0.5px;
        }
        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.4rem;
          }
        }
        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 580px;
        }
        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.25rem;
        }
        .hero-primary-btn {
          font-size: 1.05rem !important;
          padding: 0.95rem 2.2rem !important;
        }
        .hero-secondary-btn {
          font-size: 1.05rem !important;
          padding: 0.95rem 2rem !important;
        }
        .hero-reassurance-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          font-size: 0.88rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }
        .reassurance-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* =========================================================
           CLEAN, HIGH-IMPACT BPO HERO CARD
           ========================================================= */
        .hero-visual-card {
          position: relative;
        }
        .clean-bpo-card {
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid var(--color-border-gray, #E2E8F0);
          box-shadow: 0 14px 36px rgba(31, 78, 121, 0.08);
          padding: 2.25rem 2rem;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .clean-bpo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 44px rgba(31, 78, 121, 0.12);
        }
        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.75rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border-gray);
        }
        .card-title-text {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--color-navy);
          letter-spacing: -0.2px;
        }
        .card-status-pill {
          font-size: 0.78rem;
          font-weight: 700;
          background: var(--color-teal-light);
          color: var(--color-teal-dark);
          padding: 4px 10px;
          border-radius: 6px;
        }
        .card-metrics-duo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .clean-metric-box {
          background: var(--color-bg-light);
          border: 1px solid var(--color-border-gray);
          border-radius: 12px;
          padding: 1.25rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .metric-large {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1;
        }
        .metric-caption {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }
        .card-checklist {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .check-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .check-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--color-teal-light);
          color: var(--color-teal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.78rem;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .check-text {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.45;
        }
        .check-text strong {
          color: var(--color-navy);
          font-weight: 700;
        }
        .card-bottom-pill {
          background: var(--color-bg-light);
          border: 1px dashed var(--color-border-gray);
          color: var(--color-navy);
          font-size: 0.82rem;
          font-weight: 700;
          text-align: center;
          padding: 10px 14px;
          border-radius: 10px;
        }

        /* 3. Core Services */
        .bpo-services-section {
          padding: 5rem 0;
          background: #ffffff;
        }
        .section-head {
          max-width: 680px;
          margin: 0 auto 3.5rem auto;
        }
        .text-center {
          text-align: center;
        }
        .badge-sub {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: var(--color-teal);
          margin-bottom: 0.75rem;
        }
        .section-title {
          font-size: 2.2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .section-desc {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        .services-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
        @media (min-width: 992px) {
          .services-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .service-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }
        .service-icon-wrap {
          color: var(--color-teal);
          background: var(--color-teal-light);
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-card-title {
          font-size: 1.35rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 0.4rem;
        }
        .service-card-headline {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--color-text-dark);
          margin-bottom: 0.6rem;
          line-height: 1.4;
        }
        .service-card-desc {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }
        .service-deliverables {
          background: var(--color-bg-light);
          padding: 1.25rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .deliverables-title {
          display: block;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-navy);
          margin-bottom: 0.75rem;
        }
        .service-deliverables ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .service-deliverables li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.84rem;
          color: var(--color-text-dark);
          line-height: 1.3;
        }
        .service-btn {
          width: 100%;
        }
        .text-teal-bold {
          color: var(--color-teal);
          font-weight: 700;
          text-decoration: underline;
        }

        /* 4. Process Timeline */
        .bpo-process-section {
          padding: 5rem 0;
          background: var(--color-bg-light);
          border-top: 1px solid var(--color-border-gray);
          border-bottom: 1px solid var(--color-border-gray);
        }
        .process-timeline-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        @media (min-width: 768px) {
          .process-timeline-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 1.25rem;
          }
        }
        .step-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--color-navy);
          margin-bottom: 0.5rem;
        }
        .step-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.45;
        }

        /* 5. Why SasaKazi */
        .bpo-why-section {
          padding: 5rem 0;
          background: #ffffff;
        }
        .why-content-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 992px) {
          .why-content-wrapper {
            grid-template-columns: 1fr 1.2fr;
            gap: 4rem;
          }
        }
        .why-intro h2 {
          font-size: 2.2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .why-intro p {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .why-callout {
          background: var(--color-navy-light);
          border-left: 4px solid var(--color-navy);
          padding: 1rem 1.25rem;
          border-radius: 0 8px 8px 0;
          font-size: 0.9rem;
          color: var(--color-navy);
        }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 576px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .why-card {
          background: var(--color-bg-light);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid var(--color-border-gray);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .why-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(31, 78, 121, 0.08);
          border-color: rgba(13, 148, 136, 0.3);
        }
        .why-icon {
          color: var(--color-teal);
          margin-bottom: 0.75rem;
        }
        .why-card h4 {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--color-navy);
          margin-bottom: 0.4rem;
        }
        .why-card p {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.45;
          margin-bottom: 0;
        }

        /* 6. FAQ Section */
        .bpo-faq-section {
          padding: 5rem 0;
          background: var(--color-bg-light);
        }
        .faq-container {
          max-width: 820px;
        }
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          background: #ffffff;
          border: 1px solid var(--color-border-gray);
          border-radius: 10px;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .faq-item:hover {
          border-color: var(--color-teal);
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
          font-size: 1.02rem;
          color: var(--color-navy);
        }
        .faq-arrow {
          font-size: 1.3rem;
          color: var(--color-teal);
          font-weight: 800;
        }
        .faq-answer {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-gray);
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* 6.5 Talent Enrolment CTA Section */
        .bpo-talent-enrol-section {
          padding: 2rem 0 3.5rem 0;
          background: var(--color-bg-light);
        }
        .talent-enrol-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 3rem 2rem;
          border: 1px solid var(--color-border-gray);
          box-shadow: 0 10px 30px rgba(31, 78, 121, 0.06);
          position: relative;
          overflow: hidden;
        }
        .talent-enrol-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--color-teal) 0%, var(--color-gold) 100%);
        }
        .talent-enrol-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .talent-enrol-pill {
          display: inline-block;
          background: var(--color-teal-light);
          color: var(--color-teal-dark);
          font-size: 0.85rem;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          margin-bottom: 1.25rem;
        }
        .talent-enrol-content h2 {
          font-size: 2rem;
          color: var(--color-navy);
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .talent-enrol-desc {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }
        .talent-perks-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          text-align: left;
        }
        @media (min-width: 768px) {
          .talent-perks-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .talent-perk-badge {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid var(--color-border-gray);
          box-shadow: 0 4px 12px rgba(31, 78, 121, 0.04);
          transition: all 0.25s ease;
        }
        .talent-perk-badge:hover {
          transform: translateY(-2px);
          border-color: var(--color-teal);
          box-shadow: 0 8px 20px rgba(13, 148, 136, 0.12);
        }
        .perk-icon-svg {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          background: rgba(13, 148, 136, 0.08);
          color: var(--color-teal);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }
        .talent-perk-badge:hover .perk-icon-svg {
          background: var(--color-teal);
          color: #ffffff;
          transform: scale(1.05);
        }
        .perk-text strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-navy);
        }
        .perk-text small {
          display: block;
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
        .talent-enrol-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .btn-outline-navy {
          background: transparent;
          color: var(--color-navy);
          border: 2px solid var(--color-navy);
        }
        .btn-outline-navy:hover {
          background: var(--color-navy);
          color: #ffffff;
        }

        /* 7. Final High-Conversion CTA */
        .bpo-final-cta-section {
          padding: 4rem 0 5rem 0;
          background: var(--color-bg-light);
        }
        .final-cta-card {
          background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 100%);
          border-radius: 20px;
          padding: 3.5rem 2rem;
          color: #ffffff;
          box-shadow: 0 16px 36px rgba(15, 47, 77, 0.25);
        }
        .final-cta-content {
          max-width: 700px;
          margin: 0 auto;
        }
        .final-pill {
          display: inline-block;
          background: rgba(13, 148, 136, 0.25);
          color: #5eead4;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 4px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 1.25rem;
          border: 1px solid rgba(13, 148, 136, 0.4);
        }
        .final-cta-content h2 {
          font-size: 2.2rem;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .final-cta-content p {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .final-cta-btns {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .btn-lg {
          padding: 1rem 2.2rem !important;
          font-size: 1.05rem !important;
        }
      `}</style>
    </div>
  );
}
