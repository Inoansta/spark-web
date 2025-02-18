import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function Youtube({ className }: SvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path
        fill="#4557FF"
        fillRule="evenodd"
        d="M16.931 4.16a2.229 2.229 0 0 1 1.571 1.571c.373 1.385.373 4.27.373 4.27s0 2.883-.373 4.268a2.229 2.229 0 0 1-1.57 1.57c-1.385.374-6.932.374-6.932.374s-5.547 0-6.931-.373a2.229 2.229 0 0 1-1.571-1.571C1.125 12.884 1.125 10 1.125 10s0-2.884.373-4.269a2.229 2.229 0 0 1 1.57-1.57C4.454 3.787 10 3.787 10 3.787s5.547 0 6.931.372Zm-8.706 7.637a.5.5 0 0 0 .75.433l3.114-1.797a.5.5 0 0 0 0-.866L8.975 7.77a.5.5 0 0 0-.75.433v3.594Z"
        clipRule="evenodd"
        className={className}
      />
    </svg>
  );
}
