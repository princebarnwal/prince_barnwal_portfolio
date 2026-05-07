import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(250,247,242,0.96)' : 'transparent',
        boxShadow: scrolled ? '0 1px 24px rgba(44,31,14,0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-semibold tracking-tight transition-opacity hover:opacity-70"
          style={{ fontFamily: 'Playfair Display, serif', color: '#2c1f0e' }}
        >
          PLB
        </a>
        <ul className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.replace('#', '');
            return (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{
                    color: activeSection === sectionId ? '#8b5e3c' : '#6b5240',
                    borderBottom: activeSection === sectionId ? '2px solid #8b5e3c' : '2px solid transparent',
                    paddingBottom: '2px',
                  }}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: '#2c1f0e' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ backgroundColor: 'rgba(250,247,242,0.98)' }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium py-1"
              style={{ color: '#2c1f0e' }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
