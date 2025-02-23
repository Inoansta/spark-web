import { HttpResponse, delay, http } from 'msw';

export const handlers = [
  http.get('/oauth/token', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        data: {
          accessToken: 'accessToken',
          refreshToken: 'refreshToken',
        },
      },
      { status: 200 },
    );
  }),
  http.post('/oauth/google/refresh', async ({ params }) => {
    await delay(200);
    console.log('params', params);
    return HttpResponse.json(
      {
        data: {
          access_token: 'newAccess',
          refresh_token: 'refreshToken',
        },
      },
      { status: 200 },
    );
  }),
];
