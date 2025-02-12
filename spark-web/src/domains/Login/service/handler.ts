import httpClient from '@/app/api/httpClient';
import type {
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
};

export default loginApi;
