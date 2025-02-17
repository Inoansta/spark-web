import { Flex } from '@/shared/ui';

export interface ButtonInterface {
  text: string;
  onClick: () => void;
  buttonType: keyof typeof style;
}

const style = {
  'small-outlined-button':
    'px-[20px] w-full max-w-[70px] h-[40px] text-primary5 border border-primary5  rounded-md active:bg-primary1',
  'large-outlined-button':
    'px-[20px] w-full max-w-[335px] h-[48px] text-primary5 border border-primary5  rounded-md active:bg-primary1',
  'large-filled-button':
    'px-[20px] w-full max-w-[335px] h-[48px] bg-primary5 text-white text-subtitle-b rounded-medium active:bg-primary7',
  'small-filled-button':
    'px-[20px] w-full max-w-[335px] h-[48px] bg-primary5 text-white text-[15px] rounded-medium active:bg-primary7 cursor-pointer',
};

export function Button({ text, onClick, buttonType }: ButtonInterface) {
  return (
    <Flex justify="center">
      <button onClick={() => onClick()} className={style[buttonType]}>
        {text}
      </button>
    </Flex>
  );
}
