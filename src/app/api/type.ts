import { AxiosResponseHeaders } from 'axios';

export type ApiResponse<T> = {
  data?: T;
  status_code?: number;
  statusCode?: number;
  error?: string;
  headers?: AxiosResponseHeaders;
};

export interface ResponseData {
  status: number;
  code: 'COMMON_008' | 'COMMON_012' | 'COMMON_013';
  message: string;
}

export const ERRORCODE = {
  COMMON_008: 'COMMON_008',
  COMMON_012: 'COMMON_012',
  COMMON_013: 'COMMON_013',
} as const;
