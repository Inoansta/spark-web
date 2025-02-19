import { queryOptions } from '@tanstack/react-query';
import strengthWeakApi from './handler';

const strengthWeakQueryOption = {
  stats: ['stats'] as const,
  strengthWeakStats: (channelId: string) =>
    queryOptions({
      queryKey: [...strengthWeakQueryOption.stats, 'strengthWeak', channelId],
      queryFn: () => strengthWeakApi.getStrengthWeakApi({ channelId }),
    }),
};

export default strengthWeakQueryOption;
