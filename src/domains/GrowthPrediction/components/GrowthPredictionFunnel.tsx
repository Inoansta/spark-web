import { useFunnel } from '@use-funnel/browser';
import { Spacing } from '@/shared/ui';
import PageBackground from '@/shared/ui/components/PageBackground';
import { useGrowthStep } from '../hooks/useGrowthStep';
import GrowthStep from './step/GrowthStep';
import PredictionViewStep from './step/PredictionViewStep';
import SubscriberStep from './step/SubscriberStep';

const options = {
  id: '@GrowthPrediction',
  initial: { context: {}, step: 'GrowthStep' } as const,
  steps: useGrowthStep,
};

export default function GrowthPredictionFunnel() {
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
      <Spacing size="xsmall" />
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
