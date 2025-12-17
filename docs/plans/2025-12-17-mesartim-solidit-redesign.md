# Mesartim SolidIT-Style Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform Mesartim website to solidit.ru-inspired design with 6-language support (CS, EN, RU, UK, DE, PL), comprehensive service structure (9 problems + 8 solutions + 5 categories + 4 products), and modern B2B UX with multiple conversion points.

**Architecture:** Next.js 16 App Router with next-intl for i18n routing, three-tier page hierarchy (Home with problems/solutions → 5 Category pages → 4 Product pages), content-first approach with multiple consultation forms, WhatsApp integration, and full SEO optimization including hreflang/canonical URLs.

**Tech Stack:** Next.js 16.0.10, React 19.2.3, TypeScript 5.9.3, Tailwind CSS 4.1.18, next-intl 3.x, framer-motion 12.x, lucide-react 0.561.0

**Design Reference:** solidit.ru (structure, B2B professionalism) + Mesartim brand (blue accents, modern gradients)

**Content Sources:**
- Problems/Solutions: solidit.ru
- Product specs: mesartim.cz
- Translations: AI-generated (Context7 + GPT-4) for all 6 languages

---

## Phase 1: i18n Foundation (Tasks 1-5)

### Task 1: Install and configure next-intl

**Files:**
- Create: `i18n/request.ts`
- Create: `i18n/routing.ts`
- Modify: `package.json`
- Create: `middleware.ts`

**Step 1: Install next-intl**

```bash
npm install next-intl@latest
```

Expected: next-intl@3.x installed

**Step 2: Create i18n routing configuration**

File: `i18n/routing.ts`

```typescript
import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['cs', 'en', 'ru', 'uk', 'de', 'pl'],
  defaultLocale: 'cs',
  localePrefix: 'as-needed' // Czech without prefix, others with /en/, /ru/, etc.
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);
```

**Step 3: Create request configuration**

File: `i18n/request.ts`

```typescript
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
```

**Step 4: Create middleware**

File: `middleware.ts`

```typescript
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(cs|en|ru|uk|de|pl)/:path*']
};
```

**Step 5: Update next.config.ts**

```typescript
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default withNextIntl(withBundleAnalyzer(nextConfig));
```

**Step 6: Verify configuration**

```bash
npx tsc --noEmit
```

Expected: 0 errors

**Step 7: Commit**

```bash
git add i18n/ middleware.ts next.config.ts package.json package-lock.json
git commit -m "feat(i18n): add next-intl configuration for 6 languages"
```

---

### Task 2: Create directory structure for localized pages

**Files:**
- Create: `app/[locale]/layout.tsx`
- Move: `app/layout.tsx` → `app/[locale]/layout.tsx` (restructure)
- Move: `app/page.tsx` → `app/[locale]/page.tsx`
- Move all existing routes to `app/[locale]/` structure

**Step 1: Create localized root layout**

File: `app/[locale]/layout.tsx`

```typescript
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationStructuredData } from "@/components/seo/StructuredData";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: "Mesartim - Cloudová IT řešení pro váš byznys",
    template: "%s | Mesartim"
  },
  description: "Účetní servery, cloudové úložiště, IT podpora a projekty na míru. Evropské datové centrum, 24/7 monitoring.",
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={GeistSans.variable}>
      <body className="min-h-screen flex flex-col bg-white font-sans">
        <NextIntlClientProvider messages={messages}>
          <OrganizationStructuredData locale={locale} />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

**Step 2: Move existing pages to [locale] directory**

```bash
mkdir -p app/\[locale\]
mv app/page.tsx app/\[locale\]/page.tsx
mv app/accounting-server app/\[locale\]/accounting-server
mv app/accounting-box app/\[locale\]/accounting-box
mv app/it-support app/\[locale\]/it-support
mv app/projects app/\[locale\]/projects
mv app/contact app/\[locale\]/contact
mv app/loading.tsx app/\[locale\]/loading.tsx
mv app/error.tsx app/\[locale\]/error.tsx
mv app/not-found.tsx app/\[locale\]/not-found.tsx
```

**Step 3: Create root layout (minimal)**

File: `app/layout.tsx`

```typescript
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

**Step 4: Verify build**

```bash
npm run build
```

Expected: Build succeeds, generates static pages for all locales

**Step 5: Commit**

```bash
git add app/
git commit -m "feat(i18n): restructure to [locale] directory"
```

---

### Task 3: Create base message dictionaries

**Files:**
- Create: `messages/cs.json`
- Create: `messages/en.json`
- Create: `messages/ru.json`
- Create: `messages/uk.json`
- Create: `messages/de.json`
- Create: `messages/pl.json`

**Step 1: Create Czech dictionary (base)**

File: `messages/cs.json`

