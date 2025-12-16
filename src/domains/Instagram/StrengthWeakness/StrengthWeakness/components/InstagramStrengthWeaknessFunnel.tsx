import { useFunnel } from '@use-funnel/browser';
import useStrategyStore from '@/app/store/useStrategyStore';
import useMetaChannelStats from '@/domains/Analysis/hooks/useMetaChannelStats';
import useMetaStrategy from '@/domains/Instagram/StrengthWeakness/StrengthWeakness/hooks/useMetaStrategy';
import InstagramtransformDataStrengthWeakness from '@/domains/Instagram/StrengthWeakness/StrengthWeakness/lib/instagramStrengthWeaknessTransform';
import ProgressBar from '@/domains/Youtube/StrengthWeakness/components/ProgressBar';
import StrengthCardStep from '@/domains/Youtube/StrengthWeakness/components/step/StrengthCardStep';
import StrengthCardStep2 from '@/domains/Youtube/StrengthWeakness/components/step/StrengthCardStep2';
import WeaknessStep from '@/domains/Youtube/StrengthWeakness/components/step/WeaknessStep';
import WeaknessStep2 from '@/domains/Youtube/StrengthWeakness/components/step/WeaknessStep2';
import userCardSteps from '@/domains/Youtube/StrengthWeakness/hooks/useCardFunnel';
import useStrengthWeaknessOption from '@/domains/Youtube/StrengthWeakness/hooks/useStrengthWeaknessOption';

const options = {
  id: '@StrengthWeaknessCard',
  initial: {
    context: {},
    step: 'Strength1',
  } as const,
  steps: userCardSteps,
};

export default function InstagramStrengthWeaknessFunnel() {
  const funnel = useFunnel(options);
  const { mutate } = useMetaStrategy();
  const { userContents, userFulltime, userGoal, weaknesses } = useStrategyStore(
    (store) => store,
  );

  const { data, isSuccess } = useMetaChannelStats();
  const transformData = InstagramtransformDataStrengthWeakness(data.result);

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
            data={transformData.instagramTransformedData.strengths[0]}
            onNext={() => history.push('Strength2')}
          />
        )}
        Strength2={({ history }) => (
          <StrengthCardStep2
            data={transformData.instagramTransformedData.strengths[1]}
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
            data={transformData.instagramTransformedData.weaknesses[0]}
            onNext={() => history.push('Weakness2')}
          />
        )}
        Weakness2={() => (
          <WeaknessStep2
            data={transformData.instagramTransformedData.weaknesses[1]}
          />
        )}
      />
    </>
  );
}
