"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section
      className="py-[clamp(100px,14vh,180px)] border-t border-line relative max-w-[1180px] mx-auto px-[clamp(28px,8vw,120px)]"
      id="project"
    >
      <SectionHead num="03 — Project">
        <h2
          className="font-display font-medium text-[clamp(28px,4vw,46px)] tracking-[-0.035em] leading-[1.02] m-0 text-ink whitespace-pre-line"
          data-reveal
        >
          기획부터 배포까지
          <br />
          <span className="text-accent">끝까지</span> 끌고 간 프로젝트.
        </h2>
      </SectionHead>

      <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
        {/* 내폼리폼 */}
        <div data-reveal data-reveal-delay="1">
          <div
            className="bg-surface border border-line rounded-[18px] flex flex-col overflow-hidden cursor-pointer transition-all duration-[250ms] outline-none hover:border-accent hover:-translate-y-[3px] focus-visible:border-accent focus-visible:shadow-[0_0_0_3px_rgba(24,168,241,.25)]"
            role="button"
            tabIndex={0}
            onClick={() => setActiveProject("myform")}
            onKeyDown={(e) => e.key === "Enter" && setActiveProject("myform")}
          >
            <div className="relative aspect-video bg-bg bg-cover bg-center border-b border-line overflow-hidden" style={{ backgroundImage: "url('/assets/myform-cover.png')" }}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(20,18,15,.55)]" />
            </div>
            <div className="p-[24px_26px] flex flex-col flex-1">
              <div className="flex justify-between items-baseline font-mono text-[11px] tracking-[0.12em] uppercase text-accent-2 mb-4">
                <span className="inline-flex items-center gap-2.5 text-ink-2">
                  <span>PM (팀 리더)</span>
                </span>
                <span>2025.11 ~ 2026.02</span>
              </div>
              <h4 className="font-display font-semibold text-[clamp(20px,2.2vw,24px)] tracking-[-0.03em] leading-[1.25] m-0 mb-3.5 text-ink">내폼리폼</h4>
              <p className="text-[14px] text-ink-2 leading-[1.6] m-0 mb-[22px] max-w-[50ch]">스포츠 유니폼 리폼 구매자와 리폼러를 연결하는 통합 플랫폼</p>
              <div className="mt-auto flex items-center">
                <div className="flex gap-1.5 flex-wrap">
                  <span className="font-mono text-[10.5px] tracking-[0.1em] py-1.5 px-3.5 rounded-full bg-white/[.06] text-ink border border-line-2">Web</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 화믈리에 */}
        <div data-reveal data-reveal-delay="2">
          <div
            className="bg-surface border border-line rounded-[18px] flex flex-col overflow-hidden cursor-pointer transition-all duration-[250ms] outline-none hover:border-accent hover:-translate-y-[3px] focus-visible:border-accent focus-visible:shadow-[0_0_0_3px_rgba(24,168,241,.25)]"
            role="button"
            tabIndex={0}
            onClick={() => setActiveProject("toiletaste")}
            onKeyDown={(e) => e.key === "Enter" && setActiveProject("toiletaste")}
          >
            <div className="relative aspect-video bg-bg bg-cover bg-center border-b border-line overflow-hidden" style={{ backgroundImage: "url('/assets/toiletaste-cover.png')" }}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(20,18,15,.55)]" />
            </div>
            <div className="p-[24px_26px] flex flex-col flex-1">
              <div className="flex justify-between items-baseline font-mono text-[11px] tracking-[0.12em] uppercase text-accent-2 mb-4">
                <span className="inline-flex items-center gap-2.5 text-ink-2">
                  <span>Plan &amp; Design</span>
                </span>
                <span>2025.09 ~ 2025.10</span>
              </div>
              <h4 className="font-display font-semibold text-[clamp(20px,2.2vw,24px)] tracking-[-0.03em] leading-[1.25] m-0 mb-3.5 text-ink">화믈리에</h4>
              <p className="text-[14px] text-ink-2 leading-[1.6] m-0 mb-[22px] max-w-[50ch]">내가 가는 가게의 화장실 정보를 미리 알아보는 정보 공유 플랫폼</p>
              <div className="mt-auto flex items-center">
                <div className="flex gap-1.5 flex-wrap">
                  <span className="font-mono text-[10.5px] tracking-[0.1em] py-1.5 px-3.5 rounded-full bg-white/[.06] text-ink border border-line-2">Web/App</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal projectId={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
