import React from 'react';
export default function ProfilePage() {
    return (
      <div className="p-6 space-y-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">个人资料</h1>
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">基本信息</h2>
          <p className="text-gray-700">昵称：前端小白</p>
          <p className="text-gray-700">职业：前端开发工程师</p>
          <p className="text-gray-700">兴趣：React、算法、开源项目</p>
        </section>
  
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">技能标签</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
          </div>
        </section>
      </div>
    );
  }