import { queryOptions } from '@tanstack/react-query';
import channelApi from './handler';

const channelQueryOption = {
  channel: ['channel'] as const,
  platform: ['meta'] as const,
  profileInfo: () =>
    queryOptions({
      queryKey: [...channelQueryOption.channel, 'profile'],
      queryFn: channelApi.getChannelProfile,
    }),
  metaProfile: () =>
    queryOptions({
      queryKey: [...channelQueryOption.platform, 'profile'],
      queryFn: channelApi.getMetaProfile,
    }),
};

export default channelQueryOption;
