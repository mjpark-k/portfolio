'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: '미정', path: '/etc' },
];

export default function Header() {
  const path = usePathname();

  return (
    <header className='fixed top-0 left-0 w-full flex justify-between items-center px-10 py-5 font-semibold bg-[color:var(--background)]'>
      <Link
        href='/'
        className='text-3xl font-bold inline-block hover:[animation:var(--animation-wiggle)] hover:text-[color:var(--accent)]'
        // className='text-3xl font-bold inline-block transition-transform duration-300 hover:-translate-y-1 hover:text-[color:var(--accent)]'
      >
        MyungJun
      </Link>
      <div>
        <nav>
          <ul className='flex gap-20'>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`hover:text-[color:var(--accent)] transition ${
                    path === link.path ? 'text-[color:var(--accent)]' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
