export default function Quote() {
  return (
    <section className="w-full relative z-20 mt-12 md:-mt-40 pointer-events-none">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center pointer-events-auto">
            
            {/* Glass Container with smooth gradient border */}
            <div className="relative p-6 md:p-20 bg-gradient-to-b from-white/5 to-black/40 backdrop-blur-2xl rounded-[3rem] shadow-2xl overflow-hidden border border-white/5 group hover:border-white/10 transition-colors duration-700">
                
                {/* Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-integra-olive/5 to-transparent opacity-50 pointer-events-none"></div>
                
                {/* Quote Icon - Hexagonal Theme */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 text-integra-olive/20">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10L13 5L18 10V20L13 25L8 20V10Z" />
                        <path d="M22 10L27 5L32 10V20L27 25L22 20V10Z" />
                    </svg>
                </div>
                <blockquote className="text-xl md:text-3xl font-light text-gray-200 leading-relaxed relative z-10 font-sans tracking-wide pt-12">
                    Tratemos los datos como un producto en sí mismo: deben ser descubribles, direccionables, confiables y seguros.
                </blockquote>

                <div className="mt-10 flex flex-col items-center justify-center gap-1">
                    <cite className="block text-integra-olive font-medium not-italic text-base tracking-widest uppercase">Zhamak Dehghani</cite>
                    <span className="block text-gray-500 text-xs font-mono tracking-widest">Creadora del concepto Data Mesh</span>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
