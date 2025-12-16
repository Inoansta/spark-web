import { queryOptions } from '@tanstack/react-query';
import growthPredictionApi from './handler';

const growthPredictionQueryOption = {
  prediction: ['predictions'] as const,
  growthPredictions: (channelId: string) =>
    queryOptions({
      queryKey: [
        ...growthPredictionQueryOption.prediction,
        'growthPredictions',
        channelId,
      ],
      queryFn: () => growthPredictionApi.getGrowthPrediction({ channelId }),
    }),
};

export default growthPredictionQueryOption;
