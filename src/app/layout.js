import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Sasakazi | Digital Talent Platform",
  description: "Connect with vetted tech talent, track workforce readiness, receive mentorship, and deliver projects for businesses across Kenya.",
};

export default function RootLayout({ children }) {
  const whatsappUrl = "https://wa.me/254723567263?text=Hello%20Sasakazi%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20digital%20talent%2C%20training%2C%20and%20project%20opportunities.";

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
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "white" }}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
