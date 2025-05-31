import type { SvgProps } from '../nav/UnifiedSettingIcon';

export default function HeartIcon({ ...props }: SvgProps) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.5791 4.01131C2.1403 5.35972 2.1403 7.54593 3.5791 8.89434L8.84556 13.83C9.21362 14.1749 9.78624 14.1749 10.1543 13.83L15.4209 8.89434C16.8597 7.54593 16.8597 5.35972 15.4209 4.01131C13.9821 2.6629 11.6494 2.6629 10.2106 4.01131L9.5 4.67724L8.78943 4.01131C7.35064 2.6629 5.01789 2.6629 3.5791 4.01131Z"
        fill="white"
      />
    </svg>
  );
}
