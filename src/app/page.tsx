import FadeInUp from '@/components/FadeInUp';
import HomeTyping from '@/components/home/HomeTyping';
import Redirect from '@/components/home/Redirect';
import MyLink from '@/components/MyLink';

export default function Home() {
  return (
    <main className='w-full h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-20 items-center justify-center'>
        <FadeInUp delay={0}>
          <h1 className='text-4xl font-bold text-[color:var(--muted)] underline md:text-6xl'>
            MyungJun Park
          </h1>
        </FadeInUp>
        <div className='flex flex-col items-center gap-0.5 text-base text-[color:var(--muted)] md:text-lg'>
          <FadeInUp delay={1}>안녕하세요.</FadeInUp>
          <FadeInUp delay={2}>사용자의 입장에서 바라보는</FadeInUp>
          <FadeInUp delay={3}>프론트엔드 개발자 박명준입니다.</FadeInUp>
        </div>
        <FadeInUp delay={4}>
          <HomeTyping />
        </FadeInUp>
        <Redirect />
        <MyLink />
      </div>
    </main>
  );
}
