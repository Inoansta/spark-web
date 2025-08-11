import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function Kakao({ className }: SvgProps) {
  return (
    <svg
      width="25"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 3.154c-5.204 0-9.428 3.281-9.428 7.317 0 2.517 1.63 4.714 4.12 6.053l-1.047 3.837a.387.387 0 0 0 .594.415l4.583-3.045c.386 0 .782.066 1.178.066 5.205 0 9.429-3.281 9.429-7.326S17.705 3.154 12.5 3.154z"
        fill="#fff"
      />
    </svg>
  );
}
