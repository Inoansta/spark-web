import { useFunnel } from '@use-funnel/browser';
import useStrategyStore from '@/app/store/useStrategyStore';
import useStrategy from '@/domains/Strategy/hooks/useStrategy';
import userCardSteps from '../hooks/useCardFunnel';
import useStrengthWeaknessOption from '../hooks/useStrengthWeaknessOption';
import useStrengthWeakStatsQuery from '../hooks/useStrengthWeakStatsQuery';
import transformDataStrengthWeakness from '../lib/strengthWeaknessTrasnform';
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
  const { mutate } = useStrategy();
  const { userContents, userFulltime, userGoal, weaknesses } = useStrategyStore(
    (store) => store,
  );

  const { data, isSuccess } = useStrengthWeakStatsQuery();
  const transformData = transformDataStrengthWeakness(data);

  useStrengthWeaknessOption({
    weaknesses: transformData.weaknesses,
    isSuccess,
  });

  return (
    <>
      <ProgressBar step={funnel.index + 1} />
      <funnel.Render
        Strength1={({ history }) => (
          <StrengthCardStep
            data={transformData.transformedData.strengths[0]}
            onNext={() => history.push('Strength2')}
          />
        )}
        Strength2={({ history }) => (
          <StrengthCardStep2
            data={transformData.transformedData.strengths[1]}
            onNext={() => {
              mutate({
                activityDomain: userContents,
                workType: userFulltime,
                snsGoal: userGoal,
                weaknesses: weaknesses,
              });
              history.push('Weakness1');
            }}
          />
        )}
        Weakness1={({ history }) => (
          <WeaknessStep
            data={transformData.transformedData.weaknesses[0]}
            onNext={() => history.push('Weakness2')}
          />
        )}
        Weakness2={() => (
          <WeaknessStep2 data={transformData.transformedData.weaknesses[1]} />
        )}
      />
    </>
  );
}
