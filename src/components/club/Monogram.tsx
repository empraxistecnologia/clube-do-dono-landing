export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M50 8 V92" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M50 34 h10 a16 16 0 0 1 0 32 H50" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M50 34 h-10 a16 16 0 0 0 0 32 H50" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Monogram className="h-7 w-7 shrink-0" />
      <span className="eyebrow whitespace-nowrap text-[0.7rem]">Clube do Dono</span>
    </span>
  );
}
