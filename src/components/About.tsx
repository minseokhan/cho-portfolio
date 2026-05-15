import SectionHead from "./SectionHead";

const STRENGTHS = [
  { num: "01", title: "본질을 파고드는 집요함", desc: '"어떻게 하면 더 효율적으로 해결할 수 있을까"를 끝까지 묻습니다. 현상에 머무르지 않고 원인을 정의해야 다음 단계가 보입니다.' },
  { num: "02", title: "기획부터 배포까지 끌고 가는 추진력", desc: "화믈리에에서는 기획·디자인을 전담하고 배포까지 직접 마무리했고, 내폼리폼에서는 11명의 팀을 리드해 3개월 안에 최우수상을 만들었습니다." },
  { num: "03", title: "시너지를 만드는 협업", desc: "혼자보다 함께할 때 더 큰 결과가 나온다고 믿습니다. 디자이너·개발자·운영팀이 같은 그림을 보게 하는 데 시간을 씁니다." },
  { num: "04", title: "꼼꼼한 운영과 데이터 검증", desc: "계약 관리·고객 응대 같은 운영 업무에서 단 한 건의 실수도 허용하지 않았고, 만든 자료의 효용은 신청자 수·실적 데이터로 직접 검증해 보완했습니다." },
];

export default function About() {
  return (
    <section
      className="py-[clamp(100px,14vh,180px)] border-t border-line relative max-w-[1180px] mx-auto px-[clamp(28px,8vw,120px)]"
      id="about"
    >
      <SectionHead num="04 — About">
        <h2
          className="font-display font-medium text-[clamp(34px,5vw,60px)] tracking-[-0.035em] leading-[1.02] m-0 text-ink whitespace-pre-line"
          data-reveal
        >
          제품을 만드는 데 <span className="text-accent">강한 지점들</span>.
        </h2>
      </SectionHead>

      <div className="grid grid-cols-2 gap-3.5 max-[700px]:grid-cols-1">
        {STRENGTHS.map((s, i) => (
          <div
            key={s.num}
            className="bg-surface border border-line rounded-[14px] p-[30px_28px] grid grid-cols-[56px_1fr] gap-5 items-start transition-all duration-200 hover:border-line-3 hover:bg-surface-2"
            data-reveal
            data-reveal-delay={String(i + 1)}
          >
            <div className="w-10 h-10 rounded-[10px] bg-bg border border-line-2 flex items-center justify-center font-mono text-[11px] tracking-[0.08em] text-accent">
              {s.num}
            </div>
            <div>
              <h4 className="font-display text-[17px] font-medium tracking-[-0.015em] leading-[1.3] m-0 mb-2.5 text-ink">
                {s.title}
              </h4>
              <p className="text-[13.5px] text-ink-2 leading-[1.65] m-0">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
