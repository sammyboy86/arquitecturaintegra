export default function HeroDiagram() {
  return (
    <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="trunkGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#7fa935" />
        </linearGradient>
      </defs>

      {/* Roots */}
      <g stroke="#4a4a4a" strokeWidth="2" fill="none" opacity="0.6">
        <path d="M250 420 Q250 450 220 480" />
        <path d="M250 420 Q250 450 280 480" />
        <path d="M250 420 L250 480" />
        <path d="M250 440 Q220 460 200 460" />
        <path d="M250 440 Q280 460 300 460" />
      </g>

      {/* Trunk */}
      <path d="M250 420 L250 250" stroke="url(#trunkGradient)" strokeWidth="6" strokeLinecap="round" />
      <path d="M250 350 Q220 300 180 280" stroke="url(#trunkGradient)" strokeWidth="4" fill="none" />
      <path d="M250 350 Q280 300 320 280" stroke="url(#trunkGradient)" strokeWidth="4" fill="none" />
      <path d="M250 300 Q200 250 150 220" stroke="url(#trunkGradient)" strokeWidth="3" fill="none" />
      <path d="M250 300 Q300 250 350 220" stroke="url(#trunkGradient)" strokeWidth="3" fill="none" />

      {/* Hexagon Canopy */}
      <g fill="none" stroke="#7fa935" strokeWidth="2">
        {/* Central Hexagon */}
        <path d="M250 180 L270 190 L270 210 L250 220 L230 210 L230 190 Z" fill="#7fa935" fillOpacity="0.2">
            <animate attributeName="fill-opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
        </path>

        {/* Surrounding Hexagons (Layer 1) */}
        <g transform="translate(0, -40)">
             <path d="M250 180 L270 190 L270 210 L250 220 L230 210 L230 190 Z" transform="translate(0, -35)" fill="#9bc54b" fillOpacity="0.1" />
             <path d="M250 180 L270 190 L270 210 L250 220 L230 210 L230 190 Z" transform="translate(35, 20)" fill="#9bc54b" fillOpacity="0.1" />
             <path d="M250 180 L270 190 L270 210 L250 220 L230 210 L230 190 Z" transform="translate(-35, 20)" fill="#9bc54b" fillOpacity="0.1" />
        </g>

        {/* Scattered Hexagons (Data Leaves) */}
        <g className="animate-pulse" style={{ animationDuration: '3s' }}>
            <path d="M180 280 L190 285 L190 295 L180 300 L170 295 L170 285 Z" fill="#7fa935" fillOpacity="0.4" stroke="none" />
            <path d="M320 280 L330 285 L330 295 L320 300 L310 295 L310 285 Z" fill="#7fa935" fillOpacity="0.4" stroke="none" />
            <path d="M150 220 L160 225 L160 235 L150 240 L140 235 L140 225 Z" fill="#9bc54b" fillOpacity="0.3" stroke="none" />
            <path d="M350 220 L360 225 L360 235 L350 240 L340 235 L340 225 Z" fill="#9bc54b" fillOpacity="0.3" stroke="none" />
            
            <path d="M200 150 L210 155 L210 165 L200 170 L190 165 L190 155 Z" fill="#7fa935" fillOpacity="0.2" stroke="none" />
            <path d="M300 150 L310 155 L310 165 L300 170 L290 165 L290 155 Z" fill="#7fa935" fillOpacity="0.2" stroke="none" />
        </g>
      </g>

      {/* Connecting Circuits */}
      <g stroke="#9bc54b" strokeWidth="1" opacity="0.4" strokeDasharray="4 2">
        <line x1="250" y1="220" x2="250" y2="250" />
        <line x1="230" y1="200" x2="180" y2="280" />
        <line x1="270" y1="200" x2="320" y2="280" />
        <line x1="250" y1="180" x2="250" y2="140" />
        <line x1="200" y1="160" x2="150" y2="220" />
        <line x1="300" y1="160" x2="350" y2="220" />
      </g>
    </svg>
  );
}
