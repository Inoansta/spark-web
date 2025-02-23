import { type ReactNode } from 'react';
import { PopularCard } from '@/domains/Popular/components';
import usePopularQuery from '@/domains/Popular/hooks/usePopularQuery';
import { type ResponsePopularTop } from '@/domains/Popular/model/type';
import { NextPageFooter } from '@/shared/components';

function NoList({
  data,
  children,
}: {
  data: ResponsePopularTop['result'];
  children: ReactNode;
}) {
  const isList = data.length !== 0;
  return isList ? (
    children
  ) : (
    <div className="flex flex-col justify-center items-center text-white">
      현재 영상이 등록된게 없어요...ㅠㅠ
    </div>
  );
}

export default function Popular() {
  const popular = usePopularQuery();

  return (
    <div>
      <div
        className={
          'flex flex-col bg-gradient-to-b from-highEmphasis to-black px-[20px] pt-[65px] min-h-screen'
        }
      >
        <div className={'flex flex-col gap-[5px]'}>
          <div className={'text-[28px] font-[800] leading-[38px] text-white'}>
            인기 콘텐츠 TOP3
          </div>
          <div className={'text-[15px] font-[500] leading-[24px] text-white'}>
            가장 많은 조회수를 기록한 콘텐츠들이에요!
          </div>
        </div>

        <div className={'flex  gap-[20px] flex-col mt-[60px] mb-[200px]'}>
          <NoList data={popular.data.result}>
            {popular.data.result.map((item, index) => (
              <PopularCard
                videoInformation={item}
                index={index}
                key={item.id}
              />
            ))}
          </NoList>
        </div>
      </div>

      <NextPageFooter
        nextLocation={'/strength-weakness'}
        text={'다음'}
        buttonType={'large-filled-button'}
      />
    </div>
  );
}
