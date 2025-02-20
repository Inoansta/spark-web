import { useSuspenseQuery } from '@tanstack/react-query';
import useStrategyStore from '@/app/store/useStrategyStore';
import growthPredictionQueryOption from '../service/queryOption';

const useGrowthPredictionQuery = () => {
  const channelId = useStrategyStore((store) => store.channelId);

  return useSuspenseQuery(
    growthPredictionQueryOption.growthPredictions(channelId),
  );
};

export default useGrowthPredictionQuery;
