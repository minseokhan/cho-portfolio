import SectionHead from "./SectionHead";
import SubTitleRow from "./SubTitleRow";
import PeriodList from "./PeriodList";
import TaskAccordion from "./TaskAccordion";

const TASKS = [
  {
    tag: "기획",
    title: "교육과정 설명회 주제 기획 및 연사 섭외",
    paragraphs: [
      "교육과정별 매주 진행되는 설명회의 주제를 기획하고 그에 맞는 연사를 섭외하는 업무를 진행했습니다. 취준생들이 가장 궁금해하는 포인트가 무엇일지 분석해 주제를 설계했습니다.",
      "특히 5대 은행 취업 보장반 설명회의 임원급 연사 컨택에 성공하여, 역대 최대 설명회 참석자를 기록했습니다.",
      "또한 기획에 활용될 합격 자료와 교육과정 설명서를 노션화하는 작업을 수행했습니다. 이 과정에서 노션 활용 수준을 빠르게 끌어올렸습니다.",
    ],
  },
  {
    tag: "커뮤니케이션",
    title: "직무 현직자·인플루언서 발굴 및 컨택",
    paragraphs: [
      "기획에 적합한 현직자, 인플루언서, 협력사를 발굴하고 컨택하는 것이 주요 업무 중 하나였습니다.",
      "특히 사용자 유입에 중요한 SA 자료집을 제작했습니다. 담당 직무별로 취준생들이 어떤 부분을 궁금해할지 합격 자료 분석을 통해 잡고, 이를 취준생 입장에서 하나의 자료로 정리했습니다.",
      "해당 자료는 월별 신청자 수를 비교해 제가 만든 자료의 효용성을 파악하고, 전월 대비 실적이 좋지 않은 SA의 문제점을 파악해 보완한 뒤 다음 기획에 반영하는 사이클을 돌렸습니다.",
    ],
  },
  {
    tag: "CX",
    title: "고객 관리 및 운영 서포트",
    paragraphs: [
      "모객 데이터를 관리하고 거래가 발생한 건에 대한 수강생 안내 문자 발송을 담당했습니다.",
      "또한 합격자·멘토·연사분들의 계약을 관리하는 업무를 수행했습니다.",
      "실수가 발생하면 안 되는 업무이기에 꼼꼼함과 정확한 일처리를 습관화했습니다.",
    ],
  },
];

const EDUCATION = [
  { period: "2022.03 — 휴학 중", title: "숙명여자대학교 르꼬르동블루 외식경영전공" },
  { period: "2024.09 — 휴학 중", title: "숙명여자대학교 비즈니스 애널리틱스 연계전공" },
  { period: "2025.06 — 2025.08", title: "University of California, Berkeley · 학점 교류" },
];

const ACTIVITIES = [
  { period: "2025.09 — 2026.02", title: "IT 개발 연합 동아리 UMC · PM 파트" },
  { period: "2025.06 — 2026.02", title: "SMU 창업 동아리 4기" },
  { period: "2023.03 — 2024.06", title: "숙명여자대학교 유학생 지원 동아리" },
  { period: "2023.03 — 2024.06", title: "푸른아시아 대학생 환경 기자단" },
  { period: "2023.03 — 2024.06", title: "숙명여자대학교 환경 리더십 그룹 SEM 홍보부 임원진" },
];

const AWARDS = [
  { period: "2026.02", title: "UMC 9th Demo Day · 최우수상 🏅" },
  { period: "2025.08", title: "숙명여대 스마트푸드테크 AI 창업 아이디어 부트캠프 · 우수상 🏅" },
  { period: "2024.12", title: "<N개의 서울> 용산구 푸드투어 기획 및 운영 과정 수료" },
  { period: "2024.06", title: "미스터리 쇼퍼(서비스 평가사) 교육 수료" },
  { period: "2023.11", title: "디지털 인문학 콘텐츠 개발 연구 발표회 · 우수상 🏅" },
];

const CERTS = [
  { period: "2025.08", title: "데이터 분석 준전문가 (ADsP)" },
  { period: "2025.06", title: "식품안전자격증 (Servsafe)" },
  { period: "2025.02", title: "SQL 개발자 (SQLD)" },
  { period: "2025.02", title: "컴퓨터활용능력 2급" },
  { period: "2024.11", title: "푸드 큐레이터 2급" },
  { period: "2024.02", title: "TOEIC 860점" },
];

