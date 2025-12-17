import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mesartim - Reliable IT Infrastructure, Simplified",
    template: "%s | Mesartim"
  },
  description: "Enterprise-grade servers, secure backups, and expert IT support tailored for business growth.",
  keywords: ["IT infrastructure", "accounting servers", "cloud backup", "IT support"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mesartim.com",
    siteName: "Mesartim",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-screen flex flex-col bg-white font-sans">
        {children}
      </body>
    </html>
  );
}
