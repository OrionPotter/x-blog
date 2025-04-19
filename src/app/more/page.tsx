import React from 'react';
export default function MorePage() {
    return (
      <div className="p-6 space-y-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">更多</h1>
  
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">设置</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>隐私和安全</li>
            <li>通知设置</li>
            <li>语言与地区</li>
          </ul>
        </section>
  
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">帮助与支持</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>常见问题解答</li>
            <li>联系客服</li>
            <li>反馈建议</li>
          </ul>
        </section>
      </div>
    );
  }