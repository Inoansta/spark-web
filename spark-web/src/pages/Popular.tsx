import { PopularCard } from '@/domains/Popular/components';
import { NextPageFooter } from '@/shared/components';

const dummy = [
  {
    id: 'bIjKtpOw0II',
    snippet: {
      title: '20211025 기디비',
      publishedAt: '2021-11-01T21:48:27Z',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/bIjKtpOw0II/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/bIjKtpOw0II/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/bIjKtpOw0II/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/bIjKtpOw0II/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/bIjKtpOw0II/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
    },
    statistics: {
      viewCount: 17,
    },
  },
  {
    id: 'ZCsy2E8vWFE',
    snippet: {
      title: '20210923 대예이1교시',
      publishedAt: '2021-09-25T07:25:48Z',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/ZCsy2E8vWFE/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/ZCsy2E8vWFE/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/ZCsy2E8vWFE/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/ZCsy2E8vWFE/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/ZCsy2E8vWFE/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
    },
    statistics: {
      viewCount: 16,
    },
  },
  {
    id: 'wWizg_GYeJc',
    snippet: {
      title: '20211022 기디비',
      publishedAt: '2021-10-28T20:48:44Z',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/wWizg_GYeJc/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/wWizg_GYeJc/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/wWizg_GYeJc/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/wWizg_GYeJc/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/wWizg_GYeJc/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
    },
    statistics: {
      viewCount: 13,
    },
  },
];

export default function Popular() {
  return (
    <div>
      <div
        className={
          'flex flex-col bg-gradient-to-b from-highEmphasis to-black px-[20px] pt-[65px] min-h-screen'
        }
      >
        <div className={'flex flex-col gap-[5px]'}>
          <div className={'text-title2-eb text-white'}>인기 콘텐츠 TOP3</div>
          <div className={'text-body-m text-white'}>
            가장 많은 조회수를 기록한 콘텐츠들이에요!
          </div>
        </div>
        <div className={'flex flex-1 flex-col'}>
          <div
            className={
              'flex  gap-[20px] flex-col mt-[calc(100vh/6)] mb-[100px]'
            }
          >
            {dummy.map((item, index) => (
              <PopularCard
                videoInformation={item}
                index={index}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <NextPageFooter
        nextLocation={'/strength-weakness'}
        text={'다음'}
        buttonType={'large-filled-button'}
      />
    </div>
  );
}
