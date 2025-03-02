export default function SplitString({ item1 }: { item1: string }) {
  let first = '';
  let second = '';
  let separate_position = 0;

  for (let i = 0; i < item1.length; i++) {
    if (item1[i] === ':') {
      separate_position = i;
    }
  }
  first = item1.slice(0, separate_position + 1);
  second = item1.slice(separate_position + 1);
  return (
    <div className={'leading-[24px]'}>
      <span className={'text-black font-[700]'}>{first}</span>
      {second}
    </div>
  );
}
