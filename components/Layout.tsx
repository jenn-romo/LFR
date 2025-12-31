import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Mail } from 'lucide-react';

const NavLink = ({ to, children, onClick }: { to: string; children?: React.ReactNode; onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-xs font-bold tracking-[0.2em] hover:text-brand-cyan transition-colors duration-200 uppercase ${
        isActive ? 'text-brand-cyan' : 'text-gray-300'
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-brand-light font-sans selection:bg-brand-cyan selection:text-black">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${
          isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-3' : 'bg-brand-dark py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="group flex flex-col z-50">
             <div className="text-2xl font-heading font-bold tracking-widest text-white leading-none">
               LUIS <span className="text-brand-cyan">F.</span> ROMO
             </div>
             <div className="flex gap-1 mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
               <div className="h-1 w-6 bg-gray-500 rounded-sm"></div>
               <div className="h-1 w-8 bg-brand-red rounded-sm"></div>
               <div className="h-1 w-16 bg-brand-red rounded-sm"></div>
             </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Work</NavLink>
            <NavLink to="/media">Media</NavLink>
            <NavLink to="/blog">Blog</NavLink>
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
              className="bg-brand-cyan hover:bg-white hover:text-brand-dark text-brand-dark px-6 py-2.5 font-bold uppercase tracking-wider text-xs transition-all duration-300"
            >
              Work With Luis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-brand-dark flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden z-40 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
          <NavLink to="/experience" onClick={() => setIsMobileMenuOpen(false)}>Work</NavLink>
          <NavLink to="/media" onClick={() => setIsMobileMenuOpen(false)}>Media</NavLink>
          <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
          <a 
            href="#work-with-luis" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-brand-cyan text-brand-dark px-8 py-3 font-bold uppercase tracking-wider text-sm"
          >
            Work With Luis
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-gray/20 border-t border-white/5 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-heading text-xl font-bold mb-4 text-white">LUIS F. ROMO</h3>
              <p className="text-gray-400 mb-6 max-w-sm">
                Executive Leadership, Strategy, and Operational Excellence for high-growth companies.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/luisfromo/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:luis@blackliongrowth.com" className="text-gray-400 hover:text-brand-cyan transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">Menu</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-brand-cyan">About</Link></li>
                <li><Link to="/experience" className="hover:text-brand-cyan">Work</Link></li>
                <li><Link to="/media" className="hover:text-brand-cyan">Media</Link></li>
                <li><Link to="/blog" className="hover:text-brand-cyan">Insights</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-xs">Connect</h4>
              <a href="mailto:luis@blackliongrowth.com" className="text-brand-cyan hover:text-white transition-colors text-sm font-medium">
                luis@blackliongrowth.com
              </a>
              <p className="text-gray-500 text-sm mt-2">Orlando, FL</p>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Luis F. Romo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;