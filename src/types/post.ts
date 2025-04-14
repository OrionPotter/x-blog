// types/post.ts
// src/types/post.ts
export type Post = {
    id: string;
    title: string;
    slug: string;
    content?: string;
    created_at: string; // 改为蛇形命名
    tags?: string[]; // 适配 text[]，可选
  };