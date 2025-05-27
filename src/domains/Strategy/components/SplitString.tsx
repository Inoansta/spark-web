export default function SplitString({
  item1,
  index,
}: {
  item1: string;
  index: number;
  key: string;
}) {
  let first = '';
  let second = '';
  let separate_position = 0;

  for (let i = 0; i < item1.length; i++) {
    if (item1[i] === ':') {
      separate_position = i;
      break;
    }
  }
  if (separate_position === 0) {
    second = item1;
  } else {
    first = item1.slice(0, separate_position + 1);
    second = item1.slice(separate_position + 1);
  }
  return (
    <div>
      <div className="text-[15px] font-[700] leading-[24px] mb-[5px]">
        {index + 1}. {first}
      </div>
      <div className="text-[15px] font-[500] leading-[24px]">{second}</div>
    </div>
  );
}
