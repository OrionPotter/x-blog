import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/api/auth/[...nextauth]/route';
import MarkdownEditor from '@/components/MarkdownEditor';

export default async function WritePage() {
  const session = await getServerSession(authOptions);

  // 仅管理员可访问
  if (!session || session.user.role !== 'admin') {
    redirect('/');
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">写文章</h1>
      <MarkdownEditor />
    </div>
  );
}