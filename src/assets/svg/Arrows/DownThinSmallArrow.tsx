import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function DownThinSmallAroow({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className={className}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <g clipPath="url(#a)">
        <path
          fill="#1C1C1E"
          d="m12.526 13.197 3.972-3.977a.75.75 0 1 1 1.06 1.06l-4.323 4.33a1 1 0 0 1-1.415.001l-.102-.103-4.246-4.216a.75.75 0 1 1 1.056-1.064l3.998 3.969Z"
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
