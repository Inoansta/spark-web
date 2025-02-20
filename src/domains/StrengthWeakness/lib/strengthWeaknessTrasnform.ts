import { ResponseChannelStats, Result } from '../model/type';

export default function transformDataStrengthWeakness(
  data: ResponseChannelStats,
) {
  const dateLabels = ['90 ~ 60일', '60 ~ 30일', '30 ~ 최근'];
  const strengthsColor = ['bg-gradient8', 'bg-primary10', 'bg-primary11'];
  const weaknessesColor = ['bg-gradient5', 'bg-gradient4', 'bg-gradient3'];

  const { stats, strengths, weaknesses } = data.result;

  const reversedStats = stats.slice().reverse();

  const transformData = (
    title: 'strengths' | 'weaknesses',
    categories: Result['weaknesses'],
  ) => {
    return categories.map((category) =>
      reversedStats.map((stat, index) => ({
        date: dateLabels[index],
        color:
          title === 'strengths'
            ? strengthsColor[index]
            : weaknessesColor[index],
        value: stat[category],
      })),
    );
  };

  const transformedData = {
    strengths: transformData('strengths', strengths),
    weaknesses: transformData('weaknesses', weaknesses),
  };

  return { transformedData, weaknesses };
}
