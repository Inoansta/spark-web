declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (message: string) => void;
    };
  }
}

import { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
} from 'react-accessible-accordion';
import strategy from '@/assets/animation/strategy.json';
import DownThinSmallAroow from '@/assets/svg/Arrows/DownThinSmallArrow';
import UpThinSmallArrow from '@/assets/svg/Arrows/UpThinSmallArrowt';
import Graph2 from '@/assets/svg/Detail/Graph2';
import YoutubeSource from '@/assets/svg/YoutubeSource';
import useGetStrategy from '@/domains/Strategy/hooks/useGetStrategy';
import { Button } from '@/shared/components';
import { LottieAnimation } from '@/shared/ui';

type StrategyResult = {
  [key: string]: {
    제목: string;
    본문: string;
    '실행 방법': string[];
    출처: string;
  };
};

type StrategyResponse = {
  result: StrategyResult;
};

export default function Strategy() {
  const { data } = useGetStrategy() as { data: StrategyResponse };
  const result = data?.result;
  const [clicked, setClicked] = useState({
    item1: false,
    item2: false,
    item3: false,
  });
  const [screenshotReady, setScreenshotReady] = useState(false);
  const isWebView = typeof window !== 'undefined' && window.ReactNativeWebView;

  const onScreenShot = () => {
    setClicked({ item1: true, item2: true, item3: true });
    setScreenshotReady(true);
  };

  useEffect(() => {
    if (!screenshotReady) return;

    if (!isWebView) {
      html2canvas(document.body).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'screenshot.png';
        link.click();
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
        .catch((error) => {
          console.error('스크린샷 실패:', error);
        });
    }
    setScreenshotReady(false);
  }, [screenshotReady]);

  return (
    <div
      className={
        'bg-gradient-to-b from-black to-[#FBB1F5] via-[#4557FF] pt-[44px]'
      }
    >
      <div className={'pt-[20px] px-[20px] flex flex-col '}>
        <div
          className={
            'text-title4-eb text-white flex flex-row items-center gap-[5px]'
          }
        >
          <Graph2 fill={'white'} />
          스파크님의 채널 분석
        </div>
        <div className={'text-body-m text-white'}>샘플 데이터입니다.</div>
      </div>
      <div className={'mb-[60px] mt-[20px]'}>
        <LottieAnimation animationData={strategy} loop={true} />
      </div>
      <div className={'flex flex-col px-[20px] pt-[20px] mt-[20px]'}>
        <div className={'text-title5-eb text-white'}>
          00님의 채널 성장을 위한
        </div>
        <div className={'text-title3-eb text-white'}>3가지 추천 비법</div>
        <div className={'flex flex-col py-[20px] gap-[20px]'}>
          <Accordion
            allowMultipleExpanded={true}
            allowZeroExpanded={true}
            className={'flex flex-col gap-[20px]'}
          >
            {Object.keys(result).map((item, index) => {
              return (
                <div key={index}>
                  <AccordionItem>
                    <div className={'bg-white rounded-extraLarges p-[20px]'}>
                      <AccordionItemHeading
                        className={
                          'border-b border-b-[#E5E5EA] text-title5-eb pb-[15px]'
                        }
                        onClick={() =>
                          setClicked({ ...clicked, item1: !clicked.item1 })
                        }
                      >
                        <AccordionItemButton
                          className={'flex flex-row items-center gap-[10px]'}
                        >
                          <div>{index + 1}.</div>
                          <div className={'flex flex-1'}>
                            {result[item].제목}
                          </div>
                          {clicked.item1 ? (
                            <UpThinSmallArrow />
                          ) : (
                            <DownThinSmallAroow />
                          )}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      {clicked.item1 ? (
                        <div className={'mt-[20px]'}>
                          <div
                            className={
                              'text-body-m border-b border-b-[#E5E5EA] pb-[20px] px-[10px]'
                            }
                          >
                            <ul className={'list-disc space-y-[5px]'}>
                              <li className={'leading-[24px]'}>
                                {result[item].본문}
                              </li>
                              <ul
                                className={
                                  'list-decimal pl-[15px] space-y-[5px] pt-[10px]'
                                }
                              >
                                {result[item]['실행 방법'].map(
                                  (item1: string) => {
                                    return (
                                      <li
                                        className={'leading-[24px]'}
                                        key={item1}
                                      >
                                        {item1}
                                      </li>
                                    );
                                  },
                                )}
                              </ul>
                            </ul>
                          </div>
                          <div className={'flex flex-col pt-[20px]'}>
                            <div
                              className={
                                'text-subtitle-eb text-[#5E6166] flex flex-row py-[5px]'
                              }
                            >
                              <YoutubeSource />
                              출처
                            </div>
                            <div
                              className={
                                'pl-[20px] text-body2-m text-[#5E6166]'
                              }
                            >
                              유튜브 채널[{result[item].출처}]
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className={'text-body-m mt-[20px]'}>
                          {result[item].본문.length > 10
                            ? result[item].본문.slice(0, 10) + '...'
                            : result[item].본문}
                        </div>
                      )}
                    </div>
                  </AccordionItem>
                </div>
              );
            })}
          </Accordion>
        </div>
      </div>
      <div className={'pb-[20px]'}>
        <Button
          text={'이미지로 저장하기'}
          buttonType={'large-filled-button'}
          onClick={onScreenShot}
        />
      </div>
    </div>
  );
}
