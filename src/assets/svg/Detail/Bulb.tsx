import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function Bulb({ className }: SvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path
        fill="#E8E8FF"
        fillRule="evenodd"
        d="M5.875 3.375A5.833 5.833 0 0 1 15.833 7.5a5.83 5.83 0 0 1-2.5 4.783v1.883A.833.833 0 0 1 12.5 15h-5a.834.834 0 0 1-.833-.834v-1.883a5.83 5.83 0 0 1-.792-8.908ZM7.744 18.09a.833.833 0 0 1-.244-.59v-.832h5v.833a.833.833 0 0 1-.833.833H8.333a.833.833 0 0 1-.589-.244Zm4.284-10.242a.524.524 0 0 0 .002-.982l-1.028-.388a.35.35 0 0 1-.209-.215l-.35-1.035a.525.525 0 0 0-.992-.008l-.404 1.14a.346.346 0 0 1-.212.21l-.853.298a.524.524 0 0 0-.002.99l.945.334a.277.277 0 0 1 .172.179l.354 1.132a.524.524 0 0 0 1.002-.003l.328-1.072a.28.28 0 0 1 .17-.18l1.077-.4Z"
        clipRule="evenodd"
        className={className}
      />
    </svg>
  );
}
