import React from 'react';

export default function Bookmarks() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">书签</h1>
      <p className="text-lg mb-6">你保存的文章都在这里，方便随时访问。</p>

      <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <h3 className="text-xl font-semibold">深入理解Java</h3>
        <p className="text-text-secondary">一本很棒的书，帮助我深入理解Java的底层原理。</p>
        <a href="/post/2" className="text-blue-500 hover:underline">阅读文章</a>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <h3 className="text-xl font-semibold">React基础</h3>
        <p className="text-text-secondary">本教程讲解了React的核心概念，适合初学者。</p>
        <a href="/post/1" className="text-blue-500 hover:underline">阅读文章</a>
      </div>
    </div>
  );
}
