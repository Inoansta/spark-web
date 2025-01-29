import type { ReactNode } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router';

const routeMap = {
  home: '/',
  setting: '/setting',
  onboarding: '/onboarding',
  detail: '/detail',
  userInfo: '/user-info',
  analysis: '/analysis',
  result: '/result',
  popular: '/result/popular',
  strengthWeakness: '/result/strength-weakness',
  growthPrediction: '/result/growth-prediction',
  strategy: '/result/strategy',
} as const;

interface LeftContentProps {
  location: (typeof routeMap)[keyof typeof routeMap] | 'back';
  className?: string;
  children: ReactNode;
}

function Root({ className, children }: Omit<LeftContentProps, 'location'>) {
  return (
    <header
      className={clsx('flex justify-between px-5 py-4 items-center', className)}
    >
      {children}
    </header>
  );
}

function LeftContent({ location, className, children }: LeftContentProps) {
  const navigate = useNavigate();

  const handleMoveLocate = () => {
    if (location === 'back') {
      navigate(-1);
    } else {
      navigate(location);
    }
  };

  return (
    <div onClick={handleMoveLocate} className={clsx(className)}>
      {children}
    </div>
  );
}

function RightContent({ location, className, children }: LeftContentProps) {
  const navigate = useNavigate();

  const handleMoveLocate = () => {
    navigate(location);
  };

  return (
    <div onClick={handleMoveLocate} className={clsx(className)}>
      {children}
    </div>
  );
}

const NavigationHeader = Object.assign(Root, { LeftContent, RightContent });

export default NavigationHeader;
