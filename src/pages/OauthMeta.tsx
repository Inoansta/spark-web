import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { useAuthToken } from '@/domains/Login/hooks/useAuthToken';

export default function OauthMeta() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code')!;

  const { mutate } = useAuthToken();
  useEffect(() => {
    mutate({ code: code, platform: 'meta' });
  }, [mutate, code]);

  return <></>;
}
