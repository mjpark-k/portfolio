import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  openModal: () => void;
}

export default function ProjectCard({ project, openModal }: ProjectCardProps) {
  const { video, title, summary } = project;

  return (
    <div
      className='w-full rounded-2xl bg-[color:var(--highlight)] shadow-lg transition-transform duration-300 hover:-translate-y-5 hover:text-[color:var(--accent)] cursor-pointer'
      onClick={openModal}
    >
      {video && (
        <video
          src={video}
          className='w-full h-100 object-cover rounded-t-2xl'
          muted
          playsInline
          preload='metadata'
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }}
        />
      )}
      <div className='p-4 flex flex-col gap-2'>
        <h1 className='text-xl font-bold md:text-2xl'>{title}</h1>
        <p className='text-sm text-[color:var(--muted)]'>{summary}</p>
      </div>
    </div>
  );
}
