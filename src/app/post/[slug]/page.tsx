import { supabase } from '@/lib/supabase';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { data: post } = await supabase
    .from('posts')
    .select('title, content, createdAt')
    .eq('slug', params.slug)
    .single();

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-400 text-sm">
        {new Date(post.createdAt).toLocaleDateString('zh-CN')}
      </p>
      <MarkdownRenderer content={post.content} />
    </article>
  );
}