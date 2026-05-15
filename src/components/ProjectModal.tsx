"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, CloseX } from "./Icons";

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const project = projectId ? PROJECTS[projectId] : null;

  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  let sn = 1;
  const ey = () => String(sn++).padStart(2, "0");

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/[.78] backdrop-blur-[8px] [-webkit-backdrop-filter:blur(8px)] z-[100] overflow-y-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            className="w-[min(1080px,96vw)] my-[4vh] mx-auto bg-bg rounded-[18px] border border-line-3 overflow-hidden shadow-[0_32px_80px_-20px_rgba(0,0,0,.7)]"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {/* Sticky header */}
            <div className="sticky top-0 z-2 bg-[rgba(10,10,10,.94)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] border-b border-line py-4 px-7 flex justify-between items-center">
              <button
                className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.1em] text-ink-2 py-2 pr-3.5 pl-3 border border-line-2 rounded-full bg-transparent cursor-pointer transition-all duration-150 hover:text-accent hover:border-accent hover:bg-accent/[.06]"
                onClick={onClose}
              >
                <ArrowLeft /> 돌아가기
              </button>
              <button
                className="w-9 h-9 rounded-full border border-line-2 bg-transparent text-ink-2 inline-flex items-center justify-center cursor-pointer transition-all duration-150 hover:text-ink hover:border-ink-2 hover:bg-white/[.04]"
                onClick={onClose} aria-label="Close"
              >
                <CloseX />
              </button>
            </div>

            {/* Hero section */}
            <div className="p-[clamp(40px,5vw,80px)_clamp(24px,5vw,64px)_clamp(32px,4vw,56px)] border-b border-line">
              {project.coverImage && (
                <div className="-mt-2 mb-7 rounded-xl overflow-hidden border border-line bg-bg h-[clamp(220px,32vw,380px)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.coverImage} alt={project.title} className="block w-full h-full object-cover" />
                </div>
              )}
              <div className="flex gap-1.5 flex-wrap mb-5">
                {project.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] tracking-[0.14em] py-[5px] px-2.5 rounded-full bg-accent/[.08] text-accent uppercase">{t}</span>
                ))}
              </div>
              <h1 className="font-display font-medium text-[clamp(36px,5vw,64px)] tracking-[-0.04em] leading-[1.02] m-0 text-ink">{project.title}</h1>
              <p className="mt-3.5 font-display text-[clamp(15px,1.5vw,20px)] font-normal tracking-[-0.015em] text-accent leading-[1.45]">{project.sub}</p>
              <p className="mt-6 text-[15px] text-ink-2 leading-[1.7] max-w-[64ch]">{project.tagline}</p>

              {/* Meta grid */}
              <div className="grid grid-cols-4 gap-3.5 mt-9 border-t border-b border-line py-5 max-[700px]:grid-cols-2">
                {[
                  { k: "Role", v: project.role },
                  { k: "Period", v: project.period },
                  { k: "Team", v: project.team },
                  { k: "Impact", v: project.impact, accent: true },
                ].map((m) => (
                  <div key={m.k}>
                    <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-ink-3">{m.k}</div>
                    <div className={`font-display text-[14px] font-medium tracking-[-0.005em] mt-1.5 ${m.accent ? "text-accent" : "text-ink"}`}>{m.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="p-[clamp(24px,4vw,48px)_clamp(24px,5vw,64px)_clamp(40px,6vw,72px)]">
              {/* Overview */}
              <DetailSection eyebrow={`${ey()} · Overview`} title="서비스 소개" first>
                {project.overview.map((t, i) => <p key={i} className="text-[15px] text-ink-2 leading-[1.75] max-w-[70ch] m-0 mb-3.5 last:mb-0">{t}</p>)}
                {project.links && (
                  <div className="flex flex-wrap gap-2.5 mt-5">
                    {project.links.map((l) => (
                      <a key={l.url} href={l.url} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-2.5 py-[11px] px-[18px] border border-accent rounded-full font-mono text-[12px] tracking-[0.08em] text-accent transition-all duration-150 hover:bg-accent hover:text-bg"
                      >
                        {l.label} <ArrowUpRight />
                      </a>
                    ))}
                  </div>
                )}
              </DetailSection>

              {/* Problem */}
              {project.problems && (
                <DetailSection eyebrow={`${ey()} · Problem`} title="문제 정의">
                  {project.problems.consumer && (
                    <div className="mb-7 last:mb-0">
                      <h3 className="font-display font-medium text-[16px] tracking-[-0.015em] text-ink m-0 mb-3.5">💡 소비자 (리폼 요청자)</h3>
                      <BulletList items={project.problems.consumer} />
                    </div>
                  )}
                  {project.problems.maker && (
                    <div className="mb-7 last:mb-0">
                      <h3 className="font-display font-medium text-[16px] tracking-[-0.015em] text-ink m-0 mb-3.5">💡 리폼러 (제작자)</h3>
                      <BulletList items={project.problems.maker} />
                    </div>
                  )}
                </DetailSection>
              )}

              {project.goals && (
                <DetailSection eyebrow={`${ey()} · Goal`} title="서비스 목표">
                  <BulletList items={project.goals} />
                </DetailSection>
              )}

              {project.features && (
                <DetailSection eyebrow={`${ey()} · Features`} title="핵심 기능 (MVP)">
                  <div className="grid grid-cols-2 gap-3 max-[700px]:grid-cols-1">
                    {project.features.map((f) => (
                      <div key={f.name} className="p-[20px_22px] bg-surface border border-line rounded-xl">
                        <h4 className="font-display font-medium text-[14.5px] tracking-[-0.01em] text-accent m-0 mb-2">{f.name}</h4>
                        <p className="text-[13px] text-ink-2 leading-[1.6] m-0">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </DetailSection>
              )}

              {project.teamComp && (
                <DetailSection eyebrow={`${ey()} · Team`} title="팀 구성">
                  <div className="flex flex-wrap gap-2">
                    {project.teamComp.map((m) => (
                      <div key={m.role} className="inline-flex items-baseline gap-2 py-2.5 pr-4 pl-3.5 bg-surface border border-line-2 rounded-full font-display text-[13.5px] tracking-[-0.005em] text-ink">
                        <span className="text-ink-2">{m.role}</span>
                        <span className="text-accent font-semibold font-mono text-[12px] tracking-[0.04em]">{m.count}명</span>
                      </div>
                    ))}
                  </div>
                </DetailSection>
              )}

              {project.myRole && (
                <DetailSection eyebrow={`${ey()} · My Role`} title="맡은 역할">
                  <BulletList items={project.myRole} />
                </DetailSection>
              )}

              {project.lessons && (
                <DetailSection eyebrow={`${ey()} · Retrospective`} title="배운 점 · 아쉬웠던 점">
                  {project.lessons.map((l, i) => <p key={i} className="text-[15px] text-ink-2 leading-[1.75] max-w-[70ch] m-0 mb-3.5 last:mb-0">{l}</p>)}
                </DetailSection>
              )}

              <div className="mt-10 flex justify-center">
                <button
                  className="inline-flex items-center gap-2.5 py-3 px-[22px] border border-line-2 rounded-full font-mono text-[11.5px] tracking-[0.1em] text-ink-2 bg-transparent cursor-pointer transition-all duration-150 hover:text-accent hover:border-accent hover:bg-accent/[.06]"
                  onClick={onClose}
                >
                  <ArrowLeft /> 프로젝트 목록으로 돌아가기
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DetailSection({ eyebrow, title, first, children }: { eyebrow: string; title: string; first?: boolean; children: React.ReactNode }) {
  return (
    <section className={`py-9 ${first ? "border-t-0 pt-3" : "border-t border-line"}`}>
      <div className="font-mono text-[10px] tracking-[0.22em] text-accent uppercase mb-2.5">{eyebrow}</div>
      <h2 className="font-display font-medium text-[clamp(22px,2.4vw,28px)] tracking-[-0.025em] m-0 mb-[22px] text-ink">{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="bullet-item grid grid-cols-[18px_1fr] gap-2.5 text-[14px] text-ink-2 leading-[1.65] max-w-[72ch]">
          {item}
        </li>
      ))}
    </ul>
  );
}
