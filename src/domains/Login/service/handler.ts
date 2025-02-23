import httpClient from '@/app/api/httpClient';
import type {
  RequestPostRefreshToken,
  RequestPostToken,
  ResponseGoogleAuthUrl,
  ResponsePostToken,
} from '../model/type';

const BASE_URL = '/oauth/google';

const loginApi = {
  getGoogleAuthUrl: async () => {
    const url = `${BASE_URL}/auth`;

    return await httpClient.get<ResponseGoogleAuthUrl>(url);
  },

  postToken: async ({ code }: RequestPostToken) => {
    const url = `${BASE_URL}/callback`;

    const body = { code };

    return await httpClient.post<ResponsePostToken, typeof body>(url, {
      ...body,
    });
  },

  refreshToken: async ({ refresh }: RequestPostRefreshToken) => {
    const url = `${BASE_URL}/refresh`;
    const body = { refresh };

    return await httpClient.post<ResponsePostToken, typeof body>(url, {
      ...body,
    });
  },
};

export default loginApi;
