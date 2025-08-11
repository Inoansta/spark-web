import BackGround from '@/assets/detail/img/BackGround.png';
import FirstPro from '@/assets/detail/img/FirstPro.png';
import SecondPro from '@/assets/detail/img/SecondPro.png';
import ThirdPro from '@/assets/detail/img/ThirdPro.png';
import Graph from '@/assets/svg/Detail/Graph';
import Magic2 from '@/assets/svg/Detail/Magic2';
import Time3 from '@/assets/svg/Detail/Time3';

const whatWeDo = [
  {
    first: '복잡한 데이터 해석은 스파크가 대신!',
    second: '필요한 인사이트만 빠르게 확인하세요.',
    svg: <Graph />,
  },
  {
    first: '잘못된 정보로 시간 낭비하지 마세요!',
    second: (
      <>
        스파크는 인스타그램의
        <br /> 공식 자료만을 제공해요.
      </>
    ),
    svg: <Magic2 />,
  },
  {
    first: '내 채널에 최적화된 성장 비법으로,',
    second: '차별화된 콘텐츠를 만들어보세요!',
    svg: <Time3 />,
  },
];

export default function InstagramRecommendation() {
  return (
    <div className={'bg-gradient-to-b from-[#4557FF] to-[#F8F9FD]'}>
      <div className={'text-center'}>
        <div
          className={
            'inline-block mt-[100px] px-[20px] py-[10px] text-[#5E6166] text-[20px] font-[800] leading-[28px] bg-white rounded-tl-extraLarges rounded-b-extraLarges'
          }
        >
          🔥 인스타그램이 추천하는
          <br />
          채널로 성장하려면?
        </div>
      </div>
      <div className={'px-[20px] mb-[40px]'}>
        <div
          className={
            'inline-block bg-primary5 text-white text-[12px] font-[700] leading-[16px] p-[10px] mt-[10px] rounded-tr-extraLarges rounded-b-extraLarges mr-[20px]'
          }
        >
          단순히 트렌드 따라가기가 아닌,{' '}
          <span
            className={
              'inline underline-offset-auto underline [text-underline-position:from-font] [text-decoration-skip-ink:auto] text-[13px] font-[800] leading-[18px]'
            }
          >
            내 채널에 맞는 전략
          </span>
          이 필요해요!
        </div>
        <div
          className={
            'inline-block bg-primary5 text-white text-[12px] font-[700] leading-[16px] p-[10px] mt-[5px] rounded-tr-extraLarges rounded-b-extraLarges'
          }
        >
          스파크는...
        </div>
      </div>
      <div className={'text-center'}>
        <div
          className={
            'inline-block rounded-small bg-white text-primary5 text-[15px] font-[800] leading-[24px] mb-[10px] px-[5px]'
          }
        >
          인스타그램의 공식 데이터와 알고리즘 원칙을 기반으로
        </div>
        <div className={'text-white text-[24px] font-[800] leading-[32px]'}>
          내 채널에 맞는{' '}
          <span
            className={
              'inline text-[24px] font-[800] leading-[32px] bg-primary5 rounded-small px-[3px]'
            }
          >
            성장 비법
          </span>
          을 제시해요!
        </div>
      </div>
      <div className={'mt-[60px] flex justify-center items-center'}>
        <img src={FirstPro} className={'w-[50%]'} />
      </div>
      <div
        className={
          'inline-block mr-[30px] bg-white rounded-r-full p-[20px] mt-[20px] text-[13px] font-[700] leading-[18px]'
        }
      >
        <span
          className={
            'bg-[#333333] text-white rounded-full mr-[10px] w-[24px] h-[24px] inline-flex justify-center items-center text-[15px] font-[800] leading-[24px]'
          }
        >
          1
        </span>
        채널의 데이터를 분석하고, 강점과 약점을 진단해요!
      </div>
      <div className={'mt-[60px] flex justify-center items-center'}>
        <img src={SecondPro} className={'w-[40%]'} />
      </div>
      <div className={'flex'}>
        <div
          className={
            'inline-block ml-[auto] bg-white rounded-l-full p-[20px] mt-[20px] text-[13px] font-[700] leading-[18px]'
          }
        >
          <span
            className={
              'bg-[#333333] text-white rounded-full mr-[10px] w-[24px] h-[24px] inline-flex justify-center items-center text-[15px] font-[800] leading-[24px]'
            }
          >
            2
          </span>
          성장 가능성을 예측하고, 유효한 전략을 추천해요!
        </div>
      </div>
      <div className={'mt-[60px] flex justify-center items-center'}>
        <img src={ThirdPro} className={'w-[40%]'} />
      </div>
      <div
        className={
          'inline-block mr-[30px] bg-white rounded-r-full p-[20px] mt-[20px] text-[13px] font-[700] leading-[18px]'
        }
      >
        <span
          className={
            'bg-[#333333] text-white rounded-full mr-[10px] w-[24px] h-[24px] inline-flex justify-center items-center text-[15px] font-[800] leading-[24px]'
          }
        >
          3
        </span>
        강점은 더 살리고, 약점을 개선하는 비법을 제안해요!
      </div>
      <div className={'mt-[60px]'}>
        <div
          className="rounded-t-[calc(100vw/2)] bg-cover bg-center h-[670px] pt-[87px] px-[20px] flex flex-col gap-[60px] text-center"
          style={{ backgroundImage: `url(${BackGround})` }}
        >
          <div
            className={
              'text-white text-[20px] font-[800] leading-[28px] text-center'
            }
          >
            &quot;스파크는 빠르고,
            <br />
            효율적인 성장을
            <br />
            이끌어내는 서비스입니다&quot;
          </div>
          <div
            className={
              'rounded-extraLarges px-[20px] py-[10px] flex flex-col gap-[10px] bg-white'
            }
          >
            {whatWeDo.map((item, index) => {
              return (
                <div
                  className={`flex flex-row gap-[17px] p-[10px] ${index !== 2 ? 'border-b border-b-[#E5E5EA]' : null}`}
                  key={item.first}
                >
                  {item.svg}
                  <div className={'flex flex-col'}>
                    <div
                      className={
                        'text-[13px] font-[700] leading-[18px] text-[#1C1C1E]'
                      }
                    >
                      {item.first}
                    </div>
                    <div
                      className={
                        'text-[13px] font-[500] leading-[18px] text-[#333333]'
                      }
                    >
                      {item.second}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={
              'inline-block self-center p-[10px] text-white text-[18px] font-[700] leadindg-[26px] border border-white border-opacity-50 bg-white bg-opacity-15 rounded-b-extraLarges rounded-tl-extraLarges'
            }
          >
            스파크와 함께라면,
            <br />
            성장 과정이 즐겁고, 빛날 거에요!
          </div>
        </div>
      </div>
      {/* <DetailBg className={'rounded-t-[calc(100vw/2)] mt-[60px] w-full'} /> */}
    </div>
  );
}
