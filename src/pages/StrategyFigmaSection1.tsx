import useEmblaCarousel from 'embla-carousel-react';
import Bulb from '@/assets/svg/Detail/Bulb';
import useGrowthPredictionQuery from '@/domains/GrowthPrediction/hooks/useGrowthPredictionQuery';
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
import { Carousel } from '@/shared/components';
import { Divider, Flex } from '@/shared/ui';
import PageBackground from '@/shared/ui/components/PageBackground';

export default function StrategyFigmaSection1() {
  const { data: strategyData } = useGetStrategy();
  const { data: popularData } = usePopularQuery();
  const { data: strengthWeaknessData } = useStrengthWeakStatsQuery();
  const { data: growthPredictionData } = useGrowthPredictionQuery();

  console.log(strategyData);
  console.log(popularData);
  console.log(strengthWeaknessData);
  console.log(growthPredictionData);

  // 1.데이터 필터링
  // 2.컴포넌트 구현
  // 3.애니메이션 에러 해결

  // embla carousel hook
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
    axis: 'x',
  });

  const slides = popularData?.result.map((item, index) => {
    return {
      children: (
        <ContentCard
          title={item.snippet.title}
          imageUrl={item.snippet.thumbnails.default.url}
          viewCount={Number(item.statistics.viewCount)}
          createdAt={item.snippet.publishedAt}
          rank={index + 1}
        />
      ),
    };
  });

  return (
    <main className="bg-white overflow-y-auto">
      <PageBackground color="black_linear_gradient">
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
          <Carousel
            slides={slides}
            sectionClassName={''}
            viewPortClassName={'overflow-hidden'}
            containerClassName={'flex flex-row'}
            itemClassName={'flex-none w-[335px] mr-[5px]'}
            emblaRef={emblaRef}
          />
        </Flex>
      </section>
      <Divider size="RowMedium" />
      <section className="p-[20px]">
        <Flex direction="column" gapY={5}>
          <ContentHeader title="내 채널의 강 약점 분석" />
          <section>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <AnalysisCard
                icon={<Bulb fill="#fff" width={20} height={20} />}
                title="콘텐츠 반응이 뜨거워요"
                description={`최근 업로드한 영상의\n좋아요/댓글 비율이 높아요.`}
              />
              <AnalysisCard
                icon={<Bulb fill="#fff" width={20} height={20} />}
                title="참여율이 낮아요"
                description={`댓글, 좋아요 등\n참여 지표가 업계 평균보다 낮아요.`}
              />
              <AnalysisCard
                icon={<Bulb fill="#fff" width={20} height={20} />}
                title="콘텐츠 반응이 뜨거워요"
                description={`최근 업로드한 영상의\n좋아요/댓글 비율이 높아요.`}
              />
              <AnalysisCard
                icon={<Bulb fill="#fff" width={20} height={20} />}
                title="참여율이 낮아요"
                description={`댓글, 좋아요 등\n참여 지표가 업계 평균보다 낮아요.`}
              />
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
              value="총 1,400회 달성!"
              sub="매달 400회 증가"
            />
            <PredictionRow
              label="예상 구독자수"
              value="총 1,400명 증가!"
              sub="매달 400명 증가"
            />
          </Flex>
        </Flex>
      </section>
      <ActionButtonsRow />
    </main>
  );
}
