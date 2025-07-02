import { Like } from '@/assets/strengthWeakness/Like';
import HeartIcon from '@/assets/svg/Strategy/HeartIcon';
import { Flex } from '@/shared/ui';
import handleOpenNewTab from '@/shared/util/handleOpenNewTab';

export default function ActionButtonsRow() {
  const isWebView = typeof window !== 'undefined' && window.ReactNativeWebView;

  const onClickReview = () => {
    const url =
      'https://apps.apple.com/kr/app/spark-%EC%8A%A4%ED%8C%8C%ED%81%AC/id6742328947';
    const message = JSON.stringify({
      type: 'external_url',
      url: url,
    });

    if (isWebView) {
      window.ReactNativeWebView?.postMessage(message);
    } else {
      handleOpenNewTab(
        'https://apps.apple.com/kr/app/spark-%EC%8A%A4%ED%8C%8C%ED%81%AC/id6742328947',
      );
    }
  };

  const onClickEvent = () => {
    const url =
      'https://docs.google.com/forms/d/1K-18CmnK4VJLUJSOwqTerWMXZnJrRmOOpC8Zh5AYjYw/viewform?edit_requested=true';
    const message = JSON.stringify({
      type: 'external_url',
      url: url,
    });

    if (isWebView) {
      window.ReactNativeWebView?.postMessage(message);
    } else {
      handleOpenNewTab(url);
    }
  };

  return (
    <Flex justify="center" align="center" gap={3} className="py-[20px] w-full">
      <button
        className="flex items-center gap-[5px] px-[20px] py-[10px] rounded-[10px] border border-[#4557FF] bg-white text-[#4557FF] font-bold text-[13px]"
        onClick={onClickReview}
      >
        <span>스파크 리뷰쓰기</span>
        <Like fill="#4557FF" className="w-[19px] h-[18px]" />
      </button>
      <button
        className="flex flex-row items-center gap-[5px] px-[20px] py-[10px] rounded-[10px] bg-[#4557FF] text-white font-suit font-bold text-[13px]"
        onClick={onClickEvent}
      >
        <span>이벤트 참여하기</span>
        <HeartIcon />
      </button>
    </Flex>
  );
}
