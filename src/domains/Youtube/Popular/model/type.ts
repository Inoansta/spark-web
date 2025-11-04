export interface ResponsePopularTop {
  statusCode: number;
  message: string;
  result: Result[];
}

export interface ResponseInstaPopularTop {
  statusCode: number;
  message: string;
  result: InstaResult[];
}

interface InstaResult {
  id: string;
  caption: string;
  timestamp: string;
  mediaType: string;
  contentUrl: string;
  views: number;
  likes: number;
}

interface Result {
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

interface Snippet {
  title: string;
  publishedAt: string;
  thumbnails: Thumbnails;
}

interface Thumbnails {
  default: AdditionalProp;
  medium: AdditionalProp;
  high: AdditionalProp;
}

interface AdditionalProp {
  url: string;
  width: number;
  height: number;
}

interface Statistics {
  viewCount: number;
}
