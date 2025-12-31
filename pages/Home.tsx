import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Layers, Lightbulb, ArrowUpRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-brand-dark overflow-hidden pt-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        {/* Subtle glow effect */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-start max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-8 h-1 bg-brand-cyan"></div>
               <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-sm">Executive Leadership</span>
            </div>
            
            <h1 className="flex flex-col text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-white leading-[0.9] mb-8">
              <span>STRATEGY.</span>
              <span>GROWTH.</span>
              <span>EXECUTION.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed border-l-2 border-white/10 pl-6">
              Scaling businesses through operational excellence, innovation, and high-impact partnerships. 
              Turning vision into actionable roadmaps that drive revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#work-with-luis"
                className="bg-brand-red hover:bg-red-600 text-white min-w-[200px] px-8 py-5 font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 text-center"
              >
                Work With Luis
              </a>
              <Link 
                to="/blog"
                className="border border-white/20 hover:border-brand-cyan hover:text-brand-cyan text-white min-w-[200px] px-8 py-5 font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 text-center"
              >
                Read The Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-24 bg-brand-dark relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Pillar 1 */}
            <div className="group">
              <div className="w-20 h-20 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-500">
                <BarChart3 className="w-8 h-8 text-brand-cyan group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase tracking-wide">
                Strategy & Growth
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Building and executing business plans for multi-million dollar portfolios. 
                Turning vision into actionable roadmaps that drive revenue and market share.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group">
              <div className="w-20 h-20 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-500">
                <Layers className="w-8 h-8 text-brand-cyan group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase tracking-wide">
                Ops Excellence
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Optimizing supply chains and achieving gross margin targets. Implementing ISO 
                13485 quality systems and securing global regulatory approvals.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group">
              <div className="w-20 h-20 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-500">
                <Lightbulb className="w-8 h-8 text-brand-cyan group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase tracking-wide">
                Innovation & IP
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Commercializing complex technology from concept to exit. Securing 20+ 
                global patents and establishing new regulatory standards (ASTM).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Featured In */}
      <section className="py-16 border-y border-white/5 bg-brand-card">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="text-center text-gray-500 uppercase tracking-[0.2em] text-xs mb-10 font-bold">Featured Insights In</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-3xl font-heading font-bold text-white">WSJ</span>
             <span className="text-3xl font-heading font-bold text-white">CBS NEWS</span>
             <span className="text-3xl font-heading font-bold text-white">NEWSWEEK</span>
             <span className="text-3xl font-heading font-bold text-white">UL</span>
             <span className="text-3xl font-heading font-bold text-white">AJIC</span>
          </div>
        </div>
      </section>

      {/* Signature Wins */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-12 h-1 bg-brand-red"></div>
                 <span className="text-brand-red font-bold uppercase tracking-widest text-xs">Proven Results</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">SIGNATURE WINS</h2>
            </div>
            <Link to="/experience" className="hidden md:flex items-center gap-2 text-brand-cyan hover:text-white font-bold uppercase tracking-widest text-xs transition-colors">
              View All Experience <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Global IP Moat", desc: "Secured 20+ patents across US, Canada, Japan, Europe, Australia, and China." },
              { title: "Startup-to-Exit", desc: "Founder/CEO of PurpleSun. Led from concept to multi-million dollar tech sale." },
              { title: "Enterprise Dealmaker", desc: "Secured >$10M in customer contracts and scaled revenues 10x." },
              { title: "Regulatory Standard", desc: "Helped secure new global standard via ASTM E35 committee vote." },
              { title: "Manufacturing Scale", desc: "Achieved 65%+ gross margins and ISO 13485 quality management systems." },
              { title: "$50M Portfolio", desc: "Chief of Strategy executing business plans for VORA VERA's major portfolio." },
            ].map((win, idx) => (
              <div key={idx} className="group p-8 border border-white/5 bg-brand-gray/30 hover:bg-brand-gray/50 hover:border-brand-blue/30 transition-all duration-300">
                <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">{win.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{win.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 md:hidden">
            <Link to="/experience" className="flex items-center gap-2 text-brand-cyan hover:text-white font-bold uppercase tracking-widest text-xs transition-colors">
              View All Experience <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions / Work With Luis */}
      <section id="work-with-luis" className="py-24 bg-white text-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">WORK WITH LUIS</h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Select the strategic area where you need the most impact today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card A */}
            <div className="flex flex-col p-10 bg-brand-dark text-white relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BarChart3 size={100} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 leading-tight relative z-10">
                <span className="text-brand-cyan">Execution</span> System
              </h3>
              <p className="text-gray-400 mb-8 flex-grow relative z-10 text-sm leading-relaxed">
                For executives & entrepreneurs who are overwhelmed but not progressing. 
                Prioritize tasks and take control of your calendar.
              </p>
              <a 
                href="https://growthsprintsystem.com" 
                target="_blank"
                rel="noreferrer"
                className="w-full text-center border border-white/20 hover:bg-brand-cyan hover:text-brand-dark hover:border-brand-cyan text-white py-4 font-bold uppercase tracking-wider text-xs transition-all duration-300 relative z-10 flex items-center justify-center gap-2"
              >
                Start Execution <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Card B */}
            <div className="flex flex-col p-10 bg-brand-dark text-white relative group overflow-hidden transform md:-translate-y-4 shadow-2xl border-t-4 border-brand-red">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Layers size={100} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 leading-tight relative z-10">
                <span className="text-brand-red">Sales</span> Multiplier
              </h3>
              <p className="text-gray-400 mb-8 flex-grow relative z-10 text-sm leading-relaxed">
                Deploy an ecosystem of inbound/outbound tools and autonomous SDRs 
                that qualify leads and book appointments automatically.
              </p>
              <a 
                 href="https://salesgrowthmultiplier.com" 
                 target="_blank"
                 rel="noreferrer"
                 className="w-full text-center bg-brand-red hover:bg-white hover:text-brand-red text-white py-4 font-bold uppercase tracking-wider text-xs transition-all duration-300 relative z-10 flex items-center justify-center gap-2"
              >
                Grow Sales <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Card C */}
            <div className="flex flex-col p-10 bg-brand-dark text-white relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Lightbulb size={100} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 leading-tight relative z-10">
                <span className="text-brand-cyan">Content</span> Engine
              </h3>
              <p className="text-gray-400 mb-8 flex-grow relative z-10 text-sm leading-relaxed">
                Build authority without the time drain. Daily prompts repurposed into 
                social posts automatically. Scale your voice.
              </p>
              <a 
                 href="https://contentgrowthmultiplier.com" 
                 target="_blank"
                 rel="noreferrer"
                 className="w-full text-center border border-white/20 hover:bg-brand-cyan hover:text-brand-dark hover:border-brand-cyan text-white py-4 font-bold uppercase tracking-wider text-xs transition-all duration-300 relative z-10 flex items-center justify-center gap-2"
              >
                Automate Content <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-brand-blueDark relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark/80"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">READY TO SCALE?</h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Partnerships, Speaking, or Advisory. Let's make it happen.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-brand-dark hover:bg-brand-cyan hover:text-white px-12 py-5 font-heading font-bold uppercase tracking-wider transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;