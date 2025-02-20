import { type AxiosError, type AxiosRequestConfig, isAxiosError } from 'axios';
import { ACCESS_TOKEN } from '@/domains/Login/hooks/useAuthToken';
import { Storage } from '@/shared/lib';
import axiosClient from './axiosClient';

class HttpClient extends axiosClient {
  constructor(client: AxiosRequestConfig) {
    super(client);
    this.setRequestInterceptors();
    this.setResponseInterceptors();
  }

  private setRequestInterceptors() {
    this.getTestInstance().interceptors.request.use(
      (config) => {
        const token = Storage.getLocalStorage(ACCESS_TOKEN);

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
      async (error: AxiosError) => {
        if (!isAxiosError(error)) {
          return Promise.reject(error);
        }

        return Promise.reject(error.response);
      },
    );
  }
}

export default new HttpClient({
  // baseURL: import.meta.env.VITE_API_END_POINT,
  // TODO: 최종 배포시 주석 풀기
  baseURL: '',
});
