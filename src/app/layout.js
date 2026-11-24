import Link from "next/link";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Chatbot from "@/components/Chatbot";

export const metadata = {
  title: "SasaKazi | Practical Digital BPO for Kenyan Businesses",
  description: "Delivered by vetted local talent. Clear outcomes in 30–45 days. No expensive software. Powered by EldoHub • Eldoret & Nairobi.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        
        {/* Embedded Chatbot (Fixed on Bottom Right) */}
        <Chatbot />

        {/* Mobile Sticky Action Bar */}
        <div className="sticky-mobile-cta-bar">
          <Link href="/contact" className="btn btn-teal" style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.88rem' }}>
            Book a Short Call
          </Link>
          <Link 
            href="/talent"
            className="btn btn-outline-navy"
            style={{ padding: '0.65rem 1rem', fontSize: '0.88rem' }}
          >
            Enrol as Talent
          </Link>
        </div>
      </body>
    </html>
  );
}
