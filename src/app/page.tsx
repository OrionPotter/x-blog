import { supabase } from '@/lib/supabase';
import PostCard from '@/components/PostCard';
import { Post } from '@/types/post';

export default async function Home() {
  const { data: { session } } = await supabase.auth.getSession();

  const { data: posts } = await supabase
    .from('posts')
    .select('id, title, slug, created_at, tags')
    .order('created_at', { ascending: false });

  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-12 space-y-6">
        <div className="text-center">
          <p className="text-lg sm:text-xl font-semibold">
            欢迎 {session?.user?.email ?? '访客'} 👋
          </p>
        </div>
        <div className="space-y-6">
          {posts?.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
