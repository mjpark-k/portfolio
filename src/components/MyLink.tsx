import Image from 'next/image';
import FadeInUp from './FadeInUp';

interface MyLinkProps {
  width?: number;
  height?: number;
  withMotion?: boolean;
}

const Wrapper = ({
  children,
  withMotion,
  delay,
}: {
  children: React.ReactNode;
  withMotion?: boolean;
  delay?: number;
}) => {
  return withMotion ? (
    <FadeInUp delay={delay}>{children}</FadeInUp>
  ) : (
    <>{children}</>
  );
};

export default function MyLink({
  width = 50,
  height = 50,
  withMotion = true,
}: MyLinkProps) {
  return (
    <div className='flex gap-5'>
      <Wrapper withMotion={withMotion} delay={7}>
        <div className='p-2 bg-[color:var(--foreground)] rounded-xl shadow-2xl transition-transform duration-300 hover:scale-120 cursor-pointer'>
          <a
            href='https://github.com/mjpark-k'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/icons/ic_github.svg'
              alt='GitHub README'
              width={width}
              height={height}
            />
          </a>
        </div>
      </Wrapper>
      <Wrapper withMotion={withMotion} delay={8}>
        <div className='p-2 bg-[color:var(--green)] rounded-xl shadow-2xl transition-transform duration-300 hover:scale-120 cursor-pointer'>
          <a
            href='https://velog.io/@pmj9498/posts'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/icons/ic_velog.svg'
              alt='Velog'
              width={width}
              height={height}
            />
          </a>
        </div>
      </Wrapper>
    </div>
  );
}
