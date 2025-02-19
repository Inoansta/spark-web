import { queryOptions } from '@tanstack/react-query';
import type { RequestChannelStats } from '@/domains/StrengthWeakness/model/type';
import popularApi from './handler';

const popularTopQueryOption = {
  popular: ['popular'] as const,
  popularTop: ({ channelId }: RequestChannelStats) =>
    queryOptions({
      queryKey: [...popularTopQueryOption.popular, 'top', channelId],
      queryFn: () => popularApi.getPopularTop({ channelId }),
    }),
};

export default popularTopQueryOption;
