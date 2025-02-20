import type { ResponseChannelStats } from '@/domains/StrengthWeakness/model/type';

export default function transformStatsData(
  stats: ResponseChannelStats['result']['stats'],
) {
  const reversedStats = [...stats].reverse();

  const growthRates = reversedStats.slice(0, -1).map((_, i) => ({
    view: {
      late: reversedStats[i].views,
      recent: reversedStats[i + 1].views,
    },
    netSubscribers: {
      late: reversedStats[i].netSubscribers,
      recent: reversedStats[i + 1].netSubscribers,
    },
  }));

  const viewCount =
    reversedStats.reduce((sum, stat) => sum + stat.views, 0) /
    reversedStats.length;
  const netSubscribersCount =
    reversedStats.reduce((sum, stat) => sum + stat.netSubscribers, 0) /
    reversedStats.length;

  return {
    growthRates,
    viewCount,
    netSubscribersCount,
  };
}
