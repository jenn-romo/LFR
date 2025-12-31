import React from 'react';
import { MEDIA_DATA } from '../services/data';
import { ExternalLink, PlayCircle, FileText } from 'lucide-react';

const Media = () => {
  return (
    <div className="w-full bg-brand-dark min-h-screen pb-24">
      <div className="pt-24 pb-12 bg-gradient-to-b from-brand-gray/20 to-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">MEDIA & PRESS</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Insights, interviews, and publications featured in top global outlets.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MEDIA_DATA.map((item, idx) => (
          <a 
            key={idx} 
            href={item.url} 
            target="_blank" 
            rel="noreferrer"
            className="group block bg-white/5 border border-white/10 hover:border-brand-blue hover:bg-white/10 transition-all duration-300 p-8 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-brand-blue">
                {item.type === 'video' ? <PlayCircle size={32} /> : <FileText size={32} />}
              </div>
              <ExternalLink size={20} className="text-gray-600 group-hover:text-white transition-colors" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">
              {item.title}
            </h3>
            
            <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center text-xs uppercase tracking-widest text-gray-500 font-bold">
              <span>{item.outlet}</span>
              <span>{item.date}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Media;
