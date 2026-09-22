"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Kinetic Animated Counter Component (Triggered when scrolled into view)
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

// Strategic Ecosystem Partners
const PARTNERS_DATA = [
  {
    name: "African Development Bank",
    shortName: "AfDB",
    role: "Pan-African Multilateral Development Partner",
    description: "Collaborating on institutional youth employment, digital skills infrastructure, and Pan-African technological capacity building.",
    focusArea: "Workforce Systems & Inclusive Digital Growth",
    accent: "#0f3d61"
  },
  {
    name: "UK–Kenya Tech Hub",
    shortName: "UK-Kenya Hub",
    role: "Founding Programme & Digital Inclusion Partner",
    description: "Supported the flagship digital pilot matching high-potential Kenyan software developers with SMEs requiring urgent digital transformation.",
    focusArea: "Digital Inclusion & International Market Linkages",
    accent: "#1a5b8c"
  },
  {
    name: "British High Commission",
    shortName: "British High Comm.",
    role: "International Diplomatic & Development Partner",
    description: "Supporting bilateral trade linkages, youth empowerment pipelines, and sustainable technology employment ecosystems in East Africa.",
    focusArea: "International Linkages & Youth Empowerment",
    accent: "#C05621"
  },
  {
    name: "EldoHub",
    shortName: "EldoHub",
    role: "Parent Innovation & Incubation Ecosystem",
    description: "SasaKazi evolved from EldoHub’s Digital Apprenticeship Programme, scaling the bridge between skills training and real market demand across Africa.",
    focusArea: "Innovation Incubation & Talent Pipelines",
    accent: "#059669"
  }
];

// Closed-Loop Delivery Stages
const DELIVERY_STAGES = [
  {
    phase: "01",
    tag: "SCOPING",
    title: "Understand & Scoping",
    desc: "We begin by understanding the business challenge, required outcomes, skills profile, timelines, and working arrangement.",
    details: [
      "In-depth technical requirement scoping",
      "Resource allocation & budget alignment",
      "Defined KPIs and success criteria"
    ]
  },
  {
    phase: "02",
    tag: "VETTING",
    title: "Assess for Relevance",
    desc: "Candidate assessment includes profile verification, technical challenges, practical case studies, and communication readiness.",
    details: [
      "Portfolio & code repository audits",
      "Practical case study evaluations",
      "Soft-skills and professional conduct checks"
    ]
  },
  {
    phase: "03",
    tag: "EXECUTION",
    title: "Managed Delivery & Escrow",
    desc: "Talent delivers against agreed milestones with structured onboarding, progress tracking, code reviews, and quality assurance.",
    details: [
      "Milestone-based progress reporting",
      "Senior mentor quality guardrails",
      "Transparent escrow milestone release"
    ]
  },
  {
    phase: "04",
    tag: "EXPANSION",
    title: "Review, Retain & Scale",
    desc: "Final deliverable acceptance, performance appraisal, and seamless progression into repeat assignments, dedicated teams, or direct hiring.",
    details: [
      "Documented acceptance criteria sign-off",
      "Opportunity for direct recruitment",
      "Flexible scaling to meet future growth"
    ]
  }
];

// Featured Live Opportunities
const FEATURED_OPPORTUNITIES = [
  {
    id: 1,
    title: "Full-Stack React & Node Developer",
    category: "Software Engineering",
    type: "Client Project",
    location: "Remote (Africa)",
    duration: "3 Months (Extendable)",
    compensation: "Project-Based Escrow",
    skills: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    description: "Build a scalable fintech onboarding portal for an East African SME with automated identity verification and mobile money integration.",
    urgent: true
  },
  {
    id: 2,
    title: "Data Annotation & AI Validation Specialist",
    category: "Data & AI",
    type: "BPO / Managed Service",
    location: "Remote / Hybrid (Kenya)",
    duration: "6 Months Dedicated",
    compensation: "Monthly Retainer",
    skills: ["Data Cleaning", "Python", "Annotation Tooling", "Quality Assurance"],
    description: "Perform high-accuracy text and image annotation workflows supporting machine learning model training datasets.",
    urgent: false
  },
  {
    id: 3,
    title: "UI/UX Product Designer",
    category: "UI/UX Design",
    type: "Contract Assignment",
    location: "Remote (Pan-Africa)",
    duration: "2 Months",
    compensation: "Milestone-Based",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
    description: "Redesign core mobile and desktop experiences for an agricultural supply chain platform with accessible UX patterns.",
    urgent: true
  },
  {
    id: 4,
    title: "Digital Marketing & Social Growth Lead",
    category: "Digital Business",
    type: "Apprenticeship / Growth",
    location: "Remote / Hybrid",
    duration: "3 Months Apprenticeship",
    compensation: "Stipend + Performance Bonus",
    skills: ["SEO", "Meta Ads", "Content Creation", "Analytics"],
    description: "Design and execute omnichannel customer acquisition campaigns for regional tech startups under senior mentor supervision.",
    urgent: false
  }
];

// Frequently Asked Questions
const FAQ_ITEMS = [
  {
    question: "How does SasaKazi vet and assess African tech talent?",
    answer:
      "Our multi-stage vetting process evaluates candidates through profile verification, portfolio analysis, technical coding challenges, real-world case studies, and structured communication interviews. Only talent demonstrating verified capability and work-readiness are recommended to employers."
  },
  {
    question: "What delivery models can businesses choose from?",
    answer:
      "Businesses can engage SasaKazi through 5 flexible models: Managed BPO Services (turnkey process delivery against SLAs), Dedicated Teams (recurring dedicated squad support), Talent-as-a-Service (assessed professionals for specific durations), Staff Augmentation (embedded engineers in your internal squad), and Direct Recruitment & Placement."
  },
  {
    question: "How are project milestones, payments, and quality protected?",
    answer:
      "Projects are governed by clear technical scopes, milestone schedules, and documented acceptance criteria. Payments are deposited into secure milestone escrow and only disbursed when you review and approve the verified deliverables under senior mentor quality oversight."
  },
  {
    question: "How does SasaKazi support junior talent and apprentices?",
    answer:
      "Every project engagement is paired with one-on-one senior tech mentorship and professional-development coaching. This provides young professionals with technical guidance, code reviews, and workplace accountability while ensuring the client receives enterprise-grade output."
  },
  {
    question: "How can an employer or partner get started?",
    answer:
      "Submit a business requirement through our website or reach out via WhatsApp at +254 723 567 263. A client solutions advisor will consult with you, scope your technical requirements, and present vetted candidates or a recommended pod within 48 hours."
  }
];

