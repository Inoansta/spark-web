import { useCallback } from 'react';
import { useNavigate } from 'react-router';

const _routeMap = {
  home: '/',
  login: '/login',
  setting: '/setting',
  onboarding: '/onboarding',
  detail: '/detail',
  userInfo: '/user-info',
  analysis: '/analysis',
  result: '/result',
  popular: '/popular',
  strengthWeakness: '/strength-weakness',
  growthPredictionBefore: '/growth-prediction-before',
  growthPrediction: '/growth-prediction',
  strategy: '/strategy',
  instagramDetail: '/instagram-detail',
} as const;

export interface RouteInfo {
  location: (typeof _routeMap)[keyof typeof _routeMap] | 'back';
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
