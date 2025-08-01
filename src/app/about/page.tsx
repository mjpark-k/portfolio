import AboutActivity from '@/components/About/AboutActivity';
import AboutContainer from '@/components/About/AboutContainer';
import AboutEducation from '@/components/About/AboutEducation';
import AboutSkill from '@/components/About/AboutSkill';
import AboutWorkExperience from '@/components/About/AboutWorkExperience';
import FadeInUp from '@/components/FadeInUp';

export default function About() {
  return (
    <div className="min-h-screen px-10 py-25 flex items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col gap-5 ">
        <FadeInUp className="w-full" delay={0}>
          <AboutContainer title="About Me">
            안녕하세요! 저는 프론트엔드 개발자 박명준입니다. <br /> 협업과
            성장을 중요하게 생각하며, 항상 사용자 경험을 고려하여 그것을
            바탕으로 개발합니다.
          </AboutContainer>
        </FadeInUp>
        <FadeInUp className="w-full" delay={1}>
          <AboutContainer title="Work Experience">
            <AboutWorkExperience />
          </AboutContainer>
        </FadeInUp>
        <FadeInUp className="w-full" delay={2}>
          <AboutContainer title="Education">
            <AboutEducation />
          </AboutContainer>
        </FadeInUp>
        <FadeInUp className="w-full" delay={3}>
          <AboutContainer title="Activity">
            <AboutActivity />
          </AboutContainer>
        </FadeInUp>
        <FadeInUp className="w-full" delay={4}>
          <AboutContainer title="Skills">
            <AboutSkill />
          </AboutContainer>
        </FadeInUp>
      </div>
    </div>
  );
}
