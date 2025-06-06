import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/Header';

const notoSansKR = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "MJ's Portfolio",
  description: '프론트엔드 개발자 박명준의 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={`${notoSansKR.variable}`}>
      <body className='antialiased'>
        <Header />
        {children}
      </body>
    </html>
  );
}
