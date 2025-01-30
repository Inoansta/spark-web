import { useState } from 'react';
import { Button } from '@/shared/components';

interface FulltimeParttime {
  onClick: (fulltime: string) => void;
  setSteps: () => void;
}

const TIME = ['전업', '부업'];

function FulltimeParttime({ onClick, setSteps }: FulltimeParttime) {
  const [clicked, setClicked] = useState<boolean>(true);

  return (
    <div
      className={`${clicked ? 'block' : 'hidden'} bg-white pt-[12px] pb-[30px] fixed left-0 right-0 bottom-0 px-[20px] z-10 flex flex-col gap-[10px]`}
      onClick={() => {
        setClicked(false);
        setSteps();
      }}
    >
      {TIME.map((item) => {
        return (
          <Button
            text={item}
            onClick={() => onClick(item)}
            buttonType={'large-outlined-button'}
            key={item}
          />
        );
      })}
    </div>
  );
}

export default FulltimeParttime;
