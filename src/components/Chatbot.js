"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const initialMessages = [
    {
      id: 1,
      sender: "bot",
      text: "Hello, welcome to SasaKazi Concierge. We deliver governed practical digital BPO solutions for Kenyan businesses in 30–45 days, and connect vetted digital talent with supervised commercial projects.\n\nHow can I assist you today?",
      chips: [
        { label: "Stock & Inventory", query: "Tell me about Stock & Inventory Visibility" },
        { label: "Payments Reconciliation", query: "Tell me about Payments Reconciliation" },
        { label: "Customer Follow-up", query: "Tell me about Customer Follow-up" },
        { label: "Enrol as Tech Talent", query: "How do I enrol as tech talent?" },
        { label: "Pricing & Pilot Models", query: "What are your pilot prices?" },
        { label: "Book Consultation", query: "I would like to book a consultation" }
      ]
    }
  ];

  const [messages, setMessages] = useState(initialMessages);

  // Auto-scroll on message updates
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Support opening chatbot via global custom event
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-sasakazi-chat", handleOpenChat);
    return () => window.removeEventListener("open-sasakazi-chat", handleOpenChat);
  }, []);

  // Prevent background body scroll on mobile devices when chat is open
  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && window.innerWidth <= 640) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleResetChat = () => {
    setMessages(initialMessages);
    setInput("");
    setIsTyping(false);
  };

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg = { id: Date.now(), sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(query);
      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: "bot", ...botResponse }]);
      setIsTyping(false);
    }, 500);
  };

  const generateBotResponse = (query) => {
    const q = query.toLowerCase();

    // 1. Talent Enrolment
    if (q.includes("talent") || q.includes("enrol") || q.includes("enroll") || q.includes("join") || q.includes("apply") || q.includes("developer") || q.includes("job") || q.includes("career") || q.includes("intern")) {
      return {
        text: "Are you a skilled tech, data, or operations professional? SasaKazi partners with EldoHub to deploy vetted Kenyan talent into verified commercial projects with structured milestone pay and senior mentorship. You work directly on practical client deliverables without bidding wars.",
        action: {
          label: "Enrol as Tech Talent Now →",
          href: "/register"
        },
        chips: [
          { label: "Talent Requirements", query: "What are the requirements to join as talent?" },
          { label: "Browse Talent Roster", query: "Can I view the talent directory?" },
          { label: "Business Services Instead", query: "I am a business owner looking for BPO services" }
        ]
      };
    }

    // 2. Talent Requirements
    if (q.includes("requirement") || q.includes("vetting") || q.includes("qualification") || q.includes("criteria")) {
      return {
        text: "Talent onboarding follows a 3-step quality assurance process:\n1. Online registration and portfolio review.\n2. Practical skills assessment administered with EldoHub.\n3. Placement into mentor-supervised work pods for live client delivery.",
        action: {
          label: "Create Talent Account →",
          href: "/register"
        },
        chips: [
          { label: "Browse Talent Roster", query: "Can I view the talent directory?" },
          { label: "Ask About Pilots", query: "What business services do you offer?" }
        ]
      };
    }

    // 3. Stock & Inventory
    if (q.includes("stock") || q.includes("inventory") || q.includes("shrinkage") || q.includes("pos") || q.includes("warehouse")) {
      return {
        text: "Our Stock & Inventory Visibility pilot (From KES 25,000) fixes stock shrinkage, daily counting routines, and reorder alerts in 30–45 days. We work directly inside your existing spreadsheets or point-of-sale system—no expensive ERP software required.",
        action: {
          label: "Request Inventory Pilot →",
          href: "/contact?service=stock-inventory"
        },
        chips: [
          { label: "Payments Reconciliation", query: "Tell me about Payments Reconciliation" },
          { label: "Customer Follow-up", query: "Tell me about Customer Follow-up" },
          { label: "Pricing Overview", query: "What is your pricing?" }
        ]
      };
    }

    // 4. Payments Reconciliation
    if (q.includes("payment") || q.includes("reconcil") || q.includes("mpesa") || q.includes("m-pesa") || q.includes("bank") || q.includes("till") || q.includes("paybill") || q.includes("finance")) {
      return {
        text: "Our Payments Reconciliation pilot (From KES 20,000) maps your daily M-Pesa till/Paybill collections, cash deposits, and bank statements to customer invoices with zero missing shillings. We operate strictly on read-only statements—no transactional or login credentials required.",
        action: {
          label: "Request Payments Pilot →",
          href: "/contact?service=payments-reconciliation"
        },
        chips: [
          { label: "Stock Visibility Pilot", query: "Tell me about Stock & Inventory Visibility" },
          { label: "Customer Follow-up", query: "Tell me about Customer Follow-up" },
          { label: "Data Confidentiality", query: "How do you protect business data?" }
        ]
      };
    }

    // 5. Customer Follow-up
    if (q.includes("customer") || q.includes("follow") || q.includes("quote") || q.includes("lead") || q.includes("sales") || q.includes("client")) {
      return {
        text: "Our Customer Follow-up pilot (From KES 18,000) turns cold inquiries and unanswered price quotes into active revenue. Vetted professionals follow up across telephone, email, and digital messaging using your approved script and brand voice.",
        action: {
          label: "Request Follow-up Pilot →",
          href: "/contact?service=customer-follow-up"
        },
        chips: [
          { label: "Pricing Overview", query: "What is your pricing?" },
          { label: "Book a Short Call", query: "I want to book a call" }
        ]
      };
    }

    // 6. Pricing & Costs
    if (q.includes("price") || q.includes("pricing") || q.includes("cost") || q.includes("how much") || q.includes("kes") || q.includes("rate") || q.includes("fee")) {
      return {
        text: "We offer clear, fixed-milestone pricing for 30–45 day pilots:\n• Customer Follow-up: From KES 18,000\n• Payments Reconciliation: From KES 20,000\n• Stock & Inventory Visibility: From KES 25,000\nEvery engagement includes EldoHub senior mentorship, defined acceptance criteria, and zero hidden software subscription fees.",
        action: {
          label: "View All BPO Services →",
          href: "/services"
        },
        chips: [
          { label: "Book Diagnostic Call", query: "I want to book a call" },
          { label: "Enrol as Tech Talent", query: "How do I enrol as tech talent?" }
        ]
      };
    }

    // 7. Security, NDA & Data Protection
    if (q.includes("security") || q.includes("safe") || q.includes("nda") || q.includes("confidential") || q.includes("privacy") || q.includes("protect")) {
      return {
        text: "We uphold strict enterprise data safeguards:\n• All talent and coordinators execute comprehensive NDAs.\n• Deliverables operate on strictly read-only exports and shared cloud sheets.\n• No administrative financial access or passwords are ever requested.\n• Every engagement is governed by EldoHub's institutional quality standards.",
        action: {
          label: "Review Safeguarding Policy →",
          href: "/safeguarding"
        },
        chips: [
          { label: "Book a Consultation", query: "I want to book a call" },
          { label: "Pilot Deliverables", query: "What are your pilot prices?" }
        ]
      };
    }

    // 8. Timeline & Pilot Structure
    if (q.includes("timeline") || q.includes("how long") || q.includes("duration") || q.includes("days") || q.includes("process") || q.includes("how it works")) {
      return {
        text: "Our pilots are designed for speed and measurable impact:\n• Day 1–5: Operational discovery and bottleneck diagnosis.\n• Day 6–25: Supervised talent deployment and daily workflow execution.\n• Day 26–30+: Process stabilization, documented standard operating procedures (SOPs), and internal staff handover.",
        action: {
          label: "Learn How It Works →",
          href: "/how-it-works"
        },
        chips: [
          { label: "Pricing Overview", query: "What is your pricing?" },
          { label: "Book Diagnostic Call", query: "I want to book a call" }
        ]
      };
    }

    // 9. Contact / Direct channels
    if (q.includes("call") || q.includes("contact") || q.includes("phone") || q.includes("telephone") || q.includes("email") || q.includes("reach") || q.includes("talk") || q.includes("book")) {
      return {
        text: "We are ready to assist you:\n• Direct Telephone: +254 723 567 263\n• Email: info@sasakazi.co.ke\n• Response Time: Guaranteed within one business day\n• Format: 15-minute diagnostic call with zero aggressive sales pitch.",
        action: {
          label: "Book a 15-Minute Consultation →",
          href: "/contact"
        },
        chips: [
          { label: "Our Locations", query: "Where are your offices located?" },
          { label: "Service Pricing", query: "What is your pricing?" }
        ]
      };
    }

    // 10. Location & EldoHub Affiliation
    if (q.includes("location") || q.includes("where") || q.includes("office") || q.includes("eldoret") || q.includes("nairobi") || q.includes("eldohub")) {
      return {
        text: "SasaKazi is powered by EldoHub with dual operations:\n• Eldoret Headquarters: EldoHub Innovation Campus, Eldoret, Kenya\n• Nairobi Node: Commercial Operations Hub, Nairobi, Kenya\nWe serve businesses across all 47 Kenyan counties with both remote and hybrid delivery.",
        action: {
          label: "Learn About SasaKazi & EldoHub →",
          href: "/about"
        },
        chips: [
          { label: "Book Consultation", query: "I want to book a call" },
          { label: "Enrol as Talent", query: "How do I enrol as tech talent?" }
        ]
      };
    }

    // Default Fallback
    return {
      text: "Thank you for reaching out. SasaKazi delivers practical digital BPO solutions for Kenyan businesses through vetted local talent, and offers a governed commercial pathway for skilled youth.\n\nWhich area would you like to explore?",
      action: {
        label: "Book an Operational Discovery Call →",
        href: "/contact"
      },
      chips: [
        { label: "Stock & Inventory Visibility", query: "Tell me about Stock & Inventory Visibility" },
        { label: "Payments Reconciliation", query: "Tell me about Payments Reconciliation" },
        { label: "Customer Follow-up", query: "Tell me about Customer Follow-up" },
        { label: "Enrol as Tech Talent", query: "How do I enrol as tech talent?" }
      ]
    };
  };

  return (
    <>
      {/* Floating Trigger Button (Strictly Bottom Right) */}
      <div className="sasakazi-chatbot-launcher">
        {!isOpen && (
          <button 
            onClick={() => setIsOpen(true)}
            className="chat-trigger-btn"
            aria-label="Open SasaKazi Concierge Chatbot"
          >
            <div className="trigger-pulse"></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="trigger-label">Concierge</span>
          </button>
        )}
      </div>

      {/* Embedded Chat Modal Window */}
      {isOpen && (
        <div className="sasakazi-chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="bot-avatar">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="status-dot"></span>
              </div>
              <div className="header-titles">
                <h4>SasaKazi Concierge</h4>
                <p>Online • Powered by EldoHub</p>
              </div>
            </div>
            <div className="chat-header-controls">
              <button 
                onClick={handleResetChat} 
                className="chat-control-btn"
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="chat-control-btn chat-close-btn"
                title="Close chat"
                aria-label="Close chat"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="chat-body">
            {messages.map((m) => (
              <div key={m.id} className={`chat-message-row ${m.sender === "user" ? "user-row" : "bot-row"}`}>
                {m.sender === "bot" && (
                  <div className="bot-msg-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                )}
                <div className={`chat-bubble ${m.sender === "user" ? "user-bubble" : "bot-bubble"}`}>
                  <p style={{ whiteSpace: "pre-line" }}>{m.text}</p>
                  
                  {/* Action Link Button if provided */}
                  {m.action && (
                    <div className="bubble-action">
                      <Link 
                        href={m.action.href} 
                        onClick={() => setIsOpen(false)}
                        className="btn-bubble-action"
                      >
                        {m.action.label}
                      </Link>
                    </div>
                  )}

                  {/* Suggestion Chips */}
                  {m.chips && m.chips.length > 0 && (
                    <div className="chips-container">
                      {m.chips.map((chip, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSend(chip.query)}
                          className="chip-btn"
                        >
                          {chip.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message-row bot-row">
                <div className="bot-msg-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div className="chat-bubble bot-bubble typing-bubble">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }} 
            className="chat-footer"
          >
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Ask about pilots, pricing, or talent..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chat-input"
            />
            <button 
              type="submit" 
              className="chat-send-btn"
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        /* Trigger Button - strictly bottom right */
        .sasakazi-chatbot-launcher {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
        }

        .chat-trigger-btn {
          position: relative;
          background: linear-gradient(135deg, var(--color-teal, #0D9488) 0%, #0f766e 100%);
          color: #ffffff;
          border: none;
          border-radius: var(--radius-full, 9999px);
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          font-family: inherit;
          font-weight: 700;
          font-size: 0.92rem;
          box-shadow: 0 10px 25px rgba(13, 148, 136, 0.4);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .chat-trigger-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 14px 30px rgba(13, 148, 136, 0.5);
        }

        .trigger-pulse {
          position: absolute;
          width: 10px;
          height: 10px;
          top: 8px;
          right: 12px;
          border-radius: 50%;
          background: #5eead4;
          box-shadow: 0 0 0 0 rgba(94, 234, 212, 0.7);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(94, 234, 212, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 8px rgba(94, 234, 212, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(94, 234, 212, 0);
          }
        }

        /* Chat Window Modal */
        .sasakazi-chat-window {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 390px;
          max-width: calc(100vw - 32px);
          height: 560px;
          max-height: calc(100vh - 48px);
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(15, 47, 77, 0.25);
          border: 1px solid var(--color-border, #E2E8F0);
          display: flex;
          flex-direction: column;
          z-index: 10000;
          overflow: hidden;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Header */
        .chat-header {
          background: linear-gradient(135deg, var(--color-navy, #1F4E79) 0%, #0f2f4d 100%);
          color: #ffffff;
          padding: 14px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bot-avatar {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #5eead4;
        }

        .status-dot {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid var(--color-navy, #1F4E79);
        }

        .header-titles h4 {
          margin: 0;
          font-size: 0.98rem;
          font-weight: 700;
          color: #ffffff;
        }

        .header-titles p {
          margin: 2px 0 0 0;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.75);
        }

        .chat-header-controls {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .chat-control-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: rgba(255, 255, 255, 0.85);
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .chat-control-btn:hover {
          background: rgba(255, 255, 255, 0.22);
          color: #ffffff;
        }

        .chat-close-btn:hover {
          background: rgba(239, 68, 68, 0.8);
          color: #ffffff;
        }

        /* Chat Body */
        .chat-body {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          background-color: #f8fafc;
        }

        .chat-message-row {
          display: flex;
          gap: 10px;
          align-items: flex-end;
        }

        .user-row {
          justify-content: flex-end;
        }

        .bot-row {
          justify-content: flex-start;
        }

        .bot-msg-icon {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: var(--color-navy, #1F4E79);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: 2px;
        }

        .chat-bubble {
          max-width: 82%;
          padding: 12px 15px;
          border-radius: 16px;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .bot-bubble {
          background: #ffffff;
          color: #1e293b;
          border: 1px solid #e2e8f0;
          border-bottom-left-radius: 4px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
        }

        .user-bubble {
          background: var(--color-teal, #0D9488);
          color: #ffffff;
          border-bottom-right-radius: 4px;
          box-shadow: 0 4px 12px rgba(13, 148, 136, 0.25);
        }

        .chat-bubble p {
          margin: 0;
        }

        /* Action Link */
        .bubble-action {
          margin-top: 10px;
          padding-top: 8px;
          border-top: 1px dashed #e2e8f0;
        }

        .btn-bubble-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--color-navy, #1F4E79);
          color: #ffffff !important;
          font-weight: 700;
          font-size: 0.82rem;
          padding: 7px 13px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .btn-bubble-action:hover {
          background: var(--color-teal, #0D9488);
        }

        /* Chips */
        .chips-container {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 10px;
          padding-top: 8px;
          border-top: 1px solid #f1f5f9;
        }

        .chip-btn {
          background: #f1f5f9;
          color: var(--color-navy, #1F4E79);
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          padding: 5px 10px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .chip-btn:hover {
          background: var(--color-teal, #0D9488);
          color: #ffffff;
          border-color: var(--color-teal, #0D9488);
          transform: translateY(-1px);
        }

        /* Typing Dots */
        .typing-bubble {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 12px 16px;
        }

        .typing-bubble span {
          width: 6px;
          height: 6px;
          background: #94a3b8;
          border-radius: 50%;
          animation: blink 1.4s infinite both;
        }

        .typing-bubble span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-bubble span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes blink {
          0%, 80%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          40% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        /* Footer Input */
        .chat-footer {
          padding: 12px 14px;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .chat-input {
          flex: 1;
          border: 1px solid #cbd5e1;
          border-radius: 20px;
          padding: 9px 14px;
          font-size: 0.88rem;
          outline: none;
          color: #0f172a;
          background: #f8fafc;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .chat-input:focus {
          border-color: var(--color-teal, #0D9488);
          background: #ffffff;
        }

        .chat-send-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          background: var(--color-teal, #0D9488);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .chat-send-btn:hover:not(:disabled) {
          background: #0f766e;
          transform: scale(1.05);
        }

        .chat-send-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
          opacity: 0.7;
        }

        @media (max-width: 640px) {
          .sasakazi-chatbot-launcher {
            bottom: max(16px, env(safe-area-inset-bottom, 16px));
            right: 16px;
          }

          .chat-trigger-btn {
            padding: 10px 16px;
            font-size: 0.86rem;
            gap: 8px;
          }

          .sasakazi-chat-window {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100%;
            height: 100dvh;
            max-width: 100vw;
            max-height: 100dvh;
            border-radius: 0;
            border: none;
            box-shadow: none;
            z-index: 10001;
          }

          .chat-header {
            padding: max(14px, env(safe-area-inset-top, 14px)) 16px 12px 16px;
            border-radius: 0;
          }

          .chat-header-info {
            gap: 10px;
          }

          .bot-avatar {
            width: 36px;
            height: 36px;
          }

          .header-titles h4 {
            font-size: 0.95rem;
          }

          .header-titles p {
            font-size: 0.72rem;
          }

          .chat-control-btn {
            width: 36px;
            height: 36px;
          }

          .chat-body {
            padding: 14px 12px;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: contain;
          }

          .chat-bubble {
            max-width: 88%;
            font-size: 0.88rem;
            padding: 10px 13px;
          }

          .chat-footer {
            padding: 10px 12px max(12px, env(safe-area-inset-bottom, 12px)) 12px;
            background: #ffffff;
          }

          .chat-input {
            font-size: 16px; /* Prevents unwanted iOS Safari viewport auto-zoom */
            padding: 10px 14px;
          }

          .chat-send-btn {
            width: 40px;
            height: 40px;
          }

          .chips-container {
            gap: 6px;
          }

          .chip-btn {
            font-size: 0.76rem;
            padding: 6px 10px;
          }
        }
      `}</style>
    </>
  );
}
