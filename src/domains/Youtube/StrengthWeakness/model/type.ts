export interface RequestChannelStats {
  channelId: string;
}

export interface ResponseMetaPerformance {
  statusCode: number;
  message: string;
  result: Performances;
}

export interface Performances {
  averageComments: Performance;
  averageLikes: Performance;
  averageViews: Performance;
}

export interface Performance {
  recent30Days: number;
  days30to60: number;
  days60to90: number;
}

export interface ResponseChannelStats {
  statusCode: number;
  message: string;
  result: Result;
}

export interface ResponseInstaChannelStats {
  statusCode: number;
  message: string;
  result: InstaResult;
}

export interface Result {
  stats: Stat[];
  growthRates: GrowthRates;
  strengths: (keyof Stat)[];
  weaknesses: (keyof Stat)[];
}

export interface InstaResult {
  stats: InstaStat[];
  growthRates: InstaGrowthRates;
  strengths: (keyof InstaStat)[];
  weaknesses: (keyof InstaStat)[];
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

interface InstaStat {
  startDate: string;
  endDate: string;
  impressions: number;
  likes: number;
  comments: number;
  profileStats: number;
  followers: number;
  unfollowers: number;
  viewsFollowers: number;
  viewsNonFollowers: number;
  adsCount: number;
  uploadedMedia: number;
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

interface InstaGrowthRates {
  viewsNonFollowers: number;
  followers: number;
  viewsFollowers: number;
  uploadedMedia: number;
  impressions: number;
  adsCount: number;
  profileStats: number;
}
