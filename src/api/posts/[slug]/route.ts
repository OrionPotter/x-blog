// app/api/posts/[slug]/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const { data: post, error } = await supabase
    .from('posts')
    .select('id, title, slug, content, createdAt, tags')
    .eq('slug', slug)
    .single();

  if (error || !post) {
    return NextResponse.json({ error: '文章不存在' }, { status: 404 });
  }

  return NextResponse.json(post);
}