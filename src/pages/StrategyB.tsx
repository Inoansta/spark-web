declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (message: string) => void;
    };
  }
}

import { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import Magic2 from '@/assets/svg/Magic2';
import YoutubeSource from '@/assets/svg/YoutubeSource';
import SplitString from '@/domains/Strategy/components/SplitString';
import { Button } from '@/shared/components';

type strategy = {
  제목: string;
  본문: string;
  '실행 방법': string[];
  출처: string;
};

export default function StrategyB({
  strategy,
  index,
}: {
  strategy: strategy;
  index: number;
}) {
  const [successOrError, setSuccessOrError] = useState('');
  const [screenshotReady, setScreenshotReady] = useState(false);
  const isWebView = typeof window !== 'undefined' && window.ReactNativeWebView;

  let tunnedIndex = '';
  if (index === 1) {
    tunnedIndex = '첫';
  } else if (index === 2) {
    tunnedIndex = '두';
  } else {
    tunnedIndex = '세';
  }

  const onScreenShot = () => {
    setScreenshotReady(true);
  };

  useEffect(() => {
    if (!screenshotReady) return;

    if (!isWebView) {
      html2canvas(document.body)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = imgData;
          link.download = 'screenshot.png';
          link.click();
        })
        .then(() => setSuccessOrError('이미지 저장이 완료됐어요.'))
        .catch((error) => {
          setSuccessOrError('이미지 저장을 실패했어요.');
          console.log('image save error', error);
        });
    } else {
      html2canvas(document.body)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const message = {
            type: 'screenshot',
            data: imgData,
          };
          window.ReactNativeWebView?.postMessage(JSON.stringify(message));
        })
        .then(() => setSuccessOrError('이미지 저장이 완료됐어요.'))
        .catch((error) => {
          setSuccessOrError('이미지 저장을 실패했어요.');
          console.log('image sending error', error);
        });
    }
    setScreenshotReady(false);
  }, [isWebView, screenshotReady]);

  return (
    <div
      className={
        'bg-gradient-to-b from-black to-[#FBB1F5] via-[#4557FF] pt-[44px]'
      }
    >
      <div className={'flex flex-col px-[20px] pt-[20px] mt-[20px]'}>
        <div
          className={
            'text-[18px] font-[700] leading-[26px] text-white flex items-center flex-row'
          }
        >
          <Magic2 className="mr-[5px]" /> {tunnedIndex} 번째, 내 성장 비법
        </div>
        <div className={'flex flex-col py-[20px]'}>
          <div className="rounded-extraLarges bg-[#FFFFFF80]/[.50] border border-[#E5E5EA] p-[20px]">
            <div className="mb-[40px] flex flex-col gap-[5px]">
              <div className="text-[20px] font-[800] leading-[28px] break-keep">
                {strategy.제목}
              </div>
              <div className="text-[15px] font-[500] leading-[24px]">
                {strategy.본문}
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col mb-[20px] gap-[10px]">
                <div className="text-[18px] font-[700] leading-[26px]">
                  ✅ 실행 방법
                </div>
                <div className="flex flex-col gap-[20px]">
                  {strategy['실행 방법'].map((item, index) => {
                    return (
                      <SplitString key={item} item1={item} index={index} />
                    );
                  })}
                </div>
              </div>
              <div className="border-t border-t-[#E5E5EA] py-[20px]">
                <div className="py-[5px] flex flex-row text-[15px] font-[800] gap-[5px] items-center">
                  <YoutubeSource />
                  출처
                </div>
                <div
                  className={'pl-[20px] text-[13px] font-[500] leading-[18px]'}
                >
                  유튜브 채널[{strategy.출처}]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'flex'}>
        {successOrError.length > 0 ? (
          successOrError === '이미지 저장이 완료됐어요.' ? (
            <div
              className={
                'mx-[auto] mt-[20px] px-[15px] py-[10px] rounded-medium border bg-[#DBEFDC] border-[#4CAF50] text-[#4CAF50] text-[11px] leading-[14px] font-[700] inline-block'
              }
            >
              {successOrError}
            </div>
          ) : (
            <div
              className={
                'mx-[auto] mt-[20px] px-[15px] py-[10px] rounded-medium border bg-[#FED5D5] border-[#FF4242] text-[#FF4242] text-[11px] leading-[14px] font-[700] inline-block'
              }
            >
              {successOrError}
            </div>
          )
        ) : (
          <></>
        )}
      </div>
      <div className={'mt-[12px] pb-[64px]'}>
        <Button
          text={'이미지로 저장하기'}
          buttonType={'large-filled-button'}
          onClick={onScreenShot}
        />
      </div>
    </div>
  );
}
