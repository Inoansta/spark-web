interface ChannelProfileResult {
  channelId: string;
  channelName: string;
  totalVideoCount: number;
  subscriberCount: number;
  totalViewCount: number;
}

export interface ResponseChannelProfile {
  statusCode: number;
  message: string;
  result: ChannelProfileResult;
}
