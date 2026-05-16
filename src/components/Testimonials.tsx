import SectionHead from "./SectionHead";

const TESTIMONIALS = [
  { quote: "내폼리폼 팀에서 함께한 PM. 11명의 팀이 흩어지지 않게 회의록·일정·정책을 가장 먼저 정리해두는 사람이었어요.", name: "동료 A", org: "UMC 9th", initial: "동" },
  { quote: "인턴이라기엔 너무 꼼꼼한 동료였습니다. 자료 하나를 만들어도 효용을 데이터로 검증해 다음 버전을 가져왔습니다.", name: "동료 B", org: "데이원컴퍼니", initial: "동" },
  { quote: "기획부터 디자인까지 혼자 끌고 나가는데, 개발자의 입장도 빠짐없이 챙겨준 PM이었어요.", name: "동료 C", org: "화믈리에", initial: "동" },
  { quote: "새로운 환경에서 가장 빨리 적응하는 사람. 한번 시작한 일은 끝까지 책임지는 모습이 인상적이었습니다.", name: "동료 D", org: "SMU 창업 동아리", initial: "동" },
];

export default function Testimonials() {
  return (
    <section
      className="py-[clamp(100px,14vh,180px)] border-t border-line relative max-w-[1180px] mx-auto px-[clamp(28px,8vw,120px)]"
      id="testimonial"
    >
      <SectionHead num="05 — Peer Testimonial">
        <h2
          className="font-display font-medium text-[clamp(28px,4vw,46px)] tracking-[-0.035em] leading-[1.02] m-0 text-ink whitespace-pre-line"
          data-reveal
        >
          <span className="text-accent">동료</span>의 말로 듣는 일하는 방식.
        </h2>
      </SectionHead>

      <div className="grid grid-cols-2 gap-3.5 max-[700px]:grid-cols-1">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="bg-surface border border-line rounded-[14px] p-[32px_28px_26px] flex flex-col gap-[18px]"
            data-reveal
            data-reveal-delay={String(i + 1)}
          >
            <p className="quote-mark font-display text-[16px] leading-[1.6] tracking-[-0.01em] text-ink m-0">
              {t.quote}
            </p>
            <div className="flex items-center gap-3.5 mt-auto pt-[18px] border-t border-line">
              <div className="w-9 h-9 rounded-full bg-bg border border-line-2 font-display text-[13px] font-medium text-ink-2 flex items-center justify-center">
                {t.initial}
              </div>
              <div>
                <div className="font-display text-[14px] font-medium tracking-[-0.005em] text-ink">{t.name}</div>
                <div className="font-mono text-[10.5px] text-ink-3 tracking-[0.1em] uppercase mt-[3px]">{t.org}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
