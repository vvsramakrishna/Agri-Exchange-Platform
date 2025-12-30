
import React from 'react';

interface MarketplaceProps {
  onStart: () => void;
}

export const Marketplace: React.FC<MarketplaceProps> = ({ onStart }) => {
  const benefits = [
    {
      title: 'Verified Trust',
      desc: 'Every participant is rigorously vetted. Our smart contracts ensure payment security and physical fulfillment integrity.',
      img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800&h=600',
    },
    {
      title: 'Operational Efficiency',
      desc: 'Our AI-driven logistics engine optimizes routes and collection schedules, significantly lowering procurement overhead.',
      img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800&h=600',
    },
    {
      title: 'Proven Sustainability',
      desc: 'We provide measurable impact data, helping industries meet ESG goals while eliminating the harmful practice of stubble burning.',
      img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800&h=600',
    },
    {
      title: 'Market Intelligence',
      desc: 'Gain access to proprietary price indexes and regional supply forecasts to de-risk your raw material procurement strategy.',
      img: 'https://images.unsplash.com/photo-1551288049-bbda38a10ad1?auto=format&fit=crop&q=80&w=800&h=600',
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 space-y-20">
      {/* Header Section with Photorealistic Background */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden rounded-[3rem] shadow-2xl border border-emerald-800">
        <img 
          src="https://images.unsplash.com/photo-1516594709413-9139b3be90ce?auto=format&fit=crop&q=80&w=1600&h=800" 
          alt="Biofuel and agriculture" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm"></div>
        <div className="relative text-center px-6 text-white space-y-4">
          <h1 className="text-5xl md:text-6xl font-black">The Digital Marketplace</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-medium">
            Transforming agricultural waste into a reliable, high-value raw material stream for industries worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="p-10 bg-white border border-slate-100 shadow-sm rounded-[2.5rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full -mr-8 -mt-8"></div>
          <div className="relative">
            <span className="text-4xl mb-6 block">🎯</span>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To build a digital marketplace that turns agri-waste, starting with crop residue, into a reliable raw material stream for industries and a meaningful, repeat income source for farmers and FPOs.
            </p>
          </div>
        </div>

        <div className="p-10 bg-white border border-slate-100 shadow-sm rounded-[2.5rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-full -mr-8 -mt-8"></div>
          <div className="relative">
            <span className="text-4xl mb-6 block">👁️</span>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We envision a world where agricultural residue is treated as a planned, bookable commodity, not a waste byproduct, enabling both farmers and industries to plan volumes and prices in advance for a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Marketplace Offerings</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Comprehensive solutions for the entire agri-residue value chain.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Planned Commodity',
              desc: 'Book volumes months in advance based on harvest calendars and verified field data.',
              icon: '📅'
            },
            {
              title: 'Price Transparency',
              desc: 'Data-driven pricing models that reflect real-time market value and residue quality.',
              icon: '⚖️'
            },
            {
              title: 'Cluster Mapping',
              desc: 'Geo-mapped residue clusters to optimize procurement and reduce logistics overhead.',
              icon: '📍'
            },
            {
              title: 'Integrated Logistics',
              desc: 'End-to-end management of transport, storage, and timely delivery to industrial sites.',
              icon: '🚚'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-500 hover:shadow-xl transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose AgroExchange Section */}
      <section className="space-y-12 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Why Choose AgroExchange</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">The strategic advantage of a digitized biomass supply chain.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <div key={i} className="relative h-80 rounded-[2.5rem] overflow-hidden group shadow-lg border border-slate-100">
              <img 
                src={benefit.img} 
                alt={benefit.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-black mb-3">{benefit.title}</h3>
                <p className="text-emerald-50 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action with Photo Background */}
      <section className="relative p-16 rounded-[3rem] text-center overflow-hidden shadow-2xl border border-slate-200">
        <img 
          src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&q=80&w=1200&h=600" 
          alt="Stacks of residue" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-md"></div>
        <div className="relative z-10">
          <h3 className="text-3xl font-black text-slate-900 mb-6">Ready to join the exchange?</h3>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto font-medium">Connect with verified partners and secure your supply chain or monetize your residue today.</p>
          <button onClick={onStart} className="px-10 py-5 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all shadow-lg text-lg">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};
