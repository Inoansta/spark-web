import { queryOptions } from '@tanstack/react-query';
import strengthWeakApi from './handler';

const strengthWeakQueryOption = {
  stats: ['stats'] as const,
  strengthWeakStats: ({
    channelId,
    enabled = false,
  }: {
    channelId: string;
    enabled?: boolean;
  }) =>
    queryOptions({
      queryKey: [...strengthWeakQueryOption.stats, 'strengthWeak', channelId],
      queryFn: () => {
        return strengthWeakApi.getStrengthWeakApi({ channelId });
      },
      enabled: enabled,
      // select: (data) => {},
    }),
};

export default strengthWeakQueryOption;
