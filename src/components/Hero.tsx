import Image from "next/image";
import HeroCanvas from "./HeroCanvas";
import { ChevronDown } from "./Icons";

export default function Hero() {
  return (
    <header
      className="min-h-screen flex flex-col justify-center items-center text-center pt-[120px] pb-[140px] relative overflow-hidden"
      id="top"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="glow-1 absolute rounded-full blur-[120px] opacity-55 mix-blend-screen will-change-transform w-[620px] h-[620px] bg-[radial-gradient(circle,rgba(24,168,241,.32),transparent_65%)] -top-[120px] -right-[120px] animate-[glowDrift1_22s_ease-in-out_infinite_alternate]" />
        <div className="glow-2 absolute rounded-full blur-[120px] opacity-55 mix-blend-screen will-change-transform w-[520px] h-[520px] bg-[radial-gradient(circle,rgba(24,168,241,.18),transparent_65%)] -bottom-[160px] -left-[100px] animate-[glowDrift2_28s_ease-in-out_infinite_alternate]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(24,168,241,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(24,168,241,.05)_1px,transparent_1px)] bg-[length:80px_80px] [mask-image:radial-gradient(ellipse_at_50%_50%,rgba(0,0,0,1),transparent_75%)]" />
        <HeroCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_35%,rgba(10,10,10,.45)_95%)] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-2 flex flex-col items-center max-w-[1180px] mx-auto px-[clamp(28px,8vw,120px)]">
        <div
          className="w-20 h-20 rounded-full border border-line-2 mb-9 shadow-[0_0_0_4px_rgba(24,168,241,.06),0_20px_40px_-20px_rgba(24,168,241,.3)] overflow-hidden"
          data-reveal
          aria-label="박초희"
        >
          <Image
            src="/assets/profile.jpg"
            alt="박초희"
            width={80}
            height={80}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <h1
          className="font-display font-semibold text-[clamp(28px,3.6vw,50px)] tracking-[-0.025em] leading-none m-0 text-ink"
          data-reveal
          data-reveal-delay="1"
        >
          PARKCHOHEE
        </h1>
        <p
          className="font-mono text-[clamp(11px,.95vw,12.5px)] tracking-[0.24em] uppercase mt-[18px] text-accent"
          data-reveal
          data-reveal-delay="2"
        >
          서비스 기획자 / PM
        </p>
        <p
          className="font-display text-[clamp(15px,1.4vw,19px)] tracking-[-0.015em] leading-[1.5] mt-8 text-ink max-w-[30ch] whitespace-pre-line"
          data-reveal
          data-reveal-delay="3"
        >
          {'"더 나은 방식"을 집요하게\n고민하는 서비스 기획자입니다.'}
        </p>
      </div>

      {/* Meta */}
      <div className="absolute bottom-[clamp(140px,17vh,180px)] left-0 right-0 flex justify-between items-end font-mono text-[11px] tracking-[0.14em] text-ink-3 uppercase gap-4 flex-wrap z-2 max-w-[1180px] mx-auto px-[clamp(28px,8vw,120px)]">
        <div data-reveal data-reveal-delay="4">
          {/* <span className="inline-block w-[7px] h-[7px] bg-[#6ade90] rounded-full mr-2.5 translate-y-px" />
          새로운 협업 문의를 받고 있습니다 */}
        </div>
        <div className="text-right" data-reveal data-reveal-delay="5">
          Portfolio &middot; 2026
        </div>
      </div>

      {/* Scroll hint */}
      <a
        className="scroll-hint-anim absolute bottom-9 left-1/2 -translate-x-1/2 inline-flex flex-col items-center z-3 text-ink-2 transition-colors duration-200 p-2 opacity-0 animate-[scrollHintFadeIn_.9s_cubic-bezier(.2,.7,.2,1)_.6s_forwards] hover:text-accent"
        href="#profile"
        aria-label="Scroll down"
      >
        <ChevronDown className="chev-bounce w-[22px] h-[22px] animate-[chevBounce_1.8s_cubic-bezier(.6,.05,.4,1)_infinite]" />
      </a>
    </header>
  );
}
