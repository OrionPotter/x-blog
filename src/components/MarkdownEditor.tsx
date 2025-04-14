'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function MarkdownEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!title || !content) return alert('标题和内容不能为空');

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
      alert('发布失败');
      console.error(error);
    } else {
      router.push(`/post/${slug}`);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="文章标题"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 bg-[#192734] text-white rounded border border-gray-600 focus:outline-none focus:border-[#1DA1F2]"
      />
      <textarea
        placeholder="写点什么（支持 Markdown）"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full h-96 p-2 bg-[#192734] text-white rounded border border-gray-600 focus:outline-none focus:border-[#1DA1F2]"
      />
      <input
        type="text"
        placeholder="标签（用逗号分隔）"
        onChange={(e) => setTags(e.target.value.split(',').map((t) => t.trim()))}
        className="w-full p-2 bg-[#192734] text-white rounded border border-gray-600 focus:outline-none focus:border-[#1DA1F2]"
      />
      <button
        onClick={handleSubmit}
        className="bg-[#1DA1F2] text-white px-4 py-2 rounded-full hover:bg-[#1a91da] transition"
      >
        发布
      </button>
    </div>
  );
}