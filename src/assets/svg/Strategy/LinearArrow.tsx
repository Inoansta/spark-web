import type { SvgProps } from '../nav/UnifiedSettingIcon';

export default function LinearArrow({ ...props }: SvgProps) {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.833 10.001h8.334m0 0-3.334-3.333m3.334 3.333-3.334 3.516"
        stroke="#C0C2C8"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
