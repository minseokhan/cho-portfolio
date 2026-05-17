export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectFeature {
  name: string;
  desc: string;
  images?: string[];
}

export interface TeamMember {
  role: string;
  count: number;
}

export interface Project {
  title: string;
  sub: string;
  role: string;
  period: string;
  impact: string;
  tags: string[];
  coverImage: string;
  tagline: string;
  team: string;
  overview: string[];
  links?: ProjectLink[];
  problems?: {
    consumer?: string[];
    maker?: string[];
  };
  goals?: string[];
  features?: ProjectFeature[];
  teamComp?: TeamMember[];
  myRole?: string[];
  lessons?: string[];
  screenshots?: string[];
}

export const PROJECTS: Record<string, Project> = {
  myform: {
    title: "내폼리폼",
    sub: "스포츠 유니폼 리폼 구매자와 리폼러를 연결하는 통합 플랫폼",
    role: "PM (팀 리더)",
    period: "2025.11 — 2026.02 (3개월)",
    impact: "UMC 9th Demoday 최우수상 \u{1F3C5}",
    tags: ["Web", "Commerce", "Lead"],
    coverImage: "/assets/myform-cover.png",
    tagline:
      "SNS\u00B7당근\u00B7카페에 흩어진 리폼 정보를 한 곳에 모아, 한 번의 요청으로 여러 리폼러의 견적\u00B7후기\u00B7포트폴리오를 비교하고 결제까지 가능한 통합 플랫폼.",
    team: "PM 1 \u00B7 디자이너 2 \u00B7 프론트엔드 3 \u00B7 백엔드 5 (총 11명)",
    overview: [
      "리폼 수요자는 SNS\u00B7당근\u00B7카페에 흩어진 정보 없이, 한 번의 요청으로 여러 리폼러의 견적을 받고 가격\u00B7후기\u00B7포트폴리오를 비교해 선택할 수 있습니다.",
      "리폼러는 작업물을 한곳에서 관리하고, 팔로워 없이도 플랫폼을 통해 고객을 만날 수 있습니다.",
    ],
    links: [{ label: "배포 링크", url: "https://myform-reform.vercel.app/" }],
    problems: {
      consumer: [
        "리폼 탐색의 비효율성 — SNS\u00B7카페\u00B7블로그를 오가며 리폼러를 찾아야 함",
        "가격 불투명성 — 표준화된 견적 기준이 없어 비교가 어렵고 불안함",
        "신뢰도 낮음 — 후기\u00B7포트폴리오가 흩어져 있어 품질 판단이 어려움",
        "방치된 유니폼 문제 — 버리기 아깝지만 활용처가 없는 유니폼 존재",
      ],
      maker: [
        "작업물 관리의 어려움 — 다양한 플랫폼에 흩어진 포트폴리오",
        "홍보 및 고객 유입의 한계 — 팔로워 수나 개인 SNS 노출에 의존",
        "초보 리폼러의 진입 장벽 — 홍보 채널 확보가 어려움",
      ],
    },
    goals: [
      "소비자 — 신뢰할 수 있는 리폼러를 합리적 가격에 쉽게 찾고 구매",
      "리폼러 — 작업물 체계적 홍보 및 안정적 고객 확보",
    ],
    features: [
      { name: "주문제작", desc: "사진 한 장으로 리폼 요청 등록 \u2192 여러 리폼러에게 견적 요청\n요청글에 맞춘 견적\u00B7디자인 제안 (리폼러)", images: ["/assets/myform-reformer1.png", "/assets/myform-reformer2.png"] },
      { name: "마켓", desc: "리폼러의 완성 작품 판매\u00B7구매", images: ["/assets/myform-market1.png"] },
      { name: "장바구니 & 결제", desc: "장바구니 담기, 주문서 작성, PG 연동 결제", images: ["/assets/myform-jang.png"] },
      { name: "리폼러 찾기", desc: "내가 찾는 리폼 스타일 탐색\n리폼러 포트폴리오\u00B7후기\u00B7평점 열람으로 신뢰도 확인", images: ["/assets/myform-find-reformer1.png"] },
      { name: "채팅", desc: "문의\u00B7상담 및 리폼 진행 상황 공유\n채팅을 통한 결제하기", images: ["/assets/myform-chat1.png"] },
    ],
    teamComp: [
      { role: "PM", count: 1 },
      { role: "디자이너", count: 2 },
      { role: "프론트엔드", count: 3 },
      { role: "백엔드", count: 5 },
    ],
    lessons: [
      "서비스 기획부터 와이어프레임, 화면설계서, 기능명세서, QA까지 전 과정을 경험하며 하나의 서비스가 탄생하는데 PM의 손길이 닿지 않는 곳이 없다는 것을 몸소 느꼈습니다.",
      "3개월 동안 피그마 활용, 디스코드 기반 협업, 개발자 커뮤니케이션 등 처음 접하는 툴과 업무를 빠르게 익히며 협업 역량이 크게 성장했습니다.",
      "화면설계서\u00B7와이어프레임\u00B7기능명세서의 부족한 부분에 대한 피드백을 통해, 더 명확하고 꼼꼼한 개발 문서 작성의 중요성을 배웠습니다.",
      "프로젝트 온보딩 시 팀원 간 싱크를 제대로 맞추지 못했던 점이 아쉬웠습니다. 팀 리더로서 과도하게 개입하는 마이크로 리드가 되지 않기 위해 고민했고, 팀원들이 자율적으로 움직일 수 있는 협업 방식을 만들기 위해 노력했습니다.",
      "\u201CPM은 판단의 연속\u201D이라는 말을 깊이 공감했습니다. 일정, 우선순위, 팀의 부담 등을 고려하며 매 순간 적절한 의사결정을 내려야 했습니다.\n또한 개발 과정을 이해하며 기획자 관점에서 놓치기 쉬운 부분들을 배웠고, 개발자의 추가 질문을 최소화할 수 있도록 더욱 구체적으로 설계하는 PM으로 성장하고 싶다는 목표가 생겼습니다.",
    ],
  },
  toiletaste: {
    title: "화믈리에",
    sub: "내가 가는 가게의 화장실 정보를 미리 알아보는 정보 공유 플랫폼",
    role: "Plan & Design",
    period: "2025.09 — 2025.10 (약 2개월)",
    impact: "toiletaste.kr 직접 배포 \u00B7 첫 종단 프로젝트",
    tags: ["Web/App", "Community", "MVP"],
    coverImage: "/assets/toiletaste-cover.png",
    tagline:
      "\u201C가게 분위기는 좋았는데 화장실 때문에 당황했던 경험\u201D을 해결하기 위한 화장실 정보\u00B7리뷰 공유 플랫폼.",
    team: "Plan & Design 2 \u00B7 FE/BE 1 (총 3명)",
    overview: [
      "화믈리에는 내가 가는 가게의 화장실이 궁금한 사람들을 위한 화장실 정보 공유 플랫폼입니다.",
      "간단한 화장실 정보부터 방문자의 실제 리뷰를 확인할 수 있으며, 내가 다녀온 가게의 리뷰 작성도 가능합니다.",
    ],
    links: [{ label: "배포 링크", url: "https://www.toiletaste.kr/" }],
    screenshots: [
      "/assets/toiletaste-1.png",
      "/assets/toiletaste-2.png",
      "/assets/toiletaste-3.png",
      "/assets/toiletaste-4.png",
      "/assets/toiletaste-5.png",
    ],
    goals: [
      "가게 방문 전 화장실 정보를 검색할 수 있도록 하여 사용자의 불편을 해결하고, 방문 계획 수립에 도움을 준다.",
    ],
    features: [
      { name: "가게 화장실 정보 등록 및 검색", desc: "가게명 및 지도를 통해 등록하려는 가게 검색 가능" },
      { name: "상세 리뷰 작성", desc: "청결도, 접근성, 남녀분리, 위생용품 비치, 별점 등 다차원 평가 지표 제시 \n 주관식 리뷰 작성 가능" },
      { name: "실제 방문자 리뷰 열람", desc: "평가 지표 확인 가능 \n 실 사용자의 주관식 리뷰 확인 가능" },
    ],
    teamComp: [
      { role: "Plan & Design", count: 2 },
      { role: "FE / BE", count: 1 },
    ],
    myRole: [
      "Plan & Design 담당으로 기획\u00B7와이어프레임\u00B7디자인 전담",
      "개발자와의 협업을 통한 기능 구현",
      "기획부터 배포까지 직접 완성한 첫 프로젝트",
    ],
    lessons: [
      "기획부터 배포까지 직접 완성한 첫 프로젝트로, 간단한 규모였지만 기획과 디자인까지 전담하며 피그마 활용 수준을 끌어올렸습니다.",
      "개발자와 기능 구현 방향을 조율하면서 커뮤니케이션의 중요성과 협업의 흐름을 몸소 배웠습니다.",
      "개발 과정에서 기획 단계에서 미처 고려하지 못한 기능들이 있다는 점을 깨달았습니다. 뒤늦게 세부 기능을 추가하거나 디자인을 보완하면서, 초기 기획 단계에서의 완성도와 세밀함의 중요성을 실감했습니다.",
    ],
  },
};
