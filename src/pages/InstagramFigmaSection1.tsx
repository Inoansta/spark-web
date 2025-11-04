import useEmblaCarousel from 'embla-carousel-react';
import useStrategyStore from '@/app/store/useStrategyStore';
import useMetaChannelStats from '@/domains/Analysis/hooks/useMetaChannelStats';
import useMetaPerformanceQuery from '@/domains/Analysis/hooks/useMetaPerformance';
import { formatNumberWithCommas } from '@/domains/Home/lib/utils';
import useMetaPopularQuery from '@/domains/Instagram/Popular/hooks/useMetaPopularQuery';
import PerformanceRow from '@/domains/Instagram/Strategy/components/PerformanceRow';
import transformMetaStats from '@/domains/Instagram/Strategy/lib/transformMetaStats';
import ActionButtonsRow from '@/domains/Youtube/Strategy/components/ActionButtonsRow';
import AnalysisCard from '@/domains/Youtube/Strategy/components/AnalysisCard';
import ContentHeader from '@/domains/Youtube/Strategy/components/ContentHeader';
import InstagramContentCard from '@/domains/Youtube/Strategy/components/InstagramContentCard';
import StrategyStarGroup from '@/domains/Youtube/Strategy/components/StrategyStar';
import UserInfoHeader from '@/domains/Youtube/Strategy/components/UserInfoHeader';
import useGetStrategy from '@/domains/Youtube/Strategy/hooks/useGetStrategy';
import { Carousel } from '@/shared/components';
import { Divider, Flex } from '@/shared/ui';
import PageBackground from '@/shared/ui/components/PageBackground';

export default function InstagramStrategyFigmaSection1() {
  const { channelName } = useStrategyStore();
  const { data: strategyData } = useGetStrategy();
  const { data: popularData } = useMetaPopularQuery();
  const { data: metaStatsData } = useMetaChannelStats();
  const { data: performanceQuery } = useMetaPerformanceQuery();

  const trimmedPerformanceQuery = performanceQuery.result;
  const { transformedData } = transformMetaStats(metaStatsData.result);

  // const transformData = transformStatsData(metaStatsData.result.stats);

  // 3.애니메이션 에러 해결
  // 4.어느 특정 api는 어떤것을 먼저 부르고 불러야지 성공적으로 요청된다.

  // embla carousel hook
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
    axis: 'x',
  });

  const slides =
    popularData?.result.length > 0
      ? popularData?.result.map((item, index) => {
          return {
            children: (
              <InstagramContentCard
                caption={
                  item.caption.length > 25
                    ? item.caption.slice(0, 25) + '...'
                    : item.caption
                }
                contentUrl={item.contentUrl}
                views={formatNumberWithCommas(item.views)}
                timestamp={item.timestamp}
                rank={index + 1}
                likes={item.likes}
              />
            ),
          };
        })
      : [];

  return (
    <main className="bg-white overflow-y-auto pb-[64px]">
      {/* 높이 지정 필요 */}
      <PageBackground color="black_linear_gradient" className="min-h-screen">
        <UserInfoHeader />
        <StrategyStarGroup
          contentList={[
            strategyData.비법1.제목,
            strategyData.비법2.제목,
            strategyData.비법3.제목,
          ]}
        />
      </PageBackground>
      <Divider size="RowMedium" />
      <section className="p-[20px]">
        <Flex direction="column" gapY={5}>
          <ContentHeader title="인기 콘텐츠 TOP 3" />
          {slides.length > 0 ? (
            <Carousel
              slides={slides}
              sectionClassName={''}
              viewPortClassName={'overflow-hidden'}
              containerClassName={'flex flex-row'}
              itemClassName={'flex-none w-[335px] mr-[5px] max-h-[113px]'}
              emblaRef={emblaRef}
            />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div className="text-body2-m text-center text-gray-400 w-full h-[113px]">
                인기 콘텐츠가 없어요
              </div>
            </div>
          )}
        </Flex>
      </section>
      <Divider size="RowMedium" />
      <section className="p-[20px]">
        <Flex direction="column" gapY={5}>
          <ContentHeader title="내 채널의 강 약점 분석" />
          <section>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {transformedData.strengths.map(({ info, data }, index) => (
                <AnalysisCard
                  key={index}
                  icon={<info.Icon fill="#3385FF" width={20} height={20} />}
                  type={'strengths'}
                  title={info.title}
                  data={data[data.length - 1].graphValue}
                  date={'최근 30일 전'}
                />
              ))}
              {transformedData.weaknesses.map(({ info, data }, index) => (
                <AnalysisCard
                  key={index}
                  icon={<info.Icon fill="#FF3333" width={20} height={20} />}
                  type={'weaknesses'}
                  title={info.title}
                  data={data[data.length - 1].graphValue}
                  date={'최근 30일 전'}
                />
              ))}
            </div>
          </section>
        </Flex>
      </section>
      <Divider size="RowMedium" />
      <section className="p-[20px] pb-[40px]">
        <Flex direction="column" gap={5}>
          <ContentHeader title={`${channelName}님의 성장 예측`} />
          <Flex direction="column" gap={2}>
            <PerformanceRow
              label="댓글수"
              values={trimmedPerformanceQuery.averageComments}
            />
            <PerformanceRow
              label="좋아요수"
              values={trimmedPerformanceQuery.averageLikes}
            />
            <PerformanceRow
              label="조회수"
              values={trimmedPerformanceQuery.averageViews}
            />
          </Flex>
        </Flex>
      </section>
      <ActionButtonsRow />
    </main>
  );
}
