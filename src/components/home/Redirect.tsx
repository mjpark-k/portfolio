'use client';

import Link from 'next/link';
import FadeInUp from '../FadeInUp';

export default function Redirect() {
  return (
    <div className='flex gap-5 md:gap-10'>
      <FadeInUp delay={5}>
        <Link href='/about'>
          <div className='group bg-[color:var(--highlight)] p-5 text-lg font-bold rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-150 cursor-pointer md:text-2xl md:p-10'>
            <div className='flex flex-col gap-1 items-center'>
              <span className='transition-colors duration-300 group-hover:text-[color:var(--accent)]'>
                About Me ↗
              </span>
              <span className='text-xs text-[color:var(--muted)] max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-10 group-hover:opacity-100 md:text-sm'>
                저는 이런 사람입니다!
              </span>
            </div>
          </div>
        </Link>
      </FadeInUp>
      <FadeInUp delay={6}>
        <Link href='/projects'>
          <div className='group bg-[color:var(--highlight)] p-5 text-lg font-bold rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-150 cursor-pointer md:text-2xl md:p-10'>
            <div className='flex flex-col gap-1 items-center'>
              <span className='transition-colors duration-300 group-hover:text-[color:var(--accent)]'>
                Projects ↗
              </span>
              <span className='text-xs text-[color:var(--muted)] max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-10 group-hover:opacity-100 md:text-sm'>
                이런 프로젝트들과 함께!
              </span>
            </div>
          </div>
        </Link>
      </FadeInUp>
    </div>
  );
}
