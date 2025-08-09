import { useEffect, useState } from 'react';
import { TOKEN } from '@/domains/Login/hooks/useAuthToken';
import {
  FrequentlyAskedQuestions,
  GraySpace,
  HowToGrow,
  Recommendation,
  TopPage,
  WorriedAbout,
} from '@/domains/Youtube/Detail/components';
import { Button } from '@/shared/components';
import { useMoveLocation } from '@/shared/hooks';
import { Storage } from '@/shared/lib';

export default function Detail() {
  const [disable, setDisable] = useState(false);
  const moveToNext = useMoveLocation('/user-info');

  useEffect(() => {
    //TODO REFRESH를 ACCESS로 바꾸기
    const connected = Storage.getLocalStorage(TOKEN.REFRESH);
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
          className={`bg-subText text-white text-caption1-b font-[700] px-[15px] py-[10px] mx-auto rounded-medium ${disable ? 'inline-block' : 'hidden'}`}
        >
          채널을 연동하면 바로 서비스를 이용할 수 있어요!
        </div>
        <Button
          text={'시작하기'}
          buttonType={
            disable
              ? 'inactive-large-filled-button'
              : 'black-large-filled-button'
          }
          disabled={disable}
          onClick={() => moveToNext()}
        />
      </div>
    </div>
  );
}
