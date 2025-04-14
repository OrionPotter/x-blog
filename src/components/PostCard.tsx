import Link from 'next/link';
import { Post } from '@/types/post';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="bg-[#192734] rounded-lg p-4 hover:shadow-lg transition">
        <h2 className="text-xl font-bold text-white">{post.title}</h2>
        <p className="text-gray-400 text-sm">
          {new Date(post.created_at).toLocaleDateString('zh-CN')}
        </p>
        <div className="flex gap-2 mt-2">
          {post.tags?.map((tag) => (
            <span key={tag} className="text-[#1DA1F2] text-sm">#{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}