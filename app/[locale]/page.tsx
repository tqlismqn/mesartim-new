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
