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
  const { data } = useGrowthPredictionQuery();

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
  const { data } = useChannelProfile();

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
  const { data } = useStrengthWeakStatsQuery();

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
  const { data } = usePopularQuery();

  return (
    <ProcessStateItem
      icon={icon}
      title={title}
      stateTitle="완료되었어요!"
      state="result"
    />
  );
}
