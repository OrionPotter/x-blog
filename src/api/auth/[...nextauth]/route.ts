import NextAuth, { Session, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { supabase } from '@/lib/supabase';
import bcryptjs from 'bcryptjs'; 

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { data, error } = await supabase
          .from('users')
          .select('email, password, role')
          .eq('email', credentials?.email)
          .single();

        if (error || !data) {
          return null;
        }

        // 假设密码已加密（seedAdmin.ts 使用 bcryptjs）
        const isValid = await bcryptjs.compare(credentials?.password || '', data.password);
        if (!isValid) {
          return null;
        }

        return {
          id: data.email, // 必须有 id
          email: data.email,
          role: data.role,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, user }: { session: any; user: User }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          email: user.email,
          role: user.role,
        },
      };
    },
  },
};

export default NextAuth(authOptions);