import httpClient from '@/app/api/httpClient';
import { ResponseMetaPerformance } from './../../StrengthWeakness/model/type';

const BASE_URL = '/youtube';

const youtubePerformanceApi = {
  GetYoutubePerformance: async (channelId: string) => {
    const baseUrl = `${BASE_URL}/statistics/performance?`;
    const params = `channelId=${channelId}`;

    const url = `${baseUrl}${params}`;
    return await httpClient.get<ResponseMetaPerformance>(url);
  },
};

export default youtubePerformanceApi;
