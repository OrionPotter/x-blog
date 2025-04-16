// types/post.ts
// src/types/post.ts
export interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    created_at: string;
    updated_at: string;
    tags?: string[];
}