import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-mage-purple-900 border-b border-mage-gold-800/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="font-abbess text-xl font-bold text-mage-gold-700 hover:text-mage-gold-600 transition-colors"
            >
              Mage: The Ascension Tarot
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link
              href="/"
              className="text-mage-gold-600 hover:text-mage-gold-500 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/cards"
              className="text-mage-gold-600 hover:text-mage-gold-500 transition-colors font-medium"
            >
              Cards
            </Link>
            <Link
              href="/about"
              className="text-mage-gold-600 hover:text-mage-gold-500 transition-colors font-medium"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
