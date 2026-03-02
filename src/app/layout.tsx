import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CampusPing - Smart University Noticeboard System | Digital Notice Management",
  description:
    "CampusPing is a production-ready Smart University Noticeboard System with multi-tenant SaaS architecture, real-time notifications, and enterprise-grade security. Transform university communication today.",
  keywords:
    "Smart University Noticeboard System, University SaaS platform, Digital notice management software, Multi-tenant education platform, Real-time university notification system",
  authors: [{ name: "CampusPing", url: "https://campusping.in" }],
  metadataBase: new URL("https://campusping.in"),
  openGraph: {
    title: "CampusPing - Smart University Noticeboard System",
    description:
      "Transform university communication with CampusPing's production-ready Smart University Noticeboard System featuring multi-tenant SaaS architecture and real-time notifications.",
    url: "https://campusping.in",
    type: "website",
    siteName: "CampusPing",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CampusPing - Smart University Noticeboard System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CampusPing - Smart University Noticeboard System",
    description:
      "Transform university communication with intelligent digital notice management.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://campusping.in" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
