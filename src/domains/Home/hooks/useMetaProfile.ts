import { useSuspenseQuery } from '@tanstack/react-query';
import channelQueryOption from '../service/queryOption';

const useMetaProfile = () => {
  return useSuspenseQuery(channelQueryOption.metaProfile());
};

export default useMetaProfile;
