import httpClient from '@/app/api/httpClient';
import type { RequestChannelStats } from '@/domains/Youtube/StrengthWeakness/model/type';
import type { ResponsePopularTop } from '../model/type';

const BASE_URL = '/youtube';

const popularApi = {
  getPopularTop: ({ channelId }: RequestChannelStats) => {
    const params = `channelId=${channelId}`;

    const url = `${BASE_URL}/top-videos?${params}`;

    return httpClient.get<ResponsePopularTop>(url);
  },
};

export default popularApi;