```json
{
  "navigation": {
    "techSupport": "Technická podpora",
    "cloudSolutions": "Cloudová řešení",
    "security": "Bezpečnost",
    "consulting": "Poradenství",
    "contact": "Kontakt",
    "products": {
      "accountingServer": "Účetní Server",
      "accountingBox": "Účetní Box",
      "itAssistant": "IT Pomocník",
      "customProjects": "Projekty na míru"
    }
  },
  "common": {
    "getConsultation": "Získat konzultaci",
    "learnMore": "Zjistit více",
    "contactUs": "Kontaktujte nás",
    "requestQuote": "Vyžádat nabídku",
    "getStarted": "Začít",
    "phone": "Telefon",
    "email": "E-mail",
    "whatsapp": "WhatsApp",
    "priceFrom": "Od {price} Kč",
    "perMonth": "/ měsíc"
  },
  "homepage": {
    "hero": {
      "title": "Spolehlivá IT infrastruktura.",
      "subtitle": "Zjednodušená.",
      "description": "Podnikové servery, zabezpečené zálohy a odborná podpora. Přizpůsobeno růstu vašeho byznysu."
    },
    "problems": {
      "title": "Řešíme vaše IT problémy",
      "subtitle": "9 nejčastějších výzev malých a středních firem",
      "list": {
        "highCosts": {
          "title": "Vysoké náklady na IT infrastrukturu",
          "description": "Nákup serverů, licencí, hardwaru"
        },
        "dataLoss": {
          "title": "Riziko ztráty dat",
          "description": "Chybí zálohy, selhání disků, ransomware"
        },
        "slowSoftware": {
          "title": "Pomalá účetní software",
          "description": "Pohoda/Money zpomaluje na slabém PC"
        },
        "noRemoteAccess": {
          "title": "Žádný vzdálený přístup k datům",
          "description": "Práce pouze z kanceláře, ne z domova/na cestách"
        },
        "slowSupport": {
          "title": "Nekompetentní IT admin nebo žádný IT specialista",
          "description": "Problémy se řeší pomalu, čekáme týdny"
        },
        "documentSharing": {
          "title": "Složité sdílení dokumentů s klienty",
          "description": "E-mail, flash disky - nepohodlné a nebezpečné"
        },
        "outdatedPC": {
          "title": "Zastaralé PC bez ochrany dat",
          "description": "Windows 10 bez BitLocker, riziko úniku důvěrných informací"
        },
        "noScaling": {
          "title": "Nemožnost škálování",
          "description": "Nový zaměstnanec = koupit nový PC + licence"
        },
        "noSupport24": {
          "title": "Chybí technická podpora 24/7",
          "description": "Problém v noci/o víkendu = prostoj"
        }
      }
    },
    "solutions": {
      "title": "Naše řešení",
      "subtitle": "8 způsobů, jak optimalizovat vaše IT",
      "list": {
        "techSupport": {
          "title": "Technická podpora",
          "description": "Okamžitá reakce na vaše IT problémy 24/7"
        },
        "outsourcing": {
          "title": "IT Outsourcing",
          "description": "Kompletní správa IT infrastruktury na klíč"
        },
        "security": {
          "title": "Bezpečnost dat",
          "description": "Audit bezpečnosti, šifrování, zálohy"
        },
        "consulting": {
          "title": "IT Poradenství",
          "description": "Návrh optimální platformy a software řešení"
        },
        "cloudServices": {
          "title": "Cloudové služby",
          "description": "Servery v cloudu bez investic do hardwaru"
        },
        "backup": {
          "title": "Zálohování dat",
          "description": "Automatické denní zálohy do bezpečných datacenter"
        },
        "migration": {
          "title": "Migrace do cloudu",
          "description": "Přesun dat a aplikací na cloudovou infrastrukturu"
        },
        "automation": {
          "title": "Automatizace",
          "description": "Zefektivnění procesů, virtualizace, monitoring"
        }
      }
    },
    "trust": {
      "title": "Proč Mesartim",
      "datacenters": "Evropská datacentra",
      "datacentersDesc": "Německo, Finsko, Česká republika",
      "support": "Podpora 24/7",
      "supportDesc": "Monitoring a rychlá reakce na problémy",
      "expertise": "IT expertiza",
      "expertiseDesc": "Specializace na účetní systémy a cloudová řešení"
    }
  },
  "footer": {
    "company": {
      "title": "Společnost",
      "about": "O nás",
      "locations": "Lokace",
      "contact": "Kontakt"
    },
    "solutions": {
      "title": "Řešení"
    },
    "products": {
      "title": "Produkty"
    },
    "contacts": {
      "title": "Kontakty",
      "office": "Kancelář v České republice",
      "datacenters": "Datacentra: Německo, Finsko, ČR"
    },
    "copyright": "© {year} Mesartim. Všechna práva vyhrazena."
  },
  "forms": {
    "consultation": {
      "title": "Zanechte žádost o konzultaci",
      "name": "Vaše jméno",
      "email": "Váš e-mail",
      "phone": "Váš telefon",
      "message": "Zpráva",
      "submit": "Získat konzultaci",
      "submitting": "Odesílání...",
      "success": "Zpráva úspěšně odeslána! Brzy vás kontaktujeme.",
      "error": "Chyba při odesílání. Zkuste to prosím znovu."
    }
  }
}
```

**Step 2: Create empty structure for other languages**

```bash
for lang in en ru uk de pl; do
  echo '{}' > messages/$lang.json
done
```

**Step 3: Commit base dictionary**

```bash
git add messages/
git commit -m "feat(i18n): add base Czech dictionary"
```

---

### Task 4: Translate dictionaries to 5 languages

**Files:**
- Modify: `messages/en.json`
- Modify: `messages/ru.json`
- Modify: `messages/uk.json`
- Modify: `messages/de.json`
- Modify: `messages/pl.json`

**Step 1: Use Context7 MCP to translate**

Use `mcp__context7__get-library-docs` to get next-intl documentation for reference, then use AI translation for Czech → EN, RU, UK, DE, PL.

**Step 2: Create English translation**

File: `messages/en.json`

