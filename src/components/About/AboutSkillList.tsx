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
      <div className='grid grid-cols-4 gap-5 items-center'>
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className='group flex flex-col items-center gap-2 relative lg:flex-row lg:justify-normal lg:gap-3'
          >
            <div className='w-[65px] h-[65px] flex items-center justify-center bg-[color:var(--border)] rounded-xl hover:scale-110 transition duration-300'>
              <Image src={skill.src} alt={skill.name} width={40} height={40} />
            </div>
            <span className='text-xs text-[color:var(--muted)] opacity-0 translate-x-[-95px] group-hover:opacity-100 group-hover:translate-x-0 transition duration-300  whitespace-nowrap md:text-base lg:text-lg lg:whitespace-normal'>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
