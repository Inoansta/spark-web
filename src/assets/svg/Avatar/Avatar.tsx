import { SvgProps } from '../nav/SettingIcon';

export const Avatar = ({ className, ...props }: SvgProps) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="30" cy="30" r="30" fill="#8D9199" />
      <path
        d="M36.6667 24.6667C36.6667 28.3486 33.6819 31.3333 30 31.3333C26.3181 31.3333 23.3333 28.3486 23.3333 24.6667C23.3333 20.9848 26.3181 18 30 18C33.6819 18 36.6667 20.9848 36.6667 24.6667Z"
        fill="white"
      />
      <path
        d="M19.3333 40.6667C19.3333 36.9848 22.3181 34 26 34H34C37.6819 34 40.6667 36.9848 40.6667 40.6667C40.6667 41.403 40.0697 42 39.3333 42H20.6667C19.9303 42 19.3333 41.403 19.3333 40.6667Z"
        fill="white"
      />
    </svg>
  );
};
