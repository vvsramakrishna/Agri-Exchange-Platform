
import React, { useState } from 'react';
import { UserRole, BuyerFormData, SellerFormData } from '../types';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  Cell, 
  Treemap,
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
  Legend
} from 'recharts';

interface DashboardProps {
  role: UserRole;
  data: BuyerFormData | SellerFormData | any;
}

const SAMPLE_PRICE_DATA = [
  { month: 'Jan', price: 1800, volume: 1200 },
  { month: 'Feb', price: 1850, volume: 1100 },
  { month: 'Mar', price: 1950, volume: 1500 },
  { month: 'Apr', price: 2100, volume: 2200 },
  { month: 'May', price: 2300, volume: 1800 },
  { month: 'Jun', price: 2000, volume: 1400 },
];

const RESIDUE_COMPARISON = [
  { name: 'Rice Straw', supply: 4500, demand: 5200, gcv: 3200 },
  { name: 'Wheat Straw', supply: 3200, demand: 3100, gcv: 3500 },
  { name: 'Mustard Husk', supply: 1200, demand: 1800, gcv: 4100 },
  { name: 'Cotton Stalks', supply: 2100, demand: 2500, gcv: 3800 },
  { name: 'Sugarcane', supply: 5800, demand: 4200, gcv: 3400 },
];

const REGIONAL_DISTRIBUTION = [
  {
    name: 'Punjab',
    children: [
      { name: 'Ludhiana', size: 1200 },
      { name: 'Amritsar', size: 800 },
      { name: 'Patiala', size: 600 },
    ],
  },
  {
    name: 'Haryana',
    children: [
      { name: 'Karnal', size: 900 },
      { name: 'Panipat', size: 700 },
    ],
  },
  {
    name: 'Uttar Pradesh',
    children: [
      { name: 'Meerut', size: 1500 },
      { name: 'Bareilly', size: 1100 },
      { name: 'Lucknow', size: 400 },
    ],
  },
  {
    name: 'Rajasthan',
    children: [
      { name: 'Alwar', size: 500 },
      { name: 'Ganganagar', size: 850 },
    ],
  },
];

const PROPERTY_DATA = [
  { subject: 'GCV Value', A: 120, B: 110, fullMark: 150 },
  { subject: 'Moisture', A: 98, B: 130, fullMark: 150 },
  { subject: 'Ash Content', A: 86, B: 130, fullMark: 150 },
  { subject: 'Density', A: 99, B: 100, fullMark: 150 },
  { subject: 'Logistics', A: 85, B: 90, fullMark: 150 },
  { subject: 'Pricing', A: 65, B: 85, fullMark: 150 },
];

const SAMPLE_MATCHES = [
  { name: 'Kisan FPO Ludhiana', location: 'Punjab', residue: 'Rice Straw', qty: '450 MT', price: '₹1,900/MT', rating: 4.8 },
  { name: 'Aditya Farms', location: 'Haryana', residue: 'Wheat Straw', qty: '120 MT', price: '₹2,100/MT', rating: 4.5 },
  { name: 'Jai Hind Traders', location: 'UP', residue: 'Sugarcane Trash', qty: '800 MT', price: '₹1,750/MT', rating: 4.2 },
];

