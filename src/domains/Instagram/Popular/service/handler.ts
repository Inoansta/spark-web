import httpClient from '@/app/api/httpClient';
import type { ResponseInstaPopularTop } from '@/domains/Youtube/Popular/model/type';
import type { RequestChannelStats } from '@/domains/Youtube/StrengthWeakness/model/type';

const BASE_URL = '/meta';

const metaPopularApi = {
  getMetaPopularTop: ({ channelId }: RequestChannelStats) => {
    const params = `instagramBusinessAccountId=${channelId}`;

    const url = `${BASE_URL}/top-contents?${params}`;

    return httpClient.get<ResponseInstaPopularTop>(url);
  },
};

export default metaPopularApi;
