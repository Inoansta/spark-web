import { useFunnel } from '@use-funnel/browser';
import PageBackground from '@/shared/ui/components/PageBackground';
import userCardSteps from '../hooks/useCardFunnel';
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

function ProgressBar({ step, limit = 4 }: { step: number; limit?: number }) {
  const getWidth = () => {
    return `${(step / limit) * 100}%`;
  };

  return (
    <div className="w-full h-4 bg-gray rounded-full overflow-hidden relative">
      <div
        className={`h-full bg-[linear-gradient(90deg,_#4557FF_0%,_#6E78FF_72.33%)] transition-all duration-1000 ease-in-out`}
        style={{ width: getWidth() }}
      />
    </div>
  );
}

export default function StrengthWeaknessFunnel() {
  const funnel = useFunnel(options);

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
