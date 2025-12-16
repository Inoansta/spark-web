import httpClient from '@/app/api/httpClient';
import type {
  RequestStrategy,
  ResponseStrategy,
} from '@/domains/Youtube/Strategy/model/type';

const BASE_URL = 'pinecone';

const metaStrategyApi = {
  postStrategy: ({
    activityDomain,
    workType,
    snsGoal,
    weaknesses,
  }: RequestStrategy) => {
    const url = `${BASE_URL}/metaStrategy`;
    const body = {
      activityDomain,
      workType,
      snsGoal,
      weaknesses,
    };

    return httpClient.post<ResponseStrategy, typeof body>(url, body);
  },
};

export default metaStrategyApi;
