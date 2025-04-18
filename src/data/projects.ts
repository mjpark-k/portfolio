import { Project } from '@/types/project';

/**
[
  {
    video: '/videos/moving.mp4',
    title: 'moving',
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
      'Vercel',
      'GitHub',
    ],
    contributions: [
      {
        title: '반응형 최적화',
        description:
          '모바일에서 사용자 경험을 고려하여 디자인을 변경하고 최적화함',
      },
    ],
    contributionImage: [
      '/images/pending.png',
      '/images/review.png',
      '/images/driver_page.png',
      '/images/404.png',
    ],
    architectureImage: '/images/moving_arch.png',
    troubleShooting: [
      {
        problem: '페이지를 이동하면 타이머가 리셋되는 문제가 발생',
        solution: 'Zustand를 사용하여 상태를 전역적으로 관리하여 해결',
        link: 'https://velog.io/@pmj9498/%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-Zustand%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC',
      },
      {
        problem: '문제입니다.2',
        solution: '해결책입니다.2',
      },
    ],
  },
];
 */

export const projects: Project[] = [
  {
    video: '/videos/moving.mp4',
    title: 'moving',
    summary: '이사 소비자와 이사 전문가 매칭 서비스',
    description:
      '소비자가 원하는 서비스와 주거 정보를 입력하면 이사 전문가들이 견적을 제공하고 사용자가 이를 바탕으로 이사 전문가를 선정할 수 있는 매칭 서비스를 제작합니다. 이를 통해 소비자는 견적과 이사 전문가의 이전 고객들로부터의 후기를 확인하며 신뢰할 수 있는 전문가를 선택할 수 있고, 소비자와 이사 전문가 간의 간편한 매칭이 가능합니다.',
    duration: '2024.11.25 ~ 2025.01.13',
    isTeam: true,
    teamRole: '프론트엔드 5명, 백엔드 3명',
    github: 'https://github.com/mjpark-k/moving-fe',
    demo: 'https://moving-service-psi.vercel.app/',
    blog: 'd',
    techStack: [
      'React',
      'TypeScript',
      'CSS Modules',
      'React-Query',
      'Vercel',
      'GitHub',
    ],
    contributions: [
      {
        title: '반응형 최적화',
        description:
          '모바일에서 사용자 경험을 고려하여 디자인을 변경하고 최적화함',
      },
    ],
    contributionImage: [
      '/images/pending.png',
      '/images/review.png',
      '/images/driver_page.png',
      '/images/404.png',
    ],
    // architectureImage: '/images/moving_arch.png',
    troubleShooting: [
      {
        problem: '페이지를 이동하면 타이머가 리셋되는 문제가 발생',
        solution: 'Zustand를 사용하여 상태를 전역적으로 관리하여 해결',
        link: 'https://velog.io/@pmj9498/%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-Zustand%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC',
      },
      {
        problem: '문제입니다.',
        solution: '해결책입니다.',
      },
    ],
  },
  {
    video: '/videos/favorite-photo.mp4',
    title: '최애의 포토',
    summary: '디지털 포토 카드의 등록과 거래',
    description: 'd', // 상세 설명
    techStack: [], // 사용 기술 스택
    duration: '', // 기간
    teamRole: '', // 팀 역할 분배
    isTeam: true, // 내가 맡은 부분
    github: '', // 깃허브 링크
    demo: '', // 데모 링크
    blog: '', // 블로그 링크
    contributions: [{ title: 's', description: 's' }],
    contributionImage: ['/images/404.png'], // 기여 이미지
    architectureImage: '', // 아키텍처 이미지
    // 문제 해결 과정
    troubleShooting: [
      {
        problem: '페이지를 이동하면 타이머가 리셋되는 문제가 발생',
        solution: 'Zustand를 사용하여 상태를 전역적으로 관리하여 해결',
        link: 'https://velog.io/@pmj9498/%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-Zustand%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC',
      },
    ],
  },
  {
    video: '/videos/view-my-startup.mp4',
    title: 'View My Startup',
    summary: '스타트업 정보 확인 및 모의 투자 서비스',
    description: 'd', // 상세 설명
    techStack: [], // 사용 기술 스택
    duration: '', // 기간
    teamRole: '', // 팀 역할 분배
    isTeam: true, // 내가 맡은 부분
    github: '', // 깃허브 링크
    demo: '', // 데모 링크
    blog: 'https://velog.io/@pmj9498/%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-Zustand%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC', // 블로그 링크
    contributions: [{ title: 's', description: 's' }],
    contributionImage: ['/images/404.png'], // 기여 이미지
    architectureImage: '', // 아키텍처 이미지
    // 문제 해결 과정
    troubleShooting: [
      {
        problem: '페이지를 이동하면 타이머가 리셋되는 문제가 발생',
        solution: 'Zustand를 사용하여 상태를 전역적으로 관리하여 해결',
        link: '',
      },
      {
        problem: '문제입니다.2',
        solution: '해결책입니다.2',
      },
    ],
  },
];
