import { useEffect, useState } from 'react';
import {
  FrequentlyAskedQuestions,
  HowToGrow,
  Recommendation,
  TopPage,
  WorriedAbout,
} from '@/domains/Detail/components';
import GraySpace from '@/domains/Detail/components/GraySpace';
import { Button } from '@/shared/components';
import { useMoveLocation } from '@/shared/hooks';

export default function Detail() {
  const [disable, setDisable] = useState(false);
  const moveToNext = useMoveLocation('/result');

  useEffect(() => {
    const connected = localStorage.getItem('access_token');
    setDisable(connected ? false : true);
  }, []);

  return (
    <div>
      <TopPage />
      <GraySpace />
      <WorriedAbout />
      <HowToGrow />
      <GraySpace />
      <Recommendation />
      <GraySpace />
      <FrequentlyAskedQuestions />

      <div
        className={
          'sticky flex flex-col bottom-0 mb-[30px] px-[20px] gap-[12px]'
        }
      >
        <div
          className={`bg-subText text-white text-caption1-b px-[15px] py-[10px] mx-auto rounded-medium ${disable ? 'inline-block' : 'hidden'}`}
        >
          채널을 연동하면 바로 서비스를 이용할 수 있어요!
        </div>
        <Button
          text={'시작하기'}
          buttonType={'large-filled-button'}
          disabled={disable}
          onClick={() => moveToNext()}
        />
      </div>
    </div>
  );
}
