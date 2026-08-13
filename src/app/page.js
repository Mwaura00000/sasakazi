"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const AnimatedCount = ({ value, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) {
      setCount(value);
      return;
    }
    if (start === end) {
      setCount(end);
      return;
    }

    const increment = end / (duration / 16);
    let current = 0;

    const counter = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [hasStarted, value, duration]);

  const suffix = value.toString().replace(/^[0-9]+/, "");
  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategoryTab, setActiveCategoryTab] = useState("all");

  const slides = [
    {
      title: "Empowering Kenyan Youth through Digital Skills & Real Business Projects",
      desc: "Sasakazi connects young digital professionals with skills training, mentorship, assessments, and paid digital projects from businesses across Kenya.",
      cta: "Build Your Profile (Talent)",
      link: "/register",
      ctaSecondary: "Post a Project (Business)",
      linkSecondary: "/register/business",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Connecting Businesses with Pre-Vetted Tech Talent",
      desc: "Post software, web development, and UI/UX design projects under milestone escrow protection with senior technical mentor guardrails.",
      cta: "Outsource Project Now",
      link: "/register/business",
      ctaSecondary: "Explore Our Services",
      linkSecondary: "/services",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Guiding Careers through Mentorship & Apprenticeships",
      desc: "Access mentorship, internships, fellowships, and long-term career growth opportunities as you build a verified technical track record.",
      cta: "Search Talent Directory",
      link: "/talents",
      ctaSecondary: "Explore Opportunities",
      linkSecondary: "/opportunities",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80"
    }
  ];

  // Carousel slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Scroll triggered animations observer
  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observerOptions = {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.05
      };

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const targets = document.querySelectorAll(
        ".section-title-wrapper, .journey-card, .category-card, .process-cta, .explore-more-cta, .shared-mechanics-panel, .faq-item, .metric-card, .escrow-panel-card, .spotlight-card, .estimator-container"
      );
      targets.forEach((t) => observer.observe(t));

      return () => observer.disconnect();
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const journeySteps = [
    {
      id: 0,
      title: "Talent Profiles",
      desc: "Young tech professionals create profiles, list skills, and prepare for assessment and matching.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <polyline points="16 11 18 13 22 9" />
        </svg>
      ),
      accent: "var(--color-blue)",
      bgClass: "blue-circle",
      link: "/register"
    },
    {
      id: 1,
      title: "Learning & Assessment",
      desc: "Talents build soft and technical skills, complete assessments, and improve readiness.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M9 10l2 2 4-4" />
        </svg>
      ),
      accent: "var(--color-blue)",
      bgClass: "blue-circle",
      link: "/about"
    },
    {
      id: 2,
      title: "Digital Projects",
      desc: "Businesses post digital needs and get matched with vetted talents for practical projects.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      accent: "var(--color-blue)",
      bgClass: "blue-circle",
      link: "/services"
    },
    {
      id: 3,
      title: "Career Growth",
      desc: "Talents access mentorship, internships, fellowships, jobs, and long-term growth opportunities.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
          <path d="M12 2C7.5 2 4.5 4.5 4.5 11c0 2 1 3.5 2 4.5l5.5-5.5 5.5 5.5c1-1 2-2.5 2-4.5C19.5 4.5 16.5 2 12 2z" />
          <path d="M9 15c-1.25 1.5-2.5 4.5-2.5 4.5s3-1.25 4.5-2.5" />
          <line x1="12" y1="10" x2="12" y2="10.01" strokeWidth="3" />
        </svg>
      ),
      accent: "var(--color-yellow)",
      bgClass: "yellow-circle",
      link: "/opportunities"
    }
  ];

  // 6 Expanded Technology Categories (Solid colors, no gradients)
  const featuredCategories = [
    {
      id: "web-dev",
      group: "software",
      title: "Web & Fullstack Engineering",
      description: "Pixel-perfect React, Next.js, and Node.js web applications built under senior developer supervision.",
      badge: "High Demand",
      iconBg: "var(--color-blue)",
      iconColor: "#ffffff",
      badgeClass: "badge-solid-blue",
      skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "TypeScript"],
      count: "14 available",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
          <line x1="14" y1="4" x2="10" y2="20"></line>
        </svg>
      )
    },
    {
      id: "mobile-dev",
      group: "software",
      title: "Mobile App Development",
      description: "Cross-platform Flutter and React Native mobile apps for iOS and Android built with clean architecture.",
      badge: "Trending",
      iconBg: "var(--color-yellow-dark)",
      iconColor: "#1e293b",
      badgeClass: "badge-solid-yellow",
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      count: "9 available",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      id: "ui-ux",
      group: "design",
      title: "UI/UX Product Design",
      description: "Interactive Figma wireframes, mockups, design systems, and rapid user testing prototypes.",
      badge: "Premium Quality",
      iconBg: "var(--color-blue-dark)",
      iconColor: "#ffffff",
      badgeClass: "badge-solid-dark",
      skills: ["Figma", "Design Systems", "Prototyping", "UX Audit", "Wireframing"],
      count: "8 available",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      )
    },
    {
      id: "data-ai",
      group: "data",
      title: "Data Engineering & AI",
      description: "Python data pipelines, automated reporting dashboards, machine learning models, and AI integrations.",
      badge: "Fast Growing",
      iconBg: "var(--color-blue)",
      iconColor: "#ffffff",
      badgeClass: "badge-solid-blue",
      skills: ["Python", "SQL", "Pandas", "Power BI", "OpenAI APIs"],
      count: "6 available",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    },
    {
      id: "cloud-devops",
      group: "data",
      title: "DevOps & Cloud Infrastructure",
      description: "Docker containerization, CI/CD pipeline automation, and secure AWS/GCP cloud deployments.",
      badge: "Essential",
      iconBg: "var(--color-yellow-dark)",
      iconColor: "#1e293b",
      badgeClass: "badge-solid-yellow",
      skills: ["Docker", "AWS", "GitHub Actions", "Linux", "Nginx"],
      count: "5 available",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      )
    },
    {
      id: "cyber-qa",
      group: "data",
      title: "Cybersecurity & QA Testing",
      description: "Vulnerability audits, automated test suites (Jest/Cypress), and security compliance checks.",
      badge: "Verified Guard",
      iconBg: "var(--color-blue-dark)",
      iconColor: "#ffffff",
      badgeClass: "badge-solid-dark",
      skills: ["Cypress", "Jest", "Security Audit", "API Testing", "OWASP"],
      count: "7 available",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ];

  const filteredCategories = activeCategoryTab === "all"
    ? featuredCategories
    : featuredCategories.filter(cat => cat.group === activeCategoryTab);

  // Spotlight Talents
  const spotlightTalents = [
    {
      id: 1,
      name: "Kevin Ochieng",
      role: "Fullstack Web Engineer",
      skills: ["React", "Next.js", "Node.js", "PostgreSQL"],
      rating: "4.9",
      projectsCount: "18 Projects",
      initials: "KO",
      bgColor: "var(--color-blue)"
    },
    {
      id: 2,
      name: "Amina Hassan",
      role: "Mobile App Specialist",
      skills: ["Flutter", "React Native", "Firebase", "REST"],
      rating: "5.0",
      projectsCount: "14 Projects",
      initials: "AH",
      bgColor: "var(--color-yellow-dark)"
    },
    {
      id: 3,
      name: "Brian Kiprop",
      role: "UI/UX & Product Designer",
      skills: ["Figma", "Design Systems", "Prototyping"],
      rating: "4.8",
      projectsCount: "16 Projects",
      initials: "BK",
      bgColor: "var(--color-blue-dark)"
    }
  ];

  const partnerLogos = [
    "Oasis Outsourcing",
    "Tech Hub Kenya",
    "Nairobi Dev Network",
    "Silicon Savannah Lab",
    "Apprentice Kenya",
    "Sasa Digital Foundation"
  ];

  const faqs = [
    {
      q: "How does Sasakazi verify tech talent?",
      a: "Our vetting process consists of technical assessments (coding test & logic challenges), soft skills evaluations, and baseline readiness reviews. We track these results in our 'Capability Intelligence' framework."
    },
    {
      q: "What are the mentor guardrails?",
      a: "For paid client projects, we attach a senior tech lead who oversees the apprentice talent. The mentor reviews all source code before it reaches the client, ensuring the business gets premium quality delivery."
    },
    {
      q: "How does milestone payment work?",
      a: "Businesses break their project budget into clear, deliverable milestones. Funds for each milestone are secured in escrow, and only released to the talent after the client and mentor approve the deliverables."
    },
    {
      q: "How can my business post a project?",
      a: "To post a project, register as a business on our platform. An account representative will verify your business and guide you in splitting your project requirements into milestones."
    }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="home-page fade-in-up">
      {/* Interactive Hero Carousel Section */}
      <section className="hero-carousel-section">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className="hero-overlay"></div>
            
            {index === currentSlide && (
              <div className="container hero-container" key={`slide-content-${currentSlide}`}>
                <div className="hero-content slide-text-animate">
                  <h1 className="hero-title">
                    {slide.title.split(" & ").map((part, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && " & "}
                        {part.includes("Paid Business Projects") ? (
                          <>
                            Tech Talent & <br />
                            <span className="text-highlight">Paid Business Projects.</span>
                          </>
                        ) : part}
                      </React.Fragment>
                    ))}
                  </h1>
                  <p className="hero-desc">{slide.desc}</p>
                  <div className="hero-actions">
                    <Link href={slide.link} className="btn btn-accent">
                      {slide.cta} &rarr;
                    </Link>
                    <Link href={slide.linkSecondary} className="btn btn-outline-white">
                      {slide.ctaSecondary}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Carousel Nav Arrows */}
        <button className="carousel-nav-btn prev" onClick={prevSlide} aria-label="Previous Slide">
          &#8249;
        </button>
        <button className="carousel-nav-btn next" onClick={nextSlide} aria-label="Next Slide">
          &#8250;
        </button>

        {/* Carousel Dot Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`indicator-dot ${index === currentSlide ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && <span className="indicator-progress-bar"></span>}
            </button>
          ))}
        </div>
      </section>

      {/* NEW SECTION 1: Solid Blue Platform Impact Metrics Bar */}
      <section className="impact-metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-number">
                <AnimatedCount value="500+" />
              </div>
              <div className="metric-label">Digital Talents Vetted</div>
              <p className="metric-sub">Assessed & ready for project placement</p>
            </div>

            <div className="metric-card">
              <div className="metric-number">
                <AnimatedCount value="120+" />
              </div>
              <div className="metric-label">Projects Delivered</div>
              <p className="metric-sub">Web apps, mobile solutions & designs</p>
            </div>

            <div className="metric-card">
              <div className="metric-number">
                <AnimatedCount value="98%" />
              </div>
              <div className="metric-label">Escrow Satisfaction</div>
              <p className="metric-sub">Milestone protection guarantee</p>
            </div>

            <div className="metric-card">
              <div className="metric-number">
                <AnimatedCount value="45+" />
              </div>
              <div className="metric-label">Senior Mentor Leads</div>
              <p className="metric-sub">Ensuring code review & quality audit</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Process Timeline */}
      <section className="process-section bg-yellow-light" id="how-it-works">
        <div className="container">
          <div className="section-title-wrapper">
            <h2>A Complete Digital Talent Journey</h2>
            <p>Sasakazi supports youth from onboarding and skills development to real project experience, mentorship, and career opportunities.</p>
          </div>

          <div className="journey-grid">
            {journeySteps.map((step, idx) => {
              const stepLabel = `Step 0${idx + 1}`;
              return (
                <Link href={step.link} key={step.id} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div className="journey-card">
                    <span className="step-label-tag">{stepLabel}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                    <span className="card-learn-more">Learn More +</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="process-cta">
            <Link href="/register" className="btn btn-primary">
              Build Your Profile (Talent)
            </Link>
            <Link href="/register/business" className="btn btn-accent">
              Post a Project (Business)
            </Link>
          </div>
        </div>
      </section>

      {/* REDESIGNED: Featured Categories by Track (Solid styling, Category Filter Tabs & Rich Micro-animations) */}
      <section className="featured-categories-section">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge badge-accent">Our Solutions</span>
            <h2>Featured Talents by Category</h2>
            <p>Explore our core technology segments matching pre-vetted digital talents to business projects.</p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="category-tabs-wrapper">
            <div className="category-tabs">
              <button
                className={`tab-btn ${activeCategoryTab === "all" ? "active" : ""}`}
                onClick={() => setActiveCategoryTab("all")}
              >
                All Domains
              </button>
              <button
                className={`tab-btn ${activeCategoryTab === "software" ? "active" : ""}`}
                onClick={() => setActiveCategoryTab("software")}
              >
                Software & Mobile
              </button>
              <button
                className={`tab-btn ${activeCategoryTab === "design" ? "active" : ""}`}
                onClick={() => setActiveCategoryTab("design")}
              >
                Product & Design
              </button>
              <button
                className={`tab-btn ${activeCategoryTab === "data" ? "active" : ""}`}
                onClick={() => setActiveCategoryTab("data")}
              >
                Data, Cloud & QA
              </button>
            </div>
          </div>

          {/* Category Cards Grid */}
          <div className="categories-grid-wrapper">
            <div className="grid grid-3 categories-grid">
              {filteredCategories.map((cat) => (
                <div key={cat.id} className="category-card">
                  <div className="category-card-header">
                    <div
                      className="category-icon-box"
                      style={{ backgroundColor: cat.iconBg, color: cat.iconColor }}
                    >
                      {cat.icon}
                    </div>
                    <span className={`badge ${cat.badgeClass}`}>{cat.badge}</span>
                  </div>

                  <h3>{cat.title}</h3>
                  <p className="category-card-desc">{cat.description}</p>
                  
                  {/* Skill Chips */}
                  <div className="category-skills-chips">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-chip">{skill}</span>
                    ))}
                  </div>

                  <div className="category-card-footer">
                    <span className="live-status-pill">
                      <span className="pulse-dot"></span>
                      <AnimatedCount value={cat.count} />
                    </span>
                    
                    <Link href={`/talents?search=${encodeURIComponent(cat.title.split(" ")[0])}`} className="category-link-btn">
                      Explore Directory &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="explore-more-cta">
            <Link href="/talents" className="btn btn-primary">
              View All Vetted Talents &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Vetted Talent Spotlight Showcase */}
      <section className="talent-spotlight-section">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="badge badge-accent">Featured Directory</span>
            <h2>Spotlight Vetted Digital Talents</h2>
            <p>Meet top-rated apprentice talents ready to join your upcoming digital projects.</p>
          </div>

          <div className="spotlight-grid">
            {spotlightTalents.map((talent) => (
              <div key={talent.id} className="spotlight-card">
                <div className="spotlight-card-top">
                  <div className="avatar-initials" style={{ backgroundColor: talent.bgColor }}>
                    {talent.initials}
                  </div>
                  <div className="spotlight-info">
                    <h3>{talent.name}</h3>
                    <p className="talent-role">{talent.role}</p>
                  </div>
                </div>

                <div className="spotlight-meta">
                  <span className="rating-badge">★ {talent.rating}</span>
                  <span className="projects-badge">{talent.projectsCount}</span>
                  <span className="mentor-verified-pill">✔ Mentor Verified</span>
                </div>

                <div className="spotlight-skills">
                  {talent.skills.map((s, idx) => (
                    <span key={idx} className="skill-tag">{s}</span>
                  ))}
                </div>

                <Link href="/talents" className="btn btn-outline spotlight-btn">
                  View Full Profile
                </Link>
              </div>
            ))}
          </div>

          <div className="explore-more-cta" style={{ marginTop: "2rem" }}>
            <Link href="/talents" className="btn btn-primary">
              Search Full Talent Directory
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION 5: Continuous Marquee Partner Ticker */}
      <section className="partner-ticker-section">
        <div className="container">
          <p className="partner-ticker-title">TRUSed BY LEADING PARTNERS & TECH ECOSYSTEM HUBS</p>
          <div className="ticker-wrapper">
            <div className="ticker-content">
              {partnerLogos.concat(partnerLogos).map((logo, idx) => (
                <div key={idx} className="partner-chip">
                  <span className="partner-icon">✦</span>
                  <span className="partner-name">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Embedded on Landing Page */}
      <section className="landing-faq-section" id="faq">
        <div className="container landing-faq-container">
          <div className="section-title-wrapper">
            <span className="badge badge-accent">Help Center</span>
            <h2>Frequently Asked Questions</h2>
            <p>Got questions about the platform, matching engine, escrow, or guardrails? We have answers.</p>
          </div>

          <div className="faqs-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question-btn ${activeFaq === index ? "active" : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">{activeFaq === index ? "−" : "+"}</span>
                </button>
                
                <div className={`faq-answer-wrapper ${activeFaq === index ? "open" : ""}`}>
                  <div className="faq-answer-content">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ============================================================
           HERO CAROUSEL SECTION
           ============================================================ */
        .hero-carousel-section {
          position: relative;
          width: 100%;
          height: calc(85vh + 70px);
          min-height: 600px;
          max-height: 850px;
          margin-top: -70px;
          overflow: hidden;
          background-color: var(--color-white);
        }
        @media (max-width: 768px) {
          .hero-carousel-section {
            height: auto;
            min-height: auto;
            max-height: none;
            margin-top: -70px;
            padding: 80px 0 40px 0;
          }
        }
        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          padding-top: 70px;
          opacity: 0;
          z-index: 1;
          transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .carousel-slide.active {
          opacity: 1;
          z-index: 2;
        }
        @media (max-width: 768px) {
          .carousel-slide {
            position: relative;
            display: none;
            opacity: 0;
            padding: 40px 0;
            height: auto;
            min-height: 520px;
          }
          .carousel-slide.active {
            display: flex;
            opacity: 1;
          }
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.82);
          z-index: 1;
        }
        .hero-container {
          position: relative;
          z-index: 3;
        }
        .hero-content {
          max-width: 680px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          text-align: left;
        }
        .hero-title {
          color: var(--color-white);
          font-family: var(--font-serif);
          font-weight: 800;
          font-size: 2.2rem;
          line-height: 1.25;
        }
        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.5rem;
          }
        }
        .text-highlight {
          color: var(--color-yellow);
        }
        .hero-desc {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          width: 100%;
          margin-top: 0.5rem;
        }

        .slide-text-animate .hero-title {
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.15s forwards;
        }
        .slide-text-animate .hero-desc {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.3s forwards;
        }
        .slide-text-animate .hero-actions {
          opacity: 0;
          transform: translateY(15px);
          animation: slideUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.45s forwards;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .carousel-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          font-size: 2rem;
          line-height: 1;
          transition: var(--transition-smooth);
        }
        .carousel-nav-btn:hover {
          background-color: var(--color-yellow);
          border-color: var(--color-yellow);
          color: var(--color-text-dark);
          transform: translateY(-50%) scale(1.05);
        }
        .carousel-nav-btn.prev { left: 1.5rem; }
        .carousel-nav-btn.next { right: 1.5rem; }

        .carousel-indicators {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.75rem;
          z-index: 10;
        }
        .indicator-dot {
          width: 36px;
          height: 6px;
          border-radius: var(--radius-full);
          background-color: rgba(255, 255, 255, 0.35);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: var(--transition-fast);
        }
        .indicator-dot.active {
          background-color: rgba(255, 255, 255, 0.15);
          width: 60px;
        }
        .indicator-progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background-color: var(--color-yellow);
          animation: fillProgress 6s linear forwards;
        }
        @keyframes fillProgress {
          to { width: 100%; }
        }

        /* ============================================================
           NEW SECTION 1: SOLID BLUE PLATFORM IMPACT METRICS BAR
           ============================================================ */
        .impact-metrics-section {
          background-color: var(--color-blue);
          padding: 3rem 0;
          color: var(--color-white);
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          text-align: center;
        }
        @media (max-width: 992px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        @media (max-width: 576px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
        .metric-card {
          padding: 1.5rem 1rem;
          border-radius: var(--radius-md);
          background-color: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .metric-card:hover {
          transform: translateY(-50px) scale(1.03);
          background-color: rgba(255, 255, 255, 0.15);
          border-color: var(--color-yellow);
        }
        .metric-number {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--color-yellow);
          margin-bottom: 0.25rem;
          line-height: 1;
        }
        .metric-label {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 0.35rem;
        }
        .metric-sub {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 0;
        }

        /* ============================================================
           HOW IT WORKS PROCESS TIMELINE SECTION
           ============================================================ */
        .process-section {
          padding: var(--spacing-xl) 0;
          position: relative;
          overflow: hidden;
        }
        .bg-yellow-light {
          background-color: var(--color-yellow-light);
        }
        .section-title-wrapper {
          text-align: center;
          margin-bottom: 3rem;
          max-width: 640px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        
        .journey-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 36px;
        }
        @media (max-width: 992px) {
          .journey-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 540px) {
          .journey-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .journey-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 40px 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          box-shadow: 0 8px 30px rgba(26, 91, 140, 0.03);
          transition: all 0.4s ease;
          height: 100%;
          width: 100%;
        }
        .journey-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(26, 91, 140, 0.1);
          border-color: var(--color-blue);
        }
        
        .step-label-tag {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
          background-color: var(--color-bg-light);
          padding: 3px 12px;
          border-radius: 30px;
          border: 1px solid var(--color-border-gray);
        }

        .process-cta {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          margin-top: 2rem;
        }

        /* ============================================================
           FEATURED CATEGORIES SECTION (Solid Colors, No Gradients)
           ============================================================ */
        .featured-categories-section {
          padding: 4.5rem 0;
          background-color: var(--color-white);
        }
        .category-tabs-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 2.5rem;
        }
        .category-tabs {
          display: inline-flex;
          gap: 0.5rem;
          padding: 6px;
          background-color: var(--color-bg-light);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-full);
          max-width: 100%;
          overflow-x: auto;
        }
        .tab-btn {
          padding: 0.6rem 1.4rem;
          border-radius: var(--radius-full);
          border: none;
          background: transparent;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .tab-btn:hover {
          color: var(--color-blue);
        }
        .tab-btn.active {
          background-color: var(--color-blue);
          color: var(--color-white);
          box-shadow: 0 4px 12px rgba(26, 91, 140, 0.2);
        }

        .categories-grid-wrapper {
          margin-bottom: 2.5rem;
        }
        .category-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                      box-shadow 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                      border-color 0.35s ease;
          box-shadow: 0 4px 16px rgba(26, 91, 140, 0.04);
        }
        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(26, 91, 140, 0.12);
          border-color: var(--color-blue);
        }

        .category-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .category-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }
        .category-card:hover .category-icon-box {
          transform: scale(1.1);
        }

        .category-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-blue);
          margin-bottom: 0.5rem;
        }
        .category-card-desc {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .category-skills-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }
        .skill-chip {
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          background-color: var(--color-blue-light);
          color: var(--color-blue);
          border: 1px solid rgba(26, 91, 140, 0.12);
          transition: all 0.2s ease;
        }
        .category-card:hover .skill-chip {
          background-color: var(--color-blue);
          color: var(--color-white);
        }

        .category-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-gray);
        }
        .live-status-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-text-dark);
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #22c55e;
          animation: pulseGlow 1.8s infinite ease-in-out;
        }
        .category-link-btn {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-blue);
          transition: transform 0.2s ease;
        }
        .category-card:hover .category-link-btn {
          transform: translateX(4px);
          color: var(--color-yellow-dark);
        }

        .explore-more-cta {
          text-align: center;
        }

        /* ============================================================
           NEW SECTION 2: MILESTONE ESCROW & GUARDRAILS VISUALIZER
           ============================================================ */
        .escrow-visualizer-section {
          padding: 4.5rem 0;
          background-color: var(--color-bg-light);
          border-top: 1px solid var(--color-border-gray);
          border-bottom: 1px solid var(--color-border-gray);
        }
        .escrow-interactive-box {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 2rem;
          background-color: var(--color-white);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 2rem;
          box-shadow: 0 8px 30px rgba(26, 91, 140, 0.05);
        }
        @media (max-width: 850px) {
          .escrow-interactive-box {
            grid-template-columns: 1fr;
          }
        }
        .escrow-steps-nav {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .escrow-step-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-gray);
          background-color: var(--color-bg-light);
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .escrow-step-btn:hover {
          border-color: var(--color-blue);
          background-color: var(--color-blue-light);
        }
        .escrow-step-btn.active {
          background-color: var(--color-blue);
          border-color: var(--color-blue);
          color: var(--color-white);
        }
        .step-num {
          font-weight: 800;
          font-size: 1rem;
          opacity: 0.8;
        }
        .step-btn-title {
          font-weight: 700;
          font-size: 0.95rem;
        }

        .escrow-panel-card {
          padding: 1.5rem;
          background-color: var(--color-bg-light);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-gray);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .escrow-panel-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .escrow-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-full);
          width: fit-content;
        }
        .escrow-panel-header h3 {
          font-size: 1.5rem;
          color: var(--color-blue);
          margin-bottom: 0;
        }
        .escrow-summary {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-text-dark);
          margin-bottom: 1rem;
        }
        .escrow-details-box {
          background-color: var(--color-white);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-gray);
          margin-bottom: 1.5rem;
        }
        .escrow-details-box p {
          margin-bottom: 0;
          font-size: 0.95rem;
        }

        /* ============================================================
           NEW SECTION 3: VETTED TALENT SPOTLIGHT SHOWCASE
           ============================================================ */
        .talent-spotlight-section {
          padding: 4.5rem 0;
          background-color: var(--color-white);
        }
        .spotlight-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 992px) {
          .spotlight-grid {
            grid-template-columns: 1fr;
          }
        }
        .spotlight-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(26, 91, 140, 0.04);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .spotlight-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(26, 91, 140, 0.12);
          border-color: var(--color-blue);
        }
        .spotlight-card-top {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .avatar-initials {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .spotlight-info h3 {
          font-size: 1.2rem;
          margin-bottom: 0.2rem;
        }
        .talent-role {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          margin-bottom: 0;
        }
        .spotlight-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }
        .rating-badge {
          background-color: var(--color-yellow-light);
          color: var(--color-yellow-dark);
          font-weight: 800;
          font-size: 0.8rem;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
        }
        .projects-badge {
          background-color: var(--color-bg-light);
          color: var(--color-text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
        }
        .mentor-verified-pill {
          background-color: var(--color-blue-light);
          color: var(--color-blue);
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
        }
        .spotlight-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .skill-tag {
          font-size: 0.78rem;
          font-weight: 600;
          background-color: var(--color-bg-light);
          color: var(--color-text-dark);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-gray);
        }
        .spotlight-btn {
          width: 100%;
          justify-content: center;
        }

        /* ============================================================
           NEW SECTION 4: INTERACTIVE PROJECT ESTIMATOR
           ============================================================ */
        .project-estimator-section {
          padding: 4.5rem 0;
          background-color: var(--color-yellow-light);
        }
        .estimator-container {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          box-shadow: 0 10px 40px rgba(26, 91, 140, 0.06);
        }
        .estimator-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 2.5rem auto;
        }
        .estimator-header h2 {
          font-size: 2rem;
          color: var(--color-blue);
          margin-top: 0.5rem;
        }
        .estimator-controls-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
        @media (max-width: 768px) {
          .estimator-controls-grid {
            grid-template-columns: 1fr;
          }
        }
        .control-label {
          display: block;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--color-blue);
          margin-bottom: 0.75rem;
        }
        .option-buttons-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
        }
        .option-btn {
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-gray);
          background-color: var(--color-bg-light);
          font-weight: 600;
          font-size: 0.88rem;
          color: var(--color-text-dark);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .option-btn:hover {
          border-color: var(--color-blue);
          background-color: var(--color-blue-light);
        }
        .option-btn.active {
          background-color: var(--color-blue);
          border-color: var(--color-blue);
          color: var(--color-white);
        }

        .estimator-result-card {
          background-color: var(--color-blue-light);
          border: 1px solid rgba(26, 91, 140, 0.2);
          border-radius: var(--radius-md);
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .result-metric-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .result-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }
        .result-value {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-blue);
        }
        .result-value-highlight {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--color-yellow-dark);
        }

        /* ============================================================
           NEW SECTION 5: CONTINUOUS MARQUEE PARTNER TICKER
           ============================================================ */
        .partner-ticker-section {
          padding: 3rem 0;
          background-color: var(--color-white);
          border-top: 1px solid var(--color-border-gray);
          overflow: hidden;
        }
        .partner-ticker-title {
          text-align: center;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }
        .ticker-content {
          display: inline-flex;
          gap: 1.5rem;
          animation: marquee 22s linear infinite;
        }
        .ticker-content:hover {
          animation-play-state: paused;
        }
        .partner-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.4rem;
          background-color: var(--color-bg-light);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--color-blue);
          flex-shrink: 0;
        }
        .partner-icon {
          color: var(--color-yellow-dark);
        }

        /* ============================================================
           FAQ SECTION
           ============================================================ */
        .landing-faq-section {
          padding: 4.5rem 0;
          background-color: var(--color-bg-light);
        }
        .landing-faq-container {
          max-width: 800px;
        }
        .faqs-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.2s ease;
        }
        .faq-item:hover {
          border-color: var(--color-blue);
        }
        .faq-question-btn {
          width: 100%;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          font-family: var(--font-primary);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-blue);
          cursor: pointer;
          text-align: left;
        }
        .faq-icon {
          font-size: 1.4rem;
          font-weight: 400;
          color: var(--color-yellow-dark);
          line-height: 1;
        }
        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
        }
        .faq-answer-wrapper.open {
          max-height: 500px;
          transition: max-height 0.5s ease-in-out;
        }
        .faq-answer-content {
          padding: 0 1.5rem 1.25rem 1.5rem;
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Animations base classes */
        .section-title-wrapper, .journey-card, .category-card, .process-cta, .explore-more-cta, .shared-mechanics-panel, .faq-item, .metric-card, .escrow-panel-card, .spotlight-card, .estimator-container {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-title-wrapper.is-visible,
        .journey-card.is-visible,
        .category-card.is-visible,
        .process-cta.is-visible,
        .explore-more-cta.is-visible,
        .shared-mechanics-panel.is-visible,
        .faq-item.is-visible,
        .metric-card.is-visible,
        .escrow-panel-card.is-visible,
        .spotlight-card.is-visible,
        .estimator-container.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .section-title-wrapper, .journey-card, .category-card, .process-cta, .explore-more-cta, .shared-mechanics-panel, .faq-item, .metric-card, .escrow-panel-card, .spotlight-card, .estimator-container {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .ticker-content {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
