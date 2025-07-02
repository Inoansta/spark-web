import { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import { useParams } from 'react-router';
import Magic2 from '@/assets/svg/Magic2';
import YoutubeSource from '@/assets/svg/YoutubeSource';
import SplitString from '@/domains/Youtube/Strategy/components/SplitString';
import useGetStrategy from '@/domains/Youtube/Strategy/hooks/useGetStrategy';
import { Button } from '@/shared/components';

// params로 넘겨주기
// 해당 페이지에서 데이터 호출하기
export default function StrategyB() {
  const { id } = useParams();
  const { data: strategyData } = useGetStrategy();
  const [successOrError, setSuccessOrError] = useState('');
  const tunnedIndex = id === '1' ? '첫' : id === '2' ? '두' : '세';
  const strategyIndex = `비법${id}` as keyof typeof strategyData;

  const currentStrategy = strategyData[strategyIndex];

  if (!currentStrategy) {
    return <div>해당하는 비법을 찾을 수 없습니다.</div>;
  }

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
                {currentStrategy.제목}
              </div>
              <div className="text-[15px] font-[500] leading-[24px]">
                {currentStrategy.본문}
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col mb-[20px] gap-[10px]">
                <div className="text-[18px] font-[700] leading-[26px]">
                  ✅ 실행 방법
                </div>
                <div className="flex flex-col gap-[20px]">
                  {currentStrategy['실행 방법'].map(
                    (item: string, index: number) => {
                      return (
                        <SplitString key={item} item1={item} index={index} />
                      );
                    },
                  )}
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
                  유튜브 채널[{currentStrategy.출처}]
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
        <ImageSaveButton setSuccessOrError={setSuccessOrError} />
      </div>
    </div>
  );
}

const ImageSaveButton = ({
  setSuccessOrError,
}: {
  setSuccessOrError: (successOrError: string) => void;
}) => {
  const [screenshotReady, setScreenshotReady] = useState(false);
  const isWebView = typeof window !== 'undefined' && window.ReactNativeWebView;

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
    <Button
      text={'이미지로 저장하기'}
      buttonType={'large-filled-button'}
      onClick={onScreenShot}
    />
  );
};
