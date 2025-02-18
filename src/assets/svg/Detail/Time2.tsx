import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function Time2({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      className={className}
    >
      <path
        fill="#E8E8FF"
        d="M10 1.667a8.333 8.333 0 1 1 0 16.666 8.333 8.333 0 1 1 0-16.666ZM10 5a.833.833 0 0 0-.833.833V10c0 .22.088.433.244.589l2.5 2.5a.833.833 0 0 0 1.178-1.178l-2.256-2.256V5.833A.833.833 0 0 0 10 5Z"
      />
    </svg>
  );
}
