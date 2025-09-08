import httpClient from '@/app/api/httpClient';
import type {
  RequestStrategy,
  ResponseStrategy,
} from '@/domains/Youtube/Strategy/model/type';

const metaStrategyApi = {
  postStrategy: ({
    activityDomain,
    workType,
    snsGoal,
    weaknesses,
  }: RequestStrategy) => {
    const url = 'pinecone/metaStrategy';
    const body = { activityDomain, workType, snsGoal, weaknesses };
    return httpClient.post<ResponseStrategy, RequestStrategy>(url, body);
  },
};

export default metaStrategyApi;
