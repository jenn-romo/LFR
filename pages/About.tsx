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
            {/* Intro / Current Roles */}
            <p className="text-xl text-white font-light leading-relaxed mb-6">
              Most recently, Luis Romo serves as Chief Operating Officer at <strong className="text-brand-blue">Swish XR</strong>, the first XR/VR basketball gaming system.
            </p>
            
            <p className="text-gray-400 mb-6">
              He also serves as Chief of Strategy and New Business Development at <strong>Vora Vera LLC</strong>, where he leads the development and launch of consumer brands, building a $50M portfolio of health and wellness businesses. He drives the strategic growth vision for the company's product portfolios, collaborating with Amazon’s Global Logistics and multichannel fulfillment capabilities. His efforts include end-to-end supply chain sourcing and due diligence across LATAM, Europe, and China, while exploring new growth strategies for social commerce through mobile application platforms like TikTok and large-scale influencer marketing technologies.
            </p>

            <h3 className="text-white font-heading text-2xl mt-12 mb-6">THE JOURNEY</h3>
            
            <p className="text-gray-400 mb-6">
              Prior to Vora Vera, Luis was the Founder and CEO of <strong>PurpleSun Inc.</strong>, where his innovative healthcare technology earned recognition in <em>The Wall Street Journal</em> as one of the “Game Changers in Health Tech.” Under his leadership, PurpleSun developed a groundbreaking disinfection system, the first mobile UV system UL certified for large-scale healthcare equipment, as featured in UL News.
            </p>

            <p className="text-gray-400 mb-6">
              As an executive leader, Luis has led negotiations for fundraising, commercial, and M&A transactions, including multiple mega deals with multibillion-dollar corporations, securing high-value contracts while managing complex risks and gaining internal and external stakeholder buy-in. His negotiation expertise resulted in $40M in strategic M&A offers and private equity transactions, and his leadership drove market growth by directly closing multimillion-dollar business deals.
            </p>
            
            <p className="text-gray-400 mb-12">
              Luis’ work has garnered widespread media attention, including features on CBS News for hospital disinfection technology and PR Newswire for his partnership with the U.S. Air Force during the 2020 pandemic to deliver a “weapon of defense” against pathogens. His vision and ability to scale businesses from 0 to 1, combined with being the inventor and creator of a global intellectual property portfolio of 30+ patents and trademarks, have positioned him as a recognized leader in business growth and healthcare technology.
            </p>

             <blockquote className="border-l-4 border-brand-blue pl-6 italic text-xl text-gray-300 my-12">
              "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God."
              <footer className="text-sm text-brand-blue font-bold mt-2 uppercase not-italic">— Romans 12:2</footer>
            </blockquote>

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