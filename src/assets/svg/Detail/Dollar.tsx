import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function Dollar({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      className={className}
    >
      <path
        fill="#4557FF"
        d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10Zm-2.5-8a1 1 0 1 0 0 2H9v1a1 1 0 1 0 2 0v-1h1a2.5 2.5 0 0 0 0-5H8a.5.5 0 1 1 0-1h4.5a1 1 0 1 0 0-2H11V5a1 1 0 1 0-2 0v1H8a2.5 2.5 0 1 0 0 5h4a.5.5 0 0 1 0 1H7.5Z"
      />
    </svg>
  );
}
