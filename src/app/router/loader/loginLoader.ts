import loginApi from '@/domains/Login/service/handler';
import { queryClient } from './../../provider/Provider';

async function loginLoader() {
  const google = await queryClient.ensureQueryData({
    queryKey: ['auth', 'google'],
    queryFn: loginApi.getGoogleAuthUrl,
  });
  const meta = await queryClient.ensureQueryData({
    queryKey: ['auth', 'meta'],
    queryFn: loginApi.getMetaAuthUrl,
  });
  return { google, meta };
}

export default loginLoader;
