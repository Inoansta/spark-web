export interface ResponseGrowthPrediction {
  statusCode: number;
  message: string;
  result: Result;
}

interface Result {
  predictedViews: number;
  predictedNetSubscribers: number;
}
