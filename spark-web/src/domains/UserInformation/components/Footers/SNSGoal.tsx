import React, { useState } from 'react';
import Buttons from '@/shared/components/Buttons/Buttons';

interface SNSGoal {
  onClick: (goal: string) => void;
  setIsTyped: () => void;
}

function SNSGoal({ onClick, setIsTyped }: SNSGoal) {
  const [touched, setTouched] = useState<boolean>(true);
  const [inputText, setInputText] = useState<string>('');

  function submitOnEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onClick(inputText);
      setIsTyped();
    }
  }

  return (
    <>
      <div
        className={`${touched ? 'block' : 'hidden'} sticky bottom-0  bg-white pt-[12px] pb-[30px]  flex flex-col gap-[10px]`}
        onClick={() => setTouched(false)}
      >
        <Buttons
          text={'개인 브랜딩 및 전문성 강화'}
          onClick={() => onClick('개인 브랜딩 및 전문성 강화')}
          buttonType={'large-outlined-button'}
        />
        <Buttons
          text={'수익화 및 경제적 이익'}
          onClick={() => onClick('수익화 및 경제적 이익')}
          buttonType={'large-outlined-button'}
        />
        <Buttons
          text={'개인적인 취미 및 즐거움'}
          onClick={() => onClick('개인적인 취미 및 즐거움')}
          buttonType={'large-outlined-button'}
        />
        <Buttons
          text={'직접입력'}
          onClick={() => setTouched(true)}
          buttonType={'large-outlined-button'}
        />
      </div>
      <div
        className={`${touched ? 'hidden' : 'block'} fixed left-0 right-0 pt-[12px] pb-[20px] px-[20px] flex justify-center bottom-0`}
      >
        <input
          className={
            'block text-body-m w-[335px] h-[48px] border px-[20px] border-primary5 rounded-medium '
          }
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={submitOnEnter}
        />
      </div>
    </>
  );
}

export default SNSGoal;
