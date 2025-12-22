import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/home/Hero';
import { ProblemsSection } from '@/components/sections/home/ProblemsSection';
import { SolutionsSection } from '@/components/sections/home/SolutionsSection';
import { TrustSection } from '@/components/sections/home/TrustSection';
import { CTASection } from '@/components/sections/home/CTASection';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
