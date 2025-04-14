import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full flex justify-between items-center px-10 py-5 font-semibold'>
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
            <li>
              <Link
                href='/'
                className='hover:text-[color:var(--accent)] transition'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='hover:text-[color:var(--accent)] transition'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/projects'
                className='hover:text-[color:var(--accent)] transition'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='hover:text-[color:var(--accent)] transition'
              >
                미정
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
