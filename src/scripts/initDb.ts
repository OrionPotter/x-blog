import { config } from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

// 加载环境变量
config({ path: resolve(__dirname, '../../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

async function initDb() {
  // 创建 posts 表
  const { error: postsError } = await supabaseClient.rpc('create_posts_table');
  if (postsError) {
    console.error('Error creating posts table:', postsError);
  } else {
    console.log('Posts table created successfully');
  }

  // 创建测试文章
  const testPosts = [
    {
      title: '欢迎使用 x-blog',
      content: '这是一个测试文章，用于展示 x-blog 的功能。\n\n你可以在这里写文章，分享你的想法。',
      slug: 'welcome-to-x-blog',
      author: '系统管理员',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      title: '如何使用 Markdown',
      content: 'x-blog 支持 Markdown 格式，你可以使用以下语法：\n\n- 标题：使用 # 号\n- 列表：使用 - 或 *\n- 代码块：使用 ```\n- 链接：[文本](URL)\n\n更多 Markdown 语法请参考官方文档。',
      slug: 'how-to-use-markdown',
      author: '系统管理员',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      title: '关于 x-blog',
      content: 'x-blog 是一个基于 Next.js 和 Supabase 构建的博客平台，灵感来自 X（原 Twitter）。\n\n主要功能：\n- 支持 Markdown 格式\n- 响应式设计\n- 暗色主题\n- 实时更新\n\n欢迎提出建议和反馈！',
      slug: 'about-x-blog',
      author: '系统管理员',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  ];

  // 插入测试文章
  const { error } = await supabase
    .from('posts')
    .insert(testPosts);

  if (error) {
    console.error('Error inserting test posts:', error);
  } else {
    console.log('Test posts inserted successfully');
  }
}

// 运行初始化脚本
initDb().catch(console.error); 