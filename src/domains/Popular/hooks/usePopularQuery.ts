import { useSuspenseQuery } from '@tanstack/react-query';
import { CHANNEL_ID } from '@/domains/Home/hooks/useChannelOption';
import { Storage } from '@/shared/lib';
import popularTopQueryOption from '../service/queryOption';

const usePopularQuery = () => {
  return useSuspenseQuery(
    popularTopQueryOption.popularTop(Storage.getLocalStorage(CHANNEL_ID)),
  );
};

export default usePopularQuery;
