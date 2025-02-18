import { ReactNode } from 'react';
import { useFunnel } from '@use-funnel/browser';
import clsx from 'clsx';
import GrowthStep from '@/domains/GrowthPrediction/components/GrowthStep';
import PredictionViewStep from '@/domains/GrowthPrediction/components/PredictionViewStep';
import SubscriberStep from '@/domains/GrowthPrediction/components/SubscriberStep';
import { useGrowthStep } from '@/domains/GrowthPrediction/hooks/useGrowthStep';

const options = {
  id: '@GrowthPrediction',
  initial: {
    context: {},
    step: 'GrowthStep',
  } as const,
  steps: useGrowthStep,
};

function GradientBackground({
  color = 'bg-gradient-to-b from-primary8 via-primary6 to-sub2',
  children,
  className,
}: {
  color?: string;
  className: string;
  children: ReactNode;
}) {
  return <div className={clsx(color, className)}>{children}</div>;
}

export default function GrowthPrediction() {
  const funnel = useFunnel(options);

  return (
    <div className="min-h-screen">
      <funnel.Render
        GrowthStep={({ history }) => (
          <GradientBackground className="px-[20px] pt-[65px]">
            <GrowthStep onNext={() => history.push('ViewStep')} />
          </GradientBackground>
        )}
        ViewStep={({ history }) => (
          <GradientBackground
            className="px-[20px] pt-[65px]"
            color="bg-[linear-gradient(180deg,_#000_-9.11%,_#787CFE_50.12%,_#FFCDFB_123.03%)]"
          >
            <PredictionViewStep onNext={() => history.push('SubscriberStep')} />
          </GradientBackground>
        )}
        SubscriberStep={() => (
          <GradientBackground
            className="px-[20px] pt-[65px]"
            color="bg-[linear-gradient(180deg,_#F8F9FD_0.01%,_#4557FF_70.21%,_#FFCDFB_106.76%)]"
          >
            <SubscriberStep />
          </GradientBackground>
        )}
      />
    </div>
  );
}
