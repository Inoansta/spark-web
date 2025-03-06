//refactor: accordion 나중에 따로 빼기

import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import DownThinSmallAroow from '@/assets/svg/Arrows/DownThinSmallArrow';
import UpThinSmallArrow from '@/assets/svg/Arrows/UpThinSmallArrowt';

const items = [
  {
    heading: '내 채널 정보를 어떻게 활용하나요? 안전한건가요?',
    content: (
      <ol className={'pl-[5px]'} type="A">
        <li>
          여러분의 채널 정보는 유튜브 API를 통해 실시간으로 불러오기만 할 뿐,
          데이터베이스에는 저장되지 않아요. 필요한 정보를 불러오는 것 외에
          여러분의 데이터를 다른 용도로 사용하지 않으니, 개인정보 유출에 대한
          걱정 없이 안심하고 이용하셔도 됩니다!
        </li>
      </ol>
    ),
  },
  {
    heading: 'SPARK는 어떻게 내 채널에 맞는 성장 비법을 제시하나요?',
    content: (
      <ol className={'pl-[5px]'} type="A">
        <li>
          여러분의 채널 정보 (구독자 수, 조회수, 좋아요 수 등 )를 불러와서
          중요한 지표들을 분석해요. 잘 성장하고 있는 지표와 정체된 지표를 강점과
          약점으로 구분하고, 그에 맞는 성장 비법을 추천해 드려요.
          <br />
          <br />{' '}
          <ul className={'list-disc pl-[20px]'}>
            <li>
              비법들은 모두 유튜브 공식 사이트(유튜브 고객센터, 유튜브 공식
              채널, 유튜브 공식 블로그)에 나와있는 방법들이기 때문에 신뢰할 수
              있어요.
            </li>
            <li>
              성공 확률이 불확실한 콘텐츠 아이디어가 아닌, 유튜브 기능을 어떻게
              활용할지, 그리고 알고리즘을 어떻게 타는지에 관한 공식 자료를
              기반으로 하기 때문에, 정말 효과적인 방법을 제공할 수 있어요.
            </li>
          </ul>
        </li>
      </ol>
    ),
  },
  {
    heading: '서비스를 통해 어떤 성과를 기대할 수 있나요?',
    content: (
      <ol className={'pl-[5px]'} type="A">
        <li>
          구독자 수 증가, 조회수 상승, 수익 증대 등의 성과를 기대할 수 있어요.
          특히, 유튜브 알고리즘에 맞춰 채널을 최적화시켜 빠르게 성장할 수 있는
          방법을 알려드리니, 실제로 단기간에 효과를 볼 수도 있어요. 제공되는
          전략은 실제 성공사례를 바탕으로 한 것이기 때문에 여러분의 채널이
          성장하는 데 실질적인 도움이 될 거예요.
        </li>
      </ol>
    ),
  },
  {
    heading:
      '서비스를 이용하면서 나에게 맞는 전략을 찾을 수 없을 때는 어떻게 해야 하나요?',
    content: (
      <ol className={'pl-[5px]'} type="A">
        <li>
          대부분의 경우, 제공된 전략이 효과적이지만, 굉장히 드물게 여러분의
          채널에 딱 맞는 전략이 없을 수도 있어요. 그런 경우에는 “설정 {'>'}
          문의하기 ”에 저장된 이미지 결과와 문의사항을 함께 남겨주시면 추가적인
          도움을 드릴 수 있어요.
        </li>
      </ol>
    ),
  },
];

export default function FrequentlyAskedQuestions() {
  const [clicked, setClicked] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  return (
    <div className={'px-[20px]'}>
      <div
        className={
          'pt-[40px] pb-[20px] text-[18px] font-[800] leading-[26px] text-center'
        }
      >
        자주 묻는 질문 (FAQ)
      </div>
      <div className={'mb-[30px]'}>
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          {items.map((item, index) => (
            <AccordionItem key={item.heading}>
              <AccordionItemHeading
                className={'p-[20px] '}
                onClick={() =>
                  setClicked({ ...clicked, [index]: !clicked[index] })
                }
              >
                <AccordionItemButton
                  className={
                    'text-[15px] font-[700] leading-[24px] text-subText flex flex-row'
                  }
                >
                  <div className={'flex-[2]'}>{item.heading}</div>
                  <div className={'flex-1'}>
                    {clicked[index] ? (
                      <DownThinSmallAroow className={'ml-auto'} />
                    ) : (
                      <UpThinSmallArrow className={'ml-auto'} />
                    )}
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                className={`${clicked[index] ? null : 'hidden'} flex flex-row p-[20px] text-[15px] font-[500] leading-[24px] text-subText  bg-line`}
              >
                <div className={'flex justify-center'}>A.</div>
                {item.content}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
