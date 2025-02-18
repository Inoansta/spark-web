import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function Time({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="37"
      fill="none"
      className={className}
    >
      <path
        fill="#787CFE"
        d="M18 3.5c8.285 0 15 6.716 15 15 0 8.285-6.715 15-15 15-8.284 0-15-6.715-15-15 0-8.284 6.716-15 15-15Zm0 6a1.5 1.5 0 0 0-1.5 1.5v7.5c0 .398.158.78.44 1.06l4.5 4.5a1.5 1.5 0 0 0 2.12-2.12l-4.06-4.061V11A1.5 1.5 0 0 0 18 9.5Z"
      />
    </svg>
  );
}
