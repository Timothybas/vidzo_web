import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header"; // ✅ Adjust path if needed
import Footer from "@/app/components/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Geo Frame – GPS Camera App",
  description: "Capture photos and videos with GPS overlays, timestamps, and maps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head>
        {/* Render structured data from metadata.other */}
        {/* Next.js doesn't auto-render 'other', so we manually pull and inject */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://vidzo.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "FAQ",
                  "item": "https://vidzo.app/faq.html"
                }
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}>

        <Header /> 
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
