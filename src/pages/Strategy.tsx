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
import useStrategyStore from '@/app/store/useStrategyStore';
import strategy from '@/assets/animation/strategy.json';
import DownThinSmallAroow from '@/assets/svg/Arrows/DownThinSmallArrow';
import UpThinSmallArrow from '@/assets/svg/Arrows/UpThinSmallArrowt';
import Graph2 from '@/assets/svg/Detail/Graph2';
import Magic2 from '@/assets/svg/Magic2';
import Tooltip from '@/assets/svg/Strategy/Tooltip';
import YoutubeSource from '@/assets/svg/YoutubeSource';
// import SplitString from '@/domains/Strategy/components/SplitString';
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

export default function Strategy() {
  const [successOrError, setSuccessOrError] = useState('');
  const channelName = useStrategyStore((store) => store.channelName);
  const { data } = useGetStrategy() as { data: StrategyResult };
  const result = data;

  const [clicked, setClicked] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
  });
  const [screenshotReady, setScreenshotReady] = useState(false);
  const isWebView = typeof window !== 'undefined' && window.ReactNativeWebView;

  const onScreenShot = () => {
    setClicked({ 0: true, 1: true, 2: true });
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
  }, [screenshotReady]);

  return (
    <div
      className={
        'bg-gradient-to-b from-black to-[#FBB1F5] via-[#4557FF] pt-[44px]'
      }
    >
      <div className={'pt-[20px] px-[20px] flex flex-col '}>
        <Tooltip />
        <div
          className={
            'text-[20px] font-[800] leading-[28px] text-white flex flex-row items-center gap-[5px]'
          }
        >
          <Graph2 fill={'white'} />
          {channelName}님의 채널 분석
        </div>
      </div>
      <div className={'mb-[60px] mt-[20px]'}>
        <LottieAnimation animationData={strategy} loop={true} />
      </div>
      <div className={'flex flex-col px-[20px] pt-[20px] mt-[20px]'}>
        <div
          className={
            'text-[18px] font-[800] not-italic leading-[26px] text-white'
          }
        >
          {channelName}님의 채널 성장을 위한
        </div>
        <div
          className={
            'text-[24px] font-[800] leading-[32px] text-white flex flex-row items-center'
          }
        >
          3가지 추천 비법 <Magic2 />
        </div>
        <div className={'flex flex-col py-[20px] gap-[20px]'}>
          <Accordion
            allowMultipleExpanded={true}
            allowZeroExpanded={true}
            className={'flex flex-col gap-[20px]'}
          >
            {Object.keys(result).map((item: string, index) => {
              return (
                <div key={index}>
                  <AccordionItem>
                    <div className={'bg-white rounded-extraLarges p-[20px]'}>
                      <AccordionItemHeading
                        className={
                          'border-b border-b-[#E5E5EA] text-[18px] font-[800] leading-[26px] pb-[15px]'
                        }
                        onClick={() =>
                          setClicked({ ...clicked, [index]: !clicked[index] })
                        }
                      >
                        <AccordionItemButton
                          className={'flex flex-row items-center gap-[10px]'}
                        >
                          <div
                            className={
                              'text-[15px] font-[800] leading-[24px] text-[#333333] not-italic'
                            }
                          >
                            {index + 1}
                          </div>
                          <div
                            className={
                              'flex flex-1 break-keep text-[18px] font-[800] leading-[26px] text-[#333333]'
                            }
                          >
                            {result[item].제목}
                          </div>
                          {clicked[index] ? (
                            <UpThinSmallArrow />
                          ) : (
                            <DownThinSmallAroow />
                          )}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      {clicked[index] ? (
                        <div className={'mt-[20px]'}>
                          <div
                            className={
                              'text-[15px] font-[500] leading-[24px] text-[#333333] border-b border-b-[#E5E5EA] pb-[20px] px-[10px]'
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
                                        key={item1}
                                        className={'marker:font-[700]'}
                                      >
                                        {/* TODO */}
                                        {/* <SplitString item1={item1} index={1}/> */}
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
                                'text-[15px] font-[800] leading-[24px] text-[#5E6166] flex flex-row py-[5px]'
                              }
                            >
                              <YoutubeSource />
                              출처
                            </div>
                            <div
                              className={
                                'pl-[20px] text-[13px] font-[500] leading-[18px] text-[#5E6166]'
                              }
                            >
                              유튜브 채널[{result[item].출처}]
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          className={
                            'text-[15px] font-[500] leading-[24px] text-[#333333] leading-[26px] mt-[20px]'
                          }
                        >
                          {result[item].본문.length > 10
                            ? result[item].본문.slice(0, 40) + '...'
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
      <div className={'mt-[12px] pb-[20px]'}>
        <Button
          text={'이미지로 저장하기'}
          buttonType={'large-filled-button'}
          onClick={onScreenShot}
        />
      </div>
    </div>
  );
}
