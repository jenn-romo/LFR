import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart3, Globe, Target, ShieldCheck, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/5 text-brand-blue text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
            Available for Strategic Partnerships
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black tracking-tighter text-white mb-6 leading-[0.9]">
            STRATEGY.<br />
            <span className="gradient-text">GROWTH.</span><br />
            EXECUTION.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
            I help founders and companies scale through operational excellence, 
            innovation, and relentless execution.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="#work-with-luis"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work-with-luis')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-blue hover:bg-brand-blueDark text-white px-8 py-4 font-heading font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              Work With Luis
            </a>
          </div>
        </div>
      </section>

      {/* Proof Bar */}
      <section className="border-y border-white/10 bg-brand-gray/10 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">20+</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest">Global Patents</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">$50M</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest">Portfolio Execution</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">10X</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest">Revenue Growth</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">$40M</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest">M&A Term Sheet</div>
          </div>
        </div>
      </section>

      {/* What Luis Does */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group p-8 border border-white/5 hover:border-brand-blue/50 transition-colors duration-300 bg-gradient-to-br from-white/5 to-transparent">
              <Target className="w-12 h-12 text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Strategy & Growth</h3>
              <p className="text-gray-400 leading-relaxed">
                Developing high-level business roadmaps and executing them with precision. 
                I turn complex visions into actionable growth plans.
              </p>
            </div>
            <div className="group p-8 border border-white/5 hover:border-brand-blue/50 transition-colors duration-300 bg-gradient-to-br from-white/5 to-transparent">
              <ShieldCheck className="w-12 h-12 text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Operational Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                Optimizing supply chains, implementing ISO quality systems, and 
                streamlining logistics to maximize gross margins.
              </p>
            </div>
            <div className="group p-8 border border-white/5 hover:border-brand-blue/50 transition-colors duration-300 bg-gradient-to-br from-white/5 to-transparent">
              <Zap className="w-12 h-12 text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Innovation & IP</h3>
              <p className="text-gray-400 leading-relaxed">
                Commercializing complex technology, securing global patents, and 
                navigating regulatory landscapes (FDA, UL, ASTM).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 uppercase tracking-widest text-xs mb-8">Featured In</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-2xl font-heading font-bold text-white">WSJ</span>
             <span className="text-2xl font-heading font-bold text-white">CBS NEWS</span>
             <span className="text-2xl font-heading font-bold text-white">NEWSWEEK</span>
             <span className="text-2xl font-heading font-bold text-white">UL</span>
             <span className="text-2xl font-heading font-bold text-white">AJIC</span>
          </div>
        </div>
      </section>

      {/* Signature Wins */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">SIGNATURE WINS</h2>
            <div className="h-1 w-20 bg-brand-red"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Global IP Moat", desc: "Secured 20+ patents across US, Canada, Japan, Europe, Australia, and China." },
              { title: "Startup-to-Exit", desc: "Founded PurpleSun, scaled to 10x revenue, and navigated a multi-million dollar tech sale." },
              { title: "Enterprise Dealmaker", desc: "Closed >$10M in customer contracts with major healthcare systems." },
              { title: "Regulatory Standard", desc: "Pioneered a new global regulatory standard via ASTM E35 committee vote." },
              { title: "Manufacturing Scale", desc: "Achieved 65%+ gross margins and ISO 13485 quality management approval." },
              { title: "Logistics Expert", desc: "Partnered with Amazon Global Logistics to optimize a $50M portfolio." },
            ].map((win, idx) => (
              <div key={idx} className="p-8 border border-white/10 bg-brand-gray/20 hover:bg-brand-gray/40 transition-colors">
                <CheckCircle className="text-brand-blue mb-4" />
                <h3 className="text-xl font-heading font-bold text-white mb-2">{win.title}</h3>
                <p className="text-gray-400 text-sm">{win.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus: SWISH XR */}
      <section className="py-24 bg-brand-blueDark relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark/50 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block bg-brand-blue/20 text-brand-blue px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Current Focus
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                SWISH XR HOOPER
              </h2>
              <h3 className="text-2xl text-brand-blueLight mb-6 font-light">
                Chief Operating Officer (Since March 2025)
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                "After several months of hard work, I’ve jumped into the world of VR/XR technology and launching the SWISH XR Hooper — first ever basketball simulator gaming system without needing goggles or a headset."
              </p>
              <a 
                href="https://www.swishxr.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-blueDark hover:bg-brand-light px-8 py-4 font-heading font-bold uppercase tracking-wider transition-colors"
              >
                See What I'm Building <ArrowRight size={20} />
              </a>
            </div>
            <div className="flex-1">
               <div className="aspect-video bg-gradient-to-tr from-brand-blue to-brand-blueDark rounded-lg opacity-80 flex items-center justify-center border border-white/20 shadow-2xl">
                  {/* Placeholder for SWISH XR Image */}
                  <span className="font-heading text-4xl font-bold text-white/50 tracking-tighter">SWISH XR</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Work With Luis */}
      <section id="work-with-luis" className="py-24 bg-white text-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">WORK WITH LUIS</h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Select the area where you need the most impact today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card A */}
            <div className="flex flex-col p-8 border-2 border-brand-dark bg-brand-light hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-heading font-bold mb-4 leading-tight">
                Do you need help with <span className="text-brand-blueDark">Execution</span>?
              </h3>
              <p className="text-brand-gray mb-8 flex-grow">
                For executives & entrepreneurs who are overwhelmed and busy but not progressing. 
                Get the Growth Sprint System for task prioritization and calendar control.
              </p>
              <a 
                href="https://growthsprintsystem.com" 
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-brand-dark text-white hover:bg-brand-blueDark py-4 font-bold uppercase tracking-wider text-sm transition-colors"
              >
                Explore Growth Sprint System
              </a>
            </div>

            {/* Card B */}
            <div className="flex flex-col p-8 border-2 border-brand-dark bg-brand-light hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-heading font-bold mb-4 leading-tight">
                Do you need help with <span className="text-brand-blueDark">Growing Sales</span>?
              </h3>
              <p className="text-brand-gray mb-8 flex-grow">
                Deploy the Sales Growth Multiplier: an ecosystem of inbound/outbound tools 
                and autonomous SDRs that qualify leads and book appointments.
              </p>
              <a 
                 href="https://salesgrowthmultiplier.com" 
                 target="_blank"
                 rel="noreferrer"
                 className="w-full text-center bg-brand-dark text-white hover:bg-brand-blueDark py-4 font-bold uppercase tracking-wider text-sm transition-colors"
              >
                Explore Sales Growth Multiplier
              </a>
            </div>

            {/* Card C */}
            <div className="flex flex-col p-8 border-2 border-brand-dark bg-brand-light hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-heading font-bold mb-4 leading-tight">
                Do you need help with <span className="text-brand-blueDark">Content</span>?
              </h3>
              <p className="text-brand-gray mb-8 flex-grow">
                Build authority without the time. Daily prompts repurposed into 
                social posts automatically. Barely lift a finger.
              </p>
              <a 
                 href="https://contentgrowthmultiplier.com" 
                 target="_blank"
                 rel="noreferrer"
                 className="w-full text-center bg-brand-dark text-white hover:bg-brand-blueDark py-4 font-bold uppercase tracking-wider text-sm transition-colors"
              >
                Explore Content Growth Multiplier
              </a>
            </div>
          </div>
          <p className="text-center text-xs text-brand-gray mt-8 opacity-60">
            *Each program has its own dedicated platform.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-brand-gray/10 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">READY TO SCALE?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Reach out directly to discuss partnership opportunities or speaking engagements.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-brand-dark hover:bg-brand-blue hover:text-white px-10 py-4 font-heading font-bold uppercase tracking-wider transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;