import {AxiosResponseHeaders} from 'axios'

export type ApiResponse<T> = {
    data?: T
    status_code?: number
    statusCode?: number
    error?: string
    headers?: AxiosResponseHeaders
}

export const API_STATUS_CODE = {
    SUCCESS: 200,
    POST_SUCCESS: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
} as const
