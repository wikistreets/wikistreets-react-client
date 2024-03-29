import "./globals.css";
import "leaflet/dist/leaflet.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Footer } from "@/components/Footer";
import { Inter, DM_Sans } from "next/font/google";
import Script from "next/script";

config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: "500",
});

export const metadata = {
  title: "Wikistreets",
  description: "The Collaborative Map Maker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dm_sans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css"
          crossOrigin="anonymous"
        ></link>
        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin="anonymous"
        ></Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <div className="2xl:container w-full mx-auto">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
