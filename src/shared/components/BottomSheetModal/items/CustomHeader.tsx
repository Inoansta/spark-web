import { LargeClose } from '@/assets/svg/LargeClose';

interface CustomHeader {
  title: string;
  onClose: () => void;
}

function CustomHeader({ title, onClose }: CustomHeader) {
  return (
    <div className={'flex flex-col justify-center'}>
      {/* where the close button goes */}
      <div>
        <LargeClose
          fill="red"
          className={'ml-auto mt-[20px]'}
          onClick={() => onClose()}
        />
      </div>
      <div
        className={'text-black text-[18px] font-[700] leading-[26px] my-[10px]'}
      >
        {title}
      </div>
    </div>
  );
}

export default CustomHeader;
