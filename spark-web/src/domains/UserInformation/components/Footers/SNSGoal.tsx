import React, { useCallback, useState } from 'react';
import Buttons from '@/shared/components/Buttons/Buttons';

interface SNSGoal {
  onClick: (goal: string) => void;
  setIsTyped: () => void;
}

const list: string[] = [
  '개인 브랜딩 및 전문성 강화',
  '수익화 및 경제적 이익',
  '개인적인 취미 및 즐거움',
  '직접입력',
];

function SNSGoal({ onClick, setIsTyped }: SNSGoal) {
  const [touched, setTouched] = useState<boolean>(true);
  const [inputText, setInputText] = useState<string>('');

  const submitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClick(inputText);
      setIsTyped();
    }
  };

  return (
    <>
      <div
        className={`${touched ? 'block' : 'hidden'} sticky bottom-0  bg-white pt-[12px] pb-[30px]  flex flex-col gap-[10px]`}
      >
        {list.map((item) => {
          return (
            <Buttons
              text={item}
              onClick={() => {
                if (item !== '직접입력') {
                  onClick(item);
                }
                setTouched(item !== '직접입력');
              }}
              buttonType={'large-outlined-button'}
              key={item}
            />
          );
        })}
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
