import httpClient from '@/app/api/httpClient';
import type { RequestStrategy, ResponseStrategy } from '../model/type';

const BASE_URL = 'pinecone';

const strategyApi = {
  postStrategy: ({
    activityDomain,
    workType,
    snsGoal,
    weaknesses,
  }: RequestStrategy) => {
    const url = `${BASE_URL}/strategy`;
    const body = {
      activityDomain,
      workType,
      snsGoal,
      weaknesses,
    };
    console.log('postStrategy body', body);
    return httpClient.post<ResponseStrategy, typeof body>(url, body);
  },
  getStrategy: async ({ requestId }: { requestId: string }) => {
    const url = `${BASE_URL}/strategy/${requestId}`;
    console.log(url);
    const response = await httpClient.get(url);
    return response;
  },
};

export default strategyApi;
