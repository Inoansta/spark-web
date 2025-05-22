import type { SvgProps } from '../nav/UnifiedSettingIcon';
export default function StarShadow({ ...props }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="207"
      height="14"
      viewBox="0 0 207 14"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_f_4750_8452)">
        <ellipse
          cx="103.5"
          cy="7"
          rx="100.5"
          ry="4"
          fill="url(#paint0_linear_4750_8452)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_4750_8452"
          x="0"
          y="0"
          width="207"
          height="14"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.5"
            result="effect1_foregroundBlur_4750_8452"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4750_8452"
          x1="103.5"
          y1="3"
          x2="103.5"
          y2="11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.15" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
