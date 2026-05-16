import { ReactNode } from "react";

interface SectionHeadProps {
  num: string;
  children: ReactNode;
}

export default function SectionHead({ num, children }: SectionHeadProps) {
  return (
    <div className="grid grid-cols-[200px_1fr] gap-10 mb-[70px] max-[800px]:grid-cols-1 max-[800px]:gap-3 max-[800px]:mb-12">
      <div className="max-[800px]:pt-0">
        <div
          className="section-num-line font-mono text-[11px] tracking-[0.2em] text-accent-2 uppercase inline-flex items-center gap-3.5 mb-0 pt-2 max-[800px]:pt-0"
          data-reveal
        >
          {num}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
