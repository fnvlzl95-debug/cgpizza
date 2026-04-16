export type LandingConcept = {
  slug: "01" | "02" | "03" | "04" | "05" | "06";
  name: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  visualThesis: string;
  contentPlan: string;
  interactionThesis: string[];
  motionPreset: "punch" | "steady" | "editorial";
  theme: {
    base: string;
    surface: string;
    surfaceAlt: string;
    text: string;
    muted: string;
    line: string;
    accent: string;
    accentAlt: string;
    accentText: string;
    heroOverlay: string;
    heroGlow: string;
    lightHero: boolean;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    promise: string;
    badges: string[];
    image: string;
    imageAlt: string;
    objectPosition: string;
  };
  support: {
    eyebrow: string;
    title: string;
    description: string;
    gallery: Array<{
      src: string;
      alt: string;
      title: string;
      description: string;
      aspect: "portrait" | "landscape" | "square";
    }>;
  };
  proof: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    media: Array<{
      src: string;
      alt: string;
      aspect: "portrait" | "landscape" | "square";
    }>;
  };
  franchise: {
    eyebrow: string;
    title: string;
    description: string;
    points: Array<{
      title: string;
      body: string;
    }>;
    steps: string[];
  };
  finalCta: {
    title: string;
    description: string;
  };
};

export const ctaLinks = {
  phoneHref: "tel:1866-1623",
  phoneLabel: "전화로 가맹 상담",
  phoneDisplay: "1866-1623",
  kakaoHref: "https://open.kakao.com/o/sXQKJrni",
  kakaoLabel: "카카오로 문의하기",
  websiteHref: "https://ckpizza.co.kr",
  websiteLabel: "공식 홈페이지",
  address: "경기 부천시 도약로 105 105호",
};

