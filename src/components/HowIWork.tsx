import SectionHead from "./SectionHead";

const PRINCIPLES = [
  { num: "P01", title: "문제의 본질부터 정의한다", desc: "현상이 아니라 원인을 묻습니다. 무엇을 만들지보다 무엇이 문제인지에 시간을 더 씁니다." },
  { num: "P02", title: "효율적인 방법을 집요하게 찾는다", desc: '"어떻게 하면 더 효율적으로 해결할 수 있을까"를 매번 다시 묻습니다.' },
  { num: "P03", title: "혼자보다 함께 만든다", desc: "혼자보다는 남들과 함께할 때 시너지를 더 잘 발휘한다고 믿습니다." },
  { num: "P04", title: "새 환경에 두려움 없이 도전한다", desc: '"성장과 편안함은 공존할 수 없다"는 모토로, 새로운 환경에 빠르게 적응합니다.' },
  { num: "P05", title: "꼼꼼하게 끝까지 책임진다", desc: "실수가 발생하면 안 되는 운영 업무에서 꼼꼼함과 정확한 일처리를 습관화했습니다." },
  { num: "P06", title: "데이터로 다시 검증한다", desc: "만든 결과물의 효용을 데이터로 확인하고, 부족한 부분은 다음 버전에 반영합니다." },
];

export default function HowIWork() {
  return (
    <section
      className="py-[clamp(100px,14vh,180px)] border-t border-line relative max-w-[1180px] mx-auto px-[clamp(28px,8vw,120px)]"
      id="howiwork"
    >
      <SectionHead num="06 — How I Work">
        <h2
          className="font-display font-medium text-[clamp(34px,5vw,60px)] tracking-[-0.035em] leading-[1.02] m-0 text-ink whitespace-pre-line"
          data-reveal
        >
          매번 계속해서 확인하는 <br /> <span className="text-accent">여섯 가지</span> 원칙.
        </h2>
      </SectionHead>

      <div className="grid grid-cols-3 gap-3.5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {PRINCIPLES.map((p, i) => (
          <div
            key={p.num}
            className="bg-surface border border-line rounded-[14px] p-[28px_26px] transition-all duration-200 hover:border-line-3 hover:bg-surface-2"
            data-reveal
            data-reveal-delay={String(i + 1)}
          >
            <div className="font-mono text-[11px] text-accent tracking-[0.18em]">{p.num}</div>
            <h4 className="font-display text-[18px] font-medium tracking-[-0.02em] mt-3.5 mb-2.5 text-ink">
              {p.title}
            </h4>
            <p className="text-[13.5px] text-ink-2 leading-[1.6] m-0">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
