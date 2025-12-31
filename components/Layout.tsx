import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

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
          isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-4' : 'bg-brand-dark py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="group flex flex-col z-50 w-max">
             <div className="text-2xl font-heading font-bold tracking-widest text-white leading-none">
               LUIS F. ROMO
             </div>
             <div className="flex items-center mt-2 h-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
               {/* Dark Grey Bar for LUIS */}
               <div className="w-[62px] bg-[#333] mr-1"></div>
               
               {/* Light Blue Square for F */}
               <div className="w-[14px] bg-[#93C5FD] mr-0.5"></div>
               
               {/* Cyan Square for . */}
               <div className="w-[14px] bg-brand-cyan mr-1"></div>
               
               {/* Red Bar for ROMO */}
               <div className="w-[82px] bg-brand-red"></div>
             </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
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
              className="bg-brand-cyan hover:bg-white text-black px-6 py-3 font-bold uppercase tracking-wider text-xs transition-all duration-300"
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
          <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
          <a 
            href="#work-with-luis" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-brand-cyan text-black px-8 py-3 font-bold uppercase tracking-wider text-sm"
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
      <footer className="bg-[#050505] border-t border-white/5 py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Brand Column */}
            <div className="md:col-span-5">
              <Link to="/" className="group flex flex-col mb-6 inline-block w-max">
                 <div className="text-2xl font-heading font-bold tracking-widest text-white leading-none">
                   LUIS F. ROMO
                 </div>
                 <div className="flex items-center mt-2 h-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                   {/* Dark Grey Bar */}
                   <div className="w-[62px] bg-[#333] mr-1"></div>
                   
                   {/* Light Blue Square */}
                   <div className="w-[14px] bg-[#93C5FD] mr-0.5"></div>
                   
                   {/* Cyan Square */}
                   <div className="w-[14px] bg-brand-cyan mr-1"></div>
                   
                   {/* Red Bar */}
                   <div className="w-[82px] bg-brand-red"></div>
                 </div>
              </Link>
              <p className="text-gray-400 mb-8 max-w-sm text-sm leading-relaxed">
                Business Executive specializing in Strategy, Growth, and Innovation. 
                Partnering with leaders to execute operational excellence and scale ventures.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/luisfromo/" target="_blank" rel="noreferrer" className="text-white hover:text-brand-cyan transition-colors border border-white/20 p-2 rounded-sm">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:luis@blackliongrowth.com" className="text-white hover:text-brand-cyan transition-colors border border-white/20 p-2 rounded-sm">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-1"></div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="font-heading font-bold text-white uppercase tracking-widest mb-6 text-sm">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About Luis</Link></li>
                <li><Link to="/experience" className="hover:text-white transition-colors">Experience</Link></li>
                <li><Link to="/media" className="hover:text-white transition-colors">Media & Press</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-3">
              <h4 className="font-heading font-bold text-white uppercase tracking-widest mb-6 text-sm">Services</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                 <li>
                   <a href="https://growthsprintsystem.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2 group">
                     Growth Sprint <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </a>
                 </li>
                 <li>
                   <a href="https://salesgrowthmultiplier.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2 group">
                     Sales Multiplier <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </a>
                 </li>
                 <li>
                   <a href="https://contentgrowthmultiplier.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2 group">
                     Content Multiplier <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </a>
                 </li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[#444] text-[10px] uppercase tracking-widest font-bold">
            <p>&copy; {new Date().getFullYear()} Luis F. Romo. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for Execution</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;