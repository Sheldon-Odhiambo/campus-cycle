import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          <ShoppingBag /> CampusCycle
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/marketplace" className="text-gray-600 hover:text-blue-600">Marketplace</Link>
          <Link to="/sell" className="text-gray-600 hover:text-blue-600">Sell</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Login</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-4">
          <Link to="/marketplace" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Marketplace</Link>
          <Link to="/sell" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Sell</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center" onClick={() => setIsMenuOpen(false)}>Login</Link>
        </div>
      )}
    </header>
  );
}
