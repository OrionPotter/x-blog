// lib/auth.ts
import { getServerSession } from 'next-auth';
import { authOptions } from '@/api/auth/[...nextauth]/route';

// 检查用户是否为管理员
export async function isAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user.role === 'admin';
}

// 获取当前用户会话
export async function getCurrentSession() {
  return await getServerSession(authOptions);
}