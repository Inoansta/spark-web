import { queryOptions } from '@tanstack/react-query';
import strategyApi from './handler';

const getStrategyQueryOption = {
  strategies: ['strategies'] as const,
  getStrategies: (requestId: string) =>
    queryOptions({
      queryKey: [
        ...getStrategyQueryOption.strategies,
        'getStrategies',
        requestId,
      ],
      queryFn: () => {
        return strategyApi.getStrategy({ requestId });
      },
      staleTime: 1000 * 60 * 5,
    }),
};

export default getStrategyQueryOption;
