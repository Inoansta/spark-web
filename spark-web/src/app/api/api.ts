import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponseHeaders,
  Method,
  RawAxiosRequestHeaders,
  isAxiosError,
} from 'axios';
import { API_STATUS_CODE, ApiResponse } from './type.ts';

const headers: RawAxiosRequestHeaders = {
  'Content-Type': 'application/json',
};

class ApiService {
  private static instance: ApiService;
  private client: AxiosInstance;
  private isRefreshing = false;

  private constructor() {
    this.client = axios.create({
      baseURL: '', //Need to work on
      headers: headers,
    });
    this.setupInterceptors();
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  //When Token is expired

  private async clearData() {
    console.log('hello');
    console.log('토큰이 만료됐습니다. 다 로그인을 시도해 주세요.');
  }

  //Set up intercepters
  private setupInterceptors(): void {}

  //set Token
  private async setToken(token) {}

  //get Token
  private async getToken() {}

  public async request<T, D = any>(
    method: Method,
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.request<ApiResponse<T>>({
        method,
        url,
        data,
        ...config,
      });
      if (
        response.data.status_code === API_STATUS_CODE.SUCCESS ||
        response.data.status_code === API_STATUS_CODE.POST_SUCCESS
      ) {
        return response.data;
      }
      return {
        error: response.data.error,
        status_code: response.data.status_code,
        headers: response.headers as AxiosResponseHeaders,
      };
    } catch (error) {
      if (isAxiosError<ApiResponse<T>>(error)) {
        console.log(
          error?.response?.data?.error || '오류 발생! 관리자에게 문의하세요.',
          error?.response?.status,
        );
        return error.response?.data as ApiResponse<T>;
      }
      return { error: `API Error : ${error}`, status_code: 400 };
    }
  }

  public get<T, D = any>(url: string, config?: AxiosRequestConfig) {
    return this.request<T, D>('get', url, undefined, config);
  }

  public post<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig) {
    return this.request<T, D>('post', url, data, config);
  }

  public patch<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig) {
    return this.request<T, D>('patch', url, data, config);
  }

  public put<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig) {
    return this.request<T, D>('put', url, data, config);
  }

  public delete<T, D = any>(url: string, config?: AxiosRequestConfig) {
    return this.request<T, D>('delete', url, undefined, config);
  }
}

export const apiService = ApiService.getInstance();
