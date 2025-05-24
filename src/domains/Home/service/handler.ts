import httpClient from '@/app/api/httpClient';
import type {
  ResponseChannelProfile,
  ResponseMetaProfile,
} from '../model/type';

const BASE_URL = `/youtube`;

const channelApi = {
  getChannelProfile: async () => {
    const url = `${BASE_URL}/channel-profile`;

    return await httpClient.get<ResponseChannelProfile>(url);
  },

  getMetaProfile: async () => {
    const url = `/meta/account-profile`;
    return await httpClient.get<ResponseMetaProfile>(url);
  },
};

export default channelApi;
