import { useSuspenseQuery } from '@tanstack/react-query';
import channelQueryOption from '../service/queryOption';

const useChannelProfile = () => {
  return useSuspenseQuery(channelQueryOption.profileInfo());
};

export default useChannelProfile;
