import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function UpThinSmallArrow({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className={className}
    >
      <g clipPath="url(#a)">
        <path
          fill="#1C1C1E"
          d="m12.526 10.706 3.972 3.977a.75.75 0 1 0 1.06-1.06l-4.323-4.33a1 1 0 0 0-1.415 0l-.102.102-4.246 4.216a.75.75 0 1 0 1.056 1.065l3.998-3.97Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M7 9h11v6H7z" />
        </clipPath>
      </defs>
    </svg>
  );
}
