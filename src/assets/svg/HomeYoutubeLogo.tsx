import { SvgProps } from './nav/UnifiedSettingIcon';

export const HomeYoutubeLogo = ({ className, ...props }: SvgProps) => {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.931 4.16a2.229 2.229 0 0 1 1.571 1.571c.373 1.385.373 4.269.373 4.269s0 2.884-.373 4.269a2.229 2.229 0 0 1-1.57 1.57c-1.385.373-6.932.373-6.932.373s-5.547 0-6.931-.372a2.229 2.229 0 0 1-1.571-1.571C1.125 12.884 1.125 10 1.125 10s0-2.884.373-4.269a2.229 2.229 0 0 1 1.57-1.57C4.454 3.786 10 3.786 10 3.786s5.547 0 6.931.373zm-8.706 7.781c0 .32.347.521.625.361l3.364-1.941a.417.417 0 0 0 0-.722L8.85 7.698a.417.417 0 0 0-.625.36v3.883z"
        fill="#FF4242"
      />
    </svg>
  );
};
