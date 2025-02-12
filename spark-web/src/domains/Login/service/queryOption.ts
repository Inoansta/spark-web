import { queryOptions } from '@tanstack/react-query';
import loginApi from './handler';

const loginQueryOption = {
  auth: ['auth'] as const,

  googleAuth: () =>
    queryOptions({
      queryKey: [...loginQueryOption.auth, 'google'],
      queryFn: loginApi.getGoogleAuthUrl,
    }),
};

export default loginQueryOption;
