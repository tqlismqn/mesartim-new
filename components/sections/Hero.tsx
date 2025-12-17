import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Headline */}
        <h1 className="text-hero font-bold tracking-tight">
          Reliable IT Infrastructure.
          <br />
          <span className="text-gray-500">Simplified.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Enterprise-grade servers, secure backups, and expert support. Tailored for your business growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link href="/contact">
            <Button size="lg">
              Get Started
            </Button>
          </Link>
          <Link
            href="/accounting-server"
            className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors min-h-[44px]"
          >
            Learn more <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
