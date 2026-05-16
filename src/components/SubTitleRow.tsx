interface SubTitleRowProps {
  title: string;
  meta: string;
  className?: string;
}

export default function SubTitleRow({ title, meta, className = "" }: SubTitleRowProps) {
  return (
    <div
      className={`flex items-baseline justify-between gap-4 pb-[18px] border-b border-line mb-7 ${className}`}
      data-reveal
    >
      <h3 className="font-display font-medium text-[18px] tracking-[-0.015em] m-0 text-ink">
        {title}
      </h3>
      <span className="font-mono text-[11px] tracking-[0.14em] text-accent-2 uppercase">
        {meta}
      </span>
    </div>
  );
}
