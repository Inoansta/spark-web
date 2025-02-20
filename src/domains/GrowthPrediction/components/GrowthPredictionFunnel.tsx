import { useFunnel } from '@use-funnel/browser';
import { BackIcon } from '@/assets/svg/nav/BackIcon';
import { CloseIcon } from '@/assets/svg/nav/CloseIcon';
import useStrengthWeakStatsQuery from '@/domains/StrengthWeakness/hooks/useStrengthWeakStatsQuery';
import { NavigationHeader } from '@/shared/components';
import { Spacing } from '@/shared/ui';
import PageBackground from '@/shared/ui/components/PageBackground';
import useGrowthPredictionQuery from '../hooks/useGrowthPredictionQuery';
import { useGrowthStep } from '../hooks/useGrowthStep';
import transformStatsData from '../lib/transformGrowData';
import GrowthStep from './step/GrowthStep';
import PredictionViewStep from './step/PredictionViewStep';
import SubscriberStep from './step/SubscriberStep';

const options = {
  id: '@GrowthPrediction',
  initial: { context: {}, step: 'GrowthStep' } as const,
  steps: useGrowthStep,
};

const bgColor = (step: string) => {
  switch (step) {
    case 'GrowthStep': {
      return 'primary_gradient';
    }
    // case 'ViewStep': {
    //   return 'bg_view_image';
    // }
    case 'ViewStep': {
      return 'black_linear_gradient';
    }
    case 'SubscriberStep': {
      return 'white_linear_gradient';
    }
    default: {
      return 'primary_gradient';
    }
  }
};

export default function GrowthPredictionFunnel() {
  const funnel = useFunnel(options);

  const { data } = useGrowthPredictionQuery();
  const { data: strengthWeakness } = useStrengthWeakStatsQuery();

  const transformData = transformStatsData(strengthWeakness.result.stats);

  return (
    <>
      <NavigationHeader className={'p-5 fixed max-w-[450px] w-full'}>
        <NavigationHeader.LeftContent location="back">
          <BackIcon
            color={funnel.step === 'SubscriberStep' ? 'black' : 'white'}
          />
        </NavigationHeader.LeftContent>
        <NavigationHeader.RightContent location="/detail">
          <CloseIcon
            color={funnel.step === 'SubscriberStep' ? 'black' : 'white'}
          />
        </NavigationHeader.RightContent>
      </NavigationHeader>
      <PageBackground color={bgColor(funnel.step)}>
        <Spacing size="xsmall" />
        <funnel.Render
          GrowthStep={({ history }) => (
            <GrowthStep
              transformData={transformData.growthRates}
              onNext={() => history.push('ViewStep')}
            />
          )}
          ViewStep={({ history }) => (
            <PredictionViewStep
              data={{
                viewCount: transformData.viewCount,
                predictedViews: data.result.predictedViews,
              }}
              onNext={() => history.push('SubscriberStep')}
            />
          )}
          SubscriberStep={() => (
            <SubscriberStep
              data={{
                subscriberCount: transformData.netSubscribersCount,
                subscriber: data.result.predictedNetSubscribers,
              }}
            />
          )}
        />
      </PageBackground>
    </>
  );
}
