import { SvgProps } from './nav/UnifiedSettingIcon';

export default function CheckPlus({ className }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      className={className}
    >
      <path
        fill="#787CFE"
        fillRule="evenodd"
        d="M12.49 4.42a6.111 6.111 0 1 0 3.624 5.586v-.638a.833.833 0 1 1 1.666 0v.639a7.779 7.779 0 1 1-4.612-7.109.833.833 0 1 1-.678 1.523Zm5.046-.558a.833.833 0 0 1 0 1.178l-6.944 6.952a.833.833 0 0 1-1.178 0L7.33 9.909A.833.833 0 0 1 8.51 8.73l1.493 1.494 6.356-6.362a.833.833 0 0 1 1.178 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
