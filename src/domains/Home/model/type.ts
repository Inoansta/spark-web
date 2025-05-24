interface ChannelProfileResult {
  channelId: string;
  channelName: string;
  totalVideoCount: number;
  subscriberCount: number;
  totalViewCount: number;
  defaultThumbnailUrl: string;
}

interface MetaProfileResult {
  userName: string;
  profileUrl: string;
  followersCount: number;
  followingCount: number;
  postsCount: number;
}

export interface ResponseChannelProfile {
  statusCode: number;
  message: string;
  result: ChannelProfileResult;
}

export interface ResponseMetaProfile {
  statusCode: number;
  message: string;
  result: MetaProfileResult;
}

export interface FormatNumberWithUnitProps {
  number: number;
  unit: '회' | '명' | '개';
}
