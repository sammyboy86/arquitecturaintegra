import Image from 'next/image';

export default function TechLogos() {
  return (
    <div className="mt-12 pt-8 border-t border-white/10 w-full">
      <p className="text-sm text-gray-500 font-mono uppercase tracking-widest mb-10 text-center">
        Tecnologías que dominamos
      </p>
      <div className="flex flex-wrap gap-10 md:gap-16 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        
        {/* AWS */}
        <div className="group flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
            <div className="relative h-12 md:h-16 w-16 md:w-24">
                <Image 
                    src="/assets/logos/aws.svg" 
                    alt="AWS" 
                    fill 
                    className="object-contain"
                />
            </div>
            <span className="text-xs font-bold hidden group-hover:block animate-fade-in text-white">AWS</span>
        </div>

        {/* Snowflake */}
        <div className="group flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
             <div className="relative h-12 md:h-16 w-16 md:w-24">
                <Image 
                    src="/assets/logos/snowflake.svg" 
                    alt="Snowflake" 
                    fill 
                    className="object-contain"
                />
            </div>
             <span className="text-xs font-bold hidden group-hover:block animate-fade-in text-white">Snowflake</span>
        </div>

        {/* Azure */}
        <div className="group flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
            <div className="relative h-12 md:h-16 w-16 md:w-24">
                <Image 
                    src="/assets/logos/azure.svg" 
                    alt="Azure" 
                    fill 
                    className="object-contain"
                />
            </div>
            <span className="text-xs font-bold hidden group-hover:block animate-fade-in text-white">Azure</span>
        </div>

        {/* Google Cloud */}
        <div className="group flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
             <div className="relative h-12 md:h-16 w-16 md:w-24">
                <Image 
                    src="/assets/logos/gcp.svg" 
                    alt="Google Cloud" 
                    fill 
                    className="object-contain"
                />
            </div>
             <span className="text-xs font-bold hidden group-hover:block animate-fade-in text-white">GCP</span>
        </div>

        {/* PostgreSQL */}
        <div className="group flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
             <div className="relative h-12 md:h-16 w-16 md:w-24">
                <Image 
                    src="/assets/logos/postgres.svg" 
                    alt="PostgreSQL" 
                    fill 
                    className="object-contain"
                />
            </div>
             <span className="text-xs font-bold hidden group-hover:block animate-fade-in text-white">Postgres</span>
        </div>

      </div>
    </div>
  );
}
