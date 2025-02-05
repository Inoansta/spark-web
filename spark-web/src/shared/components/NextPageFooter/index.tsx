import { Button, type ButtonInterface } from '@/shared/components';
import { type RouteInfo, useMoveLocation } from '@/shared/hooks';

interface NextPageFooter {
  nextLocation: RouteInfo['location'];
  text: string;
  buttonType: ButtonInterface['buttonType'];
}

export default function NextPageFooter({
  nextLocation,
  text,
  buttonType,
}: NextPageFooter) {
  const navigate = useMoveLocation(nextLocation);

  return (
    <div className="fixed max-w-[450px] w-full bottom-0 px-[20px] pt-[12px] pb-[21px] z-20">
      <Button text={text} onClick={navigate} buttonType={buttonType} />
    </div>
  );
}
