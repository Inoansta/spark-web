import KakaoTalk from '@/assets/detail/img/KakaoTalk.jpg';
import DetailX from '@/assets/svg/Detail/DetailX';

export default function WrongWay() {
  return (
    <div className="relative">
      <div className="absolute z-10 w-full px-[20px] pt-[40px]">
        <div className="text-[#333] text-[20px] font-[800] leading-[28px] text-center">
          잘못된 방법을 사용하면
          <br />
          채널 성장에 도움이 안돼요!
        </div>
      </div>
      <div className={'absolute z-10 top-1/3 w-full flex justify-center'}>
        <DetailX />
      </div>
      <div className="absolute z-10 top-2/3 px-[20px] w-full">
        <div className="w-full bg-[#FFF3F3] border border-[#FF4242] rounded-[8px] p-[8px] text-center text-[15px] font-[700] leading-[24px]">
          <span className="text-[#FF4242] font-[800]">품앗이</span>와{' '}
          <span className="text-[#FF4242] font-[800]">잘못된 위치 추가</span>는
          <br />
          채널 성장에 도움이 되지 않아요
        </div>
      </div>
      <div className="pt-[100px] pb-[80px] px-[20px] flex flex-col justify-center bg-[#F3F4F7] blur-lg">
        <img src={KakaoTalk} className="mt-[40px] mx-[20px]" />
      </div>
    </div>
  );
}
