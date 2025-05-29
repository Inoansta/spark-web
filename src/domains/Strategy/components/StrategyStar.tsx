import { type ReactNode, useState } from 'react';
import RightArrow from '@/assets/svg/Arrows/RightArrow';
import SmallStar from '@/assets/svg/Strategy/SmallStar';
// import Star from '@/assets/svg/Strategy/Star';
import Star1 from '@/assets/svg/Strategy/Star1';
import Star2 from '@/assets/svg/Strategy/Star2';
import Star3 from '@/assets/svg/Strategy/Star3';
import StarShadow from '@/assets/svg/Strategy/Star_shadow';
import { Flex, Spacing } from '@/shared/ui';
import styles from './StrategyStar.module.css';

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

  const handleClick = (id: number) => {
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
          />
        ) : (
          <Flex
            key={item.id}
            justify={item.position === 'left' ? 'start' : 'end'}
            align="center"
            className={item.id === 3 ? 'gap-[10px]' : 'gap-[10px] pb-[33px]'}
          >
            {item.position === 'left' ? (
              <>
                <SmallStar />
                <div className="max-w-[186px]">
                  <ToolComment
                    content={
                      !item.selected
                        ? '첫 번째 성장 비법이 기다리고 있어요!'
                        : '첫 번째 성장 비법은 확인했어요'
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
                        ? '첫 번째 성장 비법이 기다리고 있어요!'
                        : '첫 번째 성장 비법은 확인했어요'
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
}: {
  star: ReactNode;
  id: number;
  content: string;
}) {
  return (
    <Flex className="flex-col items-center justify-center gap-[30px] mb-[103px] mt-[80px]">
      <Flex className="flex-col items-center justify-center gap-7">
        <div
          className={`${styles.starMove} ${
            id === 1
              ? styles.starMove1
              : id === 2
                ? styles.starMove2
                : styles.starMove3
          }`}
        >
          {star}
        </div>
        <StarShadow />
      </Flex>
      <button className="bg-primary5 border-primary6 border-[1px] rounded-[20px] px-5 py-[11px] max-h-10">
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
  );
}
