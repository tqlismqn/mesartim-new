import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <CTASection />
    </div>
  );
}
