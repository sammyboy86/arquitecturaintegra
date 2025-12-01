export default function Founders() {
  const founders = [
    {
      role: "Chief Executive Officer",
      description: "Visionary leader with 15+ years in data strategy.",
    },
    {
      role: "Chief Technology Officer",
      description: "Architect of scalable, bulletproof data systems.",
    },
    {
      role: "Chief Operations Officer",
      description: "Ensuring operational excellence and client success.",
    },
  ];

  return (
    <section className="w-full bg-integra-dark py-32 text-white relative overflow-hidden">
      {/* Network Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5%" cy="10%" r="3" className="fill-integra-olive" />
            <line x1="5%" y1="10%" x2="15%" y2="25%" className="stroke-white stroke-[0.5]" />
            <circle cx="15%" cy="25%" r="2" className="fill-white" />
            <line x1="15%" y1="25%" x2="10%" y2="40%" className="stroke-white stroke-[0.5]" />
            <circle cx="10%" cy="40%" r="2" className="fill-white" />
            
            <circle cx="90%" cy="80%" r="3" className="fill-integra-olive" />
            <line x1="90%" y1="80%" x2="80%" y2="70%" className="stroke-white stroke-[0.5]" />
            <circle cx="80%" cy="70%" r="2" className="fill-white" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold max-w-xl mb-6 md:mb-0">
            Meet the <span className="text-integra-olive">Minds</span> Behind the Infrastructure
            </h2>
            <div className="h-1 w-24 md:w-32 bg-white/10 hidden md:block mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="group relative">
              <div className="aspect-[4/5] w-full bg-[#202020] rounded-xl overflow-hidden mb-6 relative">
                 {/* Placeholder for Founder Image */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10"></div>
                 <div className="absolute bottom-0 left-0 p-6 z-20">
                    <span className="text-8xl font-black text-white/5 group-hover:text-integra-olive/20 transition-colors duration-500 absolute -top-12 -right-4">0{index + 1}</span>
                 </div>
                 <div className="absolute inset-0 bg-integra-olive/0 group-hover:bg-integra-olive/10 transition-colors duration-500"></div>
              </div>
              
              <div className="pr-4">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-integra-olive transition-colors">Founder Name</h3>
                <p className="text-sm font-mono text-gray-400 mb-3 uppercase tracking-wider">{founder.role}</p>
                <p className="text-gray-500 leading-relaxed text-sm">{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
