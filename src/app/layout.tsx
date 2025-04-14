import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/api/auth/[...nextauth]/route';

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
      <body className="bg-[#15202B] text-white">
        <div className="flex min-h-screen">
          {/* 侧边栏，仅桌面端显示 */}
          <div className="hidden lg:block w-64">
            <Sidebar session={session} />
          </div>
          {/* 主内容区域 */}
          <div className="flex-1">
            <Navbar session={session} />
            <main className="max-w-3xl mx-auto p-4">{children}</main>
          </div>
          {/* 右侧占位，模仿 X 的趋势栏 */}
          <div className="hidden xl:block w-80"></div>
        </div>
      </body>
    </html>
  );
}