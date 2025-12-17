import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { href: '/accounting-server', label: 'Accounting Server' },
  { href: '/accounting-box', label: 'Cloud Backup' },
  { href: '/it-support', label: 'IT Support' },
  { href: '/projects', label: 'Projects' },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors">
            Mesartim
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </div>
    </nav>
  );
}
