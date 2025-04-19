import React from 'react';

export default function Notifications() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">通知</h1>
      <p className="text-lg mb-6">查看您的最新通知，包括评论、点赞、系统消息等。</p>

      {/* 示例通知 */}
      <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <h3 className="text-xl font-semibold">评论回复</h3>
        <p className="text-text-secondary">你的文章《React基础》收到了一个新的评论。</p>
        <a href="/post/1" className="text-blue-500 hover:underline">查看评论</a>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <h3 className="text-xl font-semibold">新的点赞</h3>
        <p className="text-text-secondary">你的文章《深入理解Java》得到了一个新的点赞。</p>
        <a href="/post/2" className="text-blue-500 hover:underline">查看文章</a>
      </div>
    </div>
  );
}
