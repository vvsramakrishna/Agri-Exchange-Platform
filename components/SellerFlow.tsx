
import React, { useState } from 'react';
import { SellerType, SellerFormData, ResidueType } from '../types';
import { CROP_LIST } from '../constants';

interface SellerFlowProps {
  initialStep: 'seller_type' | 'seller_form';
  onSubmit: (data: SellerFormData) => void;
  onBack: () => void;
}

export const SellerFlow: React.FC<SellerFlowProps> = ({ initialStep, onSubmit, onBack }) => {
  const [step, setStep] = useState<'type' | 'form'>(initialStep === 'seller_type' ? 'type' : 'form');
  const [formData, setFormData] = useState<SellerFormData>({
    sellerType: null,
    cropTypes: [],
    wasteType: '',
    procurementCapacity: 0,
    location: '',
  });

  const handleSelectType = (type: SellerType) => {
    setFormData({ ...formData, sellerType: type });
    setStep('form');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.wasteType || formData.procurementCapacity <= 0 || !formData.location) {
      alert("Please complete the required details.");
      return;
    }
    onSubmit(formData);
  };

  const toggleCrop = (crop: string) => {
    setFormData(prev => ({
      ...prev,
      cropTypes: prev.cropTypes.includes(crop)
        ? prev.cropTypes.filter(c => c !== crop)
        : [...prev.cropTypes, crop]
    }));
  };

  if (step === 'type') {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Which best describes you?</h2>
          <p className="text-slate-500 mt-2">This helps us tailor the platform for your specific needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button
            onClick={() => handleSelectType(SellerType.INDIVIDUAL)}
            className="group p-10 bg-white border-2 border-emerald-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-emerald-500 transition-all text-center flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors">
              <svg className="w-12 h-12 text-emerald-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Individual Farmer</h3>
            <p className="text-slate-500">Own or manage a farm and want to sell residue directly.</p>
          </button>

          <button
            onClick={() => handleSelectType(SellerType.ORGANIZATION)}
            className="group p-10 bg-white border-2 border-emerald-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-emerald-500 transition-all text-center flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors">
              <svg className="w-12 h-12 text-emerald-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Organization (FPO/Trader)</h3>
            <p className="text-slate-500">Farmer Producer Org, cooperative, or bulk aggregator.</p>
          </button>
        </div>
        <button onClick={onBack} className="block mx-auto mt-12 text-slate-400 hover:text-emerald-600 font-medium">← Back</button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-10 flex items-center justify-between">
        <button onClick={() => setStep('type')} className="text-slate-400 hover:text-emerald-600 flex items-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          Back
        </button>
        <div className="flex space-x-2">
          <div className="w-8 h-1 bg-emerald-600 rounded"></div>
          <div className="w-8 h-1 bg-emerald-600 rounded"></div>
        </div>
      </div>

      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Business Details</h2>
        <p className="text-slate-500 mt-2">Provide info about your residue availability.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl p-8 border border-emerald-50">
        <form onSubmit={handleFormSubmit} className="space-y-8">
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-slate-700">What crops do you grow? (Select all that apply)</label>
            <div className="flex flex-wrap gap-2">
              {CROP_LIST.map(crop => (
                <button
                  key={crop}
                  type="button"
                  onClick={() => toggleCrop(crop)}
                  className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
                    formData.cropTypes.includes(crop)
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-500'
                  }`}
                >
                  {crop}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Primary Residue Type *</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                value={formData.wasteType}
                onChange={(e) => setFormData({...formData, wasteType: e.target.value})}
              >
                <option value="">Select residue</option>
                {Object.values(ResidueType).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Supply Capacity (MT/Season) *</label>
              <input 
                type="number"
                placeholder="e.g. 200"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                value={formData.procurementCapacity || ''}
                onChange={(e) => setFormData({...formData, procurementCapacity: parseFloat(e.target.value)})}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700">Storage Location *</label>
              <input 
                type="text"
                placeholder="Village, District, State"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/10"
          >
            Register Listing
          </button>
        </form>
      </div>
    </div>
  );
};
