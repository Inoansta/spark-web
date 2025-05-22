// import { useState } from 'react';
import useStrategyStore from '@/app/store/useStrategyStore';
// import RightArrow from '@/assets/svg/Arrows/RightArrow';
import Magic from '@/assets/svg/Detail/Magic';
import SmallStar from '@/assets/svg/Strategy/SmallStar';
// import Star from '@/assets/svg/Strategy/Star';
// import StarShadow from '@/assets/svg/Strategy/Star_shadow';
import { Flex, Spacing } from '@/shared/ui';
import PageBackground from '@/shared/ui/components/PageBackground';

export default function StrategyFigmaSection1() {
  const {
    // userContents = '패션',
    // userFulltime = '전업',
    // userGoal = '개인적인 취미 및 즐거움',
    channelName,
  } = useStrategyStore((store) => store);

  return (
    <PageBackground color="black_linear_gradient">
      <section className="px-5 pt-5">
        <p className="text-lg font-bold text-[#FFF]">
          {channelName}님의 채널 성장을 위한
        </p>
        <div className="flex items-center mb-[10px]">
          <p className="text-2xl font-extrabold text-[#C6C5FF]">
            3가지 추천 비법
          </p>
          <Magic />
        </div>
        {/* hashtag 목록 */}
        <div className="flex items-center gap-[5px]">
          {['패션', '전업', '개인적인 취미 및 즐거움'].map((item) => (
            <div
              key={item}
              className="px-[10px] py-[5px] bg-white bg-opacity-10 rounded-[5px]"
            >
              <span className="text-xs font-medium text-primary2">
                # {item}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <>
          {/* 보여지는 컴포넌트 */}
          <Spacing size="large" />
          <Flex className="items-center justify-start gap-[10px]">
            <SmallStar />
            <div className="max-w-[186px]">
              <ToolComment
                content="첫 번째 성장 비법이 기다리고 있어요!"
                position="left"
              />
            </div>
          </Flex>
          {/* <Flex className="flex-col items-center justify-center gap-[30px]"> */}
          {/* <Flex className="flex-col items-center justify-center gap-7">
              <Star />
              <div
                style={{
                  fill: '#FFF',
                  filter:
                    'drop-shadow(0px 0px 10.363px #FFF) drop-shadow(0px 0px 20.726px #FFF) drop-shadow(0px 0px 72.54px #4557FF) drop-shadow(0px 0px 145.08px #4557FF) drop-shadow(0px 0px 248.708px #4557FF) drop-shadow(0px 0px 435.239px #4557FF)',
                }}
              >
                <StarShadow />
              </div>
            </Flex>
            <button className="bg-primary5 border-primary6 border-[1px] rounded-[20px] px-5 py-[11px] max-h-10">
              <Flex className="items-center gap-[6px]">
                <span className="font-extrabold text-[13px] text-[#FFF]">
                  1번째 비법 보여주기
                </span>
                <RightArrow />
              </Flex>
            </button>
            <p className="font-extrabold text-xl text-[#FFF] max-w-[197px] text-center">
              유튜브 스튜디오의 Inspiration 탭 활용하기
            </p>
          </Flex> */}
          {/* </Flex> */}
        </>
        <>
          <Flex className="items-center justify-end gap-[10px]">
            <div className="max-w-[186px]">
              <ToolComment
                content="두 번째 성장 비법이 기다리고 있어요!"
                position="center"
              />
            </div>
            <SmallStar />
          </Flex>
        </>
        <>
          <Flex className="items-center justify-start gap-[10px]">
            <SmallStar />
            <div className="max-w-[186px]">
              <ToolComment
                content="세 번째 성장 비법이 기다리고 있어요!"
                position="left"
              />
            </div>
          </Flex>
        </>
      </section>
    </PageBackground>
  );
}

function ToolComment({
  content,
  position,
}: {
  content: string;
  position: 'left' | 'center' | 'bottom';
}) {
  return (
    <div className="relative text-[11px] font-medium text-gray5 px-[5px] py-[10px] bg-[#F8F9FD] rounded-[10px]">
      <p>{content}</p>
      {position === 'center' && (
        <div className="absolute top-4 -right-1 w-2 h-2 bg-[#F8F9FD] rotate-45" />
      )}
      {position === 'left' && (
        <div className="absolute top-4 -left-1 w-2 h-2 bg-[#F8F9FD] rotate-45" />
      )}
    </div>
  );
}

// function StrategyStar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {isOpen ? (
//         <Flex className="flex-col items-center justify-center gap-[30px]">
//           <Flex className="flex-col items-center justify-center gap-7">
//             <Star />
//             <div
//               style={{
//                 fill: '#FFF',
//                 filter:
//                   'drop-shadow(0px 0px 10.363px #FFF) drop-shadow(0px 0px 20.726px #FFF) drop-shadow(0px 0px 72.54px #4557FF) drop-shadow(0px 0px 145.08px #4557FF) drop-shadow(0px 0px 248.708px #4557FF) drop-shadow(0px 0px 435.239px #4557FF)',
//               }}
//             >
//               <StarShadow />
//             </div>
//           </Flex>
//           <button className="bg-primary5 border-primary6 border-[1px] rounded-[20px] px-5 py-[11px] max-h-10">
//             <Flex className="items-center gap-[6px]">
//               <span className="font-extrabold text-[13px] text-[#FFF]">
//                 1번째 비법 보여주기
//               </span>
//               <RightArrow />
//             </Flex>
//           </button>
//           <p className="font-extrabold text-xl text-[#FFF] max-w-[197px] text-center">
//             유튜브 스튜디오의 Inspiration 탭 활용하기
//           </p>
//         </Flex>
//       ) : (
//         <ToolComment
//           content="첫 번째 성장 비법이 기다리고 있어요!"
//           position="left"
//         />
//       )}
//     </>
//   );
// }
