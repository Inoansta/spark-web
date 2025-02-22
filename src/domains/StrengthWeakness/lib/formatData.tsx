import { type Result } from '../model/type';

export function formatSubscribers(count: number): string {
  if (count >= 10_000) {
    return `${(count / 1_000).toFixed(1)}k`; // 10,000 이상이면 k로 변환
  }
  return `총 ${count.toLocaleString()}`; // 1,000 이상이면 쉼표 추가
}

export function formatDollar(amount: number): string {
  if (amount >= 1_000_000_000) {
    return `$${(amount / 1_000_000_000).toFixed(2)}B`;
  }
  if (amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(2)}M`;
  }
  if (amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(2)}K`;
  }
  return `$${amount}`;
}

export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (minutes > 0) {
    return `총 ${minutes}분 ${remainingSeconds}초`;
  }
  return `총 ${remainingSeconds}초`;
}

export function transformLabelData(
  label: keyof Result['growthRates'],
  data: number,
) {
  switch (label) {
    case 'estimatedRevenue': {
      return formatDollar(data);
    }
    case 'averageViewDuration': {
      return formatDuration(data);
    }
    case 'comments':
    case 'likes':
    case 'netSubscribers':
    case 'shares':
    case 'uploadedVideos':
    case 'views': {
      return formatSubscribers(data);
    }
  }
}
