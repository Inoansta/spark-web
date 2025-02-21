import type { ComponentProps } from 'react';
import { cn } from '@/shared/lib';
import { Flex } from '@/shared/ui';

export interface ButtonInterface extends ComponentProps<'button'> {
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
    'px-[20px] w-full h-[48px] bg-primary5 text-white text-[15px] rounded-medium active:bg-primary7 cursor-pointer',
  'black-large-filled-button':
    'px-[20px] w-full max-w-[335px] h-[48px] bg-[#333333] text-white text-subtitle-b rounded-medium',
  'inactive-large-filled-button':
    'px-[20px] w-full max-w-[335px] h-[48px] bg-[#E5E5EA] text-[#8D9199] text-subtitle-b rounded-medium',
};

export function Button({
  text,
  onClick,
  buttonType,
  ...props
}: ButtonInterface) {
  return (
    <Flex justify="center">
      <button
        className={
          props.className?.trim().length
            ? cn(style[buttonType], props.className)
            : style[buttonType]
        }
        onClick={() => onClick()}
        {...props}
      >
        {text}
      </button>
    </Flex>
  );
}
