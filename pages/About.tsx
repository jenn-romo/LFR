import React from 'react';
import { Target, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full bg-brand-dark min-h-screen pb-24">
      <div className="pt-24 pb-12 bg-gradient-to-b from-brand-gray/20 to-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">ABOUT LUIS</h1>
          <p className="text-xl text-brand-blue max-w-2xl font-light">
            Driven by excellence. Defined by execution.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="md:col-span-7">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-2xl text-white font-light leading-relaxed mb-8">
              I am a business executive focused on Strategy, Growth, and Innovation. 
              Currently, I serve as the <strong className="text-brand-blue">COO of SWISH XR</strong>, 
              launching groundbreaking sports technology to the world.
            </p>
            
            <h3 className="text-white font-heading text-2xl mt-12 mb-6">THE JOURNEY</h3>
            <p className="text-gray-400 mb-6">
              My career has been built on the belief that ideas are cheap, and execution is everything. 
              From 2012 to 2022, I founded and led <strong>PurpleSun Inc.</strong>, a healthcare technology startup, 
              from a concept to a successful exit.
            </p>
            <p className="text-gray-400 mb-6">
              During that decade, I didn't just sit in a boardroom. I secured 20+ global patents, navigated 
              complex regulatory landscapes (FDA, UL, ASTM), and closed deals with some of the largest health 
              systems in the country. We achieved 10x revenue growth and I personally secured a $40M M&A term sheet.
            </p>
            <p className="text-gray-400 mb-6">
              At <strong>VORA VERA LLC</strong>, I pivoted to helping a broader portfolio, optimizing supply chains 
              for a $50M portfolio and establishing key partnerships with Amazon Global Logistics.
            </p>

            <h3 className="text-white font-heading text-2xl mt-12 mb-6">EDUCATION</h3>
            <ul className="space-y-4 text-gray-400 list-none pl-0">
              <li className="flex gap-4">
                <span className="text-brand-blue font-bold">2022-2023</span>
                <span>Wharton Executive Business Training</span>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-blue font-bold">2014-2015</span>
                <span>Harvard Finance & Accounting</span>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-blue font-bold">2006-2012</span>
                <span>MS + BS Biomedical Engineering — Syracuse University</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-5 space-y-12">
          {/* Values */}
          <div className="bg-white/5 p-8 border border-white/10">
            <h3 className="font-heading font-bold text-white mb-6 flex items-center gap-2">
              <Heart className="text-brand-blue" /> CORE VALUES
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Execution', 'Excellence', 'Perseverance', 'Leadership', 'Integrity', 'Respect', 'Energy', 'Strength'].map(val => (
                <span key={val} className="px-3 py-1 bg-white/10 text-xs uppercase tracking-widest text-white rounded-sm">
                  {val}
                </span>
              ))}
            </div>
          </div>

          {/* How I Work */}
          <div className="bg-brand-blue/10 p-8 border border-brand-blue/20">
            <h3 className="font-heading font-bold text-brand-blue mb-6 flex items-center gap-2">
              <Target className="text-brand-blue" /> HOW I WORK
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2.5"></div>
                <p><strong>Proof First:</strong> I don't guess. I look for data and measurable outcomes.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2.5"></div>
                <p><strong>Speed & Precision:</strong> Momentum is life. We move fast, but we never compromise on quality.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2.5"></div>
                <p><strong>Partnership:</strong> I build relationships, not just transactions. Success is a team sport.</p>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div className="p-8 border border-white/10">
             <h3 className="font-heading font-bold text-white mb-4">LANGUAGES</h3>
             <p className="text-gray-400">English • Spanish (Native)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
