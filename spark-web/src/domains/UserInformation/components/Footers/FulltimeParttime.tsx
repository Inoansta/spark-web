import { useState } from 'react';
import Buttons from '@/shared/components/Buttons/Buttons';

interface FulltimeParttime {
  onClick: (fulltime: string) => void;
  setSteps: () => void;
}

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
      <Buttons
        text={'전업'}
        onClick={() => onClick('전업')}
        buttonType={'large-outlined-button'}
      />
      <Buttons
        text={'부업'}
        onClick={() => onClick('부업')}
        buttonType={'large-outlined-button'}
      />
    </div>
  );
}

export default FulltimeParttime;
