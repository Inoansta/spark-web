import { SvgProps } from '../nav/SettingIcon';

export const Graph = ({ ...props }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <path
        d="M10.5 3.5C10.5 3.22386 10.7239 3 11 3H14C14.2761 3 14.5 3.22386 14.5 3.5V20.5C14.5 20.7761 14.2761 21 14 21H11C10.7239 21 10.5 20.7761 10.5 20.5V3.5Z"
        fill="white"
      />
      <path
        d="M16 6.5C16 6.22386 16.2239 6 16.5 6H19.5C19.7761 6 20 6.22386 20 6.5V20.5C20 20.7761 19.7761 21 19.5 21H16.5C16.2239 21 16 20.7761 16 20.5V6.5Z"
        fill="white"
      />
      <path
        d="M5.5 11C5.22386 11 5 11.2239 5 11.5V20.5C5 20.7761 5.22386 21 5.5 21H8.5C8.77614 21 9 20.7761 9 20.5V11.5C9 11.2239 8.77614 11 8.5 11H5.5Z"
        fill="white"
      />
    </svg>
  );
};
