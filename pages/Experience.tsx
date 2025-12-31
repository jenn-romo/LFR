import React from 'react';
import { EXPERIENCE_DATA, SKILLS } from '../services/data';
import { Briefcase, Check } from 'lucide-react';

const Experience = () => {
  return (
    <div className="w-full bg-brand-dark min-h-screen pb-24">
       <div className="pt-24 pb-12 bg-gradient-to-b from-brand-gray/20 to-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">WORK HISTORY</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            A timeline of building, scaling, and exiting.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Timeline */}
          <div className="lg:col-span-8 space-y-16">
            {EXPERIENCE_DATA.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                {/* Mobile Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:hidden"></div>
                
                <div className="md:grid md:grid-cols-12 md:gap-8">
                   <div className="md:col-span-3 text-right hidden md:block pt-1">
                      <div className="text-brand-blue font-bold tracking-widest text-sm uppercase">{item.period}</div>
                   </div>
                   
                   <div className="md:col-span-9 relative">
                      {/* Desktop Dot */}
                      <div className="hidden md:block absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-brand-blue shadow-[0_0_10px_#60B7E3]"></div>
                      
                      <div className="mb-2 md:hidden text-brand-blue font-bold tracking-widest text-sm uppercase">{item.period}</div>
                      
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">{item.company}</h3>
                      <h4 className="text-xl text-gray-300 font-light mb-6">{item.role}</h4>
                      
                      <p className="text-gray-400 mb-6 italic border-l-2 border-brand-blue/30 pl-4">
                        {item.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {item.achievements.map((ach, i) => (
                          <li key={i} className="flex gap-3 text-gray-300">
                             <Check className="flex-shrink-0 text-brand-blue w-5 h-5 mt-0.5" />
                             <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-white/5 p-8 border border-white/10 rounded-sm">
              <h3 className="font-heading font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="text-brand-blue" /> EXPERTISE
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-2 bg-brand-dark border border-white/10 text-xs text-gray-300 hover:border-brand-blue/50 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
