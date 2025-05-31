import useEmblaCarousel from 'embla-carousel-react';
import useGrowthPredictionQuery from '@/domains/GrowthPrediction/hooks/useGrowthPredictionQuery';
import transformStatsData from '@/domains/GrowthPrediction/lib/transformGrowData';
import { formatNumberWithCommas } from '@/domains/Home/lib/utils';
import usePopularQuery from '@/domains/Popular/hooks/usePopularQuery';
import ActionButtonsRow from '@/domains/Strategy/components/ActionButtonsRow';
import AnalysisCard from '@/domains/Strategy/components/AnalysisCard';
import ContentCard from '@/domains/Strategy/components/ContentCard';
import ContentHeader from '@/domains/Strategy/components/ContentHeader';
import HighlightBox from '@/domains/Strategy/components/HighlightBox';
import PredictionRow from '@/domains/Strategy/components/PredictionRow';
import StrategyStarGroup from '@/domains/Strategy/components/StrategyStar';
import UserInfoHeader from '@/domains/Strategy/components/UserInfoHeader';
import useGetStrategy from '@/domains/Strategy/hooks/useGetStrategy';
import useStrengthWeakStatsQuery from '@/domains/StrengthWeakness/hooks/useStrengthWeakStatsQuery';
import transformDataStrengthWeakness from '@/domains/StrengthWeakness/lib/strengthWeaknessTrasnform';
import { Carousel } from '@/shared/components';
import { Divider, Flex } from '@/shared/ui';
import PageBackground from '@/shared/ui/components/PageBackground';

export default function StrategyFigmaSection1() {
  const { data: strategyData } = useGetStrategy();
  const { data: popularData } = usePopularQuery();
  const { data: strengthWeaknessData } = useStrengthWeakStatsQuery();
  const { data: growthPredictionData } = useGrowthPredictionQuery();

  const { transformedData } = transformDataStrengthWeakness(
    strengthWeaknessData.result,
  );

  const transformData = transformStatsData(strengthWeaknessData.result.stats);

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
              <ContentCard
                title={
                  item.snippet.title.length > 36
                    ? item.snippet.title.slice(0, 36) + '...'
                    : item.snippet.title
                }
                imageUrl={item.snippet.thumbnails.default.url}
                viewCount={formatNumberWithCommas(item.statistics.viewCount)}
                createdAt={item.snippet.publishedAt}
                rank={index + 1}
              />
            ),
          };
        })
      : [];

  return (
    <main className="bg-white overflow-y-auto">
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
            <div className="flex flex-col items-center justify-center h-[113px]">
              <div className="text-body2-m text-center text-gray-400">
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
          <ContentHeader title="홍길동님의 성장 예측" />
          <Flex direction="column" gap={2}>
            <HighlightBox>3개월 후 성장 예측</HighlightBox>
            <PredictionRow
              label="예상 조회수"
              value={`총 ${formatNumberWithCommas(
                Math.floor(growthPredictionData.result.predictedViews),
              )} 달성`}
              sub={`매달 ${formatNumberWithCommas(
                transformData.viewCount,
              )}회 증가`}
            />
            <PredictionRow
              label="예상 구독자수"
              value={`총 ${formatNumberWithCommas(
                Math.floor(growthPredictionData.result.predictedNetSubscribers),
              )} 달성`}
              sub={`매달 ${formatNumberWithCommas(
                transformData.netSubscribersCount,
              )}명 증가`}
            />
          </Flex>
        </Flex>
      </section>
      <ActionButtonsRow />
    </main>
  );
}
