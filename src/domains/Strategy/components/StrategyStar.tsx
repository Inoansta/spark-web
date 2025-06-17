import { type ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import RightArrow from '@/assets/svg/Arrows/RightArrow';
import SmallStar from '@/assets/svg/Strategy/SmallStar';
// import Star from '@/assets/svg/Strategy/Star';
import Star1 from '@/assets/svg/Strategy/Star1';
import Star2 from '@/assets/svg/Strategy/Star2';
import Star3 from '@/assets/svg/Strategy/Star3';
import StarShadow from '@/assets/svg/Strategy/Star_shadow';
import { Flex, Spacing } from '@/shared/ui';
// import styles from './StrategyStar.module.css';

interface StarListItem {
  isOpen: boolean;
  id: number;
  title: string;
  star: ReactNode;
  content: string;
  position: 'left' | 'right';
  onClick?: () => void;
  selected: boolean;
}

const getInitialData = (contentList: string[]): StarListItem[] =>
  contentList.map((item, index) => ({
    id: index + 1,
    isOpen: index === 0 ? true : false,
    title: `${index + 1}번째 비법`,
    star: index === 0 ? <Star1 /> : index === 1 ? <Star2 /> : <Star3 />,
    content: item,
    position: index % 2 === 0 ? 'left' : 'right',
    selected: index === 0 ? true : false,
  }));

const StrategyStarGroup = ({ contentList }: { contentList: string[] }) => {
  const [starList, setStarList] = useState<StarListItem[]>(
    getInitialData(contentList),
  );

  const [prevId, setPrevId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setPrevId(starList.find((item) => item.isOpen)?.id ?? null);
    const newStarList = starList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isOpen: true,
          selected: true,
        };
      } else {
        return {
          ...item,
          isOpen: false,
        };
      }
    });
    setStarList(newStarList);
  };

  return (
    <>
      {/* 보여지는 컴포넌트 */}
      <Spacing size="large" />
      {starList.map((item) =>
        item.isOpen ? (
          <StrategyStar
            key={item.id}
            star={item.star}
            id={item.id}
            content={item.content}
            prevId={prevId}
            prevStar={starList.find((s) => s.id === prevId)?.star}
            prevContent={starList.find((s) => s.id === prevId)?.content}
          />
        ) : (
          <Flex
            key={item.id}
            justify={item.position === 'left' ? 'start' : 'end'}
            align="center"
            className={item.id === 3 ? 'gap-[10px]' : 'gap-[10px] pb-[33px]'}
          >
            {/* 가드 컴포넌트 생성 필요 */}
            {item.position === 'left' ? (
              <>
                <SmallStar />
                <div className="max-w-[186px]">
                  <ToolComment
                    content={
                      !item.selected
                        ? `${item.id}번째 성장 비법이 기다리고 있어요!`
                        : `${item.id}번째 성장 비법은 확인했어요`
                    }
                    position="left"
                    onClick={handleClick}
                    id={item.id}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="max-w-[186px]">
                  <ToolComment
                    content={
                      !item.selected
                        ? `${item.id}번째 성장 비법이 기다리고 있어요!`
                        : `${item.id}번째 성장 비법은 확인했어요`
                    }
                    position="center"
                    onClick={handleClick}
                    id={item.id}
                  />
                </div>
                <SmallStar />
              </>
            )}
          </Flex>
        ),
      )}
    </>
  );
};

export default StrategyStarGroup;

function ToolComment({
  content,
  position,
  onClick,
  id,
}: {
  content: string;
  position: 'left' | 'center';
  onClick?: (id: number) => void;
  id: number;
}) {
  const handleClick = () => {
    onClick?.(id);
  };
  return (
    <div
      className="relative text-[11px] font-medium text-gray5 px-[5px] py-[10px] bg-[#F8F9FD] rounded-[10px]"
      onClick={handleClick}
    >
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

function StrategyStar({
  star,
  id,
  content,
  prevId,
  prevStar,
  prevContent,
}: {
  star: ReactNode;
  id: number;
  content: string;
  prevId?: number | null;
  prevStar?: ReactNode;
  prevContent?: string;
}) {
  const navigate = useNavigate();
  const dropShadows = [
    'drop-shadow-star-1',
    'drop-shadow-star-2',
    'drop-shadow-star-3',
  ];

  // 마운트 시 트랜지션 효과를 위한 상태
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const timeout = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <div className="relative">
      {prevId && prevStar && (
        <Flex
          className={`
            absolute inset-0 z-0
            flex-col items-center justify-center gap-[30px] mb-[103px] mt-[80px]
            transition-all duration-500 ease-in-out
            opacity-0 scale-90 pointer-events-none
          `}
        >
          <Flex className="flex-col items-center justify-center gap-7">
            <div className={`animate-moveUpDown`}>{prevStar}</div>
            <StarShadow />
          </Flex>
          <button className="bg-primary5 border-primary6 border-[1px] rounded-[20px] px-5 py-[11px] max-h-10">
            <Flex className="items-center gap-[6px]">
              <span className="font-extrabold text-[13px] text-[#FFF]">
                {`${prevId}번째 비법 보여주기`}
              </span>
              <RightArrow />
            </Flex>
          </button>
          <p className="font-extrabold text-xl text-[#FFF] max-w-[197px] text-center">
            {prevContent}
          </p>
        </Flex>
      )}
      <Flex
        className={`
          relative z-10
          flex-col items-center justify-center gap-[30px] mb-[103px] mt-[80px]
          transition-all duration-500 ease-in-out
          ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
        `}
      >
        <Flex className="flex-col items-center justify-center gap-7">
          <div className={`animate-moveUpDown`}>{star}</div>
          <StarShadow />
        </Flex>
        <button
          onClick={() => navigate(`/strategy/${id}`)}
          className="bg-primary5 border-primary6 border-[1px] rounded-[20px] px-5 py-[11px] max-h-10"
        >
          <Flex className="items-center gap-[6px]">
            <span className="font-extrabold text-[13px] text-[#FFF]">
              {`${id}번째 비법 보여주기`}
            </span>
            <RightArrow />
          </Flex>
        </button>
        <p className="font-extrabold text-xl text-[#FFF] max-w-[197px] text-center">
          {content}
        </p>
      </Flex>
    </div>
  );
}
