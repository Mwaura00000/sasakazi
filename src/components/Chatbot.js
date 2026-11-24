"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const initialMessages = [
    {
      id: 1,
      sender: "bot",
      text: "Hello! 👋 I'm your SasaKazi Concierge. We help Kenyan businesses solve operational bottlenecks in 30–45 days with vetted local talent, and connect skilled youth to governed tech work. How can I help you today?",
      chips: [
        { label: "📦 Stock & Inventory", query: "Tell me about Stock & Inventory pilot" },
        { label: "💳 Payments Matching", query: "Tell me about Payments Reconciliation" },
        { label: "📞 Customer Follow-up", query: "Tell me about Customer Follow-up" },
        { label: "🚀 Enrol as Tech Talent", query: "How do I enrol as a tech talent?" },
        { label: "📅 Book Diagnostic Call", query: "I want to book a call" }
      ]
    }
  ];

  const [messages, setMessages] = useState(initialMessages);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  // Support opening chatbot via global custom event: window.dispatchEvent(new CustomEvent('open-sasakazi-chat'))
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-sasakazi-chat", handleOpenChat);
    return () => window.removeEventListener("open-sasakazi-chat", handleOpenChat);
  }, []);

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate concierge response
    setTimeout(() => {
      const botResponse = generateBotResponse(query);
      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: "bot", ...botResponse }]);
      setIsTyping(false);
    }, 600);
  };

  const generateBotResponse = (query) => {
    const q = query.toLowerCase();

    // 1. Talent Enrolment
    if (q.includes("talent") || q.includes("enrol") || q.includes("join") || q.includes("apply") || q.includes("developer") || q.includes("job")) {
      return {
        text: "Are you a skilled tech or operations professional? SasaKazi deploys vetted Kenyan talent to governed SME projects with agreed milestone compensation and senior EldoHub mentorship. You will work on real client workflows without bidding wars.",
        action: {
          label: "Enrol as Tech Talent Now →",
          href: "/talent"
        },
        chips: [
          { label: "Talent Requirements", query: "What are the requirements to join as talent?" },
          { label: "Book a Client Pilot", query: "I want a business service instead" }
        ]
      };
    }

    // 2. Stock & Inventory
    if (q.includes("stock") || q.includes("inventory") || q.includes("shrinkage") || q.includes("pos")) {
      return {
        text: "Our Stock & Inventory Visibility pilot (From KES 25,000) fixes stock shrinkage, daily counting routines, and reorder alerts in 30–45 days. We work directly inside your existing spreadsheets or POS—no expensive software required.",
        action: {
          label: "Request Inventory Pilot →",
          href: "/contact?service=stock-inventory"
        },
        chips: [
          { label: "View Deliverables", query: "What are the deliverables for inventory?" },
          { label: "Check Payments Reconciliation", query: "Tell me about Payments Reconciliation" }
        ]
      };
    }

    // 3. Payments Reconciliation
    if (q.includes("payment") || q.includes("reconcil") || q.includes("mpesa") || q.includes("m-pesa") || q.includes("bank") || q.includes("till")) {
      return {
        text: "Our Payments Reconciliation pilot (From KES 20,000) maps your daily M-Pesa till/Paybill collections, cash deposits, and bank transfers to customer invoices with zero missing shillings. Strictly read-only access (no passwords needed).",
        action: {
          label: "Request Payments Pilot →",
          href: "/contact?service=payments-reconciliation"
        },
        chips: [
          { label: "View Deliverables", query: "What are the deliverables for payments?" },
          { label: "Customer Follow-up Pilot", query: "Tell me about Customer Follow-up" }
        ]
      };
    }

    // 4. Customer Follow-up
    if (q.includes("customer") || q.includes("follow") || q.includes("quote") || q.includes("leads") || q.includes("sales")) {
      return {
        text: "Our Customer Follow-up pilot (From KES 18,000) is the fastest way to turn cold inquiries and unanswered price quotes into active revenue. Vetted professionals follow up via phone, email, and WhatsApp using your approved brand voice.",
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

    // 5. Pricing
    if (q.includes("price") || q.includes("cost") || q.includes("how much") || q.includes("kes") || q.includes("rate")) {
      return {
        text: "We offer transparent, fixed-price 30–45 day pilots for Kenyan businesses:\n• Customer Follow-up: From KES 18,000\n• Payments Reconciliation: From KES 20,000\n• Stock & Inventory Visibility: From KES 25,000\nEvery pilot includes senior EldoHub QA mentorship and a full handover.",
        action: {
          label: "View All Services →",
          href: "/services"
        },
        chips: [
          { label: "Book a Needs Call", query: "I want to book a call" },
          { label: "Enrol as Tech Talent", query: "How do I enrol as a tech talent?" }
        ]
      };
    }

    // 6. Contact / Booking
    if (q.includes("call") || q.includes("contact") || q.includes("book") || q.includes("phone") || q.includes("email") || q.includes("talk")) {
      return {
        text: "We would love to speak with you! You can request a 15-minute diagnostic consultation right here. We respond within one business day with no aggressive sales pitch.",
        action: {
          label: "Book a 15-Min Consultation →",
          href: "/contact"
        },
        chips: [
          { label: "Call Hotline", query: "What is your phone number?" },
          { label: "Our Locations", query: "Where are your offices located?" }
        ]
      };
    }

    // 7. EldoHub & Location
    if (q.includes("eldohub") || q.includes("eldoret") || q.includes("nairobi") || q.includes("location") || q.includes("where") || q.includes("office")) {
      return {
        text: "SasaKazi is powered by EldoHub with primary headquarters at the EldoHub Innovation Campus in Eldoret and an operational node in Nairobi. We serve businesses across Kenya.",
        action: {
          label: "Learn About SasaKazi & EldoHub →",
          href: "/about"
        },
        chips: [
          { label: "View Services", query: "What services do you offer?" },
          { label: "Enrol as Talent", query: "How do I enrol as a tech talent?" }
        ]
      };
    }

    // Default Fallback
    return {
      text: "Thanks for asking! SasaKazi delivers practical digital BPO solutions for Kenyan businesses through vetted local talent, and offers a governed pathway for tech talent to work on real client projects.",
      action: {
        label: "Book a Needs Call →",
        href: "/contact"
      },
      chips: [
        { label: "📦 Stock & Inventory", query: "Tell me about Stock & Inventory pilot" },
        { label: "💳 Payments Reconciliation", query: "Tell me about Payments Reconciliation" },
        { label: "📞 Customer Follow-up", query: "Tell me about Customer Follow-up" },
        { label: "🚀 Enrol as Tech Talent", query: "How do I enrol as a tech talent?" }
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
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="trigger-label">Chat with Us</span>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2.2">
                  <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                  <rect width="18" height="12" x="3" y="8" rx="3" />
                  <circle cx="8" cy="14" r="1.5" fill="#5eead4" />
                  <circle cx="16" cy="14" r="1.5" fill="#5eead4" />
                </svg>
                <span className="status-dot"></span>
              </div>
              <div>
                <h4>SasaKazi Concierge</h4>
                <p>Online • Powered by EldoHub</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="chat-close-btn"
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          {/* Messages Feed */}
          <div className="chat-body">
            {messages.map((m) => (
              <div key={m.id} className={`chat-message-row ${m.sender === "user" ? "user-row" : "bot-row"}`}>
                {m.sender === "bot" && (
                  <div className="bot-msg-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
                <div className="bot-msg-icon">🤖</div>
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
              type="text" 
              placeholder="Ask about pilots or talent..."
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
          font-size: 0.95rem;
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
          height: 540px;
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
          padding: 16px 20px;
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

        .chat-header h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .chat-header p {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.75);
          margin: 0;
        }

        .chat-close-btn {
          background: rgba(255, 255, 255, 0.15);
          border: none;
          color: #ffffff;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.2s ease;
        }

        .chat-close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Body */
        .chat-body {
          flex: 1;
          padding: 18px;
          overflow-y: auto;
          background: #f8fafc;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .chat-message-row {
          display: flex;
          gap: 8px;
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
          border-radius: 50%;
          background: var(--color-teal, #0D9488);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: 4px;
        }

        .chat-bubble {
          max-width: 82%;
          padding: 12px 16px;
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .bot-bubble {
          background: #ffffff;
          color: #1e293b;
          border-radius: 16px 16px 16px 4px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
        }

        .user-bubble {
          background: var(--color-teal, #0D9488);
          color: #ffffff;
          border-radius: 16px 16px 4px 16px;
          box-shadow: 0 2px 6px rgba(13, 148, 136, 0.2);
        }

        .bubble-action {
          margin-top: 10px;
        }

        .btn-bubble-action {
          display: inline-block;
          background: var(--color-navy, #1F4E79);
          color: #ffffff !important;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .btn-bubble-action:hover {
          background: #0f2f4d;
        }

        .chips-container {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 10px;
        }

        .chip-btn {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: var(--color-navy, #1F4E79);
          border-radius: 12px;
          padding: 5px 11px;
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
        }

        /* Typing indicator */
        .typing-bubble {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 14px;
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
            transform: scale(1.1);
          }
        }

        /* Footer Input */
        .chat-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
        }

        .chat-input {
          flex: 1;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 10px 16px;
          font-size: 0.9rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .chat-input:focus {
          border-color: var(--color-teal, #0D9488);
        }

        .chat-send-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--color-teal, #0D9488);
          color: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
          flex-shrink: 0;
        }

        .chat-send-btn:hover:not(:disabled) {
          background: #0f766e;
          transform: scale(1.05);
        }

        .chat-send-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }

        @media (max-width: 480px) {
          .sasakazi-chat-window {
            bottom: 12px;
            right: 12px;
            width: calc(100vw - 24px);
            height: calc(100vh - 100px);
          }
          .sasakazi-chatbot-launcher {
            bottom: 74px; /* Above the sticky mobile bar */
            right: 16px;
          }
        }
      `}</style>
    </>
  );
}
