"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`scroll-to-top-btn ${isVisible ? "visible" : ""}`}
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>

      <style jsx>{`
        .scroll-to-top-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 46px;
          height: 46px;
          background-color: var(--color-blue);
          color: var(--color-white);
          border: none;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(26, 91, 140, 0.2);
          opacity: 0;
          visibility: hidden;
          transform: translateY(80px);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          z-index: 998;
        }

        .scroll-to-top-btn.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .scroll-to-top-btn:hover {
          background-color: var(--color-blue-dark);
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(26, 91, 140, 0.35);
        }

        .scroll-to-top-btn:active {
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
