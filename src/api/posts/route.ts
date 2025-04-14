// app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

// GET: 获取文章列表
export async function GET() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, slug, createdAt, tags')
    .order('createdAt', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(posts);
}

// POST: 创建新文章
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  // 仅管理员可创建文章
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: '未授权' }, { status: 401 });
  }

  const { title, content, tags } = await request.json();

  if (!title || !content) {
    return NextResponse.json({ error: '标题和内容不能为空' }, { status: 400 });
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const { error } = await supabase.from('posts').insert({
    title,
    content,
    slug,
    tags,
    createdAt: new Date().toISOString(),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ slug }, { status: 201 });
}