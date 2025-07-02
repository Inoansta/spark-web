import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useChannelProfile from '@/domains/Home/hooks/useChannelProfile';
import useGrowthPredictionQuery from '@/domains/Youtube/GrowthPrediction/hooks/useGrowthPredictionQuery';
import usePopularQuery from '@/domains/Youtube/Popular/hooks/usePopularQuery';
import useStrengthWeakStatsQuery from '@/domains/Youtube/StrengthWeakness/hooks/useStrengthWeakStatsQuery';
import ProcessStateItem, {
  type ProcessStateItemProps,
} from './ProcessStateItem';

export function IsFetching({ children }: PropsWithChildren) {
  const { isSuccess } = useStrengthWeakStatsQuery();

  return isSuccess && children;
}

export function GrowthPrediectionFetch({
  icon,
  title,
}: Pick<ProcessStateItemProps, 'icon' | 'title'>) {
  const navigate = useNavigate();
  const { isSuccess } = useGrowthPredictionQuery();

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => navigate('/popular'), 2000);
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
