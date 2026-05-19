import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`glass-nav transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-3xl font-serif font-bold tracking-tight text-unihub-navy">
            Unihub.
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[13px] font-semibold uppercase tracking-wider transition-colors hover:text-unihub-terracotta ${
                location.pathname === link.path ? 'text-unihub-navy' : 'text-unihub-navy/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="unihub-button-primary !text-[13px] uppercase tracking-widest">
            Book a Trial
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-unihub-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-unihub-white md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-display font-bold ${
                    location.pathname === link.path ? 'text-unihub-blue' : 'text-unihub-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 flex flex-col gap-4">
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="unihub-button-primary text-center py-5 text-xl"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
