import { QuerySuspenseBoundary } from '@/app/provider';
import { StrengthWeaknessFunnel } from '@/domains/StrengthWeakness';
import PageBackground from '@/shared/ui/components/PageBackground';

export default function StrengthWeakness() {
  return (
    <PageBackground color="black_gradient">
      <QuerySuspenseBoundary
        loadingFallback={<>Loading...</>}
        textColor="text-white"
      >
        <StrengthWeaknessFunnel />
      </QuerySuspenseBoundary>
    </PageBackground>
  );
}
