import type { ReactNode } from 'react';
import { ACCESS_TOKEN } from '@/domains/Login/hooks/useAuthToken';
import { Storage } from '@/shared/lib';

interface HasTokenProps {
  children: ReactNode;
  fallback: ReactNode;
}

export default function HasToken({ children, fallback }: HasTokenProps) {
  const token = Storage.getLocalStorage(ACCESS_TOKEN);
  return token ? children : fallback;
}
