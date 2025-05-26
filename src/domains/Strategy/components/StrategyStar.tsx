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
}

const StrategyStarGroup = () => {
  // api로직 호출
  const [starList, setStarList] = useState<StarListItem[]>([
    {
      id: 1,
      isOpen: true,
      title: '1번째 비법',
      star: <Star1 />,
      content: '유튜브 스튜디오의 Inspiration 탭 활용하기',
      position: 'left',
    },
    {
      id: 2,
      isOpen: false,
      title: '2번째 비법',
      star: <Star2 />,
      content: '유튜브 스튜디오의 Inspiration 탭 활용하기',
      position: 'right',
    },
    {
      id: 3,
      isOpen: false,
      title: '3번째 비법',
      star: <Star3 />,
      content: '유튜브 스튜디오의 Inspiration 탭 활용하기',
      position: 'left',
    },
  ]);

  const handleClick = (id: number) => {
    const newStarList = starList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isOpen: true,
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
          <StrategyStar key={item.id} star={item.star} id={item.id} />
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
                    content="첫 번째 성장 비법이 기다리고 있어요!"
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
                    content="첫 번째 성장 비법이 기다리고 있어요!"
                    // position={item.position === 'left' ? 'left' : 'center'}
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

function StrategyStar({ star, id }: { star: ReactNode; id: number }) {
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
            1번째 비법 보여주기
          </span>
          <RightArrow />
        </Flex>
      </button>
      <p className="font-extrabold text-xl text-[#FFF] max-w-[197px] text-center">
        유튜브 스튜디오의 Inspiration 탭 활용하기
      </p>
    </Flex>
  );
}
