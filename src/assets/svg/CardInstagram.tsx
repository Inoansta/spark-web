import { SvgProps } from './nav/UnifiedSettingIcon';

export default function CardInstagram({ className, ...props }: SvgProps) {
  return (
    <svg
      width="19"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12.9 1.5a4.35 4.35 0 0 1 4.35 4.35v6.3a4.35 4.35 0 0 1-4.35 4.35H6.6a4.35 4.35 0 0 1-4.35-4.35v-6.3A4.35 4.35 0 0 1 6.6 1.5h6.3zM9.75 5.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm4.012-1.2a.938.938 0 1 0 0 1.876.938.938 0 0 0 0-1.876z"
        fill="#4557FF"
      />
      <path
        d="M12 9a2.25 2.25 0 1 1-4.5 0A2.25 2.25 0 0 1 12 9z"
        fill="#4557FF"
      />
    </svg>
  );
}
