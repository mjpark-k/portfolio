'use client';

import { MenuIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import MyLink from './MyLink';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  // { name: '미정', path: '/etc' },
];

export default function Header() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        !dropdownRef.current?.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      )
        setIsOpen(false);
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className='fixed top-0 left-0 w-full flex justify-between items-center z-10 px-10 py-5 font-semibold bg-[color:var(--background)] leading-none'>
      <Link
        href='/'
        className='text-3xl font-bold inline-block hover:[animation:var(--animation-wiggle)] hover:text-[color:var(--accent)]'
      >
        {/* 데스크탑에서는 MyungJun 표시 */}
        <span className='hidden lg:inline'>MyungJun</span>
        {/* 모바일에서는 MJ 표시 */}
        <span className='inline lg:hidden'>MJ</span>
      </Link>
      {path !== '/' && (
        <div className='lg:hidden'>
          <MyLink width={30} height={30} withMotion={false} />
        </div>
      )}
      {/* 데스크탑 메뉴 */}
      <div className='hidden lg:block'>
        <ul className='flex gap-20 items-center'>
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
          <li>
            {path !== '/' && (
              <MyLink width={30} height={30} withMotion={false} />
            )}
          </li>
        </ul>
      </div>
      {/* 모바일 메뉴 아이콘 */}
      <div className='lg:hidden'>
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className='hover:text-[color:var(--accent)] transition'
        >
          <MenuIcon size={28} />
        </button>
      </div>
      {/* 모바일 메뉴 드랍다운 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='dropdown-menu'
            ref={dropdownRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='absolute top-full left-0 w-full bg-[color:var(--background)] px-10 py-5 border-b-1 border-[color:var(--border)] shadow-lg rounded-b-lg lg:hidden'
          >
            <ul className='flex flex-col gap-8'>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`hover:text-[color:var(--accent)] transition ${
                      path === link.path ? 'text-[color:var(--accent)]' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
