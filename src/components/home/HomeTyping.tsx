'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function HomeTyping() {
  return (
    <div>
      <p className='text-2xl font-extrabold font-mono md:text-3xl animate-pulse [text-shadow:0_0_10px_var(--accent)] text-[color:var(--accent)]'>
        <Typewriter
          words={['Welcome to my portfolio', 'Happy reading!']}
          loop={Infinity}
          cursor
          cursorStyle='|'
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
    </div>
  );
}
