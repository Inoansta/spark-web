import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function Graph({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      fill="none"
      className={className}
    >
      <g fill="#787CFE">
        <path d="M13.333 5.167c0-.369.299-.667.667-.667h4c.368 0 .667.298.667.667v22.666A.667.667 0 0 1 18 28.5h-4a.667.667 0 0 1-.667-.667V5.167ZM20.667 9.167c0-.369.298-.667.666-.667h4c.369 0 .667.298.667.667v18.666a.667.667 0 0 1-.667.667h-4a.667.667 0 0 1-.666-.667V9.167ZM6.667 15.167a.667.667 0 0 0-.667.666v12c0 .369.298.667.667.667h4a.667.667 0 0 0 .666-.667v-12a.667.667 0 0 0-.666-.666h-4Z" />
      </g>
    </svg>
  );
}
