import SectionHead from "./SectionHead";

const PRINCIPLES = [
  { num: "01", lines: [
    <>부여된 업무에 <mark>&apos;왜 해야하는가?&apos;</mark>에 대한 답을 먼저 찾고 시작해요.</>,
    <>일의 과정에서 <mark>재미와 의미</mark>를 찾아가려 노력합니다.</>,
  ]},
  { num: "02", lines: [
    <>업무 처리 속도가 빠르면서도, <mark>꼼꼼함</mark>을 놓치지 않으려 노력해요.</>,
  ]},
  { num: "03", lines: [
    <>사소한 의견이라도 <mark>경청하고 조율</mark>하며, 팀의 성공적인 결과를 위해 협력해요.</>,
    <>갈등이 생기면 최대한 <mark>합리적인 방향</mark>으로 결론을 내리려 노력합니다!</>,
  ]},
];

export default function HowIWork() {
  return (
    <section
      className="py-[clamp(100px,14vh,180px)] border-t border-line relative max-w-[1180px] mx-auto px-[clamp(28px,8vw,120px)]"
      id="howiwork"
    >
      <SectionHead num="04 — How I Work">
        <h2
          className="font-display font-medium text-[clamp(28px,4vw,46px)] tracking-[-0.035em] leading-[1.02] m-0 text-ink whitespace-pre-line"
          data-reveal
        >
          저는 <span className="text-accent">업무</span>를 할 때 이렇게 해요!
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
            <div className="font-mono text-[15px] font-medium text-accent-2 tracking-[0.1em]">{p.num}</div>
            <div className="flex flex-col gap-3 mt-3.5">
              {p.lines.map((line, j) => (
                <p key={j} className="text-[14px] text-ink leading-[1.7] m-0 [&_mark]:bg-accent/[.28] [&_mark]:text-white [&_mark]:px-1 [&_mark]:rounded [&_mark]:font-medium">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
