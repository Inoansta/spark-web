export interface RequestStrategy {
  activityDomain: string;
  workType: string;
  snsGoal: string;
  weaknesses: string[];
}

export interface ResponseStrategy {
  statusCode: number;
  message: string;
  requestId: string;
}

interface StrategyDetail {
  제목: string;
  본문: string;
  실행방법: string[];
  출처: string;
}

export interface ResponseStrategyResult {
  비법1: StrategyDetail;
  비법2: StrategyDetail;
  비법3: StrategyDetail;
}
