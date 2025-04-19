import React from 'react';

export default function Messages() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">私信</h1>
      <p className="text-lg mb-6">在这里，你可以查看并回复其他用户发来的私信。</p>

      <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <h3 className="text-xl font-semibold">张三</h3>
        <p className="text-text-secondary">嘿，看到你最近写的文章，感觉很不错！有空一起讨论下 React 吧！</p>
        <a href="/messages/1" className="text-blue-500 hover:underline">查看消息</a>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <h3 className="text-xl font-semibold">李四</h3>
        <p className="text-text-secondary">我有一些问题关于你之前提到的 MySQL 优化，能帮我看看吗？</p>
        <a href="/messages/2" className="text-blue-500 hover:underline">查看消息</a>
      </div>
    </div>
  );
}
