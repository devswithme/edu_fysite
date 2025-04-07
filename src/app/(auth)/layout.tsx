import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const uid = (await cookies()).get('uid')?.value ?? '';
  if (uid) return redirect('/dashboard');
  return <>{children}</>;
}
