import { useFunnel } from '@use-funnel/browser';
import PageBackground from '@/shared/ui/components/PageBackground';
import userCardSteps from '../hooks/useCardFunnel';
import useStrengthWeakStatsQuery from '../hooks/useStrengthWeakStatsQuery';
import ProgressBar from './ProgressBar';
import StrengthCardStep from './step/StrengthCardStep';
import StrengthCardStep2 from './step/StrengthCardStep2';
import WeaknessStep from './step/WeaknessStep';
import WeaknessStep2 from './step/WeaknessStep2';

const options = {
  id: '@StrengthWeaknessCard',
  initial: {
    context: {},
    step: 'Strength1',
  } as const,
  steps: userCardSteps,
};

export default function StrengthWeaknessFunnel() {
  const funnel = useFunnel(options);

  const { data } = useStrengthWeakStatsQuery();

  console.log(data);
  return (
    <PageBackground color="black_gradient">
      <ProgressBar step={funnel.index + 1} />
      <funnel.Render
        Strength1={({ history }) => (
          <StrengthCardStep onNext={() => history.push('Strength2')} />
        )}
        Strength2={({ history }) => (
          <StrengthCardStep2 onNext={() => history.push('Weakness1')} />
        )}
        Weakness1={({ history }) => (
          <WeaknessStep onNext={() => history.push('Weakness2')} />
        )}
        Weakness2={() => <WeaknessStep2 />}
      />
    </PageBackground>
  );
}
