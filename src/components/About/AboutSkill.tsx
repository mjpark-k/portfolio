import AboutSkillList from './AboutSkillList';

const languageSkills = [
  { name: 'HTML5', src: '/icons/ic_html.svg' },
  { name: 'CSS3', src: '/icons/ic_css.svg' },
  { name: 'JavaScript', src: '/icons/ic_javascript.svg' },
  { name: 'TypeScript', src: '/icons/ic_typescript.svg' },
];

const FrontendSkills = [
  { name: 'React', src: '/icons/ic_react.svg' },
  { name: 'Next.js', src: '/icons/ic_nextjs.svg' },
  { name: 'Tailwind CSS', src: '/icons/ic_tailwindcss.svg' },
  { name: 'React-Query', src: '/icons/ic_reactquery.svg' },
];

const etcSkills = [
  { name: 'Git', src: '/icons/ic_git.svg' },
  { name: 'Github', src: '/icons/ic_github.svg' },
];

export default function AboutSkill() {
  return (
    <div className='flex flex-col gap-10 w-full'>
      <AboutSkillList title='- Languages.' skillList={languageSkills} />
      <AboutSkillList title='- Frontend.' skillList={FrontendSkills} />
      <AboutSkillList title='- ETC.' skillList={etcSkills} />
    </div>
  );
}
