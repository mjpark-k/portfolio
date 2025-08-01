import AboutList from './AboutList';

const career = [
  {
    title: '펙스퍼트 (인턴)',
    description:
      '자폐성 장애인을 위한 보완대체 의사소통(AAC) 어플리케이션 개발',
    duration: '2025.07 ~ 2025.08',
    contents: 'React Native 기반 어휘 라이브러리 기능 및 UI 개발 담당',
  },
];

export default function AboutWorkExperience() {
  return <AboutList data={career} />;
}
