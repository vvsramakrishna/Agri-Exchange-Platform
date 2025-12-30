
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Landing } from './components/Landing';
import { BuyerForm } from './components/BuyerForm';
import { SellerFlow } from './components/SellerFlow';
import { Dashboard } from './components/Dashboard';
import { Marketplace } from './components/Marketplace';
import { HowItWorks } from './components/HowItWorks';
import { ViewState, UserRole, BuyerFormData, SellerFormData } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [role, setRole] = useState<UserRole>(null);
  const [buyerData, setBuyerData] = useState<BuyerFormData | null>(null);
  const [sellerData, setSellerData] = useState<SellerFormData | null>(null);

  const handleStart = () => setView('role_selection');
  
  const handleSelectRole = (selectedRole: UserRole) => {
    setRole(selectedRole);
    if (selectedRole === 'buyer') {
      setView('buyer_form');
    } else {
      setView('seller_type');
    }
  };

  const handleBuyerSubmit = (data: BuyerFormData) => {
    setBuyerData(data);
    setView('dashboard');
  };

  const handleSellerSubmit = (data: SellerFormData) => {
    setSellerData(data);
    setView('dashboard');
  };

  const navigateTo = (newView: ViewState) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (view) {
      case 'landing':
        return <Landing onStart={handleStart} onNavigate={navigateTo} />;
      case 'marketplace':
        return <Marketplace onStart={handleStart} />;
      case 'how_it_works':
        return <HowItWorks onStart={handleStart} />;
      case 'role_selection':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">How would you like to use AgroExchange?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              <button
                onClick={() => handleSelectRole('buyer')}
                className="group p-8 bg-white border-2 border-emerald-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                  <svg className="w-10 h-10 text-emerald-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">I am a Buyer</h3>
                <p className="text-slate-500">I need agri-residue for biomass, energy, or industrial use.</p>
              </button>

              <button
                onClick={() => handleSelectRole('seller')}
                className="group p-8 bg-white border-2 border-emerald-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                  <svg className="w-10 h-10 text-emerald-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">I am a Seller</h3>
                <p className="text-slate-500">I have agri-residue to sell or manage from my farm/organization.</p>
              </button>
            </div>
            <button 
              onClick={() => setView('landing')}
              className="mt-12 text-slate-400 hover:text-emerald-600 font-medium transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        );
      case 'buyer_form':
        return <BuyerForm onSubmit={handleBuyerSubmit} onBack={() => setView('role_selection')} />;
      case 'seller_type':
      case 'seller_form':
        return <SellerFlow initialStep={view} onSubmit={handleSellerSubmit} onBack={() => setView(view === 'seller_form' ? 'seller_type' : 'role_selection')} />;
      case 'dashboard':
        return <Dashboard role={role!} data={role === 'buyer' ? buyerData : sellerData} />;
      default:
        return <Landing onStart={handleStart} onNavigate={navigateTo} />;
    }
  };

  return (
    <Layout onNavigate={navigateTo}>
      {renderContent()}
    </Layout>
  );
};

export default App;
