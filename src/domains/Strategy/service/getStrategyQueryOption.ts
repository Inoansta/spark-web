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
    }),
};

export default getStrategyQueryOption;
