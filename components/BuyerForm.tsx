
import React, { useState } from 'react';
import { ResidueType, GCVRange, BuyerFormData } from '../types';
import { MONTHS } from '../constants';

interface BuyerFormProps {
  onSubmit: (data: BuyerFormData) => void;
  onBack: () => void;
}

export const BuyerForm: React.FC<BuyerFormProps> = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState<BuyerFormData>({
    residueType: '',
    location: '',
    quantity: 0,
    expectedGCV: '',
    peakMonths: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.residueType || !formData.location || formData.quantity <= 0) {
      alert("Please fill in all mandatory fields correctly.");
      return;
    }
    onSubmit(formData);
  };

  const toggleMonth = (month: string) => {
    setFormData(prev => ({
      ...prev,
      peakMonths: prev.peakMonths.includes(month)
        ? prev.peakMonths.filter(m => m !== month)
        : [...prev.peakMonths, month]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        <div className="flex-1 space-y-8">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-4xl font-black text-slate-900">Define Your Requirements</h2>
            <p className="text-slate-500 mt-2 font-medium">Help us match you with the right sellers in your region.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-900/5 p-8 md:p-12 border border-emerald-50">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Residue Type *</label>
                  <select 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all appearance-none bg-slate-50"
                    value={formData.residueType}
                    onChange={(e) => setFormData({...formData, residueType: e.target.value})}
                  >
                    <option value="">Select type</option>
                    {Object.values(ResidueType).map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Location (City/State) *</label>
                  <input 
                    type="text"
                    placeholder="e.g. Ludhiana, Punjab"
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all bg-slate-50"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Expected Quantity (MT) *</label>
                  <input 
                    type="number"
                    placeholder="e.g. 500"
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all bg-slate-50"
                    value={formData.quantity || ''}
                    onChange={(e) => setFormData({...formData, quantity: parseFloat(e.target.value)})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Expected GCV Range</label>
                  <select 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all appearance-none bg-slate-50"
                    value={formData.expectedGCV}
                    onChange={(e) => setFormData({...formData, expectedGCV: e.target.value})}
                  >
                    <option value="">Select range</option>
                    {Object.values(GCVRange).map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-700">Peak Demand Months</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {MONTHS.map(month => (
                    <button
                      key={month}
                      type="button"
                      onClick={() => toggleMonth(month)}
                      className={`py-3 text-xs font-black rounded-xl border transition-all ${
                        formData.peakMonths.includes(month)
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg'
                          : 'bg-white border-slate-200 text-slate-500 hover:border-emerald-500 hover:text-emerald-600'
                      }`}
                    >
                      {month.substring(0, 3).toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="button"
                  onClick={onBack}
                  className="flex-1 px-8 py-5 bg-slate-100 text-slate-600 font-black rounded-2xl hover:bg-slate-200 transition-all text-lg"
                >
                  Go Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-8 py-5 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all shadow-xl text-lg"
                >
                  Find Matching Sellers
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden lg:block w-96 relative">
          <div className="sticky top-24 rounded-[3rem] overflow-hidden shadow-2xl h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1516594709413-9139b3be90ce?auto=format&fit=crop&q=80&w=600&h=1200" 
              alt="Industrial Biomass" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <h4 className="text-2xl font-black mb-2">Sustainable Energy</h4>
              <p className="text-sm font-medium text-emerald-100 opacity-90 leading-relaxed">Securing your feedstock through direct FPO networks ensures long-term operational stability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
