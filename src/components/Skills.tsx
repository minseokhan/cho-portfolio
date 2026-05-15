"use client";

import SectionHead from "./SectionHead";
import SubTitleRow from "./SubTitleRow";

const HARD_SKILLS = [
  { num: "01", title: "문제 정의", desc: "현상 이면의 본질을 파고들어, 해결 가능한 형태로 문제를 다시 정의합니다." },
  { num: "02", title: "서비스 기획", desc: "사용자 흐름과 정책을 함께 설계하고, 디자이너·개발자가 바로 작업할 수 있는 문서로 정리합니다." },
  { num: "03", title: "데이터 활용", desc: "SQL·Python·스프레드시트로 가설을 검증하고, 의사결정에 필요한 근거를 만듭니다." },
  { num: "04", title: "협업·커뮤니케이션", desc: "디자이너·개발자·운영팀과 일정·정책을 정렬하고, 회의보다 문서로 합의를 만듭니다." },
];

const SOFT_SKILLS = [
  "근본 원인을 파고드는 집요함",
  "새 환경에 빠르게 적응하는 추진력",
  "꼼꼼함과 정확한 일처리",
  "시너지를 만드는 팀 협업",
];

const TOOLS = [
  { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets/34A853", fallback: "G", desc: "데이터 관리 및 협업에 능숙합니다.", cat: "데이터 관리", catColor: "#5fb085", level: 70, delay: "1" },
  { name: "Excel", icon: "/assets/excel.svg", fallback: "E", desc: "간단한 데이터 처리가 가능합니다.", cat: "데이터 관리", catColor: "#5fb085", level: 50, delay: "2" },
  { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", fallback: "S", desc: "간단한 데이터 처리가 가능합니다.", cat: "데이터 관리", catColor: "#5fb085", level: 50, delay: "3" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/ededeb", fallback: "N", desc: "프로젝트 관리 및 협업 툴로 자주 사용하고 있습니다.", cat: "커뮤니케이션", catColor: "#e0b066", level: 75, delay: "1" },
  { name: "Slack", icon: "/assets/slack.svg", fallback: "S", desc: "사내 협업 툴로 현업에서 사용해 본 경험이 있습니다.", cat: "커뮤니케이션", catColor: "#e0b066", level: 75, delay: "2" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", fallback: "F", desc: "와이어프레임 제작 및 디자이너, 개발자와의 협업에 능숙합니다.", cat: "디자인", catColor: "#d68bb5", level: 65, delay: "3" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", fallback: "P", desc: "데이터 분석, 데이터 시각화 등을 진행한 경험이 있습니다.", cat: "데이터 분석", catColor: "#a78bd6", level: 50, delay: "4" },
];

export default function Skills() {
  return (
    <section
      className="py-[clamp(100px,14vh,180px)] border-t border-line relative max-w-[1180px] mx-auto px-[clamp(28px,8vw,120px)]"
      id="skills"
    >
      <SectionHead num="02 — Skills">
        <h2
          className="font-display font-medium text-[clamp(34px,5vw,60px)] tracking-[-0.035em] leading-[1.02] m-0 text-ink whitespace-pre-line"
          data-reveal
        >
          기획·데이터·협업을 <span className="text-accent">한 번에</span> <br /> 끌고 갑니다.
        </h2>
      </SectionHead>

      {/* Hard Skills */}
      <SubTitleRow title="Hard Skills" meta="04" />
      <div className="grid grid-cols-4 gap-4 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
        {HARD_SKILLS.map((s, i) => (
          <div
            key={s.num}
            className="bg-surface border border-line rounded-[14px] p-[28px_24px_26px] transition-all duration-200 hover:border-line-3 hover:bg-surface-2 hover:-translate-y-0.5"
            data-reveal
            data-reveal-delay={String(i + 1)}
          >
            <div className="w-12 h-12 rounded-xl bg-bg border border-line-2 flex items-center justify-center mb-5 font-mono text-[16px] text-accent font-medium">
              {s.num}
            </div>
            <h4 className="font-display text-[17px] font-medium tracking-[-0.015em] m-0 mb-2.5 text-ink">
              {s.title}
            </h4>
            <p className="text-[13px] text-ink-2 leading-[1.6] m-0">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <SubTitleRow title="Soft Skills" meta="04" className="mt-20" />
      <div className="flex flex-wrap gap-2.5">
        {SOFT_SKILLS.map((s, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3 py-3 pr-[18px] pl-3.5 border border-line-2 rounded-full bg-surface text-[13.5px] text-ink font-display font-medium tracking-[-0.005em]"
            data-reveal
            data-reveal-delay={String(i + 1)}
          >
            <span className="w-7 h-7 rounded-full bg-bg border border-line-2 inline-flex items-center justify-center font-mono text-[10px] text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            {s}
          </div>
        ))}
      </div>

      {/* Tools */}
      <SubTitleRow title="Tools" meta="07" className="mt-20" />
      <div className="bg-surface border border-line rounded-[14px] overflow-hidden">
        {TOOLS.map((t, i) => (
          <div
            key={t.name}
            className={`tool-row-grid grid grid-cols-[48px_1fr_150px_200px] gap-[18px] items-center py-3.5 px-[22px] ${
              i > 0 ? "border-t border-line" : ""
            }`}
            data-reveal
            data-reveal-delay={t.delay}
          >
            <div className="tool-area-logo w-9 h-9 rounded-lg bg-bg border border-line-2 flex items-center justify-center overflow-hidden">
              {t.icon ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={t.icon}
                  alt={t.name}
                  className="w-5 h-5 object-contain"
                  onError={(e) => {
                    const span = document.createElement("span");
                    span.className = "font-display font-semibold text-[15px] text-accent";
                    span.textContent = t.fallback;
                    (e.target as HTMLElement).replaceWith(span);
                  }}
                />
              ) : (
                <span className="font-display font-semibold text-[15px] text-accent">{t.fallback}</span>
              )}
            </div>
            <div className="tool-area-info flex flex-col gap-[3px] min-w-0">
              <div className="font-display text-[14.5px] font-medium tracking-[-0.01em] text-ink">
                {t.name}
              </div>
              <div className="text-[12px] text-ink-2 leading-[1.45]">{t.desc}</div>
            </div>
            <span
              className="tool-area-tag font-mono text-[9.5px] tracking-[0.08em] uppercase py-1.5 px-2.5 border rounded-full bg-white/[.02] justify-self-start whitespace-nowrap"
              style={{ color: t.catColor, borderColor: t.catColor }}
            >
              {t.cat}
            </span>
            <div className="tool-area-level grid grid-cols-[1fr_28px] gap-3 items-center">
              <div className="relative h-[5px] bg-line-2 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-accent to-accent-2 rounded-full shadow-[0_0_10px_rgba(24,168,241,.35)]"
                  style={{ width: `${t.level}%` }}
                />
              </div>
              <div className="font-mono text-[10.5px] text-ink-3 text-right tracking-[0.04em]">
                {t.level}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
