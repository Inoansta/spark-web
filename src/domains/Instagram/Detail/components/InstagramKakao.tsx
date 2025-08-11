import KakaoTalk from '@/assets/detail/img/KakaoTalk.jpg';
import Kakao from '@/assets/svg/Detail/Kakao';

export default function InstagramKakao() {
  return (
    <div className="pt-[60px] pb-[80px] px-[20px] flex flex-col justify-center">
      <div className="text-[#333] text-[20px] font-[800] leading-[28px] text-center">
        혹시{' '}
        <div className="inline-flex flex-row text-white px-[5px] rounded-[4px] bg-[#4557FF]">
          <div className="inline">`오픈 카톡방`</div> <Kakao />
        </div>{' '}
        에서
        <br />
        정보를 얻고 계시진 않나요?
      </div>
      <img src={KakaoTalk} className="mt-[40px] mx-[20px]" />
    </div>
  );
}
