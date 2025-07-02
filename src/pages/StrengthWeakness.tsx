import { QuerySuspenseBoundary } from '@/app/provider';
import { StrengthWeaknessFunnel } from '@/domains/Youtube/StrengthWeakness';
import StrengthWeaknessSkeleton from '@/domains/Youtube/StrengthWeakness/skeleton/skeleton';
import PageBackground from '@/shared/ui/components/PageBackground';

export default function StrengthWeakness() {
  return (
    <PageBackground color="black_gradient" className="h-screen">
      <QuerySuspenseBoundary loadingFallback={<StrengthWeaknessSkeleton />}>
        <StrengthWeaknessFunnel />
      </QuerySuspenseBoundary>
    </PageBackground>
  );
}
