import LargeClose from '@/assets/svg/LargeClose.svg?react';

interface CustomHeader {
  title: string;
  onClose: () => void;
}

function CustomHeader({ title, onClose }: CustomHeader) {
  return (
    <div className={'flex flex-col justify-center'}>
      {/* where the close button goes */}
      <div>
        <LargeClose className={'ml-auto mt-[20px]'} onClick={() => onClose()} />
      </div>
      <div className={'text-black text-title5-b my-[10px]'}>{title}</div>
    </div>
  );
}

export default CustomHeader;
