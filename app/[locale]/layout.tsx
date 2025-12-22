import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from 'next-intl';

const inter = Inter({ subsets: ["latin"] });
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/lib/routing';
import "../globals.css";
import { OrganizationStructuredData } from "@/components/seo/StructuredData";
import { MinimalHeader } from "@/components/layout/MinimalHeader";
import { Dock } from "@/components/layout/Dock";
import { BottomTabBar } from "@/components/layout/BottomTabBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

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

// Generate static params for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white font-sans">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <OrganizationStructuredData />
          <MinimalHeader />
          <Dock />
          <main className="flex-1">{children}</main>
          <Footer />
          <BottomTabBar />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
