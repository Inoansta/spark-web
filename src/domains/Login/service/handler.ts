import httpClient from '@/app/api/httpClient';
import type {
  RequestPostRefreshToken,
  RequestPostToken,
  ResponseGoogleAuthUrl,
  ResponseMetaAuthUrl,
  ResponsePostToken,
} from '../model/type';

const loginApi = {
  getGoogleAuthUrl: async () => {
    const url = `/oauth/google/auth`;

    return await httpClient.get<ResponseGoogleAuthUrl>(url);
  },

  getMetaAuthUrl: async () => {
    const url = '/oauth/meta/auth';

    return await httpClient.get<ResponseMetaAuthUrl>(url);
  },

  postToken: async ({ code, platform }: RequestPostToken) => {
    const url = `/oauth/${platform}/callback`;

    const body = { code };

    return await httpClient.post<ResponsePostToken, typeof body>(url, {
      ...body,
    });
  },

  refreshToken: async ({ refreshToken }: RequestPostRefreshToken) => {
    const url = `/oauth/google/refresh`;
    const body = { refreshToken };

    return await httpClient.post<ResponsePostToken, typeof body>(url, {
      ...body,
    });
  },
};

export default loginApi;
