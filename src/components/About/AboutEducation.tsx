import AboutList from './AboutList';

// Education이 추가되면 여기다 추가하면 된다.
const eduData = [
  {
    title: '코드잇',
    duration: '2024.06 ~ 2025.01',
    contents: '클라우드 기반 풀스택 엔지니어 부트캠프 수료',
  },
  {
    title: '제주대학교',
    duration: '2018.03 ~ 2024.02',
    contents: '소프트웨어학부 컴퓨터공학전공 졸업',
  },
];

export default function AboutEducation() {
  return <AboutList data={eduData} />;
}
