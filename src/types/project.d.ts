export interface Project {
  video: string; // 영상
  title: string; // 프로젝트 제목
  summary: string; // 간단한 요약
  description: string; // 상세 설명
  duration: string; // 기간
  isTeam: boolean; // 팀 프로젝트인지 개인 프로젝트인지
  teamRole?: string; // 팀 역할 분배
  github?: string; // 깃허브 링크
  demo?: string; // 데모 링크
  blog?: string; // 블로그 링크
  techStack: string[]; // 사용 기술 스택
  // 기여 내용
  contributions: {
    title: string;
    description: string;
  }[];
  contributionImage: string[]; // 기여 이미지
  architectureImage?: string; // 아키텍처 이미지
  // 문제 해결 과정
  troubleShooting?: {
    problem: string;
    solution: string;
    link?: {
      url: string; // 링크
      isBlog: boolean; // 블로그 링크인지 여부
    }; // 문제 해결 과정 링크
  }[];
}