export const landingConcepts: LandingConcept[] = [
  {
    slug: "01",
    name: "Street Heat",
    label: "강렬한 대중형",
    metaTitle: "Street Heat",
    metaDescription:
      "피자와 사이드를 한 번에 각인시키는 최강피자 랜딩 초안. 강한 브랜드명과 즉시 상담 동선을 전면에 둡니다.",
    visualThesis:
      "강한 원색 배경과 근접한 제품 구도로 첫 화면부터 식욕과 브랜드명을 동시에 밀어 올리는 버전.",
    contentPlan:
      "브랜드 히어로에서 강하게 시작하고, 주문 장면과 패키지 증거를 보여준 뒤 즉시 상담 CTA로 닫습니다.",
    interactionThesis: [
      "히어로 텍스트를 순차적으로 세워 강한 첫 인상을 만듭니다.",
      "제품 갤러리에 짧은 깊이감 이동을 넣어 시선이 오른쪽으로 흐르게 만듭니다.",
      "CTA 버튼은 호버 시 명확하게 밝아지며 반응을 크게 보입니다.",
    ],
    motionPreset: "punch",
    theme: {
      base: "#04122b",
      surface: "#081b36",
      surfaceAlt: "#0d2344",
      text: "#fff8eb",
      muted: "rgba(255, 248, 235, 0.72)",
      line: "rgba(255, 255, 255, 0.12)",
      accent: "#ffde38",
      accentAlt: "#ff4d3d",
      accentText: "#04122b",
      heroOverlay:
        "linear-gradient(90deg, rgba(4,18,43,0.94) 0%, rgba(4,18,43,0.78) 34%, rgba(4,18,43,0.34) 58%, rgba(4,18,43,0.14) 100%)",
      heroGlow:
        "radial-gradient(circle at 18% 18%, rgba(255, 77, 61, 0.22), transparent 38%), radial-gradient(circle at 72% 22%, rgba(255, 222, 56, 0.18), transparent 35%)",
      lightHero: false,
    },
    hero: {
      eyebrow: "최강피자",
      title: "한 판이 먼저 기억되고 브랜드가 바로 남는 피자.",
      description:
        "파로 도우의 차별화와 강한 컬러의 패키지를 한 장에 묶어, 소비자와 예비 점주 모두가 빠르게 이해하는 첫 화면입니다.",
      promise: "소화가 잘되는 맛있는 피자",
      badges: ["고대곡물 파로 도우", "포장·배달 중심 구성", "전화·카카오 즉시 상담"],
      image: "/assets/food/hero-street.png",
      imageAlt: "최강피자 피자와 사이드 구성이 함께 보이는 대표 이미지",
      objectPosition: "74% center",
    },
    support: {
      eyebrow: "주문 장면",
      title: "피자만 보이지 않고 주문 장면이 함께 보입니다.",
      description:
        "피자와 사이드가 같이 잡히면 메뉴의 풍성함과 운영 그림이 동시에 전달됩니다.",
      gallery: [
        {
          src: "/assets/food/product-combo.jpg",
          alt: "피자, 그라탕, 음료 조합 이미지",
          title: "한 번에 읽히는 조합",
          description: "대표 메뉴와 사이드가 같이 보여 첫 인상이 빠릅니다.",
          aspect: "portrait",
        },
        {
          src: "/assets/food/product-chicken.png",
          alt: "최강피자 치킨 사이드 이미지",
          title: "사이드까지 같은 톤",
          description: "피자 밖 선택지도 같은 브랜드 인상으로 이어집니다.",
          aspect: "landscape",
        },
        {
          src: "/assets/food/product-bacon.jpg",
          alt: "베이컨 그라탕 이미지",
          title: "먹는 장면이 선명하다",
          description: "배달 메뉴 구성이 자연스럽게 그려지는 컷입니다.",
          aspect: "square",
        },
      ],
    },
    proof: {
      eyebrow: "브랜드 신뢰",
      title: "상자, 로고, 제품 컷이 같은 톤으로 이어집니다.",
      description:
        "브랜드가 화면 밖 패키지로 이어질 준비가 되어 있다는 점을 시각적으로 먼저 보여줍니다.",
      bullets: [
        "강한 3색 아이덴티티",
        "박스 인쇄에도 살아나는 로고 구조",
        "가맹 상담 번호와 브랜드 문장이 이미 정리된 상태",
      ],
      media: [
        {
          src: "/assets/food/hero-town.jpg",
          alt: "최강피자 박스와 여러 메뉴가 보이는 이미지",
          aspect: "landscape",
        },
        {
          src: "/assets/brand/logo-square.png",
          alt: "최강피자 로고 이미지",
          aspect: "square",
        },
        {
          src: "/assets/food/product-vegetable.jpg",
          alt: "최강피자 야채 토핑 피자 이미지",
          aspect: "portrait",
        },
      ],
    },
    franchise: {
      eyebrow: "가맹 포인트",
      title: "설명이 길지 않아도 브랜드 구조가 바로 잡힙니다.",
      description:
        "처음 보는 사람에게도 무엇을 팔고 어떤 톤으로 운영하는지 한 화면 안에서 빠르게 읽히는 초안입니다.",
      points: [
        {
          title: "브랜드가 크게 남습니다",
          body: "첫 화면에서 상호와 약속이 먼저 읽혀 기억에 남습니다.",
        },
        {
          title: "메뉴 구성이 직관적입니다",
          body: "피자와 사이드를 함께 보여줘 주문 장면을 빠르게 이해시킵니다.",
        },
        {
          title: "상담 동선이 짧습니다",
          body: "전화와 카카오를 같은 위치에서 바로 연결해 관심 순간을 놓치지 않습니다.",
        },
      ],
      steps: [
        "브랜드 인상 확인",
        "대표 메뉴 검토",
        "운영 방식 상담",
        "상권 대화 연결",
      ],
    },
    finalCta: {
      title: "최강피자 가맹 상담을 바로 시작해보세요.",
      description:
        "전화 한 통과 카카오 문의를 같은 흐름에 두어, 관심이 생긴 순간 바로 연결되도록 잡았습니다.",
    },
  },
  {
    slug: "02",
    name: "Town Winner",
    label: "로컬 확장형",
    metaTitle: "Town Winner",
    metaDescription:
      "동네 장사 관점에서 브랜드와 운영 구조를 빠르게 읽히게 만든 최강피자 랜딩 초안입니다.",
    visualThesis:
      "부천 본점에서 출발한 브랜드의 운영 장면이 먼저 읽히도록 박스와 메뉴 구성을 전면에 둔 버전.",
    contentPlan:
      "동네에서 먹히는 구성이라는 인상을 먼저 만들고, 포장과 상담 동선을 실전형 메시지로 정리합니다.",
    interactionThesis: [
      "히어로 배경을 느리게 밀어 움직여 운영 장면의 깊이를 줍니다.",
      "중간 섹션의 제목은 스크롤 중 고정되어 메시지를 붙잡습니다.",
      "섹션 전환은 빠른 페이드보다 부드러운 이동으로 신뢰감을 줍니다.",
    ],
    motionPreset: "steady",
    theme: {
      base: "#0b1118",
      surface: "#111923",
      surfaceAlt: "#171f2b",
      text: "#f8fafc",
      muted: "rgba(248, 250, 252, 0.72)",
      line: "rgba(248, 250, 252, 0.14)",
      accent: "#f3ce4a",
      accentAlt: "#d63a2c",
      accentText: "#111923",
      heroOverlay:
        "linear-gradient(90deg, rgba(11,17,24,0.95) 0%, rgba(11,17,24,0.8) 38%, rgba(11,17,24,0.4) 62%, rgba(11,17,24,0.16) 100%)",
      heroGlow:
        "radial-gradient(circle at 15% 20%, rgba(214, 58, 44, 0.2), transparent 36%), radial-gradient(circle at 78% 14%, rgba(243, 206, 74, 0.16), transparent 34%)",
      lightHero: false,
    },
    hero: {
      eyebrow: "최강피자 부천 본점",
      title: "동네에서 바로 먹히는 구성이 먼저 보이는 피자 브랜드.",
      description:
        "부천 본점에서 시작한 브랜드 톤, 박스, 메뉴 구성을 한 화면에 정리해 점주 시점의 이해를 앞세운 버전입니다.",
      promise: "함께 성장하는 피자 브랜드",
      badges: ["부천 본점 기준 상담 운영", "박스·전단 자산 보유", "포장·배달 동선 강조"],
      image: "/assets/food/hero-town.jpg",
      imageAlt: "최강피자 박스와 다양한 메뉴 구성 이미지",
      objectPosition: "62% center",
    },
    support: {
      eyebrow: "운영 장면",
      title: "브랜드보다 운영 장면이 먼저 잡히는 흐름입니다.",
      description:
        "가맹을 고민하는 사람에게는 멋진 말보다 매장이 어떻게 보일지가 먼저 읽혀야 합니다.",
      gallery: [
        {
          src: "/assets/food/product-duo.jpg",
          alt: "두 판의 피자 이미지",
          title: "메뉴 선택이 빠릅니다",
          description: "대표 피자 두 판만으로도 메뉴 인상이 또렷하게 남습니다.",
          aspect: "landscape",
        },
        {
          src: "/assets/brand/franchise-poster.png",
          alt: "최강피자 가맹점 모집 포스터",
          title: "한 장으로 메시지가 정리됩니다",
          description: "가맹 상담과 차별화 포인트가 한 화면 안에서 읽힙니다.",
          aspect: "portrait",
        },
        {
          src: "/assets/food/product-spaghetti.png",
          alt: "최강피자 오븐 스파게티 이미지",
          title: "사이드 판매 그림이 붙습니다",
          description: "피자 외 메뉴가 추가되면 객단가 이야기도 자연스럽게 이어집니다.",
          aspect: "square",
        },
      ],
    },
    proof: {
      eyebrow: "브랜드 신뢰",
      title: "포장 상자와 모집 포스터가 가맹 메시지를 바로 받쳐줍니다.",
      description:
        "현장 인쇄물에서 이미 보이는 톤을 랜딩에 그대로 끌어와 설명보다 신뢰를 먼저 만들도록 구성했습니다.",
      bullets: [
        "본점 위치와 상담 번호가 명확합니다",
        "모집 포스터와 로고 톤이 같은 방향으로 이어집니다",
        "박스 노출만으로도 브랜드 회상이 가능합니다",
      ],
      media: [
        {
          src: "/assets/brand/logo-gold.jpg",
          alt: "최강피자 골드 로고 이미지",
          aspect: "square",
        },
        {
          src: "/assets/food/product-gratin.jpg",
          alt: "최강피자 치즈 그라탕 이미지",
          aspect: "portrait",
        },
        {
          src: "/assets/food/product-chicken.png",
          alt: "최강피자 구운 치킨 이미지",
          aspect: "landscape",
        },
      ],
    },
    franchise: {
      eyebrow: "가맹 포인트",
      title: "동네 장사 관점에서 읽히는 흐름을 더 전면에 둡니다.",
      description:
        "가게를 열었을 때 무엇이 먼저 보일지, 무엇이 함께 팔릴지, 상담은 어디로 이어질지를 한 장에 정리했습니다.",
      points: [
        {
          title: "이름이 빨리 읽힙니다",
          body: "상호가 상자와 화면에서 동시에 살아 브랜드 기억을 높입니다.",
        },
        {
          title: "포장 장면이 보입니다",
          body: "박스와 메뉴 컷이 같이 있어 운영 그림을 빠르게 설명할 수 있습니다.",
        },
        {
          title: "문의 유도가 자연스럽습니다",
          body: "가맹 관심이 생긴 순간 전화와 카카오로 바로 넘어가게 만듭니다.",
        },
      ],
      steps: [
        "상권 대화 시작",
        "메뉴 구성 상담",
        "운영 방식 정리",
        "즉시 문의 연결",
      ],
    },
    finalCta: {
      title: "동네에서 통하는 최강피자 운영 그림을 먼저 확인해보세요.",
      description:
        "브랜드 소개보다 매장 장면과 상담 동선을 앞세워, 가맹 관심이 실제 문의로 이어지게 만든 초안입니다.",
    },
  },
  {
    slug: "03",
    name: "Master Slice",
    label: "정제된 신뢰형",
    metaTitle: "Master Slice",
    metaDescription:
      "제품 완성도와 브랜드 신뢰를 먼저 세우는 최강피자 랜딩 초안. 정제된 톤과 느린 리듬으로 설계했습니다.",
    visualThesis:
      "화이트와 네이비를 중심으로 제품 질감과 로고 완성도를 차분하게 강조하는 버전.",
    contentPlan:
      "재료감과 로고를 먼저 보여주고, 브랜드 신뢰를 쌓은 뒤 상담 CTA로 이끄는 편집형 흐름입니다.",
    interactionThesis: [
      "히어로는 과한 이동 없이 천천히 확대되어 집중을 유지합니다.",
      "제품 컷은 느린 페이드와 짧은 상승만 사용해 정제된 인상을 유지합니다.",
      "하단 CTA는 강한 색 전환 없이 선명한 대비로 마감합니다.",
    ],
    motionPreset: "editorial",
    theme: {
      base: "#f7fafc",
      surface: "#eef4ff",
      surfaceAlt: "#ffffff",
      text: "#11224d",
      muted: "rgba(17, 34, 77, 0.72)",
      line: "rgba(17, 34, 77, 0.14)",
      accent: "#11224d",
      accentAlt: "#d1392e",
      accentText: "#f7fafc",
      heroOverlay:
        "linear-gradient(90deg, rgba(247,250,252,0.95) 0%, rgba(247,250,252,0.82) 36%, rgba(247,250,252,0.46) 60%, rgba(247,250,252,0.18) 100%)",
      heroGlow:
        "radial-gradient(circle at 16% 16%, rgba(224, 184, 44, 0.22), transparent 34%), radial-gradient(circle at 82% 18%, rgba(17, 34, 77, 0.12), transparent 32%)",
      lightHero: true,
    },
    hero: {
      eyebrow: "최강피자",
      title: "좋은 재료감과 선명한 브랜드를 한 장에 정리한 피자.",
      description:
        "자극보다는 완성도, 속도보다는 신뢰를 먼저 세우는 정제된 버전입니다. 파로 도우와 제품 질감을 차분하게 전면에 둡니다.",
      promise: "소화가 잘되는 맛있는 피자",
      badges: ["파로 도우 중심 메시지", "정제된 로고 톤", "브랜드 신뢰 우선"],
      image: "/assets/food/hero-master.jpg",
      imageAlt: "최강피자 대표 메뉴가 정리된 이미지",
      objectPosition: "70% center",
    },
    support: {
      eyebrow: "제품 디테일",
      title: "제품의 질감과 브랜드 문장을 더 천천히 보여줍니다.",
      description:
        "강한 자극 대신 제품의 결, 치즈감, 사이드 디테일이 오래 남게 만드는 구성을 택했습니다.",
      gallery: [
        {
          src: "/assets/food/product-gratin.jpg",
          alt: "최강피자 치즈 그라탕 이미지",
          title: "깊은 치즈감",
          description: "느리게 읽히는 질감이 브랜드 신뢰를 먼저 만듭니다.",
          aspect: "portrait",
        },
        {
          src: "/assets/food/product-bacon.jpg",
          alt: "최강피자 베이컨 그라탕 이미지",
          title: "완성도 중심 컷",
          description: "조금 더 차분한 톤으로 제품 집중도를 높입니다.",
          aspect: "square",
        },
        {
          src: "/assets/food/product-spaghetti.png",
          alt: "최강피자 스파게티 이미지",
          title: "브랜드 폭을 넓히는 사이드",
          description: "피자 밖 메뉴를 정제된 구도로 함께 보여줍니다.",
          aspect: "landscape",
        },
      ],
    },
    proof: {
      eyebrow: "브랜드 신뢰",
      title: "로고와 제품 컷을 정리해서 신뢰를 먼저 만듭니다.",
      description:
        "화이트 베이스 위에 네이비와 골드만 남겨 브랜드 정돈감을 높이고, 마지막에 상담으로 연결하는 방식입니다.",
      bullets: [
        "화이트와 네이비 중심의 정돈된 인상",
        "브랜드 문장과 제품 컷 사이 간격이 넉넉합니다",
        "가맹 상담과 공식 홈페이지 연결이 동시에 가능합니다",
      ],
      media: [
        {
          src: "/assets/brand/logo-gold.jpg",
          alt: "최강피자 골드 로고 이미지",
          aspect: "square",
        },
        {
          src: "/assets/food/product-vegetable.jpg",
          alt: "최강피자 야채 피자 이미지",
          aspect: "landscape",
        },
        {
          src: "/assets/brand/logo-square.png",
          alt: "최강피자 로고 이미지",
          aspect: "portrait",
        },
      ],
    },
    franchise: {
      eyebrow: "가맹 포인트",
      title: "브랜드 결을 먼저 본 뒤 상담으로 넘어가는 버전입니다.",
      description:
        "가맹 페이지가 꼭 시끄러울 필요는 없다는 전제로, 제품 완성도와 브랜드 톤을 먼저 신뢰로 바꾸는 데 집중했습니다.",
      points: [
        {
          title: "완성도 인상이 큽니다",
          body: "화이트 베이스와 절제된 컬러로 브랜드 결을 먼저 읽히게 합니다.",
        },
        {
          title: "제품 집중도가 높습니다",
          body: "개별 메뉴 컷의 질감이 살아 제품 신뢰를 먼저 세웁니다.",
        },
        {
          title: "상담 연결은 선명합니다",
          body: "하단 CTA 구간에서 전화와 카카오를 명확하게 다시 제시합니다.",
        },
      ],
      steps: [
        "브랜드 톤 확인",
        "대표 메뉴 이해",
        "상담 채널 선택",
        "가맹 문의 연결",
      ],
    },
    finalCta: {
      title: "정제된 인상으로 최강피자 가맹 상담을 시작해보세요.",
      description:
        "좋은 제품과 또렷한 브랜드 문장을 먼저 보여준 뒤, 마지막에 전화와 카카오로 짧게 연결하는 구조입니다.",
    },
  },
  {
    slug: "04",
    name: "Signal Wall",
    label: "포스터 월형",
    metaTitle: "Signal Wall",
    metaDescription:
      "브랜드명과 제품 컷을 포스터처럼 세워 한 번에 기억되게 만든 최강피자 랜딩 초안입니다.",
    visualThesis:
      "크림 바탕 위에 원형 피자 컷과 원색 면을 강하게 겹쳐 브랜드명이 먼저 박히게 만드는 포스터형 버전.",
    contentPlan:
      "브랜드 인상으로 시작해 세로 리듬의 메뉴 증거를 보여주고, 가맹 문의 이미지를 붙인 뒤 전화 CTA로 마감합니다.",
    interactionThesis: [
      "히어로의 원형 피자 컷을 느리게 이동시켜 포스터가 살아 있는 듯한 인상을 줍니다.",
      "세 개의 밴드 섹션은 스크롤마다 또렷하게 갈라져 각 메시지를 독립적으로 읽히게 만듭니다.",
      "마지막 CTA는 강한 적색 면으로 닫아 문의 동선을 확실히 남깁니다.",
    ],
    motionPreset: "punch",
    theme: {
      base: "#fbf5ea",
      surface: "#f7f0e3",
      surfaceAlt: "#fff7ec",
      text: "#142654",
      muted: "rgba(20, 38, 84, 0.72)",
      line: "rgba(20, 38, 84, 0.12)",
      accent: "#ef4338",
      accentAlt: "#17356d",
      accentText: "#fff7ec",
      heroOverlay:
        "linear-gradient(180deg, rgba(251,245,234,0.94) 0%, rgba(245,237,220,0.86) 100%)",
      heroGlow:
        "radial-gradient(circle at 18% 18%, rgba(255,255,255,0.86), transparent 34%), radial-gradient(circle at 78% 16%, rgba(245, 212, 74, 0.28), transparent 28%)",
      lightHero: true,
    },
    hero: {
      eyebrow: "가맹 문의 포스터형",
      title: "최강피자를 처음 봐도 바로 기억되는 한 장.",
      description:
        "브랜드명, 피자 원형 컷, 문의 동선을 포스터처럼 세워 첫 인상 자체가 문의 유도로 이어지게 만든 초안입니다.",
      promise: "브랜드가 먼저 남는 시작",
      badges: ["브랜드명 우선 구성", "포스터형 세로 리듬", "전화·카카오 즉시 연결"],
      image: "/assets/food/product-duo.jpg",
      imageAlt: "두 판의 피자가 보이는 대표 이미지",
      objectPosition: "center center",
    },
    support: {
      eyebrow: "브랜드 인상",
      title: "한 구획마다 한 메시지만 남기도록 세웁니다.",
      description:
        "섹션을 세 개의 독립 면으로 나누어 브랜드, 제품, 문의 포인트가 한꺼번에 섞이지 않게 정리합니다.",
      gallery: [
        {
          src: "/assets/food/product-combo.jpg",
          alt: "피자와 사이드가 함께 보이는 이미지",
          title: "메뉴 구성이 바로 읽힙니다",
          description: "피자와 사이드가 같이 보여 주문 그림이 빠르게 잡히는 구도입니다.",
          aspect: "portrait",
        },
        {
          src: "/assets/brand/franchise-inquiry-v4.png",
          alt: "최강피자 가맹문의 비주얼",
          title: "문의 메시지가 별도 면으로 서 있습니다",
          description: "브랜드 소개와 문의 유도가 분리되어 가맹 메시지가 더 또렷해집니다.",
          aspect: "portrait",
        },
        {
          src: "/assets/brand/logo-square.png",
          alt: "최강피자 로고 이미지",
          title: "로고가 마지막에 한 번 더 박힙니다",
          description: "상호와 로고를 크게 남겨 패키지와 전단 인상까지 같이 이어집니다.",
          aspect: "portrait",
        },
      ],
    },
    proof: {
      eyebrow: "브랜드 신호",
      title: "브랜드 문장보다 브랜드 인상이 먼저 남게 합니다.",
      description:
        "메뉴 컷, 문의 패널, 로고 노출을 각기 다른 역할로 분리해 짧은 스캔만으로도 무엇을 파는 브랜드인지 이해시키는 흐름입니다.",
      bullets: [
        "브랜드명과 제품 컷의 위계가 분명합니다",
        "문의용 시각 자산이 별도 패널로 준비되어 있습니다",
        "포스터형 구성이라 전단과 랜딩의 결이 자연스럽게 이어집니다",
      ],
      media: [
        {
          src: "/assets/food/product-duo.jpg",
          alt: "두 판의 피자가 보이는 이미지",
          aspect: "portrait",
        },
        {
          src: "/assets/food/product-bacon.jpg",
          alt: "베이컨 그라탕 이미지",
          aspect: "square",
        },
        {
          src: "/assets/brand/franchise-poster.png",
          alt: "최강피자 가맹 모집 포스터",
          aspect: "portrait",
        },
      ],
    },
    franchise: {
      eyebrow: "가맹 포인트",
      title: "설명보다 먼저 박히는 브랜드 인상으로 문의를 당깁니다.",
      description:
        "스크롤을 많이 하지 않아도 무엇이 강점인지, 어디로 문의하면 되는지, 어떤 브랜드 톤인지가 먼저 읽히는 구성을 전제로 했습니다.",
      points: [
        {
          title: "브랜드명이 먼저 남습니다",
          body: "첫 화면에서 상호와 대표 비주얼이 동시에 들어와 회상 포인트가 분명합니다.",
        },
        {
          title: "문의 장면이 자연스럽습니다",
          body: "가맹문의용 패널을 별도 면으로 둬 관심 순간에 바로 연결할 수 있습니다.",
        },
        {
          title: "전단 자산과 연결이 쉽습니다",
          body: "포스터형 톤이 오프라인 인쇄물과도 잘 이어져 브랜딩 축을 맞추기 좋습니다.",
        },
      ],
      steps: [
        "브랜드 첫인상 확인",
        "메뉴 인상 검토",
        "가맹 상담 채널 선택",
        "즉시 문의 연결",
      ],
    },
    finalCta: {
      title: "포스터 한 장 보듯 최강피자 가맹 문의를 시작해보세요.",
      description:
        "브랜드명, 제품 컷, 문의 번호를 같은 리듬으로 세워 관심이 생긴 순간 바로 전화와 카카오로 넘어가게 만드는 초안입니다.",
    },
  },
  {
    slug: "05",
    name: "Night Delivery",
    label: "야간 배달형",
    metaTitle: "Night Delivery",
    metaDescription:
      "배달 중심 브랜드의 속도감을 강하게 살린 최강피자 랜딩 초안. 어두운 톤과 수평 스트립으로 설계했습니다.",
    visualThesis:
      "야간 주문 화면 같은 어두운 배경 위에 뜨거운 제품 컷과 수평 리듬을 얹어 배달 브랜드의 속도감을 강조하는 버전.",
    contentPlan:
      "어두운 히어로에서 즉시 상담을 띄우고, 긴 수평 밴드로 메뉴와 운영 포인트를 보여준 뒤 양분형 CTA로 닫습니다.",
    interactionThesis: [
      "히어로 이미지는 느리게 확대되어 첫 화면의 밀도를 높입니다.",
      "상단 마이크로 스트립은 반복 이동으로 속도감을 만듭니다.",
      "중간 밴드는 리빌 애니메이션으로 한 줄씩 강하게 들어오게 구성합니다.",
    ],
    motionPreset: "steady",
    theme: {
      base: "#110d0d",
      surface: "#171111",
      surfaceAlt: "#0f0909",
      text: "#fff7eb",
      muted: "rgba(255, 247, 235, 0.72)",
      line: "rgba(255, 247, 235, 0.12)",
      accent: "#ffb546",
      accentAlt: "#ff6a40",
      accentText: "#110d0d",
      heroOverlay:
        "linear-gradient(90deg, rgba(17,13,13,0.94) 0%, rgba(17,13,13,0.84) 34%, rgba(17,13,13,0.54) 56%, rgba(17,13,13,0.22) 100%)",
      heroGlow:
        "radial-gradient(circle at 18% 18%, rgba(255,138,72,0.16), transparent 30%), radial-gradient(circle at 82% 18%, rgba(255,211,87,0.14), transparent 26%)",
      lightHero: false,
    },
    hero: {
      eyebrow: "배달 중심 브랜딩",
      title: "주문 화면처럼 빠르게 읽히는 최강피자 가맹 랜딩.",
      description:
        "배달과 포장 운영 그림이 먼저 떠오르도록 어두운 톤 위에 제품 장면과 즉시 문의 동선을 강하게 올린 버전입니다.",
      promise: "속도감 있게 읽히는 브랜드",
      badges: ["야간 배달 톤", "긴 수평 밴드 구성", "전화·카카오 즉시 연결"],
      image: "/assets/food/hero-street.png",
      imageAlt: "피자와 사이드가 함께 보이는 대표 이미지",
      objectPosition: "72% center",
    },
    support: {
      eyebrow: "수평 밴드",
      title: "스크롤할수록 운영 장면이 한 줄씩 더 붙습니다.",
      description:
        "길게 잘린 이미지 밴드와 짧은 카피를 겹쳐 배달 브랜드가 가진 속도감을 랜딩 전개 자체에 담았습니다.",
      gallery: [
        {
          src: "/assets/food/product-chicken.png",
          alt: "최강피자 치킨 사이드 이미지",
          title: "피자 밖 판매 구성이 보입니다",
          description: "사이드 메뉴가 붙으면 배달 주문 한 번에 그려지는 그림이 더 풍성해집니다.",
          aspect: "landscape",
        },
        {
          src: "/assets/food/product-gratin.jpg",
          alt: "치즈 그라탕 이미지",
          title: "짧은 스캔에도 객단가 구성이 읽힙니다",
          description: "메인 피자 외 판매 포인트가 단번에 이해되도록 묶은 장면입니다.",
          aspect: "landscape",
        },
        {
          src: "/assets/food/product-bacon.jpg",
          alt: "베이컨 그라탕 이미지",
          title: "어두운 톤에서도 제품 온도가 살아납니다",
          description: "빛나는 음식 컷이 브랜드의 생동감을 받아주는 역할을 합니다.",
          aspect: "landscape",
        },
      ],
    },
    proof: {
      eyebrow: "브랜드 신뢰",
      title: "속도감 있는 화면 안에서도 가맹 메시지는 분명하게 남깁니다.",
      description:
        "배달 중심 분위기를 밀어붙이되, 모집 포스터와 로고 자산을 함께 노출해 단순 프로모션이 아니라 브랜드 페이지라는 점을 분명하게 잡았습니다.",
      bullets: [
        "배달·포장 운영 그림이 빠르게 읽힙니다",
        "브랜드 로고와 가맹 메시지가 별도 근거로 서 있습니다",
        "빠른 전개 안에서도 문의 채널이 끝까지 유지됩니다",
      ],
      media: [
        {
          src: "/assets/food/product-combo.jpg",
          alt: "피자와 사이드 조합 이미지",
          aspect: "landscape",
        },
        {
          src: "/assets/brand/logo-square.png",
          alt: "최강피자 로고 이미지",
          aspect: "portrait",
        },
        {
          src: "/assets/brand/franchise-poster.png",
          alt: "최강피자 가맹 모집 포스터",
          aspect: "square",
        },
      ],
    },
    franchise: {
      eyebrow: "가맹 포인트",
      title: "배달 브랜드의 속도를 유지한 채 상담까지 바로 밀어줍니다.",
      description:
        "보는 리듬이 끊기지 않도록 긴 수평 구성을 유지하면서도, 마지막엔 문의 버튼과 번호를 가장 선명하게 남기는 구조입니다.",
      points: [
        {
          title: "배달형 인상이 강합니다",
          body: "첫 화면부터 배달 주문 장면이 연상돼 운영 방향이 빠르게 이해됩니다.",
        },
        {
          title: "짧은 문장으로도 전달됩니다",
          body: "긴 설명 대신 장면과 짧은 카피를 붙여 스캔 속도를 높입니다.",
        },
        {
          title: "마감 CTA가 강합니다",
          body: "밝은 양분형 마감으로 마지막 문의 동선을 또렷하게 마무리합니다.",
        },
      ],
      steps: [
        "브랜드 톤 확인",
        "배달형 구성 검토",
        "메뉴 조합 상담",
        "즉시 문의 연결",
      ],
    },
    finalCta: {
      title: "배달 중심의 최강피자 운영 그림을 바로 상담으로 연결해보세요.",
      description:
        "어두운 히어로와 수평 밴드로 속도를 만든 뒤, 마지막 구간에서 전화와 카카오를 선명하게 다시 제시하는 초안입니다.",
    },
  },
  {
    slug: "06",
    name: "Dough Story",
    label: "브랜드 스토리형",
    metaTitle: "Dough Story",
    metaDescription:
      "파로 도우와 브랜드 결을 중심으로 편집형 흐름을 만든 최강피자 랜딩 초안입니다.",
    visualThesis:
      "밝은 화이트 바탕과 초록 포인트 위에 편집형 이미지 흐름을 얹어 파로 도우와 브랜드 서사를 차분하게 확장하는 버전.",
    contentPlan:
      "넓은 이미지 밴드로 시작해 도우와 메뉴 이야기를 세로 흐름으로 풀고, 브랜드 신뢰를 쌓은 뒤 정갈한 CTA로 마무리합니다.",
    interactionThesis: [
      "히어로 이미지는 아주 느리게 떠올라 편집형 리듬을 만듭니다.",
      "본문은 좌우가 번갈아 전환되며 긴 읽기 흐름을 지루하지 않게 유지합니다.",
      "마지막 CTA는 군더더기 없이 번호와 채널만 또렷하게 남깁니다.",
    ],
    motionPreset: "editorial",
    theme: {
      base: "#fdfdf8",
      surface: "#f2f7ef",
      surfaceAlt: "#ffffff",
      text: "#173255",
      muted: "rgba(23, 50, 85, 0.72)",
      line: "rgba(23, 50, 85, 0.12)",
      accent: "#173255",
      accentAlt: "#6f9854",
      accentText: "#fdfdf8",
      heroOverlay:
        "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(246,251,241,0.9) 42%, rgba(253,253,248,1) 100%)",
      heroGlow:
        "radial-gradient(circle at 22% 18%, rgba(111, 152, 84, 0.14), transparent 30%), radial-gradient(circle at 82% 10%, rgba(217, 74, 61, 0.1), transparent 26%)",
      lightHero: true,
    },
    hero: {
      eyebrow: "파로 도우 중심 랜딩",
      title: "파로 도우에서 시작해 브랜드 신뢰로 이어지는 한 장.",
      description:
        "강한 자극보다 브랜드 결과 재료감을 먼저 세우고 싶은 경우를 위한 초안입니다. 도우, 메뉴, 로고가 한 줄의 이야기처럼 이어집니다.",
      promise: "파로 도우에서 시작하는 브랜드 이야기",
      badges: ["밝은 편집형 구성", "도우 메시지 우선", "전화·카카오 간결 연결"],
      image: "/assets/food/hero-master.jpg",
      imageAlt: "최강피자 대표 메뉴 이미지",
      objectPosition: "68% center",
    },
    support: {
      eyebrow: "도우 스토리",
      title: "도우와 메뉴를 천천히 읽게 만드는 편집형 흐름입니다.",
      description:
        "가맹 페이지도 꼭 소리칠 필요는 없다는 전제로, 재료와 브랜드 문장이 신뢰로 이어지도록 세로 전개를 더 길게 잡았습니다.",
      gallery: [
        {
          src: "/assets/food/product-vegetable.jpg",
          alt: "야채 피자 이미지",
          title: "재료감이 먼저 보입니다",
          description: "토핑과 표면 질감이 살아 있어 브랜드의 결을 차분하게 설득합니다.",
          aspect: "landscape",
        },
        {
          src: "/assets/food/product-spaghetti.png",
          alt: "오븐 스파게티 이미지",
          title: "사이드까지 톤을 맞춥니다",
          description: "피자 외 메뉴도 같은 세계관 안에 있다는 인상을 만들어줍니다.",
          aspect: "landscape",
        },
        {
          src: "/assets/brand/franchise-inquiry-v4.png",
          alt: "최강피자 가맹문의 비주얼",
          title: "문의 메시지는 마지막에 정리합니다",
          description: "브랜드 이야기를 충분히 본 뒤에도 문의 동선이 흐려지지 않게 후반에 다시 세웁니다.",
          aspect: "landscape",
        },
      ],
    },
    proof: {
      eyebrow: "브랜드 신뢰",
      title: "로고와 메뉴를 정갈하게 배치해 마지막 인상을 정리합니다.",
      description:
        "화이트 기반 편집형 구조 안에 로고와 메뉴를 분리 배치해 브랜드가 정돈되어 있다는 인상을 먼저 만들고, 그 뒤 문의를 받는 흐름입니다.",
      bullets: [
        "파로 도우 메시지가 과하지 않게 유지됩니다",
        "밝은 바탕에서도 제품과 로고의 대비가 선명합니다",
        "문의 채널은 간결하지만 끝까지 또렷하게 남습니다",
      ],
      media: [
        {
          src: "/assets/brand/logo-gold.jpg",
          alt: "최강피자 골드 로고 이미지",
          aspect: "portrait",
        },
        {
          src: "/assets/food/product-gratin.jpg",
          alt: "치즈 그라탕 이미지",
          aspect: "square",
        },
        {
          src: "/assets/food/product-combo.jpg",
          alt: "피자와 사이드 조합 이미지",
          aspect: "landscape",
        },
      ],
    },
    franchise: {
      eyebrow: "가맹 포인트",
      title: "브랜드 톤을 먼저 신뢰로 바꾼 뒤 문의로 이어갑니다.",
      description:
        "제품 질감과 로고 정돈감이 먼저 설득력을 만들고, 마지막 CTA는 최소한의 정보만 남겨 더 고급스럽게 마감하는 구조입니다.",
      points: [
        {
          title: "차분한 신뢰가 강합니다",
          body: "과한 자극 없이도 브랜드의 완성도를 느끼게 해주는 흐름입니다.",
        },
        {
          title: "도우 메시지가 잘 어울립니다",
          body: "파로 도우 중심의 차별화 포인트를 과장 없이 설득력 있게 붙일 수 있습니다.",
        },
        {
          title: "문의 동선은 가볍게 남깁니다",
          body: "마지막 구간에서 번호와 카카오만 선명하게 보여 전환을 단순하게 만듭니다.",
        },
      ],
      steps: [
        "도우 메시지 확인",
        "대표 메뉴 이해",
        "브랜드 신뢰 검토",
        "가맹 문의 연결",
      ],
    },
    finalCta: {
      title: "파로 도우의 차별화와 함께 최강피자 가맹 상담을 시작해보세요.",
      description:
        "브랜드 결을 먼저 충분히 보여준 뒤, 마지막 구간에서 전화와 카카오만 짧게 남겨 정돈된 인상으로 마무리하는 초안입니다.",
    },
  },
];

export function getConceptBySlug(slug: string) {
  return landingConcepts.find((concept) => concept.slug === slug);
}
