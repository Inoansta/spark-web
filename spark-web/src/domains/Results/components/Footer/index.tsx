import { Button } from '@/shared/components';
import { useMoveLocation } from '@/shared/hooks';

export default function Footer() {
  const navigate = useMoveLocation('/popular');

  return (
    <div className="fixed left-0 right-0 bottom-0 px-[20px] pt-[12px] pb-[21px] z-20">
      <Button
        text={'다음'}
        onClick={navigate}
        buttonType={'large-filled-button'}
      />
    </div>
  );
}
