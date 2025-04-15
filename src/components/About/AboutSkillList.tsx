import Image from 'next/image';

interface Skill {
  name: string;
  src: string;
}

interface SkillListProps {
  title: string;
  skillList: Skill[];
}

export default function AboutSkillList({ title, skillList }: SkillListProps) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='text-xl font-bold'>{title}</div>
      <div className='grid grid-cols-4 gap-5 items-center center'>
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className='group flex items-center gap-5 relative'
          >
            <Image src={skill.src} alt={skill.name} width={50} height={50} />
            <span className='text-lg text-[color:var(--muted)] opacity-0 translate-x-[-95px] group-hover:opacity-100 group-hover:translate-x-0 transition duration-300'>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
