export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Podcrafter Studio"
    >
      {/* PODCRAFTER text */}
      <text
        x="10"
        y="60"
        fontFamily="var(--font-display), Arial Black, sans-serif"
        fontSize="52"
        fontWeight="900"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="3"
        letterSpacing="2"
      >
        P
      </text>
      
      {/* Green circle with microphone icon for O */}
      <circle cx="85" cy="38" r="22" fill="#4A8B5C" />
      <g transform="translate(75, 26)">
        <rect x="8" y="4" width="4" height="18" rx="2" fill="#FFFFFF" />
        <rect x="18" y="4" width="4" height="18" rx="2" fill="#FFFFFF" />
        <path d="M10 22 Q15 26 20 22" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="15" y1="24" x2="15" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <rect x="12" y="28" width="6" height="2" rx="1" fill="#FFFFFF" />
      </g>
      
      {/* Continue DCRAFTER */}
      <text
        x="118"
        y="60"
        fontFamily="var(--font-display), Arial Black, sans-serif"
        fontSize="52"
        fontWeight="900"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="3"
        letterSpacing="2"
      >
        DCRAFTER
      </text>
      
      {/* Green dot after CRAFTER */}
      <circle cx="440" cy="50" r="8" fill="#4A8B5C" />
      
      {/* STUDIO text */}
      <text
        x="280"
        y="120"
        fontFamily="var(--font-display), Arial Black, sans-serif"
        fontSize="56"
        fontWeight="900"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="3"
        letterSpacing="4"
      >
        STU
      </text>
      
      {/* Green play triangle for D in STUDIO */}
      <path
        d="M 466 86 L 496 102 L 466 118 Z"
        fill="#4A8B5C"
      />
      
      {/* Continue IO */}
      <text
        x="506"
        y="120"
        fontFamily="var(--font-display), Arial Black, sans-serif"
        fontSize="56"
        fontWeight="900"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="3"
        letterSpacing="4"
      >
        IO
      </text>
    </svg>
  );
}
