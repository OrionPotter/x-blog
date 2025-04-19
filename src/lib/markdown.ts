import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'content/posts');

// 定义文章结构
export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  content: string;
  htmlContent: string;
  tags?: string[];
  summary: string;
}

// 可选的缓存（用于避免重复读取，适合构建时或本地开发用）
let cachedPosts: Post[] | null = null;

/**
 * 公共解析函数：读取并解析 Markdown 文件
 */
async function parseMarkdown(filePath: string): Promise<Post> {
  const fileContents = await fs.readFile(filePath, 'utf8');

  const matterResult = matter(fileContents);

  // 将 Markdown 转为 HTML
  const processedContent = await remark()
                                      .use(html)
                                      .use(gfm)
                                      .process(matterResult.content);
  const htmlContent = processedContent.toString();

  // 提取元数据，设置默认值
  const { title = 'Untitled', date = '1970-01-01', tags = [], summary } = matterResult.data;

  // 自动生成摘要：优先使用 frontmatter 的 summary，否则截取内容前 200 字符
  const plainText = matterResult.content.replace(/[#>*_\-\[\]\(\)`]/g, ''); 
  const autoSummary = summary || plainText.slice(0, 200).trim() + '...';

  const slug = path.basename(filePath, '.md');

  return {
    id: slug,
    title,
    date,
    tags,
    slug,
    content: matterResult.content,
    htmlContent,
    summary: autoSummary,
  };
}

/**
 * 获取并按日期排序所有文章
 */
export async function getSortedPosts(): Promise<Post[]> {
  if (cachedPosts) return cachedPosts;

  const fileNames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    fileNames
      .filter((name) => name.endsWith('.md'))
      .map((name) => parseMarkdown(path.join(postsDirectory, name)))
  );

  // 按日期降序排序
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  cachedPosts = posts;
  return posts;
}

/**
 * 根据 slug 获取单篇文章
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`);

  try {
    const post = await parseMarkdown(filePath);
    return post;
  } catch (err) {
    console.error(`Post not found: ${slug}`, err);
    return null;
  }
}
