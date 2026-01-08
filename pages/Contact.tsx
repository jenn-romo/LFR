import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full bg-brand-dark min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8">GET IN TOUCH</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
             I am always open to discussing new partnerships, speaking engagements, 
             and strategic opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <a href="https://www.linkedin.com/in/luisfromo/" target="_blank" rel="noreferrer" className="flex flex-col items-center p-8 bg-white/5 border border-white/10 hover:bg-brand-blue/10 hover:border-brand-blue/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-brand-dark flex items-center justify-center rounded-full group-hover:scale-110 transition-transform mb-6 border border-white/10">
              <Linkedin className="text-brand-blue w-8 h-8" />
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">LinkedIn</div>
            <div className="text-lg text-white font-bold text-center">Connect on LinkedIn</div>
          </a>

          <div className="flex flex-col items-center p-8 bg-white/5 border border-white/10 hover:bg-brand-blue/10 hover:border-brand-blue/30 transition-all duration-300 group cursor-default">
            <div className="w-16 h-16 bg-brand-dark flex items-center justify-center rounded-full group-hover:scale-110 transition-transform mb-6 border border-white/10">
              <MapPin className="text-brand-blue w-8 h-8" />
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Location</div>
            <div className="text-lg text-white font-bold text-center">Orlando, Florida</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;