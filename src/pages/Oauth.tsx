import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { useAuthToken } from '@/domains/Login/hooks/useAuthToken';

export default function Oauth() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code')!;

  const { mutate } = useAuthToken();

  useEffect(() => {
    mutate({ code });
  }, [mutate, code]);

  return <></>;
}
