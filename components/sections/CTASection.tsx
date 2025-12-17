import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Ready to upgrade?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Join hundreds of satisfied businesses running on our infrastructure.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="shadow-xl shadow-primary/20">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
