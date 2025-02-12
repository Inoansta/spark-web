import httpClient from "@/app/api/httpClient";
import type { ResponseChannelProfile } from "../model/type";

const BASE_URL=`/youtube`;

const channelApi={
  getChannelProfile:async ()=>{
    const url=`${BASE_URL}/channel-profile`;

    return await httpClient.get<ResponseChannelProfile>(url)
  }
}

export default channelApi;