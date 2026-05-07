export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2"
      style={{ color: '#8b5e3c', letterSpacing: '0.2em' }}
    >
      <span className="w-8 h-px inline-block" style={{ backgroundColor: '#8b5e3c' }} />
      {children}
    </p>
  );
}
