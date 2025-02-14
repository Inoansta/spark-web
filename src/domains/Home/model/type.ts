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

export interface FormatNumberWithUnitProps {
  number: number;
  unit: '회' | '명' | '개';
}
