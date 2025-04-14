import FadeInUp from '@/components/FadeInUp';

export default function Home() {
  return (
    <main className='w-full h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-20 items-center justify-center'>
        <FadeInUp delay={0}>
          <h1 className='text-6xl font-bold underline'>MyungJun Park</h1>
        </FadeInUp>
        <div className='flex gap-2'>
          <FadeInUp delay={1}>
            <p className='text-2xl'>안녕하세요!</p>
          </FadeInUp>
          <div className='text-2xl flex gap-2'>
            <FadeInUp delay={2}>프론트엔드 개발자</FadeInUp>
            <FadeInUp delay={4} duration={1}>
              <span className='font-bold text-[color:var(--accent)]'>
                박명준
              </span>
            </FadeInUp>
            <FadeInUp delay={2}>
              <span>입니다.</span>
            </FadeInUp>
          </div>
        </div>
      </div>
    </main>
  );
}
