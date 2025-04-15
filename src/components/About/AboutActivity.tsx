import AboutList from './AboutList';

// Activity가 추가되면 여기다 추가하면 된다.
const activityData = [
  {
    title: 'ByteMe 개발자 스터디 모임',
    duration: '2024.12 ~ now',
    contents:
      '정해진 분량의 책을 읽고, 주 3회 토론 형식의 스터디를 진행 및 프론트엔드 관련 지식에 대한 인사이트 공유',
  },
];

export default function AboutActivity() {
  return <AboutList data={activityData} />;
}
