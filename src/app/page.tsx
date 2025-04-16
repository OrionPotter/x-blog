import { getSortedPosts } from '@/lib/markdown';
import { formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { Sparkles } from 'lucide-react';

export default async function Home() {
  const posts = await getSortedPosts();

  return (
    <div className="max-w-content mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">欢迎来到 X-Blog</h1>
        <p className="text-text-secondary">分享你的想法和见解</p>
      </div>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="article">
            <div className="article-header">
              <div className="flex-1">
                <h2 className="article-title">
                  <a href={`/posts/${post.slug}`} className="hover:underline">
                    {post.title}
                  </a>
                </h2>
                <div className="article-meta">
                  <time dateTime={post.date}>
                    {formatDistanceToNow(new Date(post.date), { addSuffix: true, locale: zhCN })}
                  </time>
                </div>
              </div>
            </div>
            
            <div className="article-content prose prose-sm max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="tags">
                {post.tags.map((tag) => (
                  <a
                    key={tag}
                    href={`/tags/${tag}`}
                    className="tag"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="btn btn-outline">
          <Sparkles className="w-4 h-4 mr-2" />
          加载更多
        </button>
      </div>
    </div>
  );
}
