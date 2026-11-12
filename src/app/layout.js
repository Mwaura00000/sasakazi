import Link from "next/link";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "SasaKazi | Practical Digital BPO for Kenyan Businesses",
  description: "Delivered by vetted local talent. Clear outcomes in 30–45 days. No expensive software. Powered by EldoHub • Eldoret & Nairobi.",
};

export default function RootLayout({ children }) {
  const whatsappUrl = "https://wa.me/254723567263?text=Hello%20SasaKazi%2C%20I%20am%20interested%20in%20your%20practical%20digital%20BPO%20services%20and%20pilots.";

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        
        {/* Floating WhatsApp Button */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Chat on WhatsApp"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "white" }}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>

        {/* Mobile Sticky Action Bar */}
        <div className="sticky-mobile-cta-bar">
          <Link href="/contact" className="btn btn-teal" style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.88rem' }}>
            Book a Short Call
          </Link>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-navy"
            style={{ padding: '0.65rem 1rem', fontSize: '0.88rem' }}
          >
            WhatsApp
          </a>
        </div>
      </body>
    </html>
  );
}
