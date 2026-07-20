import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/cards', label: 'Cards' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#1a0f2e]/80 border-b border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-3 h-16">
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className="font-abbess text-lg sm:text-xl font-bold text-[#d4af37] hover:text-[#e0c04f] transition-all duration-300 hover:scale-105 group relative"
            >
              <span className="relative z-10 sm:hidden">Mage Tarot</span>
              <span className="relative z-10 hidden sm:inline">
                Mage: The Ascension Tarot
              </span>
              <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 rounded transition-all duration-300" />
            </Link>
          </div>
          <nav className="flex space-x-3 sm:space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[#e0c04f] hover:text-[#f4e5a8] transition-colors font-medium relative group py-2"
              >
                {label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
