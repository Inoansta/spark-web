import httpClient from '@/app/api/httpClient';
import type { RequestChannelStats } from '@/domains/Youtube/StrengthWeakness/model/type';
import type { ResponseGrowthPrediction } from '../model/type';

const BASE_URL = '/channel-predictions';

const growthPredictionApi = {
  getGrowthPrediction: async ({ channelId }: RequestChannelStats) => {
    const params = `channelId=${channelId}`;

    const url = `${BASE_URL}?${params}`;
    return await httpClient.get<ResponseGrowthPrediction>(url);
  },
};

export default growthPredictionApi;
