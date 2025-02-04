import { Text } from '@/shared/ui';

export default function CheerUpBar() {
  return (
    <article className="px-5 py-3 flex items-center bg-primary1">
      <Text
        title="🌟 작은 꾸준함이 큰 변화를 만든다는 걸, 증명하고 있어요."
        as="description"
        className="text-[12px] text-primary4"
      />
    </article>
  );
}
