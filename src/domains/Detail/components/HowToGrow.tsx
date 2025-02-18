import PoliceCarLight from '@/assets/detail/img/PoliceCarLight.png';
import CheckPlus from '@/assets/svg/CheckPlus';
import Background from '@/assets/svg/Detail/Background';

const strategies = [
  '조회수를 늘리려고 무작정 숏츠를 올린다',
  '썸네일을 바꿔보지만, 클릭률이 여전히 낮다',
  '잘 나가는 채널을 따라 했지만, 내 채널은 효과가 없다',
  '구독자 늘리려고 맞구독, 맞댓글을 시도해봤다',
];

export default function HowToGrow() {
  return (
    <div className="relative w-full">
      <Background className={'absolute inset-0 w-full h-full'} />
      <div className={'relative px-[20px]'}>
        <div className={'text-center mt-[42px]'}>
          <div
            className={
              'mb-[12px] text-caption-b text-primary4 bg-primary1 rounded-small px-[10px] inline-block mx-auto py-[2px]'
            }
          >
            Check List
          </div>
          <div className={'text-title4-eb text-[#787CFE]'}>
            혹시 이런 방법으로 채널을 <br />
            성장 시키고 계시진 않나요?
          </div>
        </div>
        <div
          className={'px-[10px] pt-[40px] pb-[20px] flex flex-col gap-[10px]'}
        >
          {strategies.map((item) => {
            return (
              <div
                key={item}
                className={
                  'p-[10px] border-b border-b-primary2 text-highEmphasis flex flex-row gap-[10px]'
                }
              >
                <CheckPlus />
                {item}
              </div>
            );
          })}
        </div>
        <div
          className={
            'flex flex-col gap-[10px] rounded-extraLarges px-[10px] py-[20px] bg-white/10 mt-[52px] mb-[70px] shadow-[0px_5px_10px_0px_rgba(0,0,0,0.15)] backdrop-blur-[5px]'
          }
        >
          <img src={PoliceCarLight} className={'mx-auto'} />
          <div className={'text-center text-highEmphasis text-subtitle-b'}>
            이 방법들은 단기적인 효과는 있어도,
            <br />
            오히려{' '}
            <span
              className={
                'inline text-subtitle-eb text-[#FF4242] underline underline-offset-1'
              }
            >
              알고리즘에 부정적인 영향
            </span>
            을 줄 수 있어요.
          </div>
        </div>
      </div>
    </div>
  );
}
