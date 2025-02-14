import type { ComponentProps } from 'react';

export interface SvgProps extends ComponentProps<'svg'> {
  color?: string;
  className?: string;
  fill?: string;
  onClick?: () => void;
}

export const UnifiedSettingIcon = ({
  color = '#1C1C1E', // 기본 색상 설정
  className,
  fill,
  onClick,
  ...props
}: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill={fill || 'gray-500'} // fill props가 없을 경우 'none'으로 설정
      className={className}
      onClick={onClick}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.75 3.57728C13.1312 3.22001 12.3688 3.22001 11.75 3.57728L5.95577 6.92257C5.33697 7.27984 4.95577 7.94009 4.95577 8.65462V15.3452C4.95577 16.0598 5.33697 16.72 5.95577 17.0773L11.75 20.4226C12.3688 20.7798 13.1312 20.7798 13.75 20.4226L19.5442 17.0773C20.163 16.72 20.5442 16.0598 20.5442 15.3452V8.65463C20.5442 7.94009 20.163 7.27984 19.5442 6.92257L13.75 3.57728ZM12.75 14.4999C14.1307 14.4999 15.25 13.3806 15.25 11.9999C15.25 10.6192 14.1307 9.49993 12.75 9.49993C11.3693 9.49993 10.25 10.6192 10.25 11.9999C10.25 13.3806 11.3693 14.4999 12.75 14.4999Z"
        fill={color} // color props를 사용하여 fill 설정
      />
    </svg>
  );
};
