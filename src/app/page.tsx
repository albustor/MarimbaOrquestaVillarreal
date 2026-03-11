"use client"

import { useState } from 'react';
import Resumen from '@/components/Resumen';
import Concepto from '@/components/Concepto';
import Paquetes from '@/components/Paquetes';
import Guion from '@/components/Guion';
import Admin from '@/components/Admin';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'resumen' | 'concepto' | 'paquetes' | 'guion' | 'admin'>('resumen');

  // Shared state
  const [fee, setFee] = useState(250000);
  const [clientName, setClientName] = useState("");

  const renderTabContent = () => {
    switch (activeTab) {
      case 'resumen': return <Resumen />;
      case 'concepto': return <Concepto />;
      case 'paquetes': return <Paquetes fee={fee} />;
      case 'guion': return <Guion clientName={clientName} />;
      case 'admin': return <Admin fee={fee} setFee={setFee} clientName={clientName} setClientName={setClientName} />;
      default: return <Resumen />;
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col min-h-screen font-sans">
      {/* Header Oficial */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-t-4 border-fiesta-pink">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-deep-purple leading-tight">Alberto Bustos Fotografía</h1>
            <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Asesor Nacional de Recursos Tecnológicos en Educación</p>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <span className="bg-guanacaste-sun text-deep-purple px-3 py-1 rounded-full text-xs font-bold shadow-sm">VERSIÓN 7.0 (NEXT.JS)</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm">FINAL</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="bg-deep-purple text-white overflow-x-auto shadow-inner">
          <div className="max-w-6xl mx-auto flex">
            <button
              onClick={() => setActiveTab('resumen')}
              className={`flex-1 py-4 px-6 hover:bg-white/10 transition font-semibold border-b-4 focus:outline-none text-sm md:text-base whitespace-nowrap ${activeTab === 'resumen' ? 'border-guanacaste-sun text-guanacaste-sun' : 'border-transparent text-white/70'}`}
            >
              <i className="fas fa-file-alt mr-2"></i>Resumen
            </button>
            <button
              onClick={() => setActiveTab('concepto')}
              className={`flex-1 py-4 px-6 hover:bg-white/10 transition font-semibold border-b-4 focus:outline-none text-sm md:text-base whitespace-nowrap ${activeTab === 'concepto' ? 'border-guanacaste-sun text-guanacaste-sun' : 'border-transparent text-white/70'}`}
            >
              <i className="fas fa-lightbulb mr-2"></i>Concepto
            </button>
            <button
              onClick={() => setActiveTab('paquetes')}
              className={`flex-1 py-4 px-6 hover:bg-white/10 transition font-semibold border-b-4 focus:outline-none text-sm md:text-base whitespace-nowrap ${activeTab === 'paquetes' ? 'border-guanacaste-sun text-guanacaste-sun' : 'border-transparent text-white/70'}`}
            >
              <i className="fas fa-tags mr-2"></i>Paquetes
            </button>
            <button
              onClick={() => setActiveTab('guion')}
              className={`flex-1 py-4 px-6 hover:bg-white/10 transition font-semibold border-b-4 focus:outline-none text-sm md:text-base whitespace-nowrap ${activeTab === 'guion' ? 'border-guanacaste-sun text-guanacaste-sun' : 'border-transparent text-white/70'}`}
            >
              <i className="fas fa-comment-dots mr-2"></i>Guion
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`py-4 px-6 hover:bg-red-900/50 transition font-semibold border-b-4 focus:outline-none text-sm md:text-base bg-black/20 whitespace-nowrap ${activeTab === 'admin' ? 'border-guanacaste-sun text-guanacaste-sun' : 'border-transparent text-white/70'}`}
            >
              <i className="fas fa-lock mr-2"></i>Admin
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl w-full mx-auto px-4 py-8 mb-20 flex-grow">
        {renderTabContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-bold text-deep-purple text-lg">Alberto Bustos Fotografía</p>
          <p className="text-xs text-gray-500 mb-2">Asesor Nacional de Recursos Tecnológicos en Educación</p>
          <div className="flex justify-center space-x-4 text-gray-400 text-lg">
            <i className="fas fa-camera hover:text-fiesta-pink transition cursor-pointer"></i>
            <i className="fas fa-laptop-code hover:text-tropical-cyan transition cursor-pointer"></i>
            <i className="fas fa-music hover:text-guanacaste-sun transition cursor-pointer"></i>
          </div>
          <p className="text-[10px] text-gray-300 mt-4">&copy; {new Date().getFullYear()} Producción Visual Interactiva</p>
        </div>
      </footer>
    </div>
  );
}
