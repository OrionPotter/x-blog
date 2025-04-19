import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';


const inter = Inter({ subsets: ['latin'] });
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: 'x-blog',
  description: 'A blog platform inspired by X',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} ${merriweather.variable}`}>
        <div className="layout">
          {/* 左侧侧边栏 */}
          <LeftSidebar />
          {/* 主内容区域 */}
          <div className="main-content"> 
            {/* 主要内容 */}
            <main className="content-container">
              <div className="content-wrapper">
                {children}
              </div>
            </main>
          </div>
          {/* 右侧边栏 */}
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}