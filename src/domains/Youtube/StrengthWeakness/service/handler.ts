import httpClient from '@/app/api/httpClient';
import type { RequestChannelStats, ResponseChannelStats } from '../model/type';

const BASE_URL = '/youtube';

const strengthWeakApi = {
  getStrengthWeakApi: async ({ channelId }: RequestChannelStats) => {
    const baseUrl = `${BASE_URL}/channel-stats`;
    const params = `channelId=${channelId}`;

    const url = `${baseUrl}?${params}`;
    return await httpClient.get<ResponseChannelStats>(url);
  },
};

export default strengthWeakApi;
