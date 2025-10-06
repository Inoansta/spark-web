import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useMetaProfile } from '@/domains/Home/hooks';
import useChannelProfile from '@/domains/Home/hooks/useChannelProfile';
import useMetaPopularQuery from '@/domains/Instagram/Popular/hooks/useMetaPopularQuery';
import useGrowthPredictionQuery from '@/domains/Youtube/GrowthPrediction/hooks/useGrowthPredictionQuery';
import usePopularQuery from '@/domains/Youtube/Popular/hooks/usePopularQuery';
import useStrengthWeakStatsQuery from '@/domains/Youtube/StrengthWeakness/hooks/useStrengthWeakStatsQuery';
import useMetaChannelStats from '../hooks/useMetaChannelStats';
import useMetaPerformanceQuery from '../hooks/useMetaPerformance';
import ProcessStateItem, {
  type ProcessStateItemProps,
} from './ProcessStateItem';

export function MetaProfileFetch({
  icon,
  title,
}: Pick<ProcessStateItemProps, 'icon' | 'title'>) {
  useMetaProfile();
  return (
    <ProcessStateItem
      icon={icon}
      title={title}
      stateTitle="완료되었어요!"
      state="result"
    />
  );
}

export function MetaTopContentsFetch({
  icon,
  title,
}: Pick<ProcessStateItemProps, 'icon' | 'title'>) {
  useMetaPopularQuery();
  return (
    <ProcessStateItem
      icon={icon}
      title={title}
      stateTitle="완료되었어요!"
      state="result"
    />
  );
}

export function MetaChannelStatsFetch({
  icon,
  title,
}: Pick<ProcessStateItemProps, 'icon' | 'title'>) {
  return (
    <ProcessStateItem
      icon={icon}
      title={title}
      stateTitle="완료되었어요!"
      state="result"
    />
  );
}

export function MetaPerformanceFetch({
  icon,
  title,
}: Pick<ProcessStateItemProps, 'icon' | 'title'>) {
  const navigate = useNavigate();
  const { isSuccess } = useMetaPerformanceQuery();
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => navigate('/instagram-popular'), 2000);
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

type IsFetchingProps = PropsWithChildren<{
  platform: 'y' | 'm';
}>;

function StrengthWeakStatsSuccess() {
  const { isSuccess } = useStrengthWeakStatsQuery();
  return isSuccess;
}

function MetaChannelStatsSuccess() {
  const { isSuccess } = useMetaChannelStats();
  return isSuccess;
}

export function IsFetching({ children, platform }: IsFetchingProps) {
  let isSuccess;
  if (platform === 'y') {
    isSuccess = StrengthWeakStatsSuccess();
  } else if (platform === 'm') {
    isSuccess = MetaChannelStatsSuccess();
  }

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

//TODO 평균조회수 api로 교체
export function StrengthWeaknessFetch({
  icon,
  title,
}: Pick<ProcessStateItemProps, 'icon' | 'title'>) {
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
