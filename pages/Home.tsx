import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  TrendingUp, 
  Flag, 
  Zap, 
  Layers, 
  Lightbulb
} from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* 1. Hero Section: STRATEGY. GROWTH. EXECUTION. */}
      <section className="relative min-h-screen flex items-center bg-[#020617] pt-20 overflow-hidden">
        {/* Background Gradients/Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
           <div className="mb-6 flex items-center gap-4">
              <div className="h-1 w-12 bg-brand-red"></div>
              <span className="text-brand-cyan font-bold tracking-widest text-sm uppercase">Executive Leadership</span>
           </div>

           <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-9xl leading-[0.9] text-white mb-8">
             STRATEGY.<br/>
             GROWTH.<br/>
             <span className="text-brand-cyan">EXECUTION.</span>
           </h1>

           <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 font-light leading-relaxed">
             Scaling businesses through operational excellence, innovation, and high-impact partnerships.
           </p>

           <div className="flex flex-wrap gap-6">
             <a 
               href="#work-with-luis"
               onClick={(e) => {
                 const el = document.getElementById('work-with-luis');
                 if (el) {
                   e.preventDefault();
                   el.scrollIntoView({ behavior: 'smooth' });
                 }
               }}
               className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center gap-2"
             >
               Work With Luis <ArrowRight size={18} />
             </a>
           </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-20 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Stat 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-900/20 border border-blue-500/20 flex items-center justify-center text-brand-cyan flex-shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-white mb-1">20+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global Patents</div>
              </div>
            </div>
             {/* Stat 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-900/20 border border-blue-500/20 flex items-center justify-center text-brand-cyan flex-shrink-0">
                <TrendingUp size={24} />
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-white mb-1">10x</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Revenue Growth</div>
              </div>
            </div>
             {/* Stat 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-900/20 border border-blue-500/20 flex items-center justify-center text-brand-cyan flex-shrink-0">
                <Flag size={24} />
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-white mb-1">$10M+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Customer Contracts</div>
              </div>
            </div>
             {/* Stat 4 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-900/20 border border-blue-500/20 flex items-center justify-center text-brand-cyan flex-shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-white mb-1">$40M</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">M&A Term Sheet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pillars Section */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center">
               <div className="w-24 h-24 rounded-full bg-blue-900/10 border border-brand-blue/30 flex items-center justify-center text-brand-cyan mb-8">
                 <TrendingUp size={36} />
               </div>
               <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase">Strategy & Growth</h3>
               <p className="text-gray-400 leading-relaxed max-w-sm">
                 Building and executing business plans for multi-million dollar portfolios. Turning vision into actionable roadmaps that drive revenue and market share.
               </p>
            </div>
            {/* Pillar 2 */}
            <div className="flex flex-col items-center">
               <div className="w-24 h-24 rounded-full bg-blue-900/10 border border-brand-blue/30 flex items-center justify-center text-brand-cyan mb-8">
                 <Layers size={36} />
               </div>
               <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase">Ops Excellence</h3>
               <p className="text-gray-400 leading-relaxed max-w-sm">
                 Optimizing supply chains and achieving gross margin targets. Implementing ISO 13485 quality systems and securing global regulatory approvals.
               </p>
            </div>
            {/* Pillar 3 */}
            <div className="flex flex-col items-center">
               <div className="w-24 h-24 rounded-full bg-blue-900/10 border border-brand-blue/30 flex items-center justify-center text-brand-cyan mb-8">
                 <Lightbulb size={36} />
               </div>
               <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase">Innovation & IP</h3>
               <p className="text-gray-400 leading-relaxed max-w-sm">
                 Commercializing complex technology from concept to exit. Securing 20+ global patents and establishing new regulatory standards (ASTM).
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured In */}
      <section className="py-16 bg-[#020202] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-8 md:gap-16">
             <span className="text-xs font-bold uppercase tracking-widest text-[#333] mb-4 md:mb-0">Featured In</span>
             <div className="flex flex-wrap justify-center gap-12 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale items-center">
                <span className="text-2xl md:text-3xl font-heading font-bold text-white">WSJ</span>
                <span className="text-2xl md:text-3xl font-heading font-bold text-white">CBS NEWS</span>
                <span className="text-2xl md:text-3xl font-heading font-bold text-white">NEWSWEEK</span>
                <span className="text-2xl md:text-3xl font-heading font-bold text-white">UL</span>
                <span className="text-2xl md:text-3xl font-heading font-bold text-white">AJIC</span>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Signature Wins */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 uppercase">Signature Wins</h2>
          <div className="flex items-center mt-4 mb-12 h-1.5 w-max">
             <div className="w-8 bg-gray-600 h-full"></div>
             <div className="w-4 bg-brand-cyan h-full ml-1"></div>
             <div className="w-16 bg-brand-red h-full ml-1"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Row 1 */}
            <div className="bg-[#0A0A0A] border border-white/5 p-10 hover:border-brand-cyan/30 transition-colors group">
               <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">Global IP Moat</h3>
               <p className="text-gray-400 leading-relaxed">Secured 20+ patents across US, Canada, Japan, Europe, Australia, and China.</p>
            </div>
            <div className="bg-[#0A0A0A] border border-white/5 p-10 hover:border-brand-cyan/30 transition-colors group">
               <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">Startup-to-Exit</h3>
               <p className="text-gray-400 leading-relaxed">Founder/CEO of PurpleSun. Led from concept to multi-million dollar tech sale.</p>
            </div>
            {/* Row 2 */}
            <div className="bg-[#0A0A0A] border border-white/5 p-10 hover:border-brand-cyan/30 transition-colors group">
               <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">Enterprise Dealmaker</h3>
               <p className="text-gray-400 leading-relaxed">Secured &gt;$10M in customer contracts and scaled revenues 10x.</p>
            </div>
            <div className="bg-[#0A0A0A] border border-white/5 p-10 hover:border-brand-cyan/30 transition-colors group">
               <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">Regulatory Standard</h3>
               <p className="text-gray-400 leading-relaxed">Helped secure new global standard via ASTM E35 committee vote.</p>
            </div>
             {/* Row 3 */}
            <div className="bg-[#0A0A0A] border border-white/5 p-10 hover:border-brand-cyan/30 transition-colors group">
               <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">Manufacturing Scale</h3>
               <p className="text-gray-400 leading-relaxed">Achieved 65%+ gross margins and ISO 13485 quality management systems.</p>
            </div>
            <div className="bg-[#0A0A0A] border border-white/5 p-10 hover:border-brand-cyan/30 transition-colors group">
               <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">$50M Portfolio</h3>
               <p className="text-gray-400 leading-relaxed">Chief of Strategy executing business plans for VORA VERA's major portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Current Focus */}
      <section className="py-32 bg-gradient-to-br from-blue-950 to-[#020617] relative overflow-hidden text-center border-t border-white/5">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
         <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
           <div className="bg-brand-red px-4 py-2 mb-8 inline-block transform hover:scale-105 transition-transform cursor-default">
             <span className="text-white font-bold uppercase tracking-widest text-xs">Current Focus</span>
           </div>
           
           <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 uppercase">
             COO @ SWISH XR
           </h2>
           
           <p className="text-2xl text-white/90 italic font-serif mb-10">"Next Generation Sports Training."</p>
           
           <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
             Leading the launch of <strong className="text-white">SWISH XR Hooper</strong> — the world's most advanced basketball simulator. 
             Experience realistic gameplay, drills, and skill development without the need for goggles or headsets.
           </p>
           
           <a 
             href="https://swishxr.com" 
             target="_blank" 
             rel="noreferrer"
             className="inline-flex items-center gap-2 text-brand-cyan font-bold uppercase tracking-widest hover:text-white transition-colors text-sm"
           >
             See What I'm Building <ArrowRight className="w-4 h-4" />
           </a>
         </div>
      </section>

      {/* 7. Services Section: HOW CAN I HELP YOU? */}
      <section id="work-with-luis" className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-wide">
              How Can I Help You?
            </h2>
            <p className="text-lg text-gray-400">
              Select a program below to accelerate your results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Execution */}
            <a href="https://growthsprintsystem.com" target="_blank" rel="noreferrer" className="group flex flex-col bg-[#111] border border-white/5 hover:border-brand-cyan/50 transition-all duration-300">
              <div className="p-10 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                  Do you need help with <br/>Execution?
                </h3>
                <p className="text-brand-cyan text-sm mb-8 font-medium">
                  (Getting the right work done)
                </p>
                <div className="w-12 h-0.5 bg-white/20 mb-8"></div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For executives & entrepreneurs who are overwhelmed and 'busy but not progressing'.
                </p>
                <p className="text-white text-sm font-bold mt-4">
                  Growth Sprint System: Prioritization, complexity scoring, and calendar control.
                </p>
              </div>
              <div className="px-10 py-6 bg-[#161616] group-hover:bg-brand-cyan group-hover:text-black transition-colors flex justify-between items-center">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-white group-hover:text-black">Growth Sprint System</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black" />
              </div>
            </a>

            {/* Card 2: Sales - Highlighted */}
            <a href="https://salesgrowthmultiplier.com" target="_blank" rel="noreferrer" className="group flex flex-col bg-[#111] border-t-4 border-t-brand-cyan border-x border-b border-white/5 hover:border-brand-cyan/50 transition-all duration-300 relative transform md:-translate-y-4">
              <div className="p-10 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                  Do you need help with <br/>Growing Sales?
                </h3>
                <p className="text-brand-cyan text-sm mb-8 font-medium">
                  (Automate your pipeline)
                </p>
                <div className="w-12 h-0.5 bg-brand-cyan mb-8"></div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automate your outreach and fill your pipeline without burning out your team.
                </p>
                <p className="text-white text-sm font-bold mt-4">
                  Sales Growth Multiplier: Inbound/outbound tools + ASDR (autonomous SDR) technology.
                </p>
              </div>
              <div className="px-10 py-6 bg-[#161616] group-hover:bg-brand-cyan group-hover:text-black transition-colors flex justify-between items-center">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-white group-hover:text-black">Sales Growth Multiplier</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black" />
              </div>
            </a>

            {/* Card 3: Content */}
            <a href="https://contentgrowthmultiplier.com" target="_blank" rel="noreferrer" className="group flex flex-col bg-[#111] border border-white/5 hover:border-brand-cyan/50 transition-all duration-300">
              <div className="p-10 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                  Do you need help with <br/>Content?
                </h3>
                <p className="text-brand-cyan text-sm mb-8 font-medium">
                  (Authority without the time)
                </p>
                <div className="w-12 h-0.5 bg-white/20 mb-8"></div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Build your personal brand and authority with minimal effort.
                </p>
                <p className="text-white text-sm font-bold mt-4">
                  Content Growth Multiplier: Daily prompts repurposed into LinkedIn/X/IG posts automatically.
                </p>
              </div>
              <div className="px-10 py-6 bg-[#161616] group-hover:bg-brand-cyan group-hover:text-black transition-colors flex justify-between items-center">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-white group-hover:text-black">Content Growth Multiplier</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 8. CTA Section: READY TO EXECUTE? */}
      <section className="py-32 bg-brand-cyan text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-black mb-8 uppercase tracking-wide">
            Ready to Execute?
          </h2>
          <p className="text-xl md:text-2xl text-black font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether it's strategy, operations, or growth—let's discuss how we can partner for success.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#050505] text-white hover:bg-white hover:text-black px-12 py-5 font-heading font-bold uppercase tracking-widest text-sm transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;