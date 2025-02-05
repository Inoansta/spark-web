export default function DateFormatter(publishedAt: string): string {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(new Date(publishedAt))
    .replace(/ |\.$/g, '');
}
