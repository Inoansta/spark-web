import { SvgProps } from './UnifiedSettingIcon';
export const FrontIcon = ({
  className,
  fill = '#8D9199',
  ...props
}: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="15"
      viewBox="0 0 10 15"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M7.44537 7.52714L0.844541 13.0659C0.421466 13.4209 0.366281 14.0517 0.721284 14.4747C1.07629 14.8978 1.70704 14.953 2.13012 14.598L9.63655 8.29934C9.69633 8.24917 9.74878 8.1935 9.79375 8.13368C10.1174 7.71147 10.054 7.10519 9.6424 6.75986L2.13517 0.460542C1.7121 0.10554 1.08134 0.160723 0.726337 0.583798C0.371335 1.00687 0.426519 1.63763 0.849594 1.99263L7.44537 7.52714Z"
        fill={fill}
      />
    </svg>
  );
};
