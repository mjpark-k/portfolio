import type { Project } from '@/types/project';
import DetailVideo from './DetailVideo';
import DetailMyPartImg from './DetailMyPartImg';
import Image from 'next/image';
import ProjectLinks from './ProjectLinks';

interface DetailProjectProps {
  selectedProject: Project;
}

export default function DetailProject({ selectedProject }: DetailProjectProps) {
  const {
    video,
    title,
    description,
    duration,
    isTeam,
    teamRole,
    github,
    demo,
    blog,
    techStack,
    contributions,
    contributionImage,
    architectureImage,
    troubleShooting,
  } = selectedProject;

  return (
    <>
      <h2 className='text-3xl font-bold text-[color:var(--accent)]'>{title}</h2>
      <ProjectLinks github={github} demo={demo} blog={blog} />
      <div
        className='flex flex-col gap-1 text-[color:var(--muted)] 
      md:flex-row md:gap-10'
      >
        <span>{duration}</span>
        <span>{isTeam ? `팀 프로젝트` : `개인 프로젝트`}</span>
        {isTeam && <span>{teamRole}</span>}
      </div>
      <p>{description}</p>
      <div className='flex flex-col gap-5 lg:gap-10'>
        {/* 비디오 및 기술 스택 */}
        <div className='flex flex-col gap-10 lg:flex-row'>
          <div className='w-full lg:flex-1'>
            <DetailVideo video={video} />
          </div>
          <div className='w-full flex flex-col gap-5 lg:flex-col lg:flex-1 lg:items-center lg:justify-center'>
            <span className='text-2xl text-[color:var(--accent)] font-bold'>
              🔨 Tech Stacks
            </span>
            <div className='flex gap-4 flex-wrap justify-center'>
              {techStack.map((skill) => (
                <span
                  key={skill}
                  className='bg-[color:var(--border)] rounded-xl p-2 shadow-xl'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* 내가 맡은 파트(기여한 부분) */}
        <div className='flex flex-col gap-5'>
          <h3 className='text-2xl font-bold text-[color:var(--accent)]'>
            🔍 My Part
          </h3>
          <div className='flex flex-col gap-5 lg:flex-row lg:items-center'>
            <div className='flex flex-col gap-3 lg:flex-1'>
              {contributions?.map((contribution, index) => (
                <div key={index} className='flex flex-col gap-2'>
                  <h4 className='text-[color:var(--accent-subtle)] text-lg font-bold'>
                    {contribution.title}
                  </h4>
                  <p>{contribution.description}</p>
                </div>
              ))}
            </div>
            <div className='bg-[color:var(--border)] p-2 rounded-2xl lg:flex-1'>
              <DetailMyPartImg contributionImage={contributionImage} />
            </div>
          </div>
        </div>
        {/* 트러블 슈팅 */}
        {troubleShooting && (
          <div className='flex flex-col gap-5'>
            <h3 className='text-2xl font-bold text-[color:var(--accent)]'>
              💣 Trouble Shooting
            </h3>
            <div className='flex flex-col gap-8'>
              {troubleShooting?.map((trouble, index) => (
                <div key={index} className='flex flex-col gap-3'>
                  <h4 className='font-bold'>
                    <span className='text-[color:var(--accent-subtle)]'>
                      Problem -{' '}
                    </span>{' '}
                    {trouble.problem}
                  </h4>
                  <p>
                    <span className='font-bold text-[color:var(--accent-subtle)]'>
                      Solution -{' '}
                    </span>{' '}
                    {trouble.solution}
                  </p>
                  {trouble.link && (
                    <a
                      href={trouble.link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm text-[color:var(--green)] underline hover:opacity-70 transition'
                    >
                      {trouble.link.isBlog
                        ? '관련 블로그 바로가기 ↗'
                        : '관련 링크 바로가기 ↗'}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* 아키텍처 */}
        {architectureImage && (
          <div className='flex flex-col gap-5'>
            <h3 className='text-2xl font-bold text-[color:var(--accent)]'>
              🧱 Architecture
            </h3>
            <div className='relative w-full aspect-[3/2]'>
              <Image
                src={architectureImage}
                alt='architecture'
                fill
                className='object-cover rounded-xl shadow-xl'
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
