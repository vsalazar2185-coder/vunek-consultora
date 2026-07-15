type NetworkMotifProps = {
  className?: string;
};

export function NetworkMotif({ className }: NetworkMotifProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 1600 260" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#B87333" strokeWidth="1.5" opacity="0.55">
        <line x1="180" x2="360" y1="150" y2="70" />
        <line x1="360" x2="560" y1="70" y2="120" />
        <line x1="360" x2="420" y1="70" y2="190" />
        <line x1="560" x2="760" y1="120" y2="60" />
        <line x1="560" x2="700" y1="120" y2="200" />
        <line x1="760" x2="960" y1="60" y2="100" />
        <line x1="700" x2="960" y1="200" y2="100" />
        <line x1="960" x2="1150" y1="100" y2="50" />
        <line x1="960" x2="1120" y1="100" y2="190" />
        <line x1="1150" x2="1340" y1="50" y2="110" />
        <line x1="1120" x2="1340" y1="190" y2="110" />
        <line x1="1340" x2="1480" y1="110" y2="60" />
        <line x1="420" x2="700" y1="190" y2="200" />
      </g>
      <g fill="#B87333">
        <circle cx="180" cy="150" opacity="0.5" r="6" />
        <circle cx="360" cy="70" opacity="0.85" r="9" />
        <circle cx="420" cy="190" opacity="0.45" r="5" />
        <circle cx="560" cy="120" opacity="0.6" r="7" />
        <circle cx="760" cy="60" opacity="0.9" r="10" />
        <circle cx="700" cy="200" opacity="0.5" r="6" />
        <circle cx="960" cy="100" opacity="1" r="12" />
        <circle cx="1150" cy="50" opacity="0.6" r="7" />
        <circle cx="1120" cy="190" opacity="0.5" r="6" />
        <circle cx="1340" cy="110" opacity="0.85" r="9" />
        <circle cx="1480" cy="60" opacity="0.45" r="5" />
      </g>
    </svg>
  );
}
