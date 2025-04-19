import Link from 'next/link';
import { 
  Home, 
  Search, 
  Bell, 
  Mail, 
  Bookmark, 
  Users, 
  User, 
  MoreHorizontal,
  Sparkles
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="sidebar">
    <nav className="space-y-2">
      <Link href="/" className="flex items-center gap-4 p-3 text-xl hover:bg-[#1E2022] rounded-full transition-colors">
        <Home size={26} />
        <span>主页</span>
      </Link>
      <Link href="/explore" className="flex items-center gap-4 p-3 text-xl hover:bg-[#1E2022] rounded-full transition-colors">
        <Search size={26} />
        <span>探索</span>
      </Link>
      <Link href="/notifications" className="flex items-center gap-4 p-3 text-xl hover:bg-[#1E2022] rounded-full transition-colors">
        <Bell size={26} />
        <span>通知</span>
      </Link>
      <Link href="/messages" className="flex items-center gap-4 p-3 text-xl hover:bg-[#1E2022] rounded-full transition-colors">
        <Mail size={26} />
        <span>私信</span>
      </Link>
      <Link href="/bookmarks" className="flex items-center gap-4 p-3 text-xl hover:bg-[#1E2022] rounded-full transition-colors">
        <Bookmark size={26} />
        <span>书签</span>
      </Link>
      <Link href="/communities" className="flex items-center gap-4 p-3 text-xl hover:bg-[#1E2022] rounded-full transition-colors">
        <Users size={26} />
        <span>社群</span>
      </Link>
      <Link href="/premium" className="flex items-center gap-4 p-3 text-xl hover:bg-[#1E2022] rounded-full transition-colors">
        <Sparkles size={26} />
        <span>Premium</span>
      </Link>
      <Link href="/profile" className="flex items-center gap-4 p-3 text-xl hover:bg-[#1E2022] rounded-full transition-colors">
        <User size={26} />
        <span>个人资料</span>
      </Link>
      <Link href="/more" className="flex items-center gap-4 p-3 text-xl hover:bg-[#1E2022] rounded-full transition-colors">
        <MoreHorizontal size={26} />
        <span>更多</span>
      </Link>
    </nav>
    </aside>
  );
}