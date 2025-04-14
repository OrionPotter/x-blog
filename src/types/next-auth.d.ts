// 这个文件应该位于 types/next-auth.d.ts
import { Session, User } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      role?: string;
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    email: string;
    role?: string;
  }
}