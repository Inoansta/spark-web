import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function Time({ fill = 'white', ...props }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      fill="none"
      {...props}
    >
      <path
        fill={fill}
        d="M16 3.167c7.364 0 13.333 5.969 13.333 13.333S23.364 29.833 16 29.833 2.667 23.863 2.667 16.5C2.667 9.136 8.636 3.166 16 3.166ZM16 8.5a1.333 1.333 0 0 0-1.333 1.333V16.5c0 .353.14.692.39.942l4 4a1.333 1.333 0 0 0 1.886-1.885l-3.61-3.61V9.834A1.333 1.333 0 0 0 16 8.5Z"
      />
    </svg>
  );
}
