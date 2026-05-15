interface PeriodItem {
  period: string;
  title: string;
}

export default function PeriodList({ items }: { items: PeriodItem[] }) {
  return (
    <ul className="list-none p-0 m-0 flex flex-col">
      {items.map((item, i) => (
        <li
          key={i}
          className={`grid grid-cols-[120px_1fr] gap-[18px] py-3.5 items-baseline max-[560px]:grid-cols-1 max-[560px]:gap-1 ${
            i === 0 ? "" : "border-t border-line"
          } ${i === 0 ? "pt-0" : ""}`}
        >
          <span className="font-mono text-[11px] tracking-[0.04em] text-ink-3">
            {item.period}
          </span>
          <span className="text-[14px] text-ink tracking-[-0.005em] leading-[1.45]">
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
}
