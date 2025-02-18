import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function Background({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 375 524"
      preserveAspectRatio="none"
      className={className}
      fill="none"
    >
      <path
        d="M0 0H375V391.111C375 394.394 373.388 397.469 370.687 399.336L193.187 522.068C189.765 524.434 185.235 524.434 181.813 522.068L4.31269 399.336C1.61192 397.469 0 394.394 0 391.111V0Z"
        fill="url(#paint0_linear_1788_9659)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1788_9659"
          x1="187.5"
          y1="0"
          x2="187.5"
          y2="526"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#E8E8FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
