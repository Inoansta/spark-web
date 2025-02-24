export interface ResponseGoogleAuthUrl {
  googleAuthUrl: string;
}

export interface RequestPostToken {
  code: string;
}
export interface RequestPostRefreshToken {
  refreshToken: string;
}

export interface ResponsePostToken {
  error: string;
  errorDescription: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}
