'use client';
import { usePathname } from 'next/navigation';
export default function HideOnAuth({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';
  if (pathname.startsWith('/auth')) return null;
  return <>{children}</>;
}