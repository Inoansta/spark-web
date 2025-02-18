import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function Profile({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      className={className}
    >
      <g fill="#4557FF">
        <path d="M14.167 6.667a4.167 4.167 0 1 1-8.334 0 4.167 4.167 0 0 1 8.334 0ZM3.333 16.667A4.167 4.167 0 0 1 7.5 12.5h5a4.167 4.167 0 0 1 4.167 4.167c0 .46-.373.833-.834.833H4.167a.833.833 0 0 1-.834-.833Z" />
      </g>
    </svg>
  );
}
