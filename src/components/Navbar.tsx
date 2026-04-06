import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ClientConfig } from '../clientConfig';

export default function Navbar({ config }: { config: ClientConfig }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-warm-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="font-serif text-2xl font-semibold tracking-wide text-olive">
          {config.hostelName}
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest font-medium text-ink/80 hover:text-olive transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#rooms" className="bg-olive hover:bg-olive-dark text-white px-6 py-2.5 rounded-full text-sm uppercase tracking-widest transition-colors">
            Book Now
          </a>
        </div>
        <button className="md:hidden text-ink" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-warm-white shadow-lg py-6 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif text-ink hover:text-olive transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#rooms" onClick={() => setIsMobileMenuOpen(false)} className="bg-olive text-white px-6 py-3 rounded-full text-center font-medium mt-4">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
