import { useCallback } from 'react';
import { useNavigate } from 'react-router';

const routeMap = {
  home: '/',
  setting: '/setting',
  onboarding: '/onboarding',
  detail: '/detail',
  userInfo: '/user-info',
  analysis: '/analysis',
  result: '/result',
  popular: '/popular',
  strengthWeakness: '/strength-weakness',
  growthPrediction: '/growth-prediction',
  strategy: '/strategy',
} as const;

export interface RouteInfo {
  location: (typeof routeMap)[keyof typeof routeMap] | 'back';
}

export const useMoveLocation = (location: RouteInfo['location']) => {
  const navigate = useNavigate();

  const handleMoveLocation = useCallback(() => {
    if (location === 'back') {
      navigate(-1);
    } else {
      navigate(location);
    }
  }, [navigate, location]);

  return handleMoveLocation;
};