```json
{
  "navigation": {
    "techSupport": "Technical Support",
    "cloudSolutions": "Cloud Solutions",
    "security": "Security",
    "consulting": "Consulting",
    "contact": "Contact",
    "products": {
      "accountingServer": "Accounting Server",
      "accountingBox": "Accounting Box",
      "itAssistant": "IT Assistant",
      "customProjects": "Custom Projects"
    }
  },
  "common": {
    "getConsultation": "Get Consultation",
    "learnMore": "Learn More",
    "contactUs": "Contact Us",
    "requestQuote": "Request Quote",
    "getStarted": "Get Started",
    "phone": "Phone",
    "email": "Email",
    "whatsapp": "WhatsApp",
    "priceFrom": "From {price} CZK",
    "priceFromEur": "From {price} CZK (≈{eur} €)",
    "perMonth": "/ month"
  },
  "homepage": {
    "hero": {
      "title": "Reliable IT Infrastructure.",
      "subtitle": "Simplified.",
      "description": "Enterprise-grade servers, secure backups, and expert support. Tailored for your business growth."
    },
    "problems": {
      "title": "We Solve Your IT Challenges",
      "subtitle": "9 common challenges for small and medium businesses",
      "list": {
        "highCosts": {
          "title": "High IT Infrastructure Costs",
          "description": "Purchasing servers, licenses, hardware"
        },
        "dataLoss": {
          "title": "Risk of Data Loss",
          "description": "No backups, disk failures, ransomware attacks"
        },
        "slowSoftware": {
          "title": "Slow Accounting Software",
          "description": "Pohoda/Money slows down on weak PCs"
        },
        "noRemoteAccess": {
          "title": "No Remote Data Access",
          "description": "Work only from office, not from home/travel"
        },
        "slowSupport": {
          "title": "Incompetent IT Admin or No IT Specialist",
          "description": "Problems solved slowly, waiting for weeks"
        },
        "documentSharing": {
          "title": "Complex Document Sharing with Clients",
          "description": "Email, flash drives - inconvenient and insecure"
        },
        "outdatedPC": {
          "title": "Outdated PCs Without Data Protection",
          "description": "Windows 10 without BitLocker, risk of confidential data leaks"
        },
        "noScaling": {
          "title": "No Scalability",
          "description": "New employee = buy new PC + licenses"
        },
        "noSupport24": {
          "title": "No 24/7 Technical Support",
          "description": "Problem at night/weekend = downtime"
        }
      }
    },
    "solutions": {
      "title": "Our Solutions",
      "subtitle": "8 ways to optimize your IT",
      "list": {
        "techSupport": {
          "title": "Technical Support",
          "description": "Immediate response to your IT issues 24/7"
        },
        "outsourcing": {
          "title": "IT Outsourcing",
          "description": "Complete IT infrastructure management turnkey"
        },
        "security": {
          "title": "Data Security",
          "description": "Security audit, encryption, backups"
        },
        "consulting": {
          "title": "IT Consulting",
          "description": "Optimal platform and software solution design"
        },
        "cloudServices": {
          "title": "Cloud Services",
          "description": "Cloud servers without hardware investments"
        },
        "backup": {
          "title": "Data Backup",
          "description": "Automatic daily backups to secure datacenters"
        },
        "migration": {
          "title": "Cloud Migration",
          "description": "Moving data and applications to cloud infrastructure"
        },
        "automation": {
          "title": "Automation",
          "description": "Process optimization, virtualization, monitoring"
        }
      }
    },
    "trust": {
      "title": "Why Mesartim",
      "datacenters": "European Datacenters",
      "datacentersDesc": "Germany, Finland, Czech Republic",
      "support": "24/7 Support",
      "supportDesc": "Monitoring and rapid problem response",
      "expertise": "IT Expertise",
      "expertiseDesc": "Specialization in accounting systems and cloud solutions"
    }
  },
  "footer": {
    "company": {
      "title": "Company",
      "about": "About Us",
      "locations": "Locations",
      "contact": "Contact"
    },
    "solutions": {
      "title": "Solutions"
    },
    "products": {
      "title": "Products"
    },
    "contacts": {
      "title": "Contacts",
      "office": "Office in Czech Republic",
      "datacenters": "Datacenters: Germany, Finland, CZ"
    },
    "copyright": "© {year} Mesartim. All rights reserved."
  },
  "forms": {
    "consultation": {
      "title": "Request a Consultation",
      "name": "Your Name",
      "email": "Your Email",
      "phone": "Your Phone",
      "message": "Message",
      "submit": "Get Consultation",
      "submitting": "Sending...",
      "success": "Message sent successfully! We'll contact you soon.",
      "error": "Error sending. Please try again."
    }
  }
}
```

**Step 3: Create Russian translation**

File: `messages/ru.json`

