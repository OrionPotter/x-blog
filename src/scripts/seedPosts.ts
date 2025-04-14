// // scripts/seedPosts.ts
// const { createClient } = require('@supabase/supabase-js');
// const { config } = require('dotenv');

// // 加载环境变量，明确指定根目录路径
// config({ path: require('path').resolve(__dirname, '../../.env.local') });

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// if (!supabaseUrl || !supabaseAnonKey) {
//   throw new Error('请在 .env.local 中配置 NEXT_PUBLIC_SUPABASE_URL 和 NEXT_PUBLIC_SUPABASE_ANON_KEY');
// }

// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// async function seedPosts() {
//   const posts = [
//     {
//       title: '欢迎体验 x-blog',
//       slug: 'welcome-to-x-blog',
//       content: '# 欢迎\n这是一个仿 X 风格的博客平台，基于 Next.js 和 Supabase 构建。',
//       tags: ['欢迎', 'x-blog'],
//       created_at: new Date().toISOString(),
//     },
//     {
//       title: 'Markdown 测试',
//       slug: 'markdown-test',
//       content: '```javascript\nconsole.log("Hello, x-blog!");\n```\n这是一篇测试 Markdown 渲染的文章。',
//       tags: ['markdown', '测试'],
//       created_at: new Date().toISOString(),
//     },
//   ];

//   const { error } = await supabase.from('posts').insert(posts);

//   if (error) {
//     console.error('插入文章失败:', error);
//   } else {
//     console.log('测试文章插入成功');
//   }
// }

// seedPosts().catch(console.error);