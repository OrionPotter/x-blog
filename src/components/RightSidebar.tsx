import React from 'react';

export default function RightSidebar() {
  // Mock data for trends
  const trends = [
    { id: 1, category: '科技', title: '#React19发布', posts: '15.2万' },
    { id: 2, category: '游戏', title: '#暗黑破坏神4', posts: '8.5万' },
    { id: 3, category: '体育', title: '#NBA季后赛', posts: '42.3万' },
    { id: 4, category: '娱乐', title: '#新电影预告', posts: '23.7万' },
    { id: 5, category: '生活', title: '#周末去哪玩', posts: '12.1万' },
  ];

  // Mock data for who to follow
  const recommendedUsers = [
    { id: 1, name: '科技日报', handle: '@TechDaily', avatar: 'TD' },
    { id: 2, name: '电影爱好者', handle: '@MovieLover', avatar: 'ML' },
    { id: 3, name: '旅行达人', handle: '@TravelExpert', avatar: 'TE' },
  ];

  return (
    <aside className="right-sidebar">
      <div className="trends-container">
        <div className="search-container">
          <div className="search-wrapper">
            <svg
              className="search-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="搜索"
              className="search-input"
            />
          </div>
        </div>
        <div className="trends-card">
          <h2 className="trends-title">正在发生的事</h2>
          <div className="trends-list">
            {trends.map(trend => (
              <div key={trend.id} className="trend-item">
                <div className="trend-category">{trend.category} · 趋势</div>
                <div className="trend-name">{trend.title}</div>
                <div className="trend-posts">{trend.posts} 帖子</div>
              </div>
            ))}
          </div>
        </div>
        <div className="who-to-follow">
          <h2 className="trends-title">推荐关注</h2>
          <div className="follow-list">
            {recommendedUsers.map(user => (
              <div key={user.id} className="user-to-follow">
                <div className="user-avatar">{user.avatar}</div>
                <div className="user-info">
                  <div className="user-name">{user.name}</div>
                  <div className="user-handle">{user.handle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}