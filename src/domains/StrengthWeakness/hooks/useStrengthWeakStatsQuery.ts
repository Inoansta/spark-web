import { useSuspenseQuery } from '@tanstack/react-query';
import { CHANNEL_ID } from '@/domains/Home/hooks/useChannelOption';
import { Storage } from '@/shared/lib';
import strengthWeakQueryOption from '../service/queryOption';

const useStrengthWeakStatsQuery = () => {
  return useSuspenseQuery(
    strengthWeakQueryOption.strengthWeakStats(
      Storage.getLocalStorage(CHANNEL_ID),
    ),
  );
};

export default useStrengthWeakStatsQuery;
