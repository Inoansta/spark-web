export interface ResponsePopularTop {
  statusCode: number;
  message: string;
  result: Result[];
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
