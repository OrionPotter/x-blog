'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';

export default function Navbar({ session }: { session: Session | null }) {
  return (
    <nav className="bg-[#192734] p-4 sticky top-0 z-10">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          x-blog
        </Link>
        <div className="flex items-center gap-4">
          {session?.user?.role === 'admin' ? (
            <>
              <Link href="/write" className="text-[#1DA1F2] hover:underline">
                写文章
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="text-gray-400 hover:text-white"
              >
                退出
              </button>
            </>
          ) : (
            <Link href="/api/auth/signin" className="text-gray-400 hover:text-white">
              登录
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}