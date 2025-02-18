import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemState,
} from 'react-accessible-accordion';
import strategy from '@/assets/animation/strategy.json';
import DownThinSmallAroow from '@/assets/svg/Arrows/DownThinSmallArrow';
import UpThinSmallArrow from '@/assets/svg/Arrows/UpThinSmallArrowt';
import Graph2 from '@/assets/svg/Detail/Graph2';
import YoutubeSource from '@/assets/svg/YoutubeSource';
import { LottieAnimation } from '@/shared/ui';

export default function Strategy() {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={
        'bg-gradient-to-b from-black to-[#FBB1F5] via-[#4557FF] pt-[44px]'
      }
    >
      <div className={'pt-[20px] px-[20px] flex flex-col '}>
        <div
          className={
            'text-title4-eb text-white flex flex-row items-center gap-[5px]'
          }
        >
          <Graph2 fill={'white'} />
          스파크님의 채널 분석
        </div>
        <div className={'text-body-m text-white'}>샘플 데이터입니다.</div>
      </div>
      <div className={'mb-[60px] mt-[20px]'}>
        <LottieAnimation animationData={strategy} loop={true} />
      </div>
      <div className={'flex flex-col px-[20px] pt-[20px] mt-[20px]'}>
        <div className={'text-title5-eb text-white'}>
          00님의 채널 성장을 위한
        </div>
        <div className={'text-title3-eb text-white'}>3가지 추천 비법</div>
        <div className={'flex flex-col py-[20px] gap-[20px]'}>
          <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
            <AccordionItem>
              <div className={'bg-white rounded-extraLarges p-[20px]'}>
                <AccordionItemHeading
                  className={
                    'border-b border-b-[#E5E5EA] text-title5-eb pb-[15px]'
                  }
                  onClick={() => setClicked(!clicked)}
                >
                  <AccordionItemButton
                    className={'flex flex-row items-center gap-[10px]'}
                  >
                    <div>1</div>
                    <div className={'flex flex-1'}>유튜브 스튜디오</div>
                    {clicked ? <UpThinSmallArrow /> : <DownThinSmallAroow />}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemState>
                  {({ expanded }) =>
                    expanded ? (
                      <div className={'mt-[20px]'}>
                        <div
                          className={
                            'text-body-m border-b border-b-[#E5E5EA] pb-[20px]'
                          }
                        >
                          {/* 📌 부업으로 패션 유튜브를 운영하지만 조회수가 오르지
                          않는다면? 👉 YouTube Studio의 "Inspiration" 탭을
                          활용해 보세요. 유튜브의 AI 기반 아이디어를 통해 최신
                          트렌드에 맞는 영상을 기획할 수 있습니다. 📍 사용 방법
                          🔹 1. 유튜브 스튜디오 접속 YouTube Studio에
                          로그인합니다. 왼쪽 메뉴에서 [콘텐츠] → [Inspiration]
                          탭을 선택합니다. 🔹 2. AI 기반 아이디어 생성 상단
                          입력창에 키워드를 입력합니다. 예시) 최신 패션 트렌드,
                          봄·여름 인기 코디, 직장인 데일리룩 추천 입력 후
                          [Create Ideas] 버튼을 클릭하면 다양한 콘텐츠
                          아이디어가 생성됩니다. 🔹 3. 제공된 콘텐츠 아이디어
                          활용 AI가 제안한 아이디어 중 원하는 주제를 선택합니다.
                          선택한 아이디어를 클릭하면 제목 추천, 영상 개요,
                          썸네일 제안을 확인할 수 있습니다. 추가 옵션이 필요하면
                          "Show More" 버튼을 눌러 세부 조정할 수 있습니다. 🔹 4.
                          제목 & 썸네일 최적화 추천된 제목을 그대로 사용하거나,
                          "Make it Shorter" 기능을 활용해 수정합니다. AI가
                          생성한 썸네일을 선택 후 다운로드하여 활용합니다.
                          시청자의 클릭을 유도할 수 있도록 눈에 띄는 디자인을
                          선택하세요. */}
                        </div>
                        <div className={'flex flex-col pt-[20px]'}>
                          <div
                            className={
                              'text-subtitle-eb text-[#5E6166] flex flex-row py-[5px]'
                            }
                          >
                            <YoutubeSource />
                            출처
                          </div>
                          <div
                            className={'pl-[20px] text-body2-m text-[#5E6166]'}
                          >
                            유튜브 채널[{}]
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={'text-body-m mt-[20px]'}>
                        📌 부업으로 패션 유튜브를 운영하지만 조회수가 오르지
                        않는다면?...
                      </div>
                    )
                  }
                </AccordionItemState>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
