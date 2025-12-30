
import React from 'react';
import { ViewState } from '../types';

interface LandingProps {
  onStart: () => void;
  onNavigate: (view: ViewState) => void;
}

export const Landing: React.FC<LandingProps> = ({ onStart, onNavigate }) => {
  return (
    <div className="space-y-24">
      {/* Hero Section: Refined dimensions and dynamic vertical spacing */}
      <section className="relative w-full min-h-[550px] flex items-center overflow-hidden shadow-2xl py-[100px]">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920&h=1080" 
          alt="Sun rays over a golden harvest field" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
        
        <div className="relative max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 w-full h-full">
          <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            {/* Top Badge: Scaled down text size and padding */}
            <div className="inline-flex items-center space-x-2.5 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 px-4 py-2 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-50 uppercase tracking-[0.25em]">Securing India's Biomass Future</span>
            </div>
            
            {/* Heading: Decreased font size by 20% (approx 7xl on desktop) */}
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] drop-shadow-2xl">
              Turning Agri-Waste <br/>
              into <span className="text-emerald-400">Reliable Raw <br/> Material.</span>
            </h1>
            
            {/* Paragraph: Scaled down text size */}
            <p className="text-lg md:text-xl text-emerald-50/90 max-w-2xl leading-relaxed font-medium drop-shadow-lg">
              We bridge the gap between farmers and industry, transforming crop residues into a planned, bookable commodity for a cleaner future.
            </p>
            
            {/* Lower Buttons: Scaled down text and padding */}
            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <button
                onClick={onStart}
                className="px-12 py-5 bg-emerald-600 text-lg font-bold text-white rounded-full hover:bg-emerald-500 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0 flex items-center justify-center group"
              >
                Get Started
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button 
                onClick={() => onNavigate('marketplace')}
                className="px-12 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 text-lg font-bold rounded-full hover:bg-white hover:text-emerald-900 transition-all shadow-lg"
              >
                Industry Solutions
              </button>
            </div>
          </div>
        </div>

        {/* Floating Quality Badge - Adjusted for refined height */}
        <div className="absolute bottom-16 right-20 hidden xl:block">
          <div className="bg-emerald-950/50 backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 shadow-3xl max-w-[320px] transition-transform hover:scale-105">
            <div className="flex items-center space-x-3.5 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-xl">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
              </div>
              <span className="text-white text-xs font-bold uppercase tracking-widest">Reliable Feedstock</span>
            </div>
            <p className="text-emerald-50 text-sm leading-relaxed opacity-90 font-medium">Verified GCV and moisture content reports for every batch delivered from 500+ harvest clusters.</p>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-16 max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Bridging the Biomass Gap</h2>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            The biomass industry faces critical feedstock risks, while farmers lose potential income to informal channels or burning. We solve both with a data-driven marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full -mr-16 -mt-16 group-hover:bg-rose-100 transition-colors"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-8 text-2xl">⚠️</div>
              <h3 className="text-3xl font-black text-slate-900 mb-6">The Challenge</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <span className="text-rose-500 text-2xl font-bold">•</span>
                  <p className="text-slate-600 text-lg font-medium"><span className="font-bold text-slate-800">For Industry:</span> Underutilization due to feedstock inconsistency and volatile spot pricing across regions.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-rose-500 text-2xl font-bold">•</span>
                  <p className="text-slate-600 text-lg font-medium"><span className="font-bold text-slate-800">For Farmers:</span> Zero transparency in price discovery and lack of formal off-take agreements with reliable buyers.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-600 p-12 rounded-[3rem] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full -mr-16 -mt-16 group-hover:bg-emerald-400 transition-colors"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-8 text-2xl">⚡</div>
              <h3 className="text-3xl font-black text-white mb-6">The Solution</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <span className="text-emerald-200 text-2xl font-bold">•</span>
                  <p className="text-emerald-50 text-lg font-medium"><span className="font-bold text-white">Predictable Supply:</span> Treat residue as a pre-booked commodity with mapped harvest calendars and AI yield tracking.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-emerald-200 text-2xl font-bold">•</span>
                  <p className="text-emerald-50 text-lg font-medium"><span className="font-bold text-white">Transparent Returns:</span> Direct income for farmers/FPOs via digitally-managed contracts and secure automated payments.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Ecosystem - Full Bleed Container */}
      <section className="w-full bg-slate-900 py-24 text-white">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">A Complete Ecosystem</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">From field mapping to route-optimized logistics, we manage the entire residue lifecycle for maximum efficiency.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { 
                title: 'Field Mapping', 
                desc: 'AI-driven area and crop estimation to predict exact residue availability months in advance .', 
                icon: '🗺️',
                img: 'https://agxio.com/wp-content/uploads/2021/04/shutterstock_657671638-scaled.jpg?auto=format&fit=crop&q=80&w=800&h=600'
              },
              { 
                title: 'Route Optimization', 
                desc: 'Integrated logistics cluster management to reduce transportation costs and carbon footprint through dynamic routing.', 
                icon: '🚚',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKvLqcu-gAumkSKC7UhQCKFwtXjIF003tMw&s?auto=format&fit=crop&q=80&w=800&h=600'
              },
              { 
                title: 'Quality Assurance', 
                desc: 'Digital GCV reporting and moisture tracking to ensure raw material meets industrial standards at every collection point.', 
                icon: '🔬',
                img: 'https://gemini.google.com/share/a278d17a09e2?auto=format&fit=crop&q=80&w=800&h=600'
              }
            ].map((item, i) => (
              <div key={i} className="group flex flex-col space-y-6">
                <div className="relative h-80 rounded-[2.5rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/10">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl border border-white/20">{item.icon}</div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <div className="inline-flex flex-col items-center bg-white/5 border border-white/10 p-12 rounded-[4rem] backdrop-blur-sm shadow-3xl max-w-3xl">
              <h4 className="text-3xl font-bold mb-4">Ready to secure your supply stream?</h4>
              <p className="text-slate-400 text-lg mb-8 font-medium">Connect with our network and join thousands of verified partners using the digital residue exchange.</p>
              <button onClick={onStart} className="px-12 py-5 bg-white text-slate-900 text-xl font-black rounded-2xl hover:bg-emerald-400 transition-all shadow-xl">
                Start Trading Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="pb-20 text-center max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Village Clusters', val: '500+' },
            { label: 'MT Traded', val: '1.2M' },
            { label: 'Farmer Income ↑', val: '18%' },
            { label: 'CO2 Mitigated', val: '450k Tons' }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-5xl font-black text-emerald-600">{stat.val}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
