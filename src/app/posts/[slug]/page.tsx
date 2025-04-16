import { getPostBySlug } from '@/lib/markdown';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-[600px] mx-auto py-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-[#536471]">
          {new Date(post.date).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </div>

      <div 
        className="prose prose-lg max-w-none prose-headings:font-bold prose-p:text-[#0F1419] prose-a:text-[#1D9BF0] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#0F1419] prose-strong:font-bold prose-code:text-[#0F1419] prose-code:bg-[#EFF3F4] prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[#EFF3F4] prose-pre:text-[#0F1419] prose-blockquote:text-[#536471] prose-blockquote:border-l-[#EFF3F4] prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-[#536471]"
        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
      />

      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-[#EFF3F4] rounded-full text-sm text-[#536471]">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
} 