import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const title = "Clinton E. Cochrane | Software Engineer";
const description =
  "Portfolio of Clinton E. Cochrane - Software Engineer with 12 years of experience. Web apps, mobile apps, APIs, and systems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Clinton Cochrane",
    "Software Engineer",
    "web developer",
    "React",
    "Next.js",
    "portfolio",
  ],
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Clinton E. Cochrane",
    type: "website",
    images: [{ url: "/headshot.jpeg", alt: "Clinton E. Cochrane, Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
