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
