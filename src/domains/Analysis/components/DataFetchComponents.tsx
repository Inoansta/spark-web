import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useGrowthPredictionQuery from '@/domains/GrowthPrediction/hooks/useGrowthPredictionQuery';
import useChannelProfile from '@/domains/Home/hooks/useChannelProfile';
import usePopularQuery from '@/domains/Popular/hooks/usePopularQuery';
import useStrengthWeakStatsQuery from '@/domains/StrengthWeakness/hooks/useStrengthWeakStatsQuery';
import ProcessStateItem, {
  type ProcessStateItemProps,
} from './ProcessStateItem';

export function GrowthPrediectionFetch({
  icon,
  title,
}: Pick<ProcessStateItemProps, 'icon' | 'title'>) {
  const navigate = useNavigate();
  const { isSuccess } = useGrowthPredictionQuery();

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => navigate('/result'), 2000);
    }
  }, [isSuccess]);

  return (
    <ProcessStateItem
      icon={icon}
      title={title}
      stateTitle="완료되었어요!"
      state="result"
    />
  );
}

export function ChannelProfileFetch({
  icon,
  title,
}: Pick<ProcessStateItemProps, 'icon' | 'title'>) {
  useChannelProfile();

  return (
    <ProcessStateItem
      icon={icon}
      title={title}
      stateTitle="완료되었어요!"
      state="result"
    />
  );
}

export function StrengthWeaknessFetch({
  icon,
  title,
}: Pick<ProcessStateItemProps, 'icon' | 'title'>) {
  useStrengthWeakStatsQuery();

  return (
    <ProcessStateItem
      icon={icon}
      title={title}
      stateTitle="완료되었어요!"
      state="result"
    />
  );
}

export function TopVideosFetch({
  icon,
  title,
}: Pick<ProcessStateItemProps, 'icon' | 'title'>) {
  usePopularQuery();

  return (
    <ProcessStateItem
      icon={icon}
      title={title}
      stateTitle="완료되었어요!"
      state="result"
    />
  );
}