export const Dashboard: React.FC<DashboardProps> = ({ role, data }) => {
  const [activeTab, setActiveTab] = useState<'trends' | 'comparison'>('trends');

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight">Market Intelligence</h1>
          <p className="text-xl text-slate-500 font-medium">Real-time supply and demand insights for {data.location || 'your region'}</p>
        </div>
        <div className="flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm">
          <button 
            onClick={() => setActiveTab('trends')}
            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'trends' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-emerald-600'}`}
          >
            Market Trends
          </button>
          <button 
            onClick={() => setActiveTab('comparison')}
            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'comparison' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-emerald-600'}`}
          >
            Supply Analytics
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { label: 'Market Matches', value: '24', change: '+12%', icon: '🔥', color: 'emerald' },
          { label: 'Avg Price/MT', value: '₹1,950', change: '-2.4%', icon: '📈', color: 'blue' },
          { label: 'Total Supply', value: '14.2k', unit: 'MT', change: '+5%', icon: '🌾', color: 'amber' },
          { label: 'Your Rank', value: '#4', sub: 'in region', icon: '🏆', color: 'purple' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="text-3xl">{stat.icon}</span>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${stat.change?.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <div className="flex items-baseline">
              <span className="text-4xl font-black text-slate-900">{stat.value}</span>
              {stat.unit && <span className="ml-1 text-sm font-bold text-slate-400">{stat.unit}</span>}
              {stat.sub && <span className="ml-1 text-xs font-medium text-slate-400">{stat.sub}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Main Visualization Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {activeTab === 'trends' ? (
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden relative">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black text-slate-900">Price & Volume Fluctuations</h3>
                <div className="flex items-center space-x-6 text-xs font-bold">
                  <span className="flex items-center"><span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>Price Index</span>
                  <span className="flex items-center"><span className="w-3 h-3 bg-amber-400 rounded-full mr-2"></span>Volume (MT)</span>
                </div>
              </div>
              <div className="h-[450px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={SAMPLE_PRICE_DATA}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 13, fontWeight: 700}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 13, fontWeight: 700}} />
                    <Tooltip 
                      contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', padding: '20px'}}
                    />
                    <Area type="monotone" dataKey="price" stroke="#10b981" strokeWidth={5} fillOpacity={1} fill="url(#colorPrice)" />
                    <Area type="monotone" dataKey="volume" stroke="#fbbf24" strokeWidth={3} strokeDasharray="6 6" fill="transparent" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-10">Residue Demand vs Supply Analytics</h3>
              <div className="h-[450px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={RESIDUE_COMPARISON} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 800}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 800}} />
                    <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                    <Legend iconType="circle" wrapperStyle={{paddingTop: '30px', fontWeight: 700}} />
                    <Bar dataKey="supply" fill="#10b981" radius={[12, 12, 0, 0]} barSize={40} />
                    <Bar dataKey="demand" fill="#fbbf24" radius={[12, 12, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black text-slate-900">Regional Biomass Heatmap</h3>
              <span className="text-xs bg-slate-100 px-4 py-2 rounded-full font-bold text-slate-500 tracking-widest uppercase">Available Inventory (MT)</span>
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <Treemap
                  data={REGIONAL_DISTRIBUTION}
                  dataKey="size"
                  aspectRatio={4 / 3}
                  stroke="#fff"
                  fill="#10b981"
                >
                  <Tooltip contentStyle={{borderRadius: '16px', border: 'none', fontWeight: 700}} />
                </Treemap>
              </ResponsiveContainer>
            </div>
            <p className="mt-6 text-sm text-slate-400 text-center font-bold italic tracking-wide">Intensity of green reflects harvest-ready residue clusters in your territory.</p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-emerald-900 p-10 rounded-[3rem] shadow-2xl text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-800 rounded-full blur-[100px] opacity-60 -mr-16 -mt-16"></div>
            <h3 className="text-xl font-bold mb-8 relative z-10">Quality Benchmark Radar</h3>
            <div className="h-[300px] w-full flex justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={PROPERTY_DATA}>
                  <PolarGrid stroke="#065f46" />
                  <PolarAngleAxis dataKey="subject" tick={{fill: '#a7f3d0', fontSize: 11, fontWeight: 700}} />
                  <Radar
                    name="Market Avg"
                    dataKey="B"
                    stroke="#fbbf24"
                    fill="#fbbf24"
                    fillOpacity={0.3}
                  />
                  <Radar
                    name="Your Profile"
                    dataKey="A"
                    stroke="#34d399"
                    fill="#34d399"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 flex justify-around text-[10px] font-black uppercase tracking-widest text-emerald-200">
              <div className="flex items-center"><div className="w-2.5 h-2.5 bg-[#fbbf24] rounded-full mr-2"></div> Industry Standard</div>
              <div className="flex items-center"><div className="w-2.5 h-2.5 bg-[#34d399] rounded-full mr-2"></div> Your Verified Profile</div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-8">AI-Curated Priority Leads</h3>
            <div className="space-y-6">
              {SAMPLE_MATCHES.map((match, i) => (
                <div key={i} className="group flex items-center justify-between p-5 rounded-[2rem] hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-100 cursor-pointer">
                  <div className="flex items-center space-x-5">
                    <div className={`w-14 h-14 ${i === 0 ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'} rounded-2xl flex items-center justify-center font-black text-xl transition-colors group-hover:bg-white`}>
                      {match.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">{match.name}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{match.location} • {match.residue}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-emerald-600">{match.price}</div>
                    <div className="text-xs font-bold text-slate-400 mt-0.5">{match.qty}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-5 bg-slate-50 text-emerald-700 font-black rounded-2xl hover:bg-emerald-600 hover:text-white transition-all text-sm border border-slate-100 hover:border-emerald-600">
              Access Entire Marketplace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
