import { type AxiosRequestConfig } from 'axios';
import axiosClient from './axiosClient';

class HttpClient extends axiosClient {
  constructor(client: AxiosRequestConfig) {
    super(client);
  }
}

export default new HttpClient({
  baseURL: import.meta.env.VITE_API_END_POINT,
});
