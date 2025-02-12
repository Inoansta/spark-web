import { useSuspenseQuery } from '@tanstack/react-query';
import loginApi from '../service/handler';

const useGoogleAuth = () => {
  return useSuspenseQuery({
    queryKey: ['google'],
    queryFn: loginApi.getGoogleAuthUrl,
  });
};

export default useGoogleAuth;
