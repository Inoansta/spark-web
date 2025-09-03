import { HttpResponse, delay, http } from 'msw';

export const handlers = [
  http.get('/youtube/channel-profile', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        result: {
          channelId: 'UCCuQOrhdJV2ckJeMg4nCoqQ',
          channelName: 'leeeumm',
          totalVideoCount: 56,
          subscriberCount: 6820,
          totalViewCount: 222477,
          defaultThumbnailUrl:
            'https://yt3.ggpht.com/ytc/AIdro_kl5DflvSAt5cCateTrSwaLn4GBN9r6Kpu3KbWBVHt3T53dfl0=s88-c-k-c0x00ffffff-no-rj',
        },
      },
      { status: 200 },
    );
  }),
  http.get('/meta/account-profile', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        result: {
          userName: 'leeeumm',
          postsCount: 56,
          followersCount: 6820,
          followingCount: 222477,
          instagramBusinessAccountId: '17841471069509671',
          profileUrl:
            'https://yt3.ggpht.com/ytc/AIdro_kl5DflvSAt5cCateTrSwaLn4GBN9r6Kpu3KbWBVHt3T53dfl0=s88-c-k-c0x00ffffff-no-rj',
        },
      },
      { status: 200 },
    );
  }),
  http.get('/youtube/channel-stats?channelId=', async () => {
    await delay(3000);
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
          weaknesses: ['netSubscribers', 'views'],
        },
      },
      { status: 200 },
    );
  }),
  http.get('/youtube/top-videos?channelId=', async () => {
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
        ],
      },
      { status: 200 },
    );
  }),
  http.get('/channel-predictions?channelId=', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        result: {
          predictedViews: 30148,
          predictedNetSubscribers: 1163,
        },
      },
      { status: 200 },
    );
  }),
  http.get('/channel', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        status: 400,
        code: 'COMMON_008',
        message: 'string',
      },
      { status: 400 },
    );
  }),
  http.get('/meta/top-contents', async () => {
    await delay(200);
    return HttpResponse.json({
      result: [
        {
          id: '18002988923727425',
          caption: '',
          timestamp: '2025-02-18T13:20:36+0000',
          mediaType: 'IMAGE',
          contentUrl:
            'https://scontent-nrt1-2.cdninstagram.com/v/t51.75761-15/480179406_17858106774368984_3581032881115181231_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=54wajr9p6x0Q7kNvwFsVmdg&_nc_oc=AdnnY-IGkfIVNXNw_tw4Jj7i-3pfN5z06qk-0DicrNww_etYuTL39XU3-AHjRd5vTow&_nc_zt=23&_nc_ht=scontent-nrt1-2.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=2WTEJlfYEXd5bp7dnIB8Yw&oh=00_Afb8u5sLE552v90wQXjyMSK19-6RHVkJCX9LeTQofZBUOA&oe=68BE1083',
          views: 715,
        },
        {
          id: '18293302513242280',
          caption: '',
          timestamp: '2025-02-18T13:20:23+0000',
          mediaType: 'IMAGE',
          contentUrl:
            'https://scontent-nrt1-2.cdninstagram.com/v/t51.75761-15/480763849_17858106681368984_1918310517997031216_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=sgDRO1Ft0n0Q7kNvwGqyBdT&_nc_oc=AdlKDTHx84yIz0GVVv-Vky3kiBYnJBVeEmSEAR9Rabb7dGoROLxxY9j43DjDCX46KFE&_nc_zt=23&_nc_ht=scontent-nrt1-2.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=2WTEJlfYEXd5bp7dnIB8Yw&oh=00_AfYJhqqAey46Lgur9uyyyhouLTnlx5odeUILDV5nzZcW0g&oe=68BE153C',
          views: 659,
        },
        {
          id: '18062265455501728',
          caption:
            '스파크 사용 방법💜\n#유튜브강의 #유튜브크리에이터 #크리에이터 #릴스 #릴스그램 #릴스맛집 #숏츠 #유튜버 #유튜버추천 #유튜버마케팅',
          timestamp: '2025-04-01T12:29:47+0000',
          mediaType: 'VIDEO',
          contentUrl:
            'https://scontent-nrt1-1.cdninstagram.com/v/t51.75761-15/488229756_17863860792368984_453657160267114430_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ixChyG-ZxBYQ7kNvwFRpbjl&_nc_oc=AdnyXP32v8II76TF9tn_gKx0bZWViqc7g0I5d4lcKiKkSpg5skefH3B9eOL-PlDc-5A&_nc_zt=23&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=2WTEJlfYEXd5bp7dnIB8Yw&oh=00_AfbTvwB-rq31flB3tprMpMQitoMWeEQgpNwYJpMdmX-jnQ&oe=68BE22BB',
          views: 658,
        },
      ],
    });
  }),
];
