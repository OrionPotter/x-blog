import React from 'react';

export default function Premium() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Premium</h1>
      <p className="text-lg mb-6">订阅 Premium 服务，获取更多专属内容和福利。</p>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-2xl font-semibold mb-3">高级教程：React 深入分析</h3>
        <p className="text-text-secondary mb-4">此教程将帮助你更深入理解 React 和其底层原理。</p>
        <a href="/premium/react-deep-dive" className="text-blue-500 hover:underline">立即观看</a>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-2xl font-semibold mb-3">会员专属直播</h3>
        <p className="text-text-secondary mb-4">每月一次的会员直播，与你的导师面对面交流。</p>
        <a href="/premium/live-session" className="text-blue-500 hover:underline">立即报名</a>
      </div>
    </div>
  );
}
