import React from 'react';

export default function Communities() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">社群</h1>
      <p className="text-lg mb-6">加入我们的社群，参与讨论，分享和获取知识。</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 社群卡片 */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">开发者社区</h2>
          <p className="text-text-secondary mb-4">这里聚集了来自各地的开发者，一起讨论技术，分享经验。</p>
          <a href="/communities/tech" className="text-blue-500 hover:underline">加入社群</a>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">前端技术讨论</h2>
          <p className="text-text-secondary mb-4">专注于前端技术的讨论，包括React、Vue和Angular等。</p>
          <a href="/communities/frontend" className="text-blue-500 hover:underline">加入社群</a>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">算法与数据结构</h2>
          <p className="text-text-secondary mb-4">深入讨论算法和数据结构，帮助你提升编程技能。</p>
          <a href="/communities/algorithms" className="text-blue-500 hover:underline">加入社群</a>
        </div>
      </div>
    </div>
  );
}
