import { getSortedPosts } from '@/lib/markdown';
import { formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';

export default async function Home() {
  const posts = await getSortedPosts();

  return (
    <div className="max-w-content mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold mb-3 text-gray-900">欢迎来到 OrionPotter X-Blog</h1>
        <p className="text-base italic text-gray-500 tracking-wide">
            分享知识是一种永恒的财富。
        </p>
      </div>

      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="article-card">
            <div className="article-header">
              <div className="flex-1">
                <h2 className="article-title">
                  <a href={`/post/${post.slug}`} className="hover:underline">
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
              {post.summary}
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
    </div>
  );
}
