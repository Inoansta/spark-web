import { useFunnel } from '@use-funnel/browser';
import { QuerySuspenseBoundary } from '@/app/provider';
import { BackIcon } from '@/assets/svg/nav/BackIcon';
import { CloseIcon } from '@/assets/svg/nav/CloseIcon';
import ChannelStep from '@/domains/Instagram/GrowthPrediction/components/step/ChannelStep';
import EngagementStep from '@/domains/Instagram/GrowthPrediction/components/step/EngagementStep';
import SubscriberStep from '@/domains/Instagram/GrowthPrediction/components/step/SubscribeStep';
import { useGrowthStep } from '@/domains/Instagram/GrowthPrediction/hooks/useGrowthStep';
import GrowthPredictionSkeleton from '@/domains/Instagram/GrowthPrediction/skeleton/skeleton';
import useYoutubePerformanceQuery from '@/domains/Youtube/GrowthPrediction/hooks/useYoutubePerformance';
import { HighlightText, NavigationHeader } from '@/shared/components';
import { Flex } from '@/shared/ui';
import PageBackground from '@/shared/ui/components/PageBackground';
// import PredictionViewStep from './step/PredictionViewStep';

type StepName = 'SubscriberStep' | 'ChannelStep' | 'EngagementStep';

interface Funnel {
  step: StepName;
  history: {
    push: (nextStep: StepName) => void;
  };
  Render: React.FC<{
    SubscriberStep: React.FC<{ history: { push: (step: StepName) => void } }>;
    ChannelStep: React.FC<{ history: { push: (step: StepName) => void } }>;
    EngagementStep: React.FC;
  }>;
}

const options = {
  id: '@GrowthPrediction',
  initial: { context: {}, step: 'SubscriberStep' } as const,
  steps: useGrowthStep,
};

const stepTitle = {
  SubscriberStep: {
    title: '구독자수는 얼마나 늘었을까?',
    highlight: '구독자수는',
  },
  ChannelStep: {
    title: '현재 내 채널의',
    highlight: '현재 내 채널의',
  },
  EngagementStep: {
    title: '조회수만큼 중요한',
    highlight: '조회수만큼 중요한',
  },
};

export default function GrowthPredictionFunnel() {
  const funnel = useFunnel(options);

  return (
    <>
      <NavigationHeader className={'fixed p-5 w-full max-w-[450px]'}>
        <NavigationHeader.LeftContent location="back">
          <BackIcon color="black" />
        </NavigationHeader.LeftContent>
        <NavigationHeader.RightContent location="/detail">
          <CloseIcon color="black" />
        </NavigationHeader.RightContent>
      </NavigationHeader>
      <PageBackground color="gray" className="w-full h-screen">
        <Flex direction="column" align="center" className="pt-20 h-full">
          {/* 페이지 제목 */}
          <div className="px-5 mb-4 text-center">
            <HighlightText
              text={stepTitle[funnel.step].title}
              highlight={stepTitle[funnel.step].highlight}
              className="text-xl font-bold text-gray"
              highlightClassName="text-primary5"
            />
          </div>

          {/* 메인 콘텐츠 - 남은 공간을 모두 차지 */}
          <div className="flex flex-1 justify-center w-full">
            <QuerySuspenseBoundary
              loadingFallback={<GrowthPredictionSkeleton />}
            >
              <GrowthPredictionDataFetchingFunnel funnel={funnel} />
            </QuerySuspenseBoundary>
          </div>
        </Flex>
      </PageBackground>
    </>
  );
}

function GrowthPredictionDataFetchingFunnel({ funnel }: { funnel: Funnel }) {
  const { data } = useYoutubePerformanceQuery();

  return (
    <funnel.Render
      SubscriberStep={({ history }) => (
        <SubscriberStep
          onNext={() => history.push('ChannelStep')}
          averageComments={data.result.averageComments}
        />
      )}
      ChannelStep={({ history }) => (
        <ChannelStep
          onNext={() => history.push('EngagementStep')}
          averageViews={data.result.averageViews}
        />
      )}
      EngagementStep={() => (
        <EngagementStep
          onNext={() => console.log('Engagement completed')}
          averageLikes={data.result.averageLikes}
          averageComments={data.result.averageComments}
        />
      )}
    />
  );
}