export const Home = () => {
  const [activeTab, setActiveTab] = useState("businesses");
  const [activeOppCategory, setActiveOppCategory] = useState("All");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Scroll reveal observer
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll(
      ".reveal-on-scroll, .reveal-from-left, .reveal-from-right, .reveal-scale"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const valueProps = {
    businesses: {
      title: "For Businesses",
      subtitle: "Access the right skills without spending unnecessary time sourcing and screening",
      description:
        "Access the right skills without spending unnecessary time sourcing and screening applicants. Select a delivery model aligned with your project, capacity and budget.",
      points: [
        "Access vetted African technology professionals matched to your stack",
        "Reduce the time and complexity of sourcing, testing, and assessment",
        "Build flexible capacity without expanding permanent headcount",
        "Strengthen delivery through structured onboarding, milestone tracking, and coordination",
        "Create measurable social impact through dignified African tech opportunities"
      ],
      ctaText: "Hire Tech Talent",
      ctaLink: "/register/business"
    },
    talent: {
      title: "For Tech Talent",
      subtitle: "Turn technical capability into verified work, proven portfolios, and sustainable careers",
      description:
        "Gain real project experience, mentorship, professional-development support and access to assignments, apprenticeships and employment.",
      points: [
        "Access genuine commercial projects, apprenticeships, internships and employment",
        "Apply technical knowledge to real business challenges under senior guardrails",
        "Build credible, verifiable portfolios and professional client references",
        "Receive mentorship, communication coaching, and career guidance",
        "Progress into repeat assignments, permanent employment or entrepreneurship"
      ],
      ctaText: "Join as Tech Talent",
      ctaLink: "/register"
    },
    partners: {
      title: "For Mentors & Partners",
      subtitle: "Build an inclusive, ethical and globally competitive African tech workforce",
      description:
        "Help build an inclusive, ethical and globally competitive African technology workforce connected to real market demand.",
      points: [
        "Use your senior industry experience to shape Africa’s next generation of builders",
        "Connect institutional training pipelines with verified commercial projects",
        "Collaborate on Pan-African inclusive digital-work and employment programmes",
        "Access high-performance African BPO and ITES delivery teams"
      ],
      ctaText: "Partner With SasaKazi",
      ctaLink: "#contact"
    }
  };

  const filteredOpportunities = activeOppCategory === "All"
    ? FEATURED_OPPORTUNITIES
    : FEATURED_OPPORTUNITIES.filter(o => o.category === activeOppCategory);

  return (
    <div className="twigs-brooms-style-page">
      {/* =========================================================================
           1. FULL-BLEED EDITORIAL HERO SECTION
      ============================================================================= */}
      <section className="hero-editorial-section">
        <div className="hero-photo-canvas">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=85"
            alt="Vetted African tech professionals collaborating at SasaKazi"
            className="hero-img"
          />
          <div className="hero-gradient-overlay" />
        </div>

        <div className="container hero-container">
          <div className="hero-narrative-box">
            <h1 className="hero-editorial-title">
              Your Gateway to Africa’s <span className="hero-title-accent">Top Tech Talent.</span>
            </h1>

            <p className="hero-editorial-lead">
              Build, digitise and grow your organisation with vetted African professionals and flexible digital-delivery teams. Unlocking the digital future for businesses with top-tier talent.
            </p>

            <div className="hero-actions-row">
              <Link href="/register/business" className="btn-warm-gold">
                <span>Hire Tech Talent</span>
                <span className="btn-arrow-icon">→</span>
              </Link>
              <a href="#opportunities" className="btn-outline-glass">
                Explore Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           2. IMPACT TELEMETRY LEDGER (Exact Numbers from Impact Grid)
      ============================================================================= */}
      <section className="telemetry-ledger-section reveal-on-scroll">
        <div className="container">
          <div className="ledger-grid-six">
            {/* Stat 1: Overall Users */}
            <div className="ledger-card reveal-on-scroll delay-1">
              <div className="ledger-metric text-navy">
                <AnimatedCounter value={10000} suffix="+" />
              </div>
              <div className="ledger-title">Overall Users</div>
              <p className="ledger-desc">
                Engaged tech builders, apprentices and digital learners in the ecosystem.
              </p>
            </div>

            {/* Stat 2: Tech Talents Matched */}
            <div className="ledger-card reveal-on-scroll delay-2">
              <div className="ledger-metric text-terracotta">
                <AnimatedCounter value={1256} suffix="" />
              </div>
              <div className="ledger-title">Tech Talents Matched</div>
              <p className="ledger-desc">
                Assessed candidates placed into commercial projects and business squads.
              </p>
            </div>

            {/* Stat 3: Startups/Entrepreneurs Reached */}
            <div className="ledger-card reveal-on-scroll delay-3">
              <div className="ledger-metric text-navy">
                <AnimatedCounter value={578} suffix="+" />
              </div>
              <div className="ledger-title">Startups &amp; Entrepreneurs</div>
              <p className="ledger-desc">
                Supported with technical delivery capacity, digital tools and advisory.
              </p>
            </div>

            {/* Stat 4: Digital Projects Completed */}
            <div className="ledger-card reveal-on-scroll delay-4">
              <div className="ledger-metric text-forest">
                <AnimatedCounter value={378} suffix="+" />
              </div>
              <div className="ledger-title">Digital Projects Completed</div>
              <p className="ledger-desc">
                Commercial apps, systems, workflows, data pipelines and web platforms.
              </p>
            </div>

            {/* Stat 5: Partnerships Established */}
            <div className="ledger-card reveal-on-scroll delay-5">
              <div className="ledger-metric text-terracotta">
                <AnimatedCounter value={102} suffix="+" />
              </div>
              <div className="ledger-title">Partnerships Established</div>
              <p className="ledger-desc">
                Institutional, development, enterprise and regional innovation partners.
              </p>
            </div>

            {/* Stat 6: Job Absorption Rate */}
            <div className="ledger-card reveal-on-scroll delay-6">
              <div className="ledger-metric text-navy">
                <AnimatedCounter value={90} suffix="%" />
              </div>
              <div className="ledger-title">Job Absorption Rate</div>
              <p className="ledger-desc">
                Alumni transitioning into sustainable employment, retainers or enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           3. WHO WE ARE & WHY IT MATTERS
      ============================================================================= */}
      <section id="who-we-are" className="who-matters-section">
        <div className="container">
          <div className="who-matters-grid">
            {/* Left Narrative */}
            <div className="who-text-col reveal-from-left">
              <div className="editorial-kicker">WHO WE ARE &amp; WHY IT MATTERS</div>

              <h2 className="editorial-heading">
                Where business needs meet vetted African talent.
              </h2>

              <div className="narrative-paragraphs">
                <p>
                  Businesses need reliable digital capabilities to improve efficiency, innovate and reach new markets. At the same time, thousands of capable African professionals need practical experience and access to meaningful opportunities.
                </p>
                <p>
                  SasaKazi brings these needs together. We begin by understanding the client’s challenge. We identify, assess and match suitable professionals, support onboarding and coordinate delivery against agreed requirements. This creates measurable value for businesses and practical career pathways for talent.
                </p>
              </div>

              {/* Checklist */}
              <div className="checklist-block">
                <div className="check-item">
                  <span className="check-circle-green">✓</span>
                  <span>Vetted technical assessments (profile audits, code tests, case studies)</span>
                </div>
                <div className="check-item">
                  <span className="check-circle-green">✓</span>
                  <span>Structured onboarding, milestone escrow &amp; managed delivery coordination</span>
                </div>
                <div className="check-item">
                  <span className="check-circle-green">✓</span>
                  <span>Senior mentorship guardrails ensuring code quality, security &amp; accountability</span>
                </div>
              </div>

              <div className="pt-3">
                <Link href="/register/business" className="btn-editorial-primary">
                  <span>Hire a Talent</span>
                  <span className="btn-arrow-icon">→</span>
                </Link>
              </div>
            </div>

            {/* Right Featured Photography Card (No Caption Bar) */}
            <div className="who-photo-col reveal-from-right delay-2">
              <div className="featured-editorial-card">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                  alt="African software engineers collaborating in modern tech hub"
                  className="editorial-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           4. WHAT WE OFFER — 5 Capability Pillars
      ============================================================================= */}
      <section id="services" className="capabilities-section">
        <div className="container">
          <div className="section-title-center reveal-on-scroll">
            <div className="editorial-kicker">CAPABILITY PORTFOLIO</div>
            <h2 className="editorial-heading">One Platform. Five High-Value Digital Pillars.</h2>
            <p className="section-sub-lead">
              Comprehensive digital services and managed delivery models engineered to digitise, innovate, and scale your organisation.
            </p>
          </div>

          <div className="capabilities-editorial-grid">
            {/* 1. Digital & Tech */}
            <div className="cap-editorial-card reveal-on-scroll delay-1">
              <div className="cap-card-header">
                <span className="cap-mono-num">01</span>
                <span className="cap-category-pill">Core Engineering</span>
              </div>
              <h3 className="cap-title">Digital &amp; Technology Services</h3>
              <p className="cap-desc">
                Software and website development, system support, API integration, UI/UX design, software testing, quality assurance and data analysis.
              </p>
              <div className="cap-subtags">
                <span>React / Next.js</span>
                <span>Node &amp; APIs</span>
                <span>Mobile Apps</span>
                <span>QA &amp; Testing</span>
                <span>UI/UX Systems</span>
              </div>
              <div className="cap-card-footer">
                <Link href="/register/business" className="cap-link">
                  Engage Capability <span className="arrow-icon">→</span>
                </Link>
              </div>
            </div>

            {/* 2. Digital Business */}
            <div className="cap-editorial-card reveal-on-scroll delay-2">
              <div className="cap-card-header">
                <span className="cap-mono-num">02</span>
                <span className="cap-category-pill">Growth &amp; Creative</span>
              </div>
              <h3 className="cap-title">Digital Business Services</h3>
              <p className="cap-desc">
                Digital marketing, social media management, graphic design, content development and digital customer engagement.
              </p>
              <div className="cap-subtags">
                <span>Digital Marketing</span>
                <span>Social Media</span>
                <span>Content Strategy</span>
                <span>Graphic Design</span>
              </div>
              <div className="cap-card-footer">
                <Link href="/register/business" className="cap-link">
                  Engage Capability <span className="arrow-icon">→</span>
                </Link>
              </div>
            </div>

            {/* 3. Data & AI */}
            <div className="cap-editorial-card reveal-on-scroll delay-3">
              <div className="cap-card-header">
                <span className="cap-mono-num">03</span>
                <span className="cap-category-pill">Next Gen &amp; AI</span>
              </div>
              <h3 className="cap-title">Data and AI Support</h3>
              <p className="cap-desc">
                Emerging support for data processing, cleaning, validation, annotation, research and people-driven AI workflows, subject to delivery capacity.
              </p>
              <div className="cap-subtags">
                <span>Data Cleaning</span>
                <span>Annotation &amp; Labeling</span>
                <span>Model Validation</span>
                <span>Research</span>
              </div>
              <div className="cap-card-footer">
                <Link href="/register/business" className="cap-link">
                  Engage Capability <span className="arrow-icon">→</span>
                </Link>
              </div>
            </div>

            {/* 4. Business Support & Back-Office */}
            <div className="cap-editorial-card reveal-on-scroll delay-4">
              <div className="cap-card-header">
                <span className="cap-mono-num">04</span>
                <span className="cap-category-pill">Operations &amp; BPO</span>
              </div>
              <h3 className="cap-title">Business Support &amp; Back-Office</h3>
              <p className="cap-desc">
                Virtual assistance, administration, customer service, CRM management, document processing and other repeatable business functions.
              </p>
              <div className="cap-subtags">
                <span>Virtual Assistance</span>
                <span>CRM Management</span>
                <span>Customer Support</span>
                <span>Data Entry</span>
              </div>
              <div className="cap-card-footer">
                <Link href="/register/business" className="cap-link">
                  Engage Capability <span className="arrow-icon">→</span>
                </Link>
              </div>
            </div>

            {/* 5. Workforce Solutions */}
            <div className="cap-editorial-card featured-cap-card reveal-on-scroll delay-5">
              <div className="cap-card-header">
                <span className="cap-mono-num">05</span>
                <span className="cap-category-pill featured-pill">Flexible Staffing</span>
              </div>
              <h3 className="cap-title">Workforce Solutions</h3>
              <p className="cap-desc">
                Dedicated professionals, flexible project teams, staff augmentation and direct recruitment from the SasaKazi talent ecosystem.
              </p>
              <div className="cap-subtags">
                <span>Dedicated Teams</span>
                <span>Staff Augmentation</span>
                <span>Talent-as-a-Service</span>
                <span>Direct Hire</span>
              </div>
              <div className="cap-card-footer">
                <Link href="/register/business" className="cap-link featured-link">
                  Request Custom Pod <span className="arrow-icon">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           5. FEATURED OPPORTUNITIES (Live Listings on Main Page)
      ============================================================================= */}
      <section id="opportunities" className="opportunities-section">
        <div className="container">
          <div className="section-title-center reveal-on-scroll">
            <div className="editorial-kicker">TALENT PATHWAYS &amp; LIVE DEMAND</div>
            <h2 className="editorial-heading">Featured Live Opportunities</h2>
            <p className="section-sub-lead">
              Verified commercial assignments, digital apprenticeships, and dedicated team roles available for skilled African professionals.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="opp-filter-bar reveal-on-scroll delay-1">
            {["All", "Software Engineering", "UI/UX Design", "Data & AI", "Digital Business"].map((cat) => (
              <button
                key={cat}
                className={`opp-filter-btn ${activeOppCategory === cat ? "active" : ""}`}
                onClick={() => setActiveOppCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Opportunities Cards Grid */}
          <div className="opp-listings-grid">
            {filteredOpportunities.map((opp, idx) => (
              <div key={opp.id} className={`opp-listing-card reveal-on-scroll delay-${idx + 1}`}>
                <div className="opp-card-top">
                  <div className="opp-category-badge">{opp.category}</div>
                  <div className="opp-type-pill">{opp.type}</div>
                </div>

                <h3 className="opp-card-title">{opp.title}</h3>
                <p className="opp-card-desc">{opp.description}</p>

                <div className="opp-meta-row">
                  <div className="opp-meta-item">
                    <span className="meta-icon">📍</span>
                    <span>{opp.location}</span>
                  </div>
                  <div className="opp-meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>{opp.duration}</span>
                  </div>
                  <div className="opp-meta-item">
                    <span className="meta-icon">💳</span>
                    <span>{opp.compensation}</span>
                  </div>
                </div>

                <div className="opp-skills-row">
                  {opp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="opp-skill-tag">{skill}</span>
                  ))}
                </div>

                <div className="opp-card-footer">
                  <Link href="/register" className="btn-opp-apply">
                    <span>Apply for Opportunity</span>
                    <span className="btn-arrow-icon">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Employer Quick Callout Banner */}
          <div className="opp-employer-banner reveal-scale">
            <div className="opp-banner-text">
              <h4>Are you an employer looking to hire assessed talent?</h4>
              <p>Post your project requirement, assemble a dedicated pod, or recruit directly.</p>
            </div>
            <Link href="/register/business" className="btn-warm-gold">
              <span>Post a Tech Requirement</span>
              <span className="btn-arrow-icon">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
           6. CLOSED-LOOP DELIVERY WORKFLOW
      ============================================================================= */}
      <section id="how-it-works" className="workflow-section">
        <div className="container">
          <div className="workflow-header-row reveal-on-scroll">
            <div>
              <div className="editorial-kicker">CLOSED-LOOP DELIVERY WORKFLOW</div>
              <h2 className="editorial-heading">
                How we move from business need to successful delivery.
              </h2>
            </div>
            <p className="workflow-header-sub">
              From requirement scoping to milestone sign-off, every step ensures verified capability, quality guardrails, and transparent accountability.
            </p>
          </div>

          <div className="stages-columns-grid">
            {DELIVERY_STAGES.map((stage, idx) => (
              <div key={stage.phase} className={`stage-column-card reveal-on-scroll delay-${idx + 1}`}>
                <div className="stage-top-meta">
                  <span className="stage-mono-phase">{stage.phase}</span>
                  <span className="stage-tag-badge">{stage.tag}</span>
                </div>

                <h3 className="stage-card-title">{stage.title}</h3>
                <p className="stage-card-desc">{stage.desc}</p>

                <div className="stage-details-list">
                  {stage.details.map((detail, dIdx) => (
                    <div key={dIdx} className="stage-detail-item">
                      <span className="detail-dot" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
           7. VALUE FOR EVERY PARTICIPANT
      ============================================================================= */}
      <section className="value-participants-section">
        <div className="container">
          <div className="section-title-center reveal-on-scroll">
            <div className="editorial-kicker">ECOSYSTEM ALIGNMENT</div>
            <h2 className="editorial-heading">Value for Every Participant</h2>
            <p className="section-sub-lead">
              How SasaKazi delivers structured value across our entire digital network.
            </p>
          </div>

          <div className="editorial-tabs-bar reveal-on-scroll delay-1">
            <button
              className={`editorial-tab-btn ${activeTab === "businesses" ? "active" : ""}`}
              onClick={() => setActiveTab("businesses")}
            >
              For Businesses
            </button>
            <button
              className={`editorial-tab-btn ${activeTab === "talent" ? "active" : ""}`}
              onClick={() => setActiveTab("talent")}
            >
              For Tech Talent
            </button>
            <button
              className={`editorial-tab-btn ${activeTab === "partners" ? "active" : ""}`}
              onClick={() => setActiveTab("partners")}
            >
              For Mentors &amp; Partners
            </button>
          </div>

          <div className="editorial-tab-panel reveal-scale">
            <div className="panel-narrative-col">
              <h3 className="panel-title">{valueProps[activeTab].title}</h3>
              <div className="panel-sub-highlight">{valueProps[activeTab].subtitle}</div>
              <p className="panel-desc">{valueProps[activeTab].description}</p>
              <div className="pt-2">
                <Link href={valueProps[activeTab].ctaLink} className="btn-warm-gold">
                  <span>{valueProps[activeTab].ctaText}</span>
                  <span className="btn-arrow-icon">→</span>
                </Link>
              </div>
            </div>

            <div className="panel-points-col">
              <div className="points-header-lbl">Key Value Drivers</div>
              <div className="points-stack">
                {valueProps[activeTab].points.map((pt, i) => (
                  <div key={i} className="point-item-row">
                    <span className="point-badge-check">✓</span>
                    <span className="point-item-text">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           8. OUR PARTNERS (African Development Bank, UK Kenya Tech Hub, etc.)
      ============================================================================= */}
      <section id="partners" className="partners-editorial-section">
        <div className="container">
          <div className="section-title-center reveal-on-scroll">
            <div className="editorial-kicker">STRATEGIC NETWORK &amp; INSTITUTIONAL ALLIANCES</div>
            <h2 className="editorial-heading">Our Partners</h2>
            <p className="section-sub-lead">
              Collaborating with leading regional and global institutions to build an ethical, high-quality African tech delivery network.
            </p>
          </div>

          <div className="partners-editorial-grid">
            {PARTNERS_DATA.map((partner, index) => (
              <div key={index} className={`partner-editorial-card reveal-on-scroll delay-${index + 1}`}>
                <div className="partner-card-top">
                  <span className="partner-name-bold">{partner.name}</span>
                  <span className="partner-short-tag">{partner.shortName}</span>
                </div>
                <div className="partner-role-badge">{partner.role}</div>
                <p className="partner-desc-text">{partner.description}</p>
                <div className="partner-focus-area">
                  <span className="focus-lbl">Focus Area:</span> {partner.focusArea}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
           9. FREQUENTLY ASKED QUESTIONS
      ============================================================================= */}
      <section id="faqs" className="faq-editorial-section">
        <div className="container max-w-4xl">
          <div className="section-title-center reveal-on-scroll">
            <div className="editorial-kicker">FREQUENT QUESTIONS</div>
            <h2 className="editorial-heading">Everything You Need to Know</h2>
            <p className="section-sub-lead">
              Clear answers on how SasaKazi assesses talent, coordinates delivery, and protects client investments.
            </p>
          </div>

          <div className="faq-accordion-stack reveal-on-scroll delay-2">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="faq-item-card">
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    <span className={`faq-chevron ${isOpen ? "open" : ""}`}>↓</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-box">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
           10. FINAL CALL TO ACTION
      ============================================================================= */}
      <section id="contact" className="final-editorial-cta">
        <div className="cta-bg-wrapper">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80"
            alt="African builders collaborating"
            className="cta-bg-img"
          />
          <div className="cta-dark-overlay" />
        </div>

        <div className="container cta-content-container reveal-scale">
          <div className="cta-kicker-tag">Let’s Build the Digital Future Together</div>

          <h2 className="cta-display-title">Ready to Strengthen Your Digital Capacity?</h2>

          <p className="cta-narrative">
            Tell us what you need to achieve. We will help define the requirement, identify the capabilities and recommend a suitable engagement model.
          </p>

          <div className="cta-button-group">
            <Link href="/register/business" className="btn-warm-gold-lg">
              <span>Submit a Business Requirement</span>
              <span className="btn-arrow-icon">→</span>
            </Link>
            <Link href="/register" className="btn-outline-glass-lg">
              Join as Tech Talent
            </Link>
          </div>

          <div className="cta-contact-subtext">
            <span>Direct enquiries: </span>
            <a href="mailto:info@sasakazi.com">info@sasakazi.com</a>
            <span className="subtext-sep">•</span>
            <a href="tel:+254723567263">+254 723 567 263</a>
            <span className="subtext-sep">•</span>
            <span>Eldoret &amp; Nairobi, Kenya</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
           STYLES — Replicating Twigs and Brooms Aesthetic Exactly
      ============================================================================= */}
      <style jsx>{`
        /* Global Canvas Tone */
        .twigs-brooms-style-page {
          background-color: var(--color-bg-warm, #FAF7F0);
          color: var(--color-text-dark, #0f172a);
          font-family: var(--font-primary);
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        /* 1. HERO EDITORIAL SECTION */
        .hero-editorial-section {
          position: relative;
          height: 85vh;
          min-height: 620px;
          max-height: 800px;
          margin-top: 0;
          padding-top: 0;
          display: flex;
          align-items: center;
          overflow: hidden;
          border-bottom: 1px solid var(--color-border-stone, #d6d1c4);
        }
        .hero-photo-canvas {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hero-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(15, 61, 97, 0.94) 0%,
            rgba(15, 61, 97, 0.82) 55%,
            rgba(10, 30, 48, 0.45) 100%
          );
        }
        .hero-container {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%;
        }
        .hero-narrative-box {
          max-width: 680px;
        }
        @keyframes heroEntrance {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-editorial-title {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.14;
          letter-spacing: -0.02em;
          margin-bottom: 1.25rem;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          animation: heroEntrance 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (min-width: 768px) {
          .hero-editorial-title {
            font-size: 3.75rem;
          }
        }
        .hero-title-accent {
          color: #fbb63f;
          font-style: normal !important; /* Non-italic per client request */
          font-weight: 700;
        }
        .hero-editorial-lead {
          font-size: 1.12rem;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.65;
          margin-bottom: 2rem;
          font-weight: 400;
          opacity: 0;
          animation: heroEntrance 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
        }
        .hero-actions-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          opacity: 0;
          animation: heroEntrance 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }
        .btn-warm-gold {
          background-color: var(--color-yellow);
          color: #0f172a !important;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 0.9rem 1.8rem;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 6px 20px rgba(251, 182, 63, 0.35);
          transition: all 0.25s ease;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }
        .btn-warm-gold:hover {
          background-color: var(--color-yellow-dark);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(251, 182, 63, 0.45);
        }
        .btn-outline-glass {
          background-color: rgba(255, 255, 255, 0.12);
          color: #ffffff !important;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 0.9rem 1.8rem;
          border-radius: 12px;
          border: 2px solid rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(6px);
          transition: all 0.25s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .btn-outline-glass:hover {
          background-color: #ffffff;
          color: #0f172a !important;
          transform: translateY(-2px);
        }
        .btn-arrow-icon {
          font-weight: 800;
          transition: transform 0.2s ease;
        }
        .btn-warm-gold:hover .btn-arrow-icon,
        .btn-editorial-primary:hover .btn-arrow-icon,
        .btn-opp-apply:hover .btn-arrow-icon {
          transform: translateX(4px);
        }

        /* 2. IMPACT TELEMETRY LEDGER (6 Metrics) */
        .telemetry-ledger-section {
          padding: 4rem 0;
          border-bottom: 1px solid var(--color-border-stone, #d6d1c4);
          background-color: var(--color-bg-warm-subtle, #F5F2EA);
        }
        .ledger-grid-six {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 600px) {
          .ledger-grid-six {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .ledger-grid-six {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .ledger-card {
          background: #ffffff;
          border: 1px solid var(--color-border-stone, #d6d1c4);
          border-radius: 1rem;
          padding: 2rem 1.75rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .ledger-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.06);
          border-color: #0f3d61;
        }
        .ledger-metric {
          font-family: var(--font-serif);
          font-size: 2.75rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .text-navy { color: #0f3d61; }
        .text-terracotta { color: #C05621; }
        .text-forest { color: #1b8a2c; }
        .ledger-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.35rem;
        }
        .ledger-desc {
          font-size: 0.88rem;
          color: #57534e;
          line-height: 1.5;
          margin: 0;
        }

        /* Editorial Typography Kicker & Headings */
        .editorial-kicker {
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-terracotta, #C05621);
          margin-bottom: 0.6rem;
        }
        .editorial-heading {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 1.25rem;
        }
        @media (min-width: 768px) {
          .editorial-heading {
            font-size: 2.75rem;
          }
        }

        /* 3. WHO WE ARE & WHY IT MATTERS */
        .who-matters-section {
          padding: 5.5rem 0;
          border-bottom: 1px solid var(--color-border-stone, #d6d1c4);
        }
        .who-matters-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        @media (min-width: 992px) {
          .who-matters-grid {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }
        .narrative-paragraphs p {
          font-size: 1.05rem;
          color: #334155;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .checklist-block {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.25rem 0;
          margin-bottom: 1.5rem;
        }
        .check-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          color: #0f172a;
          font-weight: 600;
        }
        .check-circle-green {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(39, 201, 63, 0.15);
          color: #1b8a2c;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 900;
          flex-shrink: 0;
        }
        .btn-editorial-primary {
          background-color: #0f3d61;
          color: #ffffff !important;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 0.85rem 1.8rem;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .btn-editorial-primary:hover {
          background-color: #1a5b8c;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(15, 61, 97, 0.25);
        }
        .featured-editorial-card {
          position: relative;
          height: 440px;
          border-radius: 1.25rem;
          overflow: hidden;
          border: 1px solid var(--color-border-stone, #d6d1c4);
          background-color: #e7e5e4;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }
        .editorial-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .featured-editorial-card:hover .editorial-photo {
          transform: scale(1.04);
        }

        /* 4. CAPABILITY PORTFOLIO */
        .capabilities-section {
          padding: 5.5rem 0;
          border-bottom: 1px solid var(--color-border-stone, #d6d1c4);
          background-color: var(--color-bg-warm-subtle, #F5F2EA);
        }
        .section-title-center {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 3.5rem;
        }
        .section-sub-lead {
          font-size: 1.05rem;
          color: #57534e;
          line-height: 1.6;
        }
        .capabilities-editorial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }
        @media (min-width: 650px) {
          .capabilities-editorial-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .capabilities-editorial-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .cap-editorial-card {
          background: #ffffff;
          border: 1px solid var(--color-border-stone, #d6d1c4);
          border-radius: 1rem;
          padding: 2.2rem 1.75rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .cap-editorial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
          border-color: #0f3d61;
        }
        .cap-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .cap-mono-num {
          font-family: var(--font-mono);
          font-size: 1rem;
          font-weight: 700;
          color: #a8a29e;
        }
        .cap-category-pill {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 3px 10px;
          background: #f1f5f9;
          color: #0f3d61;
          border-radius: var(--radius-full);
        }
        .cap-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .cap-desc {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .cap-subtags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 1.5rem;
        }
        .cap-subtags span {
          font-size: 0.75rem;
          font-weight: 600;
          background: #FAF7F0;
          color: #334155;
          padding: 3px 8px;
          border-radius: 4px;
          border: 1px solid #e7e5e4;
        }
        .cap-card-footer {
          padding-top: 1rem;
          border-top: 1px solid #f1f5f9;
        }
        .cap-link {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f3d61;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .cap-link:hover {
          color: #C05621;
        }
        .featured-cap-card {
          background: #0f3d61;
          color: #ffffff;
          border-color: #0f3d61;
        }
        .featured-cap-card .cap-title {
          color: #ffffff;
        }
        .featured-cap-card .cap-desc {
          color: rgba(255, 255, 255, 0.85);
        }
        .featured-pill {
          background: #fbb63f !important;
          color: #0f172a !important;
        }
        .featured-cap-card .cap-subtags span {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.2);
        }
        .featured-link {
          color: #fbb63f !important;
        }

        /* 5. OPPORTUNITIES SECTION */
        .opportunities-section {
          padding: 5.5rem 0;
          border-bottom: 1px solid var(--color-border-stone, #d6d1c4);
          background-color: var(--color-bg-warm, #FAF7F0);
        }
        .opp-filter-bar {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 3rem;
        }
        .opp-filter-btn {
          padding: 0.65rem 1.4rem;
          font-size: 0.88rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border-stone, #d6d1c4);
          background: #ffffff;
          color: #57534e;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .opp-filter-btn.active {
          background-color: #0f3d61;
          color: #ffffff;
          border-color: #0f3d61;
          box-shadow: 0 4px 15px rgba(15, 61, 97, 0.15);
        }
        .opp-listings-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          margin-bottom: 3.5rem;
        }
        @media (min-width: 768px) {
          .opp-listings-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .opp-listing-card {
          background: #ffffff;
          border: 1px solid var(--color-border-stone, #d6d1c4);
          border-radius: 1.15rem;
          padding: 2.2rem 1.75rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .opp-listing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.06);
          border-color: #0f3d61;
        }
        .opp-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .opp-category-badge {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #C05621;
        }
        .opp-type-pill {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          background: #f1f5f9;
          color: #0f3d61;
        }
        .opp-card-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .opp-card-desc {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .opp-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 0.9rem 0;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 1.25rem;
          font-size: 0.82rem;
          color: #64748b;
        }
        .opp-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .opp-skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 1.5rem;
        }
        .opp-skill-tag {
          font-size: 0.75rem;
          font-weight: 600;
          background: #FAF7F0;
          color: #334155;
          padding: 3px 8px;
          border-radius: 4px;
          border: 1px solid #e7e5e4;
        }
        .opp-card-footer {
          padding-top: 0.5rem;
        }
        .btn-opp-apply {
          background-color: #0f3d61;
          color: #ffffff !important;
          font-weight: 700;
          font-size: 0.88rem;
          padding: 0.75rem 1.4rem;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: all 0.2s ease;
          width: 100%;
          justify-content: center;
        }
        .btn-opp-apply:hover {
          background-color: #1a5b8c;
          box-shadow: 0 4px 15px rgba(15, 61, 97, 0.25);
        }
        .opp-employer-banner {
          background: #ffffff;
          border: 1px solid var(--color-border-stone, #d6d1c4);
          border-radius: 1.25rem;
          padding: 2.25rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }
        @media (min-width: 860px) {
          .opp-employer-banner {
            flex-direction: row;
            justify-content: space-between;
          }
        }
        .opp-banner-text h4 {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.25rem;
        }
        .opp-banner-text p {
          font-size: 0.95rem;
          color: #57534e;
          margin: 0;
        }

        /* 6. CLOSED-LOOP WORKFLOW */
        .workflow-section {
          padding: 5.5rem 0;
          border-bottom: 1px solid var(--color-border-stone, #d6d1c4);
          background-color: var(--color-bg-warm-subtle, #F5F2EA);
        }
        .workflow-header-row {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--color-border-stone, #d6d1c4);
          margin-bottom: 3.5rem;
        }
        @media (min-width: 860px) {
          .workflow-header-row {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
          }
        }
        .workflow-header-sub {
          max-width: 440px;
          font-size: 0.98rem;
          color: #57534e;
          line-height: 1.6;
          margin: 0;
        }
        .stages-columns-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 600px) {
          .stages-columns-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .stages-columns-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .stage-column-card {
          border-top: 2px solid #0f172a;
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease;
        }
        .stage-column-card:hover {
          transform: translateY(-4px);
        }
        .stage-top-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .stage-mono-phase {
          font-family: var(--font-mono);
          font-size: 2rem;
          font-weight: 700;
          color: #a8a29e;
          line-height: 1;
        }
        .stage-tag-badge {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-terracotta, #C05621);
        }
        .stage-card-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
          margin-bottom: 0.75rem;
        }
        .stage-card-desc {
          font-size: 0.88rem;
          color: #57534e;
          line-height: 1.55;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .stage-details-list {
          padding-top: 1rem;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .stage-detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #334155;
          font-weight: 500;
        }
        .detail-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #1b8a2c;
          flex-shrink: 0;
        }

        /* 7. VALUE FOR EVERY PARTICIPANT (Warm Tabs) */
        .value-participants-section {
          padding: 5.5rem 0;
          border-bottom: 1px solid var(--color-border-stone, #d6d1c4);
          background-color: var(--color-bg-warm, #FAF7F0);
        }
        .editorial-tabs-bar {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .editorial-tab-btn {
          padding: 0.75rem 1.8rem;
          font-size: 0.95rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border-stone, #d6d1c4);
          background: #ffffff;
          color: #57534e;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .editorial-tab-btn.active {
          background-color: #0f3d61;
          color: #ffffff;
          border-color: #0f3d61;
          box-shadow: 0 4px 15px rgba(15, 61, 97, 0.2);
        }
        .editorial-tab-panel {
          background: #ffffff;
          border: 1px solid var(--color-border-stone, #d6d1c4);
          border-radius: 1.25rem;
          padding: 3rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        @media (min-width: 860px) {
          .editorial-tab-panel {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
        .panel-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.4rem;
        }
        .panel-sub-highlight {
          font-size: 1.05rem;
          font-weight: 700;
          color: #C05621;
          margin-bottom: 1rem;
        }
        .panel-desc {
          font-size: 0.98rem;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }
        .points-header-lbl {
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #0f172a;
          margin-bottom: 1.2rem;
        }
        .points-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .point-item-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .point-badge-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(39, 201, 63, 0.15);
          color: #1b8a2c;
          font-weight: 900;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .point-item-text {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.5;
        }

        /* 8. STRATEGIC ECOSYSTEM PARTNERS */
        .partners-editorial-section {
          padding: 5.5rem 0;
          border-bottom: 1px solid var(--color-border-stone, #d6d1c4);
          background-color: var(--color-bg-warm-subtle, #F5F2EA);
        }
        .partners-editorial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 600px) {
          .partners-editorial-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .partners-editorial-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .partner-editorial-card {
          background: #ffffff;
          border: 1px solid var(--color-border-stone, #d6d1c4);
          border-radius: 1rem;
          padding: 2.2rem 1.8rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .partner-editorial-card:hover {
          transform: translateY(-4px);
          border-color: #0f3d61;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }
        .partner-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .partner-name-bold {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
        }
        .partner-short-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background: #FAF7F0;
          padding: 3px 8px;
          border-radius: 4px;
          color: #57534e;
          border: 1px solid #e7e5e4;
        }
        .partner-role-badge {
          font-size: 0.8rem;
          font-weight: 700;
          color: #C05621;
          margin-bottom: 0.75rem;
        }
        .partner-desc-text {
          font-size: 0.9rem;
          color: #57534e;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .partner-focus-area {
          font-size: 0.8rem;
          color: #78716c;
          border-top: 1px solid #f1f5f9;
          padding-top: 0.85rem;
        }
        .focus-lbl {
          font-weight: 700;
          color: #334155;
        }

        /* 9. FAQ SECTION */
        .faq-editorial-section {
          padding: 5.5rem 0;
          border-bottom: 1px solid var(--color-border-stone, #d6d1c4);
          background-color: var(--color-bg-warm, #FAF7F0);
        }
        .faq-accordion-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item-card {
          background: #ffffff;
          border: 1px solid var(--color-border-stone, #d6d1c4);
          border-radius: 0.85rem;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }
        .faq-item-card:hover {
          border-color: #0f3d61;
        }
        .faq-question-btn {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 1.4rem 1.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          gap: 1rem;
        }
        .faq-q-text {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
        }
        .faq-chevron {
          font-size: 1.1rem;
          color: #78716c;
          transition: transform 0.25s ease;
        }
        .faq-chevron.open {
          transform: rotate(180deg);
          color: #0f3d61;
        }
        .faq-answer-box {
          padding: 0 1.75rem 1.4rem;
        }
        .faq-answer-box p {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.65;
          margin: 0;
        }

        /* 10. FINAL EDITORIAL CTA */
        .final-editorial-cta {
          position: relative;
          padding: 6.5rem 0;
          text-align: center;
          color: #ffffff;
          overflow: hidden;
        }
        .cta-bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .cta-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .cta-dark-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 61, 97, 0.95) 0%,
            rgba(15, 61, 97, 0.92) 100%
          );
        }
        .cta-content-container {
          position: relative;
          z-index: 10;
          max-width: 780px;
          margin: 0 auto;
        }
        .cta-kicker-tag {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #fbb63f;
          margin-bottom: 1rem;
        }
        .cta-display-title {
          font-family: var(--font-serif);
          font-size: 2.6rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 1.25rem;
        }
        @media (min-width: 768px) {
          .cta-display-title {
            font-size: 3.25rem;
          }
        }
        .cta-narrative {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.65;
          margin-bottom: 2.5rem;
        }
        .cta-button-group {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .btn-warm-gold-lg {
          background-color: var(--color-yellow);
          color: #0f172a !important;
          font-weight: 700;
          font-size: 1rem;
          padding: 1rem 2.2rem;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 8px 25px rgba(251, 182, 63, 0.4);
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .btn-warm-gold-lg:hover {
          background-color: var(--color-yellow-dark);
          transform: translateY(-2px);
        }
        .btn-outline-glass-lg {
          background-color: rgba(255, 255, 255, 0.12);
          color: #ffffff !important;
          font-weight: 700;
          font-size: 1rem;
          padding: 1rem 2.2rem;
          border-radius: 12px;
          border: 2px solid rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(6px);
          transition: all 0.25s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .btn-outline-glass-lg:hover {
          background-color: #ffffff;
          color: #0f172a !important;
          transform: translateY(-2px);
        }
        .cta-contact-subtext {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .cta-contact-subtext a {
          color: #ffffff;
          text-decoration: underline;
        }
        .subtext-sep {
          margin: 0 8px;
          color: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 768px) {
          .editorial-tab-panel {
            padding: 1.75rem;
          }
          .editorial-heading {
            font-size: 2rem;
          }
          .hero-editorial-title {
            font-size: 2.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
