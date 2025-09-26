import React from 'react';
import { ShoppingCart } from 'lucide-react';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-poppins">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Shopping List</h1>
                <p className="text-xs text-slate-600 hidden sm:block">Manage your shopping items</p>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-medium text-slate-800">Welcome back!</div>
                <div className="text-xs text-slate-600">Organize your shopping</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
            Your Shopping List
          </h2>
          <p className="text-slate-600">
            Add, edit, and manage your shopping items efficiently
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8">
          <ItemList />
        </div>
      </main>

      {/* Footer
      <footer className="mt-16 py-8 border-t border-slate-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-600 text-sm">
              Shopping List Manager - Keep track of your items
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default App;