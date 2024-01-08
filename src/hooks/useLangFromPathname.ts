'use client';
import { usePathname } from 'next/navigation';

export const useLangFromPathname = () => {
  const pathName = usePathname();
  const lang = pathName.split('/')[1];
  return lang;
};
