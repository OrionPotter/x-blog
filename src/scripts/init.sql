-- 创建 posts 表
create table if not exists posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  content text not null,
  slug text not null unique,
  author text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  tags text[]
);

-- 创建索引
create index if not exists posts_created_at_idx on posts(created_at desc);
create index if not exists posts_slug_idx on posts(slug);

-- 创建存储过程
create or replace function create_posts_table()
returns void
language plpgsql
security definer
as $$
begin
  -- 表已经存在，不需要做任何事情
  null;
end;
$$; 