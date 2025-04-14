// scripts/seedAdmin.ts
const { createClient } = require('@supabase/supabase-js');
const { config } = require('dotenv');
const bcrypt = require('bcryptjs');

config({ path: require('path').resolve(__dirname, '../../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Supabase 配置:', {
  url: supabaseUrl,
  anonKey: supabaseAnonKey ? '[隐藏]' : undefined,
});

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('请在 .env.local 中配置 NEXT_PUBLIC_SUPABASE_URL 和 NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function seedAdmin() {
  const adminData = {
    email: 'admin@example.com',
    password: 'Admin123!@#', // 请替换为安全的密码
    role: 'admin',
  };

  try {
    // 加密密码
    const hashedPassword = await bcrypt.hash(adminData.password, 10);
    console.log('准备插入管理员:', {
      email: adminData.email,
      role: adminData.role,
    });

    const { data, error } = await supabase.from('users').insert({
      email: adminData.email,
      password: hashedPassword,
      role: adminData.role,
    });

    if (error) {
      console.error('插入管理员失败:', JSON.stringify(error, null, 2));
    } else {
      console.log('管理员插入成功:', data);
    }
  } catch (err) {
    console.error('插入异常:', err);
  }
}

seedAdmin().catch((err) => console.error('脚本错误:', err));