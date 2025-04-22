import { Project } from '@/types/project';
/**
[
  {
    video: '',
    title: '',
    summary: '',
    description: '',
    duration: '',
    isTeam: true,
    teamRole: '',
    github: '',
    demo: '',
    blog: '',
    techStack: ['React'],
    contributions: [
      {
        title: '',
        description: '',
      },
    ],
    contributionImage: ['/images/pending.png'],
    troubleShooting: [
      {
        problem: '',
        solution: '',
        link: '',
      },
      {
        problem: '',
        solution: '',
      },
    ],
    architectureImage: '/images/moving_arch.png',
  },
];
 */

export const projects: Project[] = [
  {
    video: '/videos/portfolio.mp4',
    title: 'Portfolio',
    summary: '나만의 포트폴리오를 위한 웹사이트 개발',
    description:
      'Notion이나 다른 형태로 포트폴리오를 만들고 관리하는 것 보다 프론트엔드 개발자라면 자신의 포트폴리오를 웹사이트 형태로 만들어 관리하는 것이 더 좋다고 생각했습니다. 그리고 포트폴리오에 주로 사용되는 framer-motion을 활용하여 애니메이션 효과를 주고, 다양한 라이브러리를 사용하여 포트폴리오를 제작하는 것이 도움도 될 수 있을 것 같아 포트폴리오 웹사이트를 제작하게 되었습니다.',
    duration: '2025.04.12 ~ 2025.04.21',
    isTeam: false,
    teamRole: '',
    github: 'https://github.com/mjpark-k/portfolio',
    demo: 'https://mjpark-portfolio.vercel.app/',
    blog: '',
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer-Motion',
      'Vercel',
      'GitHub',
    ],
    contributions: [
      {
        title:
          '포트폴리오 특성을 고려해 스타일링을 위해 다양한 라이브러리 도입',
        description:
          '애니메이션을 많이 활용해보고자 framer-motion을 활용하여 애니메이션 효과를 주고, lucide-react를 활용하여 아이콘을 사용했습니다.또한 홈페이지(메인페이지)에 이팩트를 주기 위해 typewriter-effect를 활용하여 타이핑 효과를 주었습니다.',
      },
      {
        title: '비디오 자동 재생 및 hover 시 재생/정지 기능 구현',
        description:
          '간편하게 동영상을 보여주기 위해 Project를 보여주는 페이지에서 마우스를 hover하면 비디오가 재생되고 벗어나면 정지하는 기능을 구현했습니다. 그리고 클릭하여 모달을 열면 비디오가 자동으로 재생되도록 구현했습니다.',
      },
      {
        title: 'GitHub Action을 활용한 CI/CD 구축',
        description:
          'Vercel로 배포를 하면 자동으로 배포가 되지만, GitHub Action을 통한 자동 배포를 구축해보고 싶어 GitHub Action을 활용하여 CI/CD를 구축을 경험해봤습니다.',
      },
    ],
    contributionImage: [
      '/images/portfolio1.png',
      '/images/portfolio2.png',
      '/images/portfolio3.png',
      '/images/portfolio4.png',
    ],
    troubleShooting: [
      {
        problem:
          'Next.js를 활용한 이유가 SSG를 활용해 SEO 최적화를 위해서였는데, 클라이언트 훅(useState, useEffect 등)을 사용해야만 해서 SSG가 불가능해지는 문제가 발생했습니다.',
        solution:
          'Next.js 공식 문서와 내부 렌더링 흐름을 파악한 후 클라이언트 컴포넌트가 내부에서만 호출될 경우, Next.js는 해당 페이지를 정적 페이지로 판단하여 HTML을 미리 생성할 수 있다는 것을 알고 page는 서버 컴포넌트로 작성하고, 내부에서 클라이언트 컴포넌트를 호출하는 구조로 만들어서 해결했습니다.',
        // link: {
        //   url: 'https://github.com/moving-team/moving-fe/blob/main/src/components/modal/ModalContainer.tsx',
        //   isBlog: false,
        // },
      },
    ],
    // architectureImage: '/images/moving_arch.png',
  },
  {
    video: '/videos/moving.mp4',
    title: 'Moving',
    summary: '이사 소비자와 이사 전문가 매칭 서비스',
    description:
      '소비자가 원하는 서비스와 주거 정보를 입력하면 이사 전문가들이 견적을 제공하고 사용자가 이를 바탕으로 이사 전문가를 선정할 수 있는 매칭 서비스를 제작합니다. 이를 통해 소비자는 견적과 이사 전문가의 이전 고객들로부터의 후기를 확인하며 신뢰할 수 있는 전문가를 선택할 수 있고, 소비자와 이사 전문가 간의 간편한 매칭이 가능합니다.',
    duration: '2024.11.25 ~ 2025.01.13',
    isTeam: true,
    teamRole: '프론트엔드 5명, 백엔드 3명',
    github: 'https://github.com/mjpark-k/moving-fe',
    demo: 'https://moving-service-psi.vercel.app/',
    blog: '',
    techStack: [
      'React',
      'TypeScript',
      'CSS Modules',
      'React-Query',
      'Axios',
      'Vercel',
      'GitHub',
    ],
    contributions: [
      {
        title: '다양한 공통 컴포넌트 제작',
        description:
          '많은 빈도로 사용되는 컴포넌트를 여러 상황을 고려하여 사용가능하도록 구현 (Tab, Modal, Button 등)',
      },
      {
        title: '반응형 UI 구현',
        description:
          '다양한 해상도와 디바이스에서도 사용자 경험을 유지하도록 Media Query를 활용해 레이아웃과 컴포넌트를 반응형으로 구현',
      },
      {
        title: 'API 연동 구조 모듈화',
        description:
          'React Query와 Axios 기반 API 요청 로직을 모듈화하여 컴포넌트에서의 로직 중복을 제거하고, 재사용 가능한 데이터 패칭 구조를 구축',
      },
    ],
    contributionImage: [
      '/images/pending.png',
      '/images/review.png',
      '/images/driver_page.png',
      '/images/404.png',
    ],
    troubleShooting: [
      {
        problem:
          '공통 컴포넌트를 여러 상황에서 재사용하려다 보니 다양한 조건에 따라 클래스를 조합해야 했고, 이로 인해 코드가 복잡하고 가독성이 떨어지는 문제가 발생했습니다.',
        solution:
          'classnames 라이브러리를 도입하여 조건부 클래스를 깔끔하게 관리함으로써, 다양한 조건에서도 재사용 가능한 컴포넌트를 보다 쉽게 구현할 수 있도록 개선했습니다.',
        link: {
          url: 'https://github.com/moving-team/moving-fe/blob/main/src/components/modal/ModalContainer.tsx',
          isBlog: false,
        },
      },
      {
        problem:
          '공통 컴포넌트인 모달을 구현할 때, 데스크탑과 동일한 형태의 모달이 모바일에서는 화면 중앙에 작은 모달이 뜨는 UI가 사용자 경험을 저해한다고 생각했습니다. 특히 리뷰 작성과 같은 입력 중심의 기능에서 사용자 인터렉션이 떨어지는 문제가 발생할 것 같았습니다.',
        solution:
          '사용자 환경에 따라 최적화된 모달 UX를 제공하기 위해 반응형 CSS 미디어 쿼리를 활용하여 데스크탑과 달리 모바일에 적합한 화면 하단에서 올라오는 풀스크린 바텀시트 모달로 변경되도록 구현하였습니다. ',
        link: {
          url: 'https://github.com/moving-team/moving-fe/blob/main/src/components/modal/ModalContainer.module.css',
          isBlog: false,
        },
      },
    ],
    // architectureImage: '/images/moving_arch.png',
  },

  {
    video: '/videos/favorite-photo.mp4',
    title: '최애의 포토',
    summary: '디지털 포토 카드의 등록과 거래',
    description:
      '자신이 좋아하는 아이돌이나 스포츠 스타, 그림, 풍경 등 디지털 포토카드를 손쉽게 사고 팔 수 있는 공간으로, 특별한 커뮤니티를 제공합니다. 자신이 좋아하는 사진이나 이미지를 포토카드로 만들 수 있고, 그걸 다른 사람들과 거래 및 교환이 가능하여 나만의 포토 컬렉션을 완성할 수 있어 흥미를 유발하는 서비스입니다.', // 상세 설명
    techStack: [
      'React',
      'Next.js',
      'CSS Modules',
      'React-Query',
      'Axios',
      'Zustand',
      'React Hook Form',
      'Vercel',
    ], // 사용 기술 스택
    duration: '2024.10.08 ~ 2024.10.31', // 기간
    teamRole: '프론트엔드 3명, 백엔드 2명', // 팀 역할 분배
    isTeam: true, // 내가 맡은 부분
    github: 'https://github.com/mjpark-k/1-FavoritePhoto-1-FE', // 깃허브 링크
    demo: '', // 데모 링크
    blog: 'https://velog.io/@pmj9498/%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-Zustand%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC', // 블로그 링크
    contributions: [
      {
        title: '주요 공통 컴포넌트 구현 및 반복되는 부분을 컴포넌트화',
        description:
          'Navbar, Profile Dropdown 등 주요 공통 컴포넌트 구현 및 반복되는 부분을 컴포넌트화하여 코드의 가독성과 재사용성을 높였습니다. 반응형 UI도 구현하였습니다.',
      },
      {
        title: 'SSR을 활용한 초기 데이터 선 로딩',
        description:
          '필요한 카드 및 교환 데이터가 많을 것 같아 Next.js의 getServerSideProps를 사용하여 페이지 진입 시 필요한 카드 및 교환 데이터를 서버 측에서 미리 받아옴으로써 초기 로딩 속도를 개선했습니다.',
      },
      {
        title: '타이머를 통해 깜짝 모달 구현',
        description:
          '정해진 시간이 지나면 깜짝 모달이 등장하고 그 모달에서 랜덤으로 포인트를 획득하는 기능을 구현했습니다. 제일 맡고 싶었던 부분으로 이 부분을 구현하면서 여러 문제와 고민, 해결 과정을 통해 상태에 대해 자세하게 알게 됐습니다.',
      },
    ],
    contributionImage: [
      '/images/sell.png',
      '/images/editmodal.png',
      '/images/pointmodal.png',
    ], // 기여 이미지
    architectureImage: '', // 아키텍처 이미지
    // 문제 해결 과정
    troubleShooting: [
      {
        problem:
          '정해진 시간이 지나면 깜짝 모달이 등장하고 그 모달에서 랜덤으로 포인트를 획득하는 기능을 구현하고 있었는데, 타이머 상태가 특정 페이지에서만 관리되어, 페이지 이동 시 타이머 상태가 초기화되어 모달이 재작동하지 않는 문제가 발생했습니다.',
        solution:
          'Zustand를 사용하여 타이머 관련 상태(pointModal, timeoutId)를 전역으로 관리하도록 하여, 페이지 간 이동 시에도 타이머 상태가 유지되도록 개선했습니다.',
        link: {
          url: 'https://velog.io/@pmj9498/%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-Zustand%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC',
          isBlog: true,
        },
      },
    ],
  },
  {
    video: '/videos/view-my-startup.mp4',
    title: 'View My Startup',
    summary: '스타트업 정보 확인 및 모의 투자 서비스',
    description:
      '최근에는 벤처 캐피탈에 비해 개인 투자자들의 스타트업에 대한 관심이 증가하고 있습니다. 하지만 스타트업에 관한 정보 접근성에는 여전히 큰 격차가 존재합니다. 이러한 상황을 개선하기 위해, 개인 투자자들이 스타트업을 선택하여 그들의 누적 투자 금액, 매출액 등을 확인하고 비교할 수 있는 모의 투자 서비스를 제작합니다.', // 상세 설명
    techStack: ['React', 'Axios', 'React Router', 'CSS Modules'], // 사용 기술 스택
    duration: '2024.08.13 ~ 2024.09.03', // 기간
    teamRole: '프론트엔드 3명, 백엔드 1명', // 팀 역할 분배
    isTeam: true, // 내가 맡은 부분
    github: 'https://github.com/mjpark-k/1-ViewMyStartup-5-FE', // 깃허브 링크
    demo: '', // 데모 링크
    blog: '', // 블로그 링크
    contributions: [
      {
        title: 'nav 구현',
        description:
          'NavLink의 active style을 통해 하이라이트 표현을 구현했고, 반응형 UI를 고려하여 모바일에서도 사용자가 편리하게 사용할 수 있도록 구현했습니다.',
      },
      {
        title: '나의 기업 및 비교 기업 선택 기능 구현',
        description:
          '모달 내 keyword 검색 기능을 추가하여 원하는 기업을 쉽게 찾을 수 있도록 하였고, 버튼 클릭 시 조건에 따라 적절한 상태 처리를 통해 사용자 경험을 개선하였습니다. 또한, Axios를 통해 나의 기업과 비교 기업을 선택하고 서버와 연동되는 기능을 구현하였습니다.',
      },
    ],
    contributionImage: [
      '/images/startup1.png',
      '/images/startup2.png',
      '/images/startup3.png',
      '/images/startup4.png',
    ], // 기여 이미지
    architectureImage: '', // 아키텍처 이미지
  },
];
