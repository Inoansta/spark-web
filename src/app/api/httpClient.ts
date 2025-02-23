import { type AxiosError, type AxiosRequestConfig, isAxiosError } from 'axios';
import { TOKEN } from '@/domains/Login/hooks/useAuthToken';
import loginApi from '@/domains/Login/service/handler';
import { Storage } from '@/shared/lib';
import axiosClient from './axiosClient';
import { ERRORCODE, ResponseData } from './type';

class HttpClient extends axiosClient {
  constructor(client: AxiosRequestConfig) {
    super(client);
    this.setRequestInterceptors();
    this.setResponseInterceptors();
  }

  private setRequestInterceptors() {
    this.getTestInstance().interceptors.request.use(
      (config) => {
        const token = Storage.getLocalStorage(TOKEN.ACCESS);

        if (token?.trim().length) {
          config.headers.set('Authorization', `Bearer ${token}`);
        }

        return config;
      },
      (error: AxiosError) => Promise.reject(error.response),
    );
  }

  private setResponseInterceptors() {
    this.getTestInstance().interceptors.response.use(
      (response) => response,
      async (error: AxiosError<ResponseData>) => {
        if (!isAxiosError(error)) {
          return Promise.reject(error);
        }

        const { code } = error.response!.data;

        const { config } = error;

        switch (code) {
          case ERRORCODE.COMMON_008: {
            try {
              const refreshToken = Storage.getLocalStorage(TOKEN.REFRESH);

              const data = await loginApi.refreshToken({
                refresh: refreshToken,
              });

              if (data !== null && data.access_token) {
                config?.headers.set(
                  'Authorization',
                  `Bearer ${data.access_token}`,
                );
                Storage.setLocalStorage(TOKEN.ACCESS, data.access_token);
              }

              return this.getTestInstance()(config!);
            } catch (error) {
              Storage.removeLocalStorage(TOKEN.ACCESS);
              Storage.removeLocalStorage(TOKEN.REFRESH);
              window.location.href = '/login';
            }
            break;
          }
          case ERRORCODE.COMMON_012:
          case ERRORCODE.COMMON_013: {
            Storage.removeLocalStorage(TOKEN.ACCESS);
            Storage.removeLocalStorage(TOKEN.REFRESH);
            window.location.href = '/login';
            break;
          }
        }

        return Promise.reject(error.response);
      },
    );
  }
}

export default new HttpClient({
  baseURL: import.meta.env.VITE_API_END_POINT,
  // TODO: 최종 배포시 주석 풀기
  // baseURL: '',
});
