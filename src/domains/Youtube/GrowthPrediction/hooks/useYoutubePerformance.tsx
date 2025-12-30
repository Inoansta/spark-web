import { useSuspenseQuery } from '@tanstack/react-query';
import useStrategyStore from '@/app/store/useStrategyStore';
import youtubePerformanceQueryOption from '@/domains/Youtube/GrowthPrediction/service/quqeryOption';

const useYoutubePerformanceQuery = () => {
  const channelId = useStrategyStore((store) => store.channelId);
  return useSuspenseQuery(
    youtubePerformanceQueryOption.youtubeStatisticsPerformance(channelId),
  );
};

export default useYoutubePerformanceQuery;
