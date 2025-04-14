import Link from 'next/link';
import { Session } from 'next-auth';

export default function Sidebar({ session }: { session: Session | null }) {
  return (
    <aside className="p-4 h-screen sticky top-0">
      <nav className="space-y-4">
        <Link href="/" className="flex items-center gap-2 text-lg hover:text-[#1DA1F2]">
          <span>🏠</span> 主页
        </Link>
        {session?.user?.role === 'admin' && (
          <Link href="/write" className="flex items-center gap-2 text-lg hover:text-[#1DA1F2]">
            <span>✍️</span> 写文章
          </Link>
        )}
        <Link href="/about" className="flex items-center gap-2 text-lg hover:text-[#1DA1F2]">
          <span>ℹ️</span> 探索
        </Link>
        <Link href="/about" className="flex items-center gap-2 text-lg hover:text-[#1DA1F2]">
          <span>ℹ️</span> 通知
        </Link>
        <Link href="/about" className="flex items-center gap-2 text-lg hover:text-[#1DA1F2]">
          <span>ℹ️</span> 私信
        </Link>
        <Link href="/about" className="flex items-center gap-2 text-lg hover:text-[#1DA1F2]">
          <span>ℹ️</span> grok
        </Link>
        <Link href="/about" className="flex items-center gap-2 text-lg hover:text-[#1DA1F2]">
          <span>ℹ️</span> 社群
        </Link>
        <Link href="/about" className="flex items-center gap-2 text-lg hover:text-[#1DA1F2]">
          <span>ℹ️</span> Premium
        </Link>
        <Link href="/about" className="flex items-center gap-2 text-lg hover:text-[#1DA1F2]">
          <span>ℹ️</span> 认证组织
        </Link>
        <Link href="/about" className="flex items-center gap-2 text-lg hover:text-[#1DA1F2]">
          <span>ℹ️</span> 个人资料
        </Link>
        <Link href="/about" className="flex items-center gap-2 text-lg hover:text-[#1DA1F2]">
          <span>ℹ️</span> 更多
        </Link>
      </nav>
    </aside>
  );
}