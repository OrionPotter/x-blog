import { getPostBySlug } from '@/lib/markdown';
import { notFound } from 'next/navigation';

interface PostPageProps {
    params: Promise<{ slug: string }>;
  }
  
  /**
   * 首页点击显示单页内容
   * @param param0 
   * @returns 
   */
  export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;  
  
    const post = await getPostBySlug(slug);
  
    if (!post) {
      notFound();
    }
  
    return (
      <main className="prose mx-auto py-10">
        <h1>{post.title}</h1>
        <p className="text-gray-500 text-sm">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <article dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
      </main>
    );
  }
  
