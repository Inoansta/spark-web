import { HttpResponse, delay, http } from 'msw';

export const handlers = [
  http.get('/youtube/channel-profile?channelId=', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        result: {
          channelId: 'UCCuQOrhdJV2ckJeMg4nCoqQ',
          channelName: 'leeeumm',
          totalVideoCount: 56,
          subscriberCount: 6820,
          totalViewCount: 222477,
        },
      },
      { status: 200 },
    );
  }),
  http.get('/youtube/channel-stats?channelId=', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        result: {
          stats: [
            {
              startDate: '2025-01-19',
              endDate: '2025-02-18',
              views: 20852,
              netSubscribers: 633,
              likes: 831,
              comments: 18,
              shares: 108,
              estimatedRevenue: 0,
              averageViewDuration: 110,
              uploadedVideos: 3,
            },
            {
              startDate: '2024-12-20',
              endDate: '2025-01-19',
              views: 57782,
              netSubscribers: 2649,
              likes: 3049,
              comments: 44,
              shares: 434,
              estimatedRevenue: 0,
              averageViewDuration: 130,
              uploadedVideos: 4,
            },
            {
              startDate: '2024-11-20',
              endDate: '2024-12-20',
              views: 11936,
              netSubscribers: 259,
              likes: 241,
              comments: 32,
              shares: 31,
              estimatedRevenue: 0,
              averageViewDuration: 113,
              uploadedVideos: 4,
            },
          ],
          growthRates: {
            shares: -75.11520737327189,
            comments: -59.09090909090909,
            estimatedRevenue: 0,
            netSubscribers: -76.10419026047565,
            averageViewDuration: -15.384615384615385,
            views: -63.91263715343879,
            likes: -72.74516234831093,
            uploadedVideos: -25,
          },
          strengths: ['estimatedRevenue', 'averageViewDuration'],
          weaknesses: ['netSubscribers', 'shares'],
        },
      },
      { status: 200 },
    );
  }),
  http.get('/youtube/top-video?channelId=', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        result: [
          {
            id: 'uJT5tetoDoE',
            snippet: {
              title:
                '옷 잘 입고 싶은 사람 모여라 👜🕶️🧤🧦 흔하지 않은 쇼핑몰 추천 7곳, 일본 감성 몽글몽글한 쇼핑몰, 직장인이 입기 좋은 고퀄리티 쇼핑몰',
              publishedAt: '2024-12-28T09:00:57Z',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/uJT5tetoDoE/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/uJT5tetoDoE/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/uJT5tetoDoE/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: 'https://i.ytimg.com/vi/uJT5tetoDoE/sddefault.jpg',
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: 'https://i.ytimg.com/vi/uJT5tetoDoE/maxresdefault.jpg',
                  width: 1280,
                  height: 720,
                },
              },
            },
            statistics: {
              viewCount: 56623,
            },
          },
          {
            id: 'OQ4HIfPGz8A',
            snippet: {
              title: '패션 트렌드 분석 & 유니크한 스타일링 가이드',
              publishedAt: '2025-01-01T10:15:30Z',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/AfDCL_CCHKE/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/AfDCL_CCHKE/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/AfDCL_CCHKE/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: 'https://i.ytimg.com/vi/AfDCL_CCHKE/sddefault.jpg',
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: 'https://i.ytimg.com/vi/AfDCL_CCHKE/maxresdefault.jpg',
                  width: 1280,
                  height: 720,
                },
              },
            },
            statistics: {
              viewCount: 20810,
            },
          },
        ],
      },
      { status: 200 },
    );
  }),
  http.get('/channel-predictions/channelId=', async () => {
    await delay(200);
    return HttpResponse.json({
      result: {
        predictedViews: 30148,
        predictedNetSubscribers: 1163,
      },
    });
  }),
];
