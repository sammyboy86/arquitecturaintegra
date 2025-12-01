"use client";

import { useState } from 'react';
import TechLogos from './TechLogos';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = {
    architecture: {
      title: "Arquitectura de Datos",
      shortDesc: "Diseñamos la base de estrategias sustentadas en datos. Infraestructura alineada a tu modelo de negocio para decisiones estratégicas.",
      fullDesc: "Nuestro enfoque se centra en entender tu cadena de valor. No solo almacenamos datos; diseñamos una infraestructura robusta y confiable que se adapta a tu modelo de negocio, permitiendo que la información se convierta en tu activo más estratégico. Desde data lakes hasta arquitecturas mesh, creamos el plano para el futuro de tu información.",
      icon: (
        <svg className="w-24 h-24 text-integra-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
      ),
      detailSvg: (
        <svg className="w-full h-64 text-integra-olive" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
           {/* Abstract Architecture Diagram */}
           <rect x="40" y="140" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2" />
           <rect x="120" y="140" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2" />
           <rect x="80" y="40" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2" />
           <path d="M60 140V100H100V80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
           <path d="M140 140V100H100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
           <circle cx="100" cy="100" r="10" fill="currentColor" opacity="0.5" />
           <circle cx="60" cy="160" r="4" fill="currentColor" />
           <circle cx="140" cy="160" r="4" fill="currentColor" />
           <circle cx="100" cy="60" r="4" fill="currentColor" />
        </svg>
      )
    },
    engineering: {
      title: "Ingeniería de Datos",
      shortDesc: "Implementamos soluciones de confiabilidad absoluta. Construimos pipelines robustos que garantizan la integridad de tus datos.",
      fullDesc: "Construimos pipelines robustos y tolerantes a fallos que garantizan la integridad de tus datos, asegurando que la información crítica esté siempre disponible para la toma de decisiones. Nos enfocamos en la confiabilidad y robustez de la solución, manejando la complejidad técnica para que tú puedas enfocarte en los insights.",
      icon: (
         <svg className="w-24 h-24 text-integra-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
      ),
      detailSvg: (
        <svg className="w-full h-64 text-integra-olive" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Abstract Engineering/Pipeline Diagram */}
            <path d="M20 100H180" stroke="currentColor" strokeWidth="4" />
            <rect x="40" y="80" width="20" height="40" fill="#1a1a1a" stroke="currentColor" strokeWidth="2" />
            <rect x="90" y="80" width="20" height="40" fill="#1a1a1a" stroke="currentColor" strokeWidth="2" />
            <rect x="140" y="80" width="20" height="40" fill="#1a1a1a" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="100" r="4" fill="currentColor" />
            <circle cx="100" cy="100" r="4" fill="currentColor" />
            <circle cx="150" cy="100" r="4" fill="currentColor" />
            <path d="M30 140L50 120L70 140" stroke="currentColor" strokeWidth="2" />
            <path d="M80 60L100 80L120 60" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    }
  };

  return (
    <section className="w-full py-32 text-white relative overflow-hidden">
      {/* Circuit Background Pattern */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%)' }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10h80v80h-80z" fill="none" />
            <path d="M20 20h60v60h-60z" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <circle cx="80" cy="80" r="2" fill="currentColor" />
            <path d="M50 10v20M10 50h20M90 50h-20M50 90v-20" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Excelencia en <span className="text-integra-olive">Ingeniería</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl font-light">
                Entendemos las tecnologías que están cambiando el juego: encontraremos la ideal para tu negocio.
            </p>
            <TechLogos />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            {/* Data Architecture Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-white/10 hover:border-integra-olive/50 transition-all duration-500 hover:bg-white/10 hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    {services.architecture.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 font-mono text-integra-light group-hover:text-white transition-colors">{services.architecture.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                    {services.architecture.shortDesc}
                </p>
                <button 
                  onClick={() => setSelectedService('architecture')}
                  className="inline-flex items-center text-integra-olive font-semibold hover:text-integra-olive-light transition-colors group/link cursor-pointer"
                >
                  Leer más 
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </button>
            </div>

            {/* Data Engineering Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-white/10 hover:border-integra-olive/50 transition-all duration-500 hover:bg-white/10 hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                     {services.engineering.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 font-mono text-integra-light group-hover:text-white transition-colors">{services.engineering.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                    {services.engineering.shortDesc}
                </p>
                <button 
                  onClick={() => setSelectedService('engineering')}
                  className="inline-flex items-center text-integra-olive font-semibold hover:text-integra-olive-light transition-colors group/link cursor-pointer"
                >
                  Leer más 
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={() => setSelectedService(null)}>
          <div className="bg-integra-surface border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-12 relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
              <div className="flex-1 w-full">
                <div className="bg-black/20 rounded-xl p-8 border border-white/5 flex justify-center">
                   {/* @ts-expect-error - indexing with string */}
                   {services[selectedService].detailSvg}
                </div>
              </div>
              <div className="flex-1 space-y-6">
                {/* @ts-expect-error - indexing with string */}
                <h3 className="text-3xl md:text-4xl font-bold text-integra-olive font-mono">{services[selectedService].title}</h3>
                {/* @ts-expect-error - indexing with string */}
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">{services[selectedService].fullDesc}</p>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="w-full md:w-auto px-6 py-3 bg-integra-olive text-white rounded-lg font-semibold hover:bg-integra-olive-light transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
