export default function Contact() {
  return (
    <section
      className="pt-[clamp(120px,18vh,220px)] pb-20 border-t border-line max-w-[1180px] mx-auto px-[clamp(28px,8vw,120px)]"
      id="contact"
    >
      <div
        className="section-num-line font-mono text-[11px] tracking-[0.2em] text-ink-3 uppercase inline-flex items-center gap-3.5 mb-7"
        data-reveal
      >
        07 — Contact
      </div>

      <div className="mt-8 max-w-[78ch]" data-reveal data-reveal-delay="1">
        <p className="m-0 mb-7 text-ink font-display font-semibold text-[clamp(22px,2.6vw,32px)] tracking-[-0.03em] leading-[1.4]">
          <span className="bg-accent/[.18] text-ink px-1 rounded">명확한 문제정의</span>,{" "}
          <span className="bg-accent/[.18] text-ink px-1 rounded">명확한 솔루션</span>,{" "}
          <span className="bg-accent/[.18] text-ink px-1 rounded">다양한 사람들과의 협업</span>이 좋아서 PM이 되고 싶습니다.
        </p>
        <p className="m-0 mb-7 text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-ink-2">
          저는 혼자보다는, 남들과 함께할 때 시너지를 더 잘 발휘할 수 있는 사람입니다.
        </p>
        <p className="m-0 text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-ink-2">
          &ldquo;성장과 편안함은 공존할 수 없다&rdquo;는 말을 삶의 모토로 여기고 있는 만큼, 새로운 환경에 도전하는 것을 두려워하지 않으며 빠르게 배우고 적응하고자 노력하겠습니다.
        </p>
      </div>

      {/* Channels */}
      <div className="channel-grid mt-[70px] grid grid-cols-4 border-t border-line max-[760px]:grid-cols-2">
        <div className="group py-[26px] px-3 border-r border-b border-line transition-colors duration-150 hover:bg-surface" data-reveal data-reveal-delay="1">
          <a
            className="w-full h-full flex flex-col gap-2"  href="mailto:cheepark926@gmail.com"
            target="_blank" rel="noreferrer"
          >
            <span className="font-mono text-[10px] text-ink-3 tracking-[0.2em] uppercase">Email</span>
            <span className="font-display text-[15.5px] font-medium tracking-[-0.01em] text-ink group-hover:text-accent">cheepark926@gmail.com</span>
          </a>
        </div>
        <div className="group py-[26px] px-3 border-r border-b border-line transition-colors duration-150 hover:bg-surface" data-reveal data-reveal-delay="2">
          <a
            className="w-full h-full flex flex-col gap-2"  href="https://outgoing-samba-41e.notion.site/234f536595ff80f290c5fffdae2c5336"
            target="_blank" rel="noreferrer"
          >
            <span className="font-mono text-[10px] text-ink-3 tracking-[0.2em] uppercase">Phone</span>
            <span className="font-display text-[15.5px] font-medium tracking-[-0.01em] text-ink group-hover:text-accent">+82 10-9921-7392</span>
          </a>
        </div>
        <div className="group py-[26px] px-3 border-r border-b border-line transition-colors duration-150 hover:bg-surface" data-reveal data-reveal-delay="3">
          <a
            className="w-full h-full flex flex-col gap-2"  href="https://outgoing-samba-41e.notion.site/234f536595ff80f290c5fffdae2c5336"
            target="_blank" rel="noreferrer"
          >
            <span className="font-mono text-[10px] text-ink-3 tracking-[0.2em] uppercase">Notion</span>
            <span className="font-display text-[15.5px] font-medium tracking-[-0.01em] text-ink group-hover:text-accent">이력서 원본</span>
          </a>
        </div>
        <div
          className="group py-[26px] px-3 border-b border-line flex flex-col gap-2 transition-colors duration-150 hover:bg-surface"
          data-reveal data-reveal-delay="4"
        >
          <span className="font-mono text-[10px] text-ink-3 tracking-[0.2em] uppercase">Location</span>
          <span className="font-display text-[15.5px] font-medium tracking-[-0.01em] text-ink group-hover:text-accent">서울시 강남구</span>
        </div>
      </div>

      {/* Footer */}
      <div className="py-10 flex justify-between items-center gap-4 flex-wrap font-mono text-[10.5px] tracking-[0.1em] text-ink-3 uppercase">
        <div>&copy; 2026 박초희 (PARKCHOHEE). All rights reserved.</div>
        <div>Portfolio &middot; v2</div>
      </div>
    </section>
  );
}