export default function Profile() {
  return (
    <section
      className="py-[clamp(100px,14vh,180px)] border-t border-line relative max-w-[1180px] mx-auto px-[clamp(28px,8vw,120px)]"
      id="profile"
    >
      <SectionHead num="01 — Profile">
        <h2
          className="font-display font-medium text-[clamp(34px,5vw,60px)] tracking-[-0.035em] leading-[1.02] m-0 text-ink whitespace-pre-line"
          data-reveal
        >
          {'"더 나은 방식"을\n집요하게 고민하는\n'}<span className="text-accent">서비스 기획자</span>{' 박초희입니다.'}
        </h2>
        <p className="text-[clamp(14.5px,1.2vw,16px)] text-ink-2 max-w-[56ch] mt-5 leading-[1.65]" data-reveal data-reveal-delay="1">
          저는 늘 &ldquo;어떻게 하면 효율적으로 해결할 수 있을까?&rdquo;를 고민하는 사람입니다.
        </p>
        <p className="text-[clamp(14.5px,1.2vw,16px)] text-ink-2 max-w-[56ch] mt-5 leading-[1.65]" data-reveal data-reveal-delay="2">
          문제의 본질을 고민하고 더 나은 방향을 실행합니다.
        </p>
        <p className="mt-[22px] font-mono text-[11.5px] tracking-[0.06em] text-ink-3" data-reveal data-reveal-delay="3">
          Birth &middot; 2003.09.26 &nbsp;&middot;&nbsp; Location &middot; 서울시 강남구
        </p>
      </SectionHead>

      <SubTitleRow title="Career" meta="경력" />
      <div className="flex flex-col">
        <div
          className="grid grid-cols-[180px_1fr] gap-[30px] pt-2 pb-7 border-b border-line items-start max-[800px]:grid-cols-1 max-[800px]:gap-3"
          data-reveal
          data-reveal-delay="1"
        >
          <div className="font-mono text-[11px] text-ink-3 tracking-[0.08em] pt-[5px]">
            2025.04.24 — 2025.06.20
          </div>
          <div>
            <h3 className="font-display text-[21px] font-medium tracking-[-0.015em] text-ink m-0">
              데이원컴퍼니 (제로베이스)
            </h3>
            <div className="font-mono text-[11px] text-accent tracking-[0.1em] uppercase mt-1.5 mb-3.5">
              사업기획팀 PM 인턴
            </div>
            <p className="text-[14px] text-ink-2 leading-[1.65] max-w-[60ch] m-0 mb-3.5">
              IT 직무 부트캠프의 교육과정 PM 인턴으로 근무. 주도적으로 타임라인을 만들고 데이터로 효용을 검증하며 일한 경험입니다.
            </p>
            <div className="inline-flex items-center gap-2.5 mt-1.5 mb-2 font-mono text-[11px] tracking-[0.06em] text-ink-2">
              <span className="text-accent text-[8px]">●</span>
              설명회 기획 · 연사 섭외 · SA 자료집 제작 · 고객 운영
            </div>
            <TaskAccordion tasks={TASKS} />
          </div>
        </div>
      </div>

      {/* Education + Activities */}
      <div className="grid grid-cols-2 gap-10 mt-20 max-[800px]:grid-cols-1 max-[800px]:gap-[50px]">
        <div data-reveal>
          <SubTitleRow title="Education" meta="학력" />
          <PeriodList items={EDUCATION} />
        </div>
        <div data-reveal data-reveal-delay="1">
          <SubTitleRow title="Activities" meta="활동" />
          <PeriodList items={ACTIVITIES} />
        </div>
      </div>

      {/* Awards + Certifications */}
      <div className="grid grid-cols-2 gap-10 mt-[60px] max-[800px]:grid-cols-1 max-[800px]:gap-[50px]">
        <div data-reveal>
          <SubTitleRow title="Awards" meta="수상·수료" />
          <PeriodList items={AWARDS} />
        </div>
        <div data-reveal data-reveal-delay="1">
          <SubTitleRow title="Certifications" meta="자격" />
          <PeriodList items={CERTS} />
        </div>
      </div>
    </section>
  );
}