(Similar structure, all strings in Russian - I'll provide abbreviated version for plan)

```json
{
  "navigation": {
    "techSupport": "Техподдержка",
    "cloudSolutions": "Облачные решения",
    "security": "Безопасность",
    "consulting": "Консалтинг",
    "contact": "Контакты",
    "products": {
      "accountingServer": "Учётный Сервер",
      "accountingBox": "Облачное Хранилище",
      "itAssistant": "IT Помощник",
      "customProjects": "Проекты на Заказ"
    }
  },
  "common": {
    "getConsultation": "Получить консультацию",
    "learnMore": "Узнать больше",
    "contactUs": "Связаться с нами",
    "priceFrom": "От {price} Kč",
    "priceFromEur": "От {price} Kč (≈{eur} €)"
  },
  "homepage": {
    "hero": {
      "title": "Надёжная IT инфраструктура.",
      "subtitle": "Упрощённая.",
      "description": "Серверы корпоративного уровня, безопасные резервные копии и экспертная поддержка."
    },
    "problems": {
      "title": "Решаем ваши IT проблемы",
      "list": {
        "highCosts": {
          "title": "Высокие затраты на IT инфраструктуру",
          "description": "Покупка серверов, лицензий, оборудования"
        },
        "slowSupport": {
          "title": "Некомпетентный IT админ или отсутствие своего специалиста",
          "description": "Проблемы решаются медленно, ждём неделями"
        },
        "outdatedPC": {
          "title": "Устаревшие ПК без защиты данных",
          "description": "Windows 10 без BitLocker, риски утечки конфиденциальной информации"
        }
      }
    }
  }
}
```

**Step 4: Create Ukrainian, German, Polish translations**

(Follow same structure, translate all strings)

Note: For plan brevity, assume similar structure for UK, DE, PL with proper translations.

**Step 5: Verify JSON validity**

```bash
for lang in cs en ru uk de pl; do
  echo "Checking messages/$lang.json"
  node -e "JSON.parse(require('fs').readFileSync('messages/$lang.json'))"
done
```

Expected: No errors

**Step 6: Commit translations**

```bash
git add messages/
git commit -m "feat(i18n): add translations for EN, RU, UK, DE, PL"
```

---

### Task 5: Update Navbar to use translations

**Files:**
- Modify: `components/layout/Navbar.tsx`

**Step 1: Convert to Client Component with useTranslations**

File: `components/layout/Navbar.tsx`

```typescript
'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const t = useTranslations('navigation');

  const navLinks = [
    { href: '/tech-support', label: t('techSupport') },
    { href: '/cloud-solutions', label: t('cloudSolutions') },
    { href: '/security', label: t('security') },
    { href: '/consulting', label: t('consulting') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-2xl font-bold">Mesartim</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link href="/contact">
              <Button size="sm">{t('contact')}</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </div>
    </nav>
  );
}
```

**Step 2: Verify navbar renders**

```bash
npm run dev
```

Visit http://localhost:3001/, check navbar shows Czech translations

**Step 3: Commit**

```bash
git add components/layout/Navbar.tsx
git commit -m "feat(i18n): add translations to Navbar"
```

---

## Phase 2: Visual Style Update (Tasks 6-9)

### Task 6: Update color palette (golden middle approach)

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

**Step 1: Update Tailwind config for neutral base + blue accents**

File: `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral base (gray-scale for professional B2B)
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        // Primary: Blue accents (Mesartim brand)
        primary: {
          DEFAULT: '#2563eb', // Blue 600
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Secondary: Subtle purple for accents (minimal use)
        accent: {
          DEFAULT: '#8b5cf6',
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(2rem, 5vw, 5rem)',
        'section-title': 'clamp(1.75rem, 4vw, 3rem)',
        'card-title': 'clamp(1.25rem, 3vw, 1.5rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

**Step 2: Update globals.css**

File: `app/globals.css`

```css
@import "tailwindcss";

@theme inline {
  --color-primary-DEFAULT: #2563eb;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-900: #111827;
  --font-sans: var(--font-geist-sans), system-ui, sans-serif;
  --font-size-hero: clamp(2rem, 5vw, 5rem);
  --font-size-section-title: clamp(1.75rem, 4vw, 3rem);
}

@layer base {
  html {
    @apply scroll-smooth;
  }

  body {
    @apply text-gray-900 antialiased bg-white;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold text-gray-900;
  }

  button, a {
    @apply min-h-[44px];
  }
}

@layer utilities {
  .section-padding {
    @apply py-16 md:py-24 lg:py-32;
  }

  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .glass-card {
    @apply bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200;
  }

  .gradient-bg-subtle {
    @apply bg-gradient-to-br from-gray-50 via-white to-primary-50/30;
  }

  .text-balance {
    text-wrap: balance;
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Step 3: Rebuild to apply changes**

```bash
npm run build
```

Expected: Build succeeds

**Step 4: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "style: update color palette for B2B professional + Mesartim brand"
```

---

### Task 7: Create WhatsApp sticky button component

**Files:**
- Create: `components/ui/WhatsAppButton.tsx`

**Step 1: Create component**

File: `components/ui/WhatsAppButton.tsx`

```typescript
'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+420771117112';

export function WhatsAppButton() {
  const t = useTranslations('common');

  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
      aria-label={t('whatsapp')}
    >
      <MessageCircle className="w-6 h-6" />

      {/* Tooltip */}
      <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {t('whatsapp')}
      </span>
    </button>
  );
}
```

**Step 2: Verify WhatsApp button appears**

```bash
npm run dev
```

Visit any page, check button in bottom-right corner

**Step 3: Commit**

```bash
git add components/ui/WhatsAppButton.tsx
git commit -m "feat(ui): add WhatsApp sticky button"
```

---

### Task 8: Create LanguageSwitcher component

**Files:**
- Create: `components/layout/LanguageSwitcher.tsx`

**Step 1: Create component**

File: `components/layout/LanguageSwitcher.tsx`

```typescript
'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const languages = [
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (langCode: string) => {
    router.push(pathname, { locale: langCode });
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors min-h-[44px]"
        aria-label="Switch language"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700 uppercase">
          {currentLang?.code}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                lang.code === locale ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

**Step 2: Verify language switcher works**

```bash
npm run dev
```

Click language switcher, verify URL changes to /en/, /ru/, etc.

**Step 3: Commit**

```bash
git add components/layout/LanguageSwitcher.tsx
git commit -m "feat(i18n): add language switcher dropdown"
```

---

### Task 9: Update Button component for new style

**Files:**
- Modify: `components/ui/Button.tsx`

**Step 1: Update Button with neutral base + blue primary**

File: `components/ui/Button.tsx`

```typescript
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            // Primary: Blue (Mesartim brand)
            'bg-primary text-white hover:bg-primary-700 shadow-md hover:shadow-lg': variant === 'primary',
            // Secondary: Gray (neutral professional)
            'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg': variant === 'secondary',
            // Outline: Gray border
            'border-2 border-gray-300 bg-transparent text-gray-700 hover:border-gray-900 hover:bg-gray-50': variant === 'outline',
            // Ghost: Minimal
            'bg-transparent text-gray-700 hover:bg-gray-100': variant === 'ghost',
          },
          {
            'px-4 py-2 text-sm min-h-[44px]': size === 'sm',
            'px-6 py-3 text-base min-h-[48px]': size === 'md',
            'px-8 py-4 text-lg min-h-[56px]': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
```

**Step 2: Test button variants**

```bash
npm run dev
```

Check buttons have correct colors

**Step 3: Commit**

```bash
git add components/ui/Button.tsx
git commit -m "style: update Button for professional B2B design"
```

---

## Phase 3: Homepage Redesign (Tasks 10-17)

### Task 10: Create ConsultationForm component

**Files:**
- Create: `components/forms/ConsultationForm.tsx`

**Step 1: Create form component**

File: `components/forms/ConsultationForm.tsx`

```typescript
'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface ConsultationFormProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export function ConsultationForm({ variant = 'default', className = '' }: ConsultationFormProps) {
  const t = useTranslations('forms.consultation');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // Mock API call - TODO: integrate with actual backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  const isCompact = variant === 'compact';

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {!isCompact && (
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('title')}</h3>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          {t('name')} *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          {t('email')} *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          {t('phone')}
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          disabled={status === 'loading'}
        />
      </div>

      {!isCompact && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {t('message')}
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            disabled={status === 'loading'}
          />
        </div>
      )}

      {status === 'success' && (
        <div className="flex items-center gap-2 p-4 bg-green-50 text-green-800 rounded-lg">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm">{t('success')}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-red-50 text-red-800 rounded-lg">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm">{t('error')}</span>
        </div>
      )}

      <Button
        type="submit"
        size={isCompact ? 'md' : 'lg'}
        disabled={status === 'loading'}
        className="w-full"
      >
        {status === 'loading' ? t('submitting') : t('submit')}
      </Button>
    </form>
  );
}
```

**Step 2: Test form**

```bash
npm run dev
```

**Step 3: Commit**

```bash
git add components/forms/ConsultationForm.tsx
git commit -m "feat(forms): add ConsultationForm component"
```

---

### Task 11: Create Hero section with form

**Files:**
- Create: `components/sections/home/Hero.tsx`

**Step 1: Create Hero component**

File: `components/sections/home/Hero.tsx`

```typescript
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const t = useTranslations('homepage.hero');

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-bg-subtle overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-hero font-bold tracking-tight text-balance">
              {t('title')}
              <br />
              <span className="text-gray-500">{t('subtitle')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 text-balance max-w-2xl">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#consultation-form" className="inline-block">
                <Button size="lg">{t('getConsultation', { ns: 'common' })}</Button>
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors min-h-[56px] px-6"
              >
                {t('learnMore', { ns: 'common' })}
                <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </div>
          </div>

          {/* Right: Consultation form */}
          <div
            id="consultation-form"
            className="glass-card p-8 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <ConsultationForm variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Verify Hero renders**

```bash
npm run dev
```

**Step 3: Commit**

```bash
git add components/sections/home/Hero.tsx
git commit -m "feat(home): add Hero section with consultation form"
```

---

### Task 12: Create Problems section (9 problems)

**Files:**
- Create: `components/sections/home/ProblemsSection.tsx`

**Step 1: Create component**

File: `components/sections/home/ProblemsSection.tsx`

```typescript
import { useTranslations } from 'next-intl';
import {
  TrendingUp,
  AlertTriangle,
  Gauge,
  Cloud,
  UserX,
  Share2,
  Shield,
  Maximize,
  HeadphonesOff
} from 'lucide-react';

const problemIcons = [
  TrendingUp,      // High costs
  AlertTriangle,   // Data loss risk
  Gauge,           // Slow software
  Cloud,           // No remote access
  UserX,           // No IT specialist
  Share2,          // Document sharing
  Shield,          // Outdated PCs
  Maximize,        // No scaling
  HeadphonesOff    // No 24/7 support
];

export function ProblemsSection() {
  const t = useTranslations('homepage.problems');

  const problems = [
    'highCosts',
    'dataLoss',
    'slowSoftware',
    'noRemoteAccess',
    'slowSupport',
    'documentSharing',
    'outdatedPC',
    'noScaling',
    'noSupport24'
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-title font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problemIcons[index];
            return (
              <div
                key={problem}
                className="p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(`list.${problem}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`list.${problem}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Verify section renders**

```bash
npm run dev
```

**Step 3: Commit**

```bash
git add components/sections/home/ProblemsSection.tsx
git commit -m "feat(home): add ProblemsSection with 9 business challenges"
```

---

### Task 13: Create Solutions section (8 solutions)

**Files:**
- Create: `components/sections/home/SolutionsSection.tsx`

**Step 1: Create component**

File: `components/sections/home/SolutionsSection.tsx`

```typescript
import { useTranslations } from 'next-intl';
import {
  Headphones,
  Users,
  ShieldCheck,
  Lightbulb,
  Cloud,
  HardDrive,
  ArrowRightLeft,
  Zap
} from 'lucide-react';

const solutionIcons = [
  Headphones,      // Tech support
  Users,           // Outsourcing
  ShieldCheck,     // Security
  Lightbulb,       // Consulting
  Cloud,           // Cloud services
  HardDrive,       // Backup
  ArrowRightLeft,  // Migration
  Zap              // Automation
];

export function SolutionsSection() {
  const t = useTranslations('homepage.solutions');

  const solutions = [
    'techSupport',
    'outsourcing',
    'security',
    'consulting',
    'cloudServices',
    'backup',
    'migration',
    'automation'
  ];

  return (
    <section id="solutions" className="section-padding gradient-bg-subtle">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-title font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solutionIcons[index];
            return (
              <div
                key={solution}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-200 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 group-hover:bg-primary-200 transition-all">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`list.${solution}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`list.${solution}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Verify section renders**

```bash
npm run dev
```

**Step 3: Commit**

```bash
git add components/sections/home/SolutionsSection.tsx
git commit -m "feat(home): add SolutionsSection with 8 IT solutions"
```

---

### Task 14: Create Trust section (Why Mesartim)

**Files:**
- Create: `components/sections/home/TrustSection.tsx`

**Step 1: Create component**

File: `components/sections/home/TrustSection.tsx`

```typescript
import { useTranslations } from 'next-intl';
import { Server, Clock, Award } from 'lucide-react';

export function TrustSection() {
  const t = useTranslations('homepage.trust');

  const features = [
    {
      icon: Server,
      title: t('datacenters'),
      description: t('datacentersDesc'),
    },
    {
      icon: Clock,
      title: t('support'),
      description: t('supportDesc'),
    },
    {
      icon: Award,
      title: t('expertise'),
      description: t('expertiseDesc'),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-section-title font-bold text-center mb-16">{t('title')}</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Verify section renders**

```bash
npm run dev
```

**Step 3: Commit**

```bash
git add components/sections/home/TrustSection.tsx
git commit -m "feat(home): add TrustSection (Why Mesartim)"
```

---

### Task 15: Create CTA section with final form

**Files:**
- Create: `components/sections/home/CTASection.tsx`

**Step 1: Create component**

File: `components/sections/home/CTASection.tsx`

```typescript
import { useTranslations } from 'next-intl';
import { ConsultationForm } from '@/components/forms/ConsultationForm';

export function CTASection() {
  const t = useTranslations('common');

  return (
    <section className="section-padding gradient-bg-subtle">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Готовы начать?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Свяжитесь с нами для бесплатной консультации. Мы подберём оптимальное IT решение для вашего бизнеса.
              </p>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Бесплатная консультация</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Ответ в течение 24 часов</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Индивидуальное предложение</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Verify CTA section renders**

```bash
npm run dev
```

**Step 3: Commit**

```bash
git add components/sections/home/CTASection.tsx
git commit -m "feat(home): add final CTA section with consultation form"
```

---

### Task 16: Assemble new homepage

**Files:**
- Modify: `app/[locale]/page.tsx`

**Step 1: Update homepage to use all sections**

File: `app/[locale]/page.tsx`

```typescript
import { Hero } from '@/components/sections/home/Hero';
import { ProblemsSection } from '@/components/sections/home/ProblemsSection';
import { SolutionsSection } from '@/components/sections/home/SolutionsSection';
import { TrustSection } from '@/components/sections/home/TrustSection';
import { CTASection } from '@/components/sections/home/CTASection';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ProblemsSection />
      <SolutionsSection />
      <TrustSection />
      <CTASection />
    </div>
  );
}
```

**Step 2: Verify full homepage flow**

```bash
npm run dev
```

Visit http://localhost:3001/, scroll through entire page

**Step 3: Commit**

```bash
git add app/\[locale\]/page.tsx
git commit -m "feat(home): assemble complete homepage with all sections"
```

---

### Task 17: Update Footer with 4 columns

**Files:**
- Modify: `components/layout/Footer.tsx`

**Step 1: Update Footer structure**

File: `components/layout/Footer.tsx`

```typescript
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tCommon = useTranslations('common');
  const currentYear = new Date().getFullYear();

  const solutions = [
    { href: '/tech-support', label: tNav('techSupport') },
    { href: '/cloud-solutions', label: tNav('cloudSolutions') },
    { href: '/security', label: tNav('security') },
    { href: '/consulting', label: tNav('consulting') },
  ];

  const products = [
    { href: '/accounting-server', label: tNav('products.accountingServer') },
    { href: '/accounting-box', label: tNav('products.accountingBox') },
    { href: '/it-assistant', label: tNav('products.itAssistant') },
    { href: '/custom-projects', label: tNav('products.customProjects') },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t('company.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t('company.about')}
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t('company.locations')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t('company.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t('solutions.title')}</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link href={solution.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {solution.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t('products.title')}</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.href}>
                  <Link href={product.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t('contacts.title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+420771117112" className="text-gray-600 hover:text-gray-900 transition-colors">
                    +420 771 117 112
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="mailto:info@mesartim.cz" className="block text-gray-600 hover:text-gray-900 transition-colors">
                    info@mesartim.cz
                  </a>
                  <a href="mailto:support@mesartim.cz" className="block text-gray-600 hover:text-gray-900 transition-colors">
                    support@mesartim.cz
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <div className="font-medium text-gray-900">{t('contacts.office')}</div>
                  <div className="text-xs mt-1">{t('contacts.datacenters')}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            {t('copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Verify footer renders correctly**

```bash
npm run dev
```

**Step 3: Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "feat(layout): update Footer with 4-column structure"
```

---

## Phase 4: Category Pages (Tasks 18-22)

### Task 18: Create CategoryPage template

**Files:**
- Create: `components/templates/CategoryPage.tsx`

**Step 1: Create template**

File: `components/templates/CategoryPage.tsx`

```typescript
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Product {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  priceFrom?: string;
}

interface CategoryPageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  features: Feature[];
  products: Product[];
  children?: ReactNode;
}

export function CategoryPage({
  title,
  subtitle,
  description,
  icon: Icon,
  iconBg,
  iconColor,
  features,
  products,
  children
}: CategoryPageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding gradient-bg-subtle">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className={cn(
              "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6",
              iconBg,
              iconColor
            )}>
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
            <p className="text-xl md:text-2xl text-gray-600 text-balance">{subtitle}</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ключевые возможности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={idx} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto">
                    <FeatureIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Optional children slot */}
      {children}

      {/* Products Section */}
      <section className="section-padding gradient-bg-subtle">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши продукты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, idx) => {
              const ProductIcon = product.icon;
              return (
                <div key={idx} className="glass-card p-8 space-y-4 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary">
                    <ProductIcon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  {product.priceFrom && (
                    <p className="text-sm font-medium text-primary">{product.priceFrom}</p>
                  )}
                  <Link href={product.href}>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section with form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Готовы начать?</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Свяжитесь с нами для получения индивидуального предложения
            </p>
            <div className="glass-card p-8">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

**Step 2: Commit template**

```bash
git add components/templates/CategoryPage.tsx
git commit -m "feat(templates): add CategoryPage template"
```

---

### Task 19: Create Tech Support category page

**Files:**
- Create: `app/[locale]/tech-support/page.tsx`

**Step 1: Create page**

File: `app/[locale]/tech-support/page.tsx`

```typescript
import { Headphones, Clock, Shield, Wrench, Server, Users } from 'lucide-react';
import { CategoryPage } from '@/components/templates/CategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technická podpora 24/7',
  description: 'Profesionální IT podpora pro váš byznys. Řešení problémů v reálném čase, monitoring, údržba.',
};

const features = [
  {
    icon: Clock,
    title: 'Podpora 24/7',
    description: 'Dostupní kdykoliv, i o víkendech a svátcích'
  },
  {
    icon: Headphones,
    title: 'Rychlá reakce',
    description: 'Řešení kritických problémů do 1 hodiny'
  },
  {
    icon: Shield,
    title: 'Proaktivní monitoring',
    description: 'Detekce problémů ještě před jejich vznikem'
  },
  {
    icon: Wrench,
    title: 'Vzdálená správa',
    description: 'Většinu problémů vyřešíme na dálku'
  },
  {
    icon: Server,
    title: 'Údržba infrastruktury',
    description: 'Pravidelné aktualizace a optimalizace'
  },
  {
    icon: Users,
    title: 'Vícejazyčná podpora',
    description: 'Čeština, ruština, angličtina'
  }
];

const products = [
  {
    title: 'IT Pomocník',
    description: 'Osobní IT specialista pro váš byznys. Pomoc s PC, tiskárnami, Wi-Fi, zálohami.',
    href: '/it-assistant',
    icon: Headphones,
    priceFrom: 'Od 690 Kč/měsíc'
  },
  {
    title: 'Projekty na míru',
    description: 'Komplexní IT řešení šité na míru vašim potřebám.',
    href: '/custom-projects',
    icon: Server
  }
];

export default function TechSupportPage() {
  return (
    <CategoryPage
      title="Technická podpora"
      subtitle="IT pomoc kdykoli ji potřebujete"
      description="Profesionální podpora vašeho IT prostředí 24 hodin denně, 7 dní v týdnu. Rychlé řešení problémů, proaktivní monitoring a údržba infrastruktury."
      icon={Headphones}
      iconBg="bg-primary-100"
      iconColor="text-primary-600"
      features={features}
      products={products}
    />
  );
}
```

**Step 2: Verify page renders**

```bash
npm run dev
```

Visit http://localhost:3001/tech-support

**Step 3: Commit**

```bash
git add app/\[locale\]/tech-support/
git commit -m "feat(categories): add Tech Support page"
```

---

### Task 20: Create Cloud Solutions category page

**Files:**
- Create: `app/[locale]/cloud-solutions/page.tsx`

**Step 1: Create page**

File: `app/[locale]/cloud-solutions/page.tsx`

```typescript
import { Cloud, Zap, Lock, Globe, HardDrive, Users } from 'lucide-react';
import { CategoryPage } from '@/components/templates/CategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloudová řešení',
  description: 'Servery a úložiště v cloudu. Bez investic do hardwaru, s evropskými datacentry.',
};

const features = [
  {
    icon: Cloud,
    title: 'Bez investic do hardwaru',
    description: 'Žádné náklady na servery, chlazení, elektřinu'
  },
  {
    icon: Zap,
    title: 'Vysoký výkon',
    description: 'Moderní SSD disky, výkonné procesory'
  },
  {
    icon: Lock,
    title: 'Bezpečné datacentry',
    description: 'Evropská lokace (DE, FI, CZ), GDPR compliant'
  },
  {
    icon: Globe,
    title: 'Přístup odkudkoliv',
    description: 'Práce z domova, kanceláře nebo na cestách'
  },
  {
    icon: HardDrive,
    title: 'Automatické zálohy',
    description: 'Denní zálohování dat do oddělených lokalit'
  },
  {
    icon: Users,
    title: 'Snadné škálování',
    description: 'Zvýšení výkonu během několika minut'
  }
];

const products = [
  {
    title: 'Účetní Server',
    description: 'Cloudový server pro Pohoda, Money S3, Helios. Přístup odkudkoliv, bez instalace.',
    href: '/accounting-server',
    icon: Cloud,
    priceFrom: 'Od 890 Kč/měsíc'
  },
  {
    title: 'Účetní Box',
    description: '1 TB šifrovaného úložiště pro sdílení dokumentů s klienty.',
    href: '/accounting-box',
    icon: HardDrive,
    priceFrom: 'Od 490 Kč/měsíc'
  }
];

export default function CloudSolutionsPage() {
  return (
    <CategoryPage
      title="Cloudová řešení"
      subtitle="IT infrastruktura bez investic"
      description="Přesuňte své servery a data do bezpečného cloudu. Žádné náklady na hardware, vysoká dostupnost, automatické zálohy."
      icon={Cloud}
      iconBg="bg-blue-100"
      iconColor="text-blue-600"
      features={features}
      products={products}
    />
  );
}
```

**Step 2: Verify page renders**

```bash
npm run dev
```

**Step 3: Commit**

```bash
git add app/\[locale\]/cloud-solutions/
git commit -m "feat(categories): add Cloud Solutions page"
```

---

### Task 21: Create Security category page

**Files:**
- Create: `app/[locale]/security/page.tsx`

**Step 1: Create page**

File: `app/[locale]/security/page.tsx`

```typescript
import { ShieldCheck, Lock, AlertTriangle, Key, FileCheck, Eye } from 'lucide-react';
import { CategoryPage } from '@/components/templates/CategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zabezpečení IT',
  description: 'Komplexní bezpečnost vašich dat. Šifrování, zálohy, audit bezpečnosti.',
};

const features = [
  {
    icon: Lock,
    title: 'Šifrování dat',
    description: 'BitLocker, SSL/TLS, end-to-end encryption'
  },
  {
    icon: AlertTriangle,
    title: 'Ochrana před ransomware',
    description: 'Pravidelné zálohy, antivirus, firewall'
  },
  {
    icon: Key,
    title: 'Správa přístupů',
    description: 'Dvoufaktorová autentizace, SSO'
  },
  {
    icon: FileCheck,
    title: 'Audit bezpečnosti',
    description: 'Pravidelné kontroly a doporučení'
  },
  {
    icon: Eye,
    title: 'Monitoring hrozeb',
    description: '24/7 sledování bezpečnostních incidentů'
  },
  {
    icon: ShieldCheck,
    title: 'GDPR compliance',
    description: 'Soulad s evropskými předpisy'
  }
];

const products = [
  {
    title: 'Účetní Box',
    description: 'Šifrované úložiště pro citlivé finanční dokumenty.',
    href: '/accounting-box',
    icon: Lock,
    priceFrom: 'Od 490 Kč/měsíc'
  },
  {
    title: 'IT Pomocník',
    description: 'Nastavení BitLocker, antiviru, firewallu na vašich zařízeních.',
    href: '/it-assistant',
    icon: ShieldCheck,
    priceFrom: 'Od 690 Kč/měsíc'
  }
];

export default function SecurityPage() {
  return (
    <CategoryPage
      title="Zabezpečení IT"
      subtitle="Ochrana vašich dat na první místě"
      description="Komplexní bezpečnostní řešení pro váš byznys. Šifrování, zálohy, audit, monitoring hrozeb."
      icon={ShieldCheck}
      iconBg="bg-green-100"
      iconColor="text-green-600"
      features={features}
      products={products}
    />
  );
}
```

**Step 2: Verify page renders**

```bash
npm run dev
```

**Step 3: Commit**

```bash
git add app/\[locale\]/security/
git commit -m "feat(categories): add Security page"
```

---

### Task 22: Create Consulting category page

**Files:**
- Create: `app/[locale]/consulting/page.tsx`

**Step 1: Create page**

File: `app/[locale]/consulting/page.tsx`

```typescript
import { Lightbulb, TrendingDown, Rocket, Workflow, Target, Users } from 'lucide-react';
import { CategoryPage } from '@/components/templates/CategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Poradenství',
  description: 'Návrh optimálního IT řešení pro váš byznys. Snížení nákladů, zvýšení efektivity.',
};

const features = [
  {
    icon: Target,
    title: 'Analýza potřeb',
    description: 'Pochopíme vaše procesy a cíle'
  },
  {
    icon: Lightbulb,
    title: 'Návrh řešení',
    description: 'Optimální technologie a architektura'
  },
  {
    icon: TrendingDown,
    title: 'Snížení nákladů',
    description: 'Identifikace úspor a optimalizace'
  },
  {
    icon: Rocket,
    title: 'Migrace do cloudu',
    description: 'Bezpečný přesun dat a aplikací'
  },
  {
    icon: Workflow,
    title: 'Automatizace procesů',
    description: 'Zvýšení produktivity týmu'
  },
  {
    icon: Users,
    title: 'Školení týmu',
    description: 'Efektivní využití nových nástrojů'
  }
];

const products = [
  {
    title: 'Projekty na míru',
    description: 'Komplexní IT projekty od návrhu po implementaci.',
    href: '/custom-projects',
    icon: Lightbulb
  }
];

export default function ConsultingPage() {
  return (
    <CategoryPage
      title="IT Poradenství"
      subtitle="Najdeme optimální řešení pro váš byznys"
      description="Pomůžeme vám vybrat správné technologie, snížit náklady a zvýšit efektivitu IT."
      icon={Lightbulb}
      iconBg="bg-amber-100"
      iconColor="text-amber-600"
      features={features}
      products={products}
    />
  );
}
```

**Step 2: Verify page renders**

```bash
npm run dev
```

**Step 3: Commit**

```bash
git add app/\[locale\]/consulting/
git commit -m "feat(categories): add Consulting page"
```

---

## Summary

This implementation plan covers comprehensive transformation of Mesartim to solidit.ru-inspired design with:

✅ **Phase 1 (Tasks 1-5)**: i18n foundation with next-intl for 6 languages
✅ **Phase 2 (Tasks 6-9)**: Visual style update (B2B professional + Mesartim brand)
✅ **Phase 3 (Tasks 10-17)**: Complete homepage redesign (Hero + 9 Problems + 8 Solutions + Trust + CTA)
✅ **Phase 4 (Tasks 18-22)**: Category pages (Tech Support, Cloud Solutions, Security, Consulting)

**Remaining work** (to be added in subsequent phases):
- Phase 5: Product pages redesign (4 pages with detailed specs + pricing)
- Phase 6: Animations (fade-in, parallax, skeleton loading)
- Phase 7: SEO optimization (hreflang, canonical, structured data)
- Phase 8: Final testing & deployment

---

## Execution Options

**Plan complete and saved to `docs/plans/2025-12-17-mesartim-solidit-redesign.md`**

**Two execution options:**

**1. Subagent-Driven (this session)**
- I dispatch fresh subagent per task
- Code review between tasks
- Fast iteration with quality gates
- **REQUIRED SUB-SKILL:** superpowers:subagent-driven-development

**2. Parallel Session (separate)**
- Open new session with executing-plans
- Batch execution with checkpoints
- **REQUIRED SUB-SKILL:** superpowers:executing-plans

Which approach?
