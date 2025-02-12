import { queryOptions } from '@tanstack/react-query';
import channelApi from './handler';

const channelQueryOption = {
  channel: ['channel'] as const,
  profileInfo: () =>
    queryOptions({
      queryKey: [...channelQueryOption.channel, 'profile'],
      queryFn: channelApi.getChannelProfile,
    }),
};

export default channelQueryOption;
