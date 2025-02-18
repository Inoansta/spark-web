import { useFunnel } from '@use-funnel/browser';
import GrowthStep from '@/domains/GrowthPrediction/components/GrowthStep';
import PredictionViewStep from '@/domains/GrowthPrediction/components/PredictionViewStep';
import SubscriberStep from '@/domains/GrowthPrediction/components/SubscriberStep';
import { useGrowthStep } from '@/domains/GrowthPrediction/hooks/useGrowthStep';
import PageBackground from '@/shared/ui/components/PageBackground';

const options = {
  id: '@GrowthPrediction',
  initial: {
    context: {},
    step: 'GrowthStep',
  } as const,
  steps: useGrowthStep,
};

export default function GrowthPrediction() {
  const funnel = useFunnel(options);

  const bgColor = () => {
    switch (funnel.step) {
      case 'GrowthStep': {
        return 'primary_gradient';
      }
      case 'ViewStep': {
        return 'black_linear_gradient';
      }
      case 'SubscriberStep': {
        return 'white_linear_gradient';
      }
    }
  };

  return (
    <PageBackground color={bgColor()}>
      <funnel.Render
        GrowthStep={({ history }) => (
          <GrowthStep onNext={() => history.push('ViewStep')} />
        )}
        ViewStep={({ history }) => (
          <PredictionViewStep onNext={() => history.push('SubscriberStep')} />
        )}
        SubscriberStep={() => <SubscriberStep />}
      />
    </PageBackground>
  );
}
