import { queryOptions } from '@tanstack/react-query';
import type { RequestChannelStats } from '@/domains/Youtube/StrengthWeakness/model/type';
import metaPopularApi from './handler';

const metaPopularTopQueryOption = {
  popular: ['meta-popular'] as const,
  popularTop: ({ channelId }: RequestChannelStats) =>
    queryOptions({
      queryKey: [...metaPopularTopQueryOption.popular, 'top', channelId],
      queryFn: () => metaPopularApi.getMetaPopularTop({ channelId }),
    }),
};

export default metaPopularTopQueryOption;
