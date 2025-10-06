import httpClient from '@/app/api/httpClient';
import type { ResponseChannelStats } from './../../Youtube/StrengthWeakness/model/type';

const BASE_URL = '/meta';

const metaAnalysisApi = {
  GetMetaStatsApi: async (channelId: string) => {
    const baseUrl = `${BASE_URL}/channel-stats?`;
    const params = `instagramBusinessAccountId=${channelId}`;

    const url = `${baseUrl}${params}`;
    return await httpClient.get<ResponseChannelStats>(url);
  },
  GetMetaPerformance: async (channelId: string) => {
    const baseUrl = `${BASE_URL}/statistics/performance?`;
    const params = `instagramBusinessAccountId=${channelId}`;

    const url = `${baseUrl}${params}`;
    return await httpClient.get<ResponseChannelStats>(url);
  },
};

export default metaAnalysisApi;
