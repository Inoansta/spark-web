import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function DetailX({ ...props }: SvgProps) {
  return (
    <svg
      width="160"
      height="160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M144.305 2.669a7.38 7.38 0 0 0-10.414 0l-53.63 53.457L26.108 2.15a7.38 7.38 0 0 0-10.414 0L2.157 15.644a7.323 7.323 0 0 0 0 10.38L56.309 80 2.157 133.976a7.323 7.323 0 0 0 0 10.38l13.538 13.494a7.38 7.38 0 0 0 10.413 0l54.152-53.976 53.631 53.457a7.38 7.38 0 0 0 10.414 0l13.538-13.494a7.322 7.322 0 0 0 0-10.38L104.212 80l53.631-53.457a7.323 7.323 0 0 0 0-10.38L144.305 2.669z"
        fill="#FF4242"
      />
    </svg>
  );
}
