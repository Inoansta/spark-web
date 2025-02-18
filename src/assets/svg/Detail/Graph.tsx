import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function Graph({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="41"
      fill="none"
      className={className}
    >
      <path
        fill="#787CFE"
        d="M17 7.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v25.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75V7.75ZM25.25 12.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v21a.75.75 0 0 1-.75.75H26a.75.75 0 0 1-.75-.75v-21ZM9.5 19a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75H14a.75.75 0 0 0 .75-.75v-13.5A.75.75 0 0 0 14 19H9.5Z"
      />
    </svg>
  );
}
