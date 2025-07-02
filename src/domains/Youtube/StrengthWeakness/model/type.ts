export interface RequestChannelStats {
  channelId: string;
}

export interface ResponseChannelStats {
  statusCode: number;
  message: string;
  result: Result;
}

export interface Result {
  stats: Stat[];
  growthRates: GrowthRates;
  strengths: (keyof Stat)[];
  weaknesses: (keyof Stat)[];
}

interface Stat {
  startDate: string;
  endDate: string;
  views: number;
  netSubscribers: number;
  likes: number;
  comments: number;
  shares: number;
  estimatedRevenue: number;
  averageViewDuration: number;
  uploadedVideos: number;
}

interface GrowthRates {
  shares: number;
  comments: number;
  estimatedRevenue: number;
  netSubscribers: number;
  averageViewDuration: number;
  views: number;
  likes: number;
  uploadedVideos: number;
}
