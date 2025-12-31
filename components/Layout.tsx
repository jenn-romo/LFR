import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Mail, ChevronRight } from 'lucide-react';

const NavLink = ({ to, children, onClick }: { to: string; children?: React.ReactNode; onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-sm font-bold tracking-widest hover:text-brand-blue transition-colors duration-200 uppercase ${
        isActive ? 'text-brand-blue' : 'text-brand-light'
      }`}
    >
      {children}
    </Link>
  );
};

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-brand-light font-sans selection:bg-brand-blue selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${
          isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-heading font-bold tracking-tighter text-white z-50">
            LUIS F. ROMO
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Work</NavLink>
            <NavLink to="/media">Media</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
            <a 
              href="#work-with-luis"
              onClick={(e) => {
                const el = document.getElementById('work-with-luis');
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-brand-blue hover:bg-brand-blueDark text-white px-6 py-2 font-bold uppercase tracking-wider text-xs transition-colors duration-300"
            >
              Work With Luis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-brand-dark flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden z-40 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
          <NavLink to="/experience" onClick={() => setIsMobileMenuOpen(false)}>Work</NavLink>
          <NavLink to="/media" onClick={() => setIsMobileMenuOpen(false)}>Media</NavLink>
          <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
          <a 
            href="#work-with-luis" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-brand-blue font-bold uppercase tracking-widest text-lg"
          >
            Work With Luis
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-gray/20 border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-heading text-xl font-bold mb-4 text-white">Luis F. Romo</h3>
              <p className="text-gray-400 mb-6 max-w-sm">
                Business Executive specializing in Strategy, Growth, and Execution. 
                Helping founders and companies scale with operational excellence.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/luisfromo/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-blue transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:luis@blackliongrowth.com" className="text-gray-400 hover:text-brand-blue transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-brand-blue">About</Link></li>
                <li><Link to="/experience" className="hover:text-brand-blue">Experience</Link></li>
                <li><Link to="/media" className="hover:text-brand-blue">Media</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">Orlando, Florida</p>
              <a href="mailto:luis@blackliongrowth.com" className="text-brand-blue hover:text-white transition-colors">
                luis@blackliongrowth.com
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Luis F. Romo. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;