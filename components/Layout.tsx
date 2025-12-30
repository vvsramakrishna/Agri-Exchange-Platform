
import React from 'react';
import { ViewState } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FCFBF7] text-slate-900 flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('landing')}>
              <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-emerald-900">Agro<span className="text-emerald-600">Exchange</span></span>
            </div>
            <nav className="hidden md:flex space-x-8 text-base font-bold text-slate-700 items-center">
              <button onClick={() => onNavigate('marketplace')} className="hover:text-emerald-600 transition-colors">Marketplace</button>
              <button onClick={() => onNavigate('how_it_works')} className="hover:text-emerald-600 transition-colors">How it works</button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-emerald-900 text-emerald-100 py-16 mt-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">AgroExchange</h3>
              <p className="text-emerald-300 max-w-md text-lg leading-relaxed">
                Bridging the gap between farmers and industries. We turn agricultural waste into sustainable energy and economic value for our rural communities.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Platform</h4>
              <ul className="space-y-4 text-emerald-300">
                <li><button onClick={() => onNavigate('role_selection')} className="hover:text-white transition-colors">Buy Residue</button></li>
                <li><button onClick={() => onNavigate('role_selection')} className="hover:text-white transition-colors">Sell Residue</button></li>
                <li><button onClick={() => onNavigate('marketplace')} className="hover:text-white transition-colors">Price Index</button></li>
                <li><button onClick={() => onNavigate('how_it_works')} className="hover:text-white transition-colors">Logistics</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Support</h4>
              <ul className="space-y-4 text-emerald-300">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-emerald-800 mt-16 pt-8 text-center text-sm text-emerald-400">
            © 2024 AgroExchange Inc. All rights reserved. Built for a greener tomorrow.
          </div>
        </div>
      </footer>
    </div>
  );
};
