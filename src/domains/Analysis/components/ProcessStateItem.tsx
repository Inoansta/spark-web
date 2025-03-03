import type { ReactNode } from 'react';
import loadingIcon from '@/assets/animation/analysis/loadingIcon.json';
import successIcon from '@/assets/animation/analysis/successIcon.json';
import { Flex, LottieAnimation, Text } from '@/shared/ui';

export interface ProcessStateItemProps {
  icon: ReactNode;
  title: string;
  stateTitle: string;
  state: 'onload' | 'pending' | 'result';
}

const STATE_STYLE = {
  onload: { opacity: 'opacity-55', iconBg: 'bg-primary1' },
  pending: { opacity: 'opacity-70', iconBg: 'bg-primary3' },
  result: { opacity: 'opacity-100', iconBg: 'bg-primary5' },
};

export default function ProcessStateItem({
  icon,
  title,
  stateTitle,
  state,
}: ProcessStateItemProps) {
  const stateStyle = STATE_STYLE[state];

  return (
    <Flex
      justify="between"
      align="center"
      className={`px-4 py-2 ${stateStyle.opacity}`}
      as="li"
    >
      <Flex as="article">
        <div className={`${stateStyle.iconBg} rounded-[50%] p-2 mr-3`}>
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
