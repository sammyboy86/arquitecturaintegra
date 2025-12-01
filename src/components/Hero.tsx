import HeroDiagram from './HeroDiagram';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-integra-dark to-[#0f0f0f]">
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 z-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left pt-12 md:pt-0">
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter text-integra-olive uppercase drop-shadow-lg leading-none">
            INTEGRA
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 font-mono mt-2 mb-4 tracking-wider">
            Arquitectura e Ingeniería de Datos
          </h2>
          <div className="h-1 w-16 md:w-24 bg-integra-olive my-4 md:my-6 mx-auto md:mx-0 rounded-full" />
          <p className="text-xl md:text-4xl font-light text-white tracking-wide font-sans px-4 md:px-0">
            La base para decisiones inteligentes
          </p>
        </div>

        {/* Hero Diagram */}
        <div className="flex-1 relative w-full max-w-lg md:max-w-xl aspect-square animate-fade-in">
           <HeroDiagram />
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-integra-olive/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-integra-olive/5 blur-[100px] pointer-events-none" />
      
      {/* Decorative Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10%" cy="20%" r="2" className="fill-integra-olive animate-pulse" />
        <line x1="10%" y1="20%" x2="25%" y2="20%" className="stroke-integra-olive stroke-[0.5]" />
        <circle cx="25%" cy="20%" r="2" className="fill-integra-olive" />
        <line x1="25%" y1="20%" x2="25%" y2="35%" className="stroke-integra-olive stroke-[0.5]" />
        
        <circle cx="85%" cy="60%" r="2" className="fill-integra-olive animate-pulse" />
        <line x1="85%" y1="60%" x2="70%" y2="60%" className="stroke-integra-olive stroke-[0.5]" />
        <circle cx="70%" cy="60%" r="2" className="fill-integra-olive" />
        <line x1="70%" y1="60%" x2="70%" y2="45%" className="stroke-integra-olive stroke-[0.5]" />
        
        <circle cx="50%" cy="90%" r="3" className="fill-white/20" />
        <line x1="50%" y1="90%" x2="50%" y2="75%" className="stroke-white/10 stroke-[1]" />
      </svg>
    </section>
  );
}
