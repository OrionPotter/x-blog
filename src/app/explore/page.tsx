import React from 'react';


export default function Explore() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">探索</h1>
      <p className="text-lg mb-6">在这里，你可以发现最新的文章、热门话题，或是通过标签查找感兴趣的内容。</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 示例标签 */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">技术</h2>
          <p className="text-text-secondary mb-4">这里汇集了关于编程、技术架构、开发技巧等的文章。</p>
          
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">生活</h2>
          <p className="text-text-secondary mb-4">在这里，我们讨论生活中的各种话题，从旅行到家庭。</p>
         
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">思维导图</h2>
          <p className="text-text-secondary mb-4">从不同角度展示思维导图，帮助提升学习和工作效率。</p>
          
        </div>
      </div>
    </div>
  );
}
