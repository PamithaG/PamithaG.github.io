
import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-sky-400 hover:text-sky-300 transition-colors">
            {PROFILE_DATA.name}
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-slate-300 hover:text-sky-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Mobile menu could be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
