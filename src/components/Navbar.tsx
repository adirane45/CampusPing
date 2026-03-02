'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Security', href: '#security' },
    { label: 'Notifications', href: '#notifications' },
    { label: 'Why Us', href: '#why' },
    { label: 'Waitlist', href: '#waitlist' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-lg border-b border-indigo-500/20 shadow-lg shadow-indigo-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/40 transition-shadow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Campus<span className="text-indigo-400">Ping</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#waitlist"
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-semibold rounded-lg hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
              Get Early Access
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-indigo-500/20 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-slate-300 hover:text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block text-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-semibold rounded-lg"
          >
            Get Early Access
          </a>
        </div>
      )}
    </nav>
  );
}
