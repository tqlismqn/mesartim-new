import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationStructuredData } from "@/components/seo/StructuredData";

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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={GeistSans.variable}>
      <body className="min-h-screen flex flex-col bg-white font-sans">
        <NextIntlClientProvider messages={messages}>
          <OrganizationStructuredData />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
