import type { Project } from '@/types/project';
import FadeInUp from '../FadeInUp';
import ProjectCard from './ProjectCard';

interface ProjectCardListProps {
  projects: Project[];
  openModal: (project: Project) => void;
}

export default function ProjectCardList({
  projects,
  openModal,
}: ProjectCardListProps) {
  return (
    <div className='w-full max-w-7xl flex flex-col gap-8 items-center'>
      <h1 className='self-start text-4xl font-bold text-[color:var(--accent)]'>
        Projects
      </h1>
      <div className='w-full max-w-7xl grid grid-cols-1 gap-10 lg:grid-cols-2'>
        {projects.map((project, idx) => (
          <FadeInUp key={project.title} className='w-full' delay={idx}>
            <ProjectCard
              project={project}
              openModal={() => openModal(project)}
            />
          </FadeInUp>
        ))}
      </div>
    </div>
  );
}
