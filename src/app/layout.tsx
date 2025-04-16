import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/api/auth/[...nextauth]/route';

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
  const session = await getServerSession(authOptions);

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
          <aside className="sidebar">
            <Sidebar session={session} />
          </aside>
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
          <aside className="right-sidebar">
            <div className="trends-container">
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="搜索" 
                  className="search-input"
                />
              </div>
              <div className="trends-card">
                <h2 className="trends-title">正在发生的事</h2>
                <div className="trends-list">
                  {/* 这里可以添加趋势列表 */}
                </div>
              </div>
              <div className="who-to-follow">
                <h2 className="trends-title">推荐关注</h2>
                <div className="follow-list">
                  {/* 这里可以添加推荐关注列表 */}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </body>
    </html>
  );
}