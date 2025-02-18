import { SvgProps } from '../nav/UnifiedSettingIcon';

export default function Graph2({ className, fill }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      className={className}
    >
      <g fill={`${fill ? fill : '#E8E8FF'}`}>
        <path d="M8.533 3.389c0-.215.165-.389.367-.389h2.2c.203 0 .367.174.367.389V16.61c0 .215-.165.389-.367.389H8.9c-.203 0-.367-.174-.367-.389V3.39ZM12.567 5.722c0-.215.164-.389.366-.389h2.2c.203 0 .367.174.367.39V16.61c0 .215-.164.389-.367.389h-2.2c-.202 0-.366-.174-.366-.389V5.722ZM4.867 9.222c-.203 0-.367.174-.367.39v7c0 .214.164.388.367.388h2.2c.202 0 .366-.174.366-.389v-7c0-.215-.164-.389-.366-.389h-2.2Z" />
      </g>
    </svg>
  );
}
