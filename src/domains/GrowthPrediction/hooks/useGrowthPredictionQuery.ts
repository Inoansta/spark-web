import { useSuspenseQuery } from '@tanstack/react-query';
import { CHANNEL_ID } from '@/domains/Home/hooks/useChannelOption';
import { Storage } from '@/shared/lib';
import growthPredictionQueryOption from '../service/queryOption';

const useGrowthPredictionQuery = () => {
  return useSuspenseQuery(
    growthPredictionQueryOption.growthPredictions(
      Storage.getLocalStorage(CHANNEL_ID),
    ),
  );
};

export default useGrowthPredictionQuery;
