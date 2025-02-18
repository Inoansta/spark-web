import { type ReactNode, Suspense, useEffect, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import loadingIcon from '@/assets/animation/analysis/loadingIcon.json';
import successIcon from '@/assets/animation/analysis/successIcon.json';
import { Flex, LottieAnimation, Text } from '@/shared/ui';

interface ProcessStateItemProps {
  icon: ReactNode;
  title: string;
  stateTitle: string;
  state: 'onload' | 'pending' | 'result';
}

function ProcessStateItem({
  icon,
  title,
  stateTitle,
  state,
}: ProcessStateItemProps) {
  const stateStyle = {
    onload: { opacity: 'opacity-55', iconBg: 'bg-primary1' },
    pending: { opacity: 'opacity-70', iconBg: 'bg-primary3' },
    result: { opacity: 'opacity-100', iconBg: 'bg-primary5' },
  }[state];

  return (
    <Flex
      justify="between"
      align="center"
      className={`px-4 py-2 ${stateStyle.opacity}`}
      as="li"
    >
      <Flex as="article">
        <div className={`${stateStyle.iconBg} rounded-2xl p-2 mr-3`}>
          {icon}
        </div>
        <Flex direction="column" className="gap-x-1" as="section">
          <Text as="title" title={title} />
          <Text as="description" title={stateTitle} />
        </Flex>
      </Flex>
      {state === 'pending' ? (
        <LottieAnimation animationData={loadingIcon} width={24} height={24} />
      ) : state === 'result' ? (
        <LottieAnimation animationData={successIcon} width={24} height={24} />
      ) : (
        <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
      )}
    </Flex>
  );
}

function DataFetchState({
  icon,
  title,
}: Pick<ProcessStateItemProps, 'icon' | 'title'>) {
  const data = useSuspenseQuery({
    queryKey: ['analysisData'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3초 지연 시뮬레이션
      return { message: '완료되었어요' };
    },
  }).data;

  return (
    <ProcessStateItem
      icon={icon}
      title={title}
      stateTitle={`${data.message}`}
      state="result"
    />
  );
}

export default function AnalysisState({
  icon,
  title,
}: Pick<ProcessStateItemProps, 'icon' | 'title'>) {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return start ? (
    <Suspense
      fallback={
        <ProcessStateItem
          icon={icon}
          title={title}
          stateTitle="진행 중이에요"
          state="pending"
        />
      }
    >
      <DataFetchState icon={icon} title={title} />
    </Suspense>
  ) : (
    <ProcessStateItem
      icon={icon}
      title={title}
      stateTitle="시작 전이에요"
      state="onload"
    />
  );
}
