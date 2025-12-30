
import React from 'react';

interface HowItWorksProps {
  onStart: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStart }) => {
  const steps = [
    {
      id: '01',
      title: 'Digital Onboarding',
      desc: 'Farmers and FPOs join via simple tools like WhatsApp or our mobile app. We capture crop types, area, and harvest timelines.',
      img: 'https://images.unsplash.com/photo-1556742049-0adff4f6a62b?auto=format&fit=crop&q=80&w=600&h=400',
      icon: '📱'
    },
    {
      id: '02',
      title: 'Field Mapping',
      desc: 'Our AI engine maps fields and uses satellite data to estimate residue availability and quality accurately.',
      img: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=600&h=400',
      icon: '🌍'
    },
    {
      id: '03',
      title: 'Smart Matching',
      desc: 'Industrial demand is aggregated and matched with the nearest verified residue clusters to minimize transport costs.',
      img: 'https://images.unsplash.com/photo-1454165833767-027ff33027ef?auto=format&fit=crop&q=80&w=600&h=400',
      icon: '🤝'
    },
    {
      id: '04',
      title: 'Logistics Management',
      desc: 'We handle the contracts, route optimization, and quality checks on-ground during the collection process.',
      img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600&h=400',
      icon: '🚛'
    },
    {
      id: '05',
      title: 'Secure Settlement',
      desc: 'Payments are settled digitally through the platform once delivery is verified, ensuring trust for both parties.',
      img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600&h=400',
      icon: '💳'
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 space-y-24 py-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-black text-slate-900">How AgroExchange Works</h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto">
          A seamless, data-driven workflow designed to eliminate waste and maximize value for all stakeholders.
        </p>
      </div>

      {/* Visual Workflow Timeline */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-emerald-100 -translate-x-1/2 rounded-full"></div>

        <div className="space-y-32 relative">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Photorealistic Image Container */}
              <div className="flex-1 group">
                <div className="relative h-80 w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white transition-all group-hover:scale-[1.02] duration-500">
                  <img src={step.img} alt={step.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Number/Point (Timeline Dot) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-emerald-600 border-8 border-[#FCFBF7] shadow-xl items-center justify-center text-white font-black z-10 text-xl">
                {step.id}
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="md:hidden inline-block bg-emerald-600 text-white font-black px-6 py-2 rounded-full text-sm mb-4">Step {step.id}</div>
                <h3 className="text-4xl font-black text-slate-900 leading-tight">{step.title}</h3>
                <p className="text-xl text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Summary Card with Photo Background */}
      <section className="relative rounded-[4rem] p-16 text-center text-white overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600&h=800" 
          alt="Green field" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-md"></div>
        <div className="relative z-10 space-y-8">
          <h2 className="text-5xl font-black">Effortless. Transparent. Sustainable.</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            We handle the complexities of logistics and quality so you can focus on growing your business and the planet's health.
          </p>
          <div className="pt-8">
            <button onClick={onStart} className="px-14 py-6 bg-white text-emerald-900 font-black rounded-3xl hover:bg-emerald-50 transition-all shadow-2xl text-xl hover:-translate-y-1">
              Start Your Journey Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
