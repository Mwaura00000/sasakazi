"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function AboutPage() {
  // Intersection Observer scroll trigger animations
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
        ".section-title, .overview-box, .single-choose-us-box, .single-team-box, .hero-content"
      );
      targets.forEach((t) => observer.observe(t));

      return () => observer.disconnect();
    }
  }, []);

  const coreValues = [
    "Vetted Technical Skills",
    "Expert Mentor Oversight",
    "Secure Milestone Escrow",
    "Transparent Project Dashboards",
    "On-Demand Resource Scaling",
    "Reliable Milestone Delivery"
  ];
  
  const capabilities = [
    "Web & Fullstack Engineering",
    "Mobile App Development",
    "UI/UX Product Design",
    "Quality Assurance & Testing",
    "Cloud Architecture & DevOps",
    "Data Annotation & Analytics",
    "Tech Project Management",
    "API & Systems Integration"
  ];

  const chooseReasons = [
    {
      title: "Rigorous Vetting",
      desc: "Every software engineer and designer inside our talent directory passes extensive technical assessments and soft-skill reviews.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      title: "Mentor Guardrails",
      desc: "Paid business projects are matched with talent but overseen by senior experts who review code and ensure timely completion.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 11l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Milestone Escrow",
      desc: "Payments are held securely in milestone escrow and only released when the client approves the verified deliverable.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: "Structured Delivery",
      desc: "Projects are broken down into transparent milestones, making progress tracking and governance simple and stress-free.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )
    },
    {
      title: "Massively Scalable",
      desc: "Easily ramp up design and engineering resources on-demand to match your scope while saving on overhead costs.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="17 11 21 7 17 3" />
          <polyline points="7 21 3 17 7 13" />
          <line x1="21" y1="7" x2="9" y2="7" />
          <line x1="3" y1="17" x2="15" y2="17" />
        </svg>
      )
    },
    {
      title: "Complete Transparency",
      desc: "Deserve answers in plain English. Check task updates, track milestone progress, and communicate with developers and mentors.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    }
  ];

  const team = [
    {
      name: "Sam Kanja",
      role: "General Manager",
      img: "https://oasisoutsourcing.co.ke/wp-content/uploads/2022/05/2.png"
    },
    {
      name: "Lucy Mugure",
      role: "People Manager",
      img: "https://oasisoutsourcing.co.ke/wp-content/uploads/2022/05/1.png"
    },
    {
      name: "Morgan Majimbo",
      role: "Project Manager",
      img: "https://oasisoutsourcing.co.ke/wp-content/uploads/2022/05/3.png"
    },
    {
      name: "Brandy Mwendwa",
      role: "Business Manager",
      img: "https://oasisoutsourcing.co.ke/wp-content/uploads/2022/05/4.png"
    }
  ];

  return (
    <div className="about-page-wrapper">
      {/* Top Title area (Oasis page-title-area with resolved contrast bugs) */}
      <section className="page-title-area">
        <div className="container">
          <div className="hero-content">
            <h1>About Sasakazi</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link> <span className="separator">/</span> <span className="active-crumb">About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Area (Oasis features-area with Sasakazi copy) */}
      <section className="features-area">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Story</h2>
            <p>
              Sasakazi was founded as a digital talent marketplace to bridge the gap between youth tech talent training and secure, real-world project engagements. We began our quest to build a globally competent, highly vetted, and mentor-guided digital workforce in Kenya.
            </p>
            <h4 className="mission-heading">We are on a mission to empower youth tech talents and provide businesses with high-quality, secure project delivery.</h4>
          </div>

          {/* Overview Box 1: Business Value */}
          <div className="overview-box grid grid-2">
            <div className="overview-content">
              <h3>Consistently Delivering Business Value</h3>
              <p>
                We are in the business of creative problem-solving. From verified candidate technical assessments to secure milestone escrow, we build transparent connections that drive measurable results. Our mentor-guided framework ensures project delivery is smooth, compliant, and reliable.
              </p>
              <ul className="features-checklist">
                {coreValues.map((val) => (
                  <li key={val}>
                    <span className="check-bullet">✓</span> {val}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="overview-image">
              <img src="https://oasisoutsourcing.co.ke/wp-content/uploads/2024/02/Makpix-14-scaled.jpg" alt="Delivering Business Value" className="section-img" />
            </div>
          </div>

          {/* Overview Box 2: Capabilities */}
          <div className="overview-box grid grid-2">
            <div className="overview-content">
              <h3>Our Core Expertise</h3>
              <p>
                Through Sasakazi, businesses outsource development and design needs to a broad spectrum of verified digital capability areas, managed under experienced senior mentors.
              </p>
              <ul className="capabilities-checklist">
                {capabilities.map((cap) => (
                  <li key={cap} className="capability-item">
                    <span className="bullet-point">●</span> {cap}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overview-image">
              <img src="https://oasisoutsourcing.co.ke/wp-content/uploads/2024/02/Makpix-63-scaled.jpg" alt="Our Services" className="section-img" />
            </div>
          </div>
        </div>

        {/* Decorative Bobbing Shapes */}
        <div className="shape shape1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /></svg>
        </div>
        <div className="shape shape2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 22h20L12 2z" /></svg>
        </div>
        <div className="shape shape3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
        </div>
      </section>

      {/* Why Choose Us Area (Oasis inspired grid but with Sasakazi copy and refined card heights) */}
      <section className="why-choose-us-area">
        <div className="container">
          <div className="row-wrapper">
            <div className="choose-title-col">
              <div className="section-title text-left">
                <h2>Why Choose Sasakazi?</h2>
                <p>
                  Outsourcing software development and digital projects is key to controlling overheads. With Sasakazi, hiring tech talent is secure and risk-free, protected by technical assessment vetting, senior mentor code reviews, and escrow milestones.
                </p>
              </div>
            </div>

            <div className="choose-cards-col">
              <div className="grid grid-3 choose-us-grid">
                {chooseReasons.map((reason, idx) => (
                  <div key={idx} className="single-choose-us-box">
                    <div className="title">
                      <div className="icon">
                        {reason.icon}
                      </div>
                      <h3>{reason.title}</h3>
                    </div>

                    <div className="content">
                      <h3>{reason.title}</h3>
                      <p>{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Area */}
      <section className="team-area">
        <div className="container">
          <div className="section-title text-center">
            <h2>Meet Our Core Team</h2>
            <p>
              Our leadership team guides talent onboarding, manages project milestones, and verifies that client deliverables meet technical expectations.
            </p>
          </div>

          <div className="grid grid-4 team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="single-team-box">
                <div className="image">
                  <img src={member.img} alt={member.name} />
                  
                  {/* Social links block overlay */}
                  <div className="social">
                    <a href="#" target="_blank" aria-label="Facebook">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a href="#" target="_blank" aria-label="Twitter">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                    <a href="#" target="_blank" aria-label="Instagram">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="content">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page-wrapper {
          overflow-x: hidden;
          font-family: var(--font-primary);
        }

        /* Top Title area (Oasis page-title-area - fixed contrast overlays) */
        .page-title-area {
          padding: 100px 0;
          background-image: url('https://oasisoutsourcing.co.ke/wp-content/uploads/2019/12/page-title-bg-2.png');
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          text-align: center;
          position: relative;
        }
        .page-title-area::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(30, 41, 59, 0.85); /* slate dark overlay */
          z-index: 1;
        }
        .page-title-area .hero-content {
          position: relative;
          z-index: 2;
        }
        .page-title-area h1 {
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff !important;
          margin: 0 0 12px 0;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        .breadcrumbs {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9) !important;
        }
        .breadcrumbs :global(a) {
          color: rgba(255, 255, 255, 0.9) !important;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .breadcrumbs :global(a):hover {
          color: var(--color-yellow) !important;
        }
        .breadcrumbs .separator {
          margin: 0 8px;
          color: rgba(255, 255, 255, 0.4);
        }
        .breadcrumbs .active-crumb {
          color: var(--color-yellow) !important;
        }

        /* Features/Story Area */
        .features-area {
          padding: 110px 0;
          background-color: var(--color-white);
          position: relative;
        }

        .section-title {
          margin-bottom: 60px;
          text-align: center;
        }
        .section-title h2 {
          font-size: 2.3rem;
          font-weight: 800;
          color: #2a3275;
          margin-bottom: 20px;
        }
        .section-title p {
          max-width: 800px;
          margin: 0 auto 24px auto;
          color: #57647c;
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .mission-heading {
          font-size: 1.35rem;
          font-weight: 700;
          color: #2a3275;
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.5;
        }

        /* Overview boxes */
        .overview-box {
          margin-top: 60px;
          align-items: center;
          gap: 48px;
        }
        @media (max-width: 768px) {
          .overview-box {
            grid-template-columns: 1fr !important;
            gap: 32px;
          }
        }
        .overview-content h3 {
          font-size: 1.75rem;
          font-weight: 800;
          color: #2a3275;
          margin-bottom: 16px;
        }
        .overview-content p {
          font-size: 1rem;
          line-height: 1.7;
          color: #57647c;
          margin-bottom: 24px;
        }
        
        .features-checklist {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          padding: 0;
        }
        .features-checklist li {
          font-weight: 700;
          color: #2a3275;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .check-bullet {
          color: #4ac728;
          font-weight: 900;
        }

        .capabilities-checklist {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .capability-item {
          font-weight: 600;
          color: #57647c;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .bullet-point {
          color: #4ac728;
          font-size: 0.75rem;
        }

        .overview-image {
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        .section-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          max-height: 380px;
        }

        /* Decorative Shapes (bobbing) */
        .shape {
          display: none !important;
        }
        .shape1 {
          top: 15%;
          left: 6%;
          animation: floatShape 6s ease-in-out infinite;
        }
        .shape2 {
          bottom: 20%;
          right: 5%;
          animation: floatShape 8s ease-in-out infinite;
        }
        .shape3 {
          top: 50%;
          left: 50%;
          animation: floatShape 10s ease-in-out infinite;
        }

        @keyframes floatShape {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(90deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        /* Why Choose Us Area (Refined heights and border colors) */
        .why-choose-us-area {
          padding: 110px 0;
          background-image: url('https://oasisoutsourcing.co.ke/wp-content/uploads/2019/12/why-choose-us-bg-2.png');
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          position: relative;
          color: var(--color-white);
        }
        .why-choose-us-area::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(42, 50, 117, 0.94);
        }
        .row-wrapper {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .choose-title-col .section-title h2 {
          color: var(--color-white) !important;
        }
        .choose-title-col .section-title p {
          color: rgba(255, 255, 255, 0.8) !important;
          margin-bottom: 0;
        }

        .choose-us-grid {
          gap: 24px;
        }
        .single-choose-us-box {
          position: relative;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          height: 240px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .single-choose-us-box:hover {
          background-color: rgba(255, 255, 255, 0.09);
          border-color: var(--color-yellow);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);
        }
        .single-choose-us-box .title {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          transition: all 0.4s ease;
          padding: 24px;
        }
        .single-choose-us-box .title .icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: rgba(74, 199, 40, 0.15);
          color: #4ac728;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }
        .single-choose-us-box .title h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-white);
          margin: 0;
          text-align: center;
        }
        .single-choose-us-box .content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 24px;
          background-color: #1e293b; /* Sleek slate dark background on card flip */
          border: 1px solid var(--color-yellow);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          opacity: 0;
          transform: translateY(100%);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .single-choose-us-box:hover .title {
          transform: translateY(-20px);
          opacity: 0;
        }
        .single-choose-us-box:hover .content {
          opacity: 1;
          transform: translateY(0);
        }
        .single-choose-us-box .content h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-yellow);
          margin-bottom: 10px;
        }
        .single-choose-us-box .content p {
          font-size: 0.82rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        /* Team Area */
        .team-area {
          padding: 110px 0;
          background-color: var(--color-white);
        }
        .team-grid {
          margin-top: 40px;
        }
        .single-team-box {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-gray);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .single-team-box:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(42, 50, 117, 0.08);
          border-color: rgba(42, 50, 117, 0.15);
        }
        .single-team-box .image {
          position: relative;
          overflow: hidden;
          height: 250px;
          background-color: #f1f5f9;
        }
        .single-team-box .image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }
        .single-team-box:hover .image img {
          transform: scale(1.08);
        }
        
        .single-team-box .social {
          position: absolute;
          bottom: -60px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 12px;
          padding: 14px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
          transition: bottom 0.35s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .single-team-box:hover .social {
          bottom: 0;
        }
        .single-team-box .social a {
          color: var(--color-white);
          width: 34px;
          height: 34px;
          background-color: #2a3275;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .single-team-box .social a:hover {
          background-color: #4ac728;
          color: var(--color-white);
          transform: scale(1.1);
        }

        .single-team-box .content {
          padding: 20px;
          text-align: center;
          border-top: 1px solid var(--color-border-gray);
        }
        .single-team-box .content h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #2a3275;
          margin: 0 0 6px 0;
        }
        .single-team-box .content span {
          font-size: 0.82rem;
          font-weight: 600;
          color: #57647c;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Scroll Animations base classes */
        .section-title, .overview-box, .single-choose-us-box, .single-team-box, .hero-content {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        
        .is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Staggered transition delays for rows */
        .choose-us-grid .single-choose-us-box:nth-child(1) { transition-delay: 0.05s; }
        .choose-us-grid .single-choose-us-box:nth-child(2) { transition-delay: 0.12s; }
        .choose-us-grid .single-choose-us-box:nth-child(3) { transition-delay: 0.19s; }
        .choose-us-grid .single-choose-us-box:nth-child(4) { transition-delay: 0.26s; }
        .choose-us-grid .single-choose-us-box:nth-child(5) { transition-delay: 0.33s; }
        .choose-us-grid .single-choose-us-box:nth-child(6) { transition-delay: 0.4s; }

        .team-grid .single-team-box:nth-child(1) { transition-delay: 0.05s; }
        .team-grid .single-team-box:nth-child(2) { transition-delay: 0.15s; }
        .team-grid .single-team-box:nth-child(3) { transition-delay: 0.25s; }
        .team-grid .single-team-box:nth-child(4) { transition-delay: 0.35s; }

        @media (prefers-reduced-motion: reduce) {
          .section-title, .overview-box, .single-choose-us-box, .single-team-box, .hero-content {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            transition-delay: 0s !important;
          }
          .single-choose-us-box:hover {
            transform: none !important;
          }
          .single-team-box:hover {
            transform: none !important;
          }
          .single-team-box:hover .image img {
            transform: none !important;
          }
          .single-choose-us-box:hover .title {
            transform: none !important;
          }
          .single-choose-us-box:hover .content {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
