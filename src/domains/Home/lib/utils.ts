import type { FormatNumberWithUnitProps } from '../model/type';

export function formatNumberWithUnit(
  number: FormatNumberWithUnitProps['number'],
  unit: FormatNumberWithUnitProps['unit'],
) {
  if (number >= 10000000) {
    return `${(number / 10000000).toFixed(1).replace('.0', '')}천만${unit}`;
  } else if (number >= 10000) {
    return `${(number / 10000).toFixed(1).replace('.0', '')}만${unit}`;
  } else if (number >= 1000) {
    return `${(number / 1000).toFixed(1).replace('.0', '')}천${unit}`;
  }
  return `${number}${unit}`;
}

export function formatNumberWithCommas(number: number) {
  return number.toLocaleString('ko-KR');
}
