'use client';

import { Github, ExternalLink, FileText } from 'lucide-react';

interface ProjectLinksProps {
  github?: string;
  demo?: string;
  blog?: string;
}

export default function ProjectLinks({
  github,
  demo,
  blog,
}: ProjectLinksProps) {
  return (
    <div className='flex flex-col gap-2 text-xs md:text-sm md:flex-row md:gap-5'>
      {github && (
        <a
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 bg-[color:var(--border)] rounded-xl px-2 py-1 shadow-2xl hover:opacity-80 transition'
        >
          <Github className='w-4 h-4 md:w-5 md:h-5' />
          GitHub Repository
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 bg-[color:var(--border)] rounded-xl px-2 py-1 shadow-2xl hover:opacity-80 transition'
        >
          <ExternalLink className='w-4 h-4 md:w-5 md:h-5' />
          Live Demo
        </a>
      )}
      {blog && (
        <a
          href={blog}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 bg-[color:var(--border)] rounded-xl px-2 py-1 shadow-2xl hover:opacity-80 transition'
        >
          <FileText className='w-4 h-4 md:w-5 md:h-5' />
          Blog Post
        </a>
      )}
    </div>
  );
}
