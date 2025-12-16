import { QuerySuspenseBoundary } from '@/app/provider';
import InstagramStrengthWeaknessFunnel from '@/domains/Instagram/StrengthWeakness/StrengthWeakness/components/InstagramStrengthWeaknessFunnel';
import StrengthWeaknessSkeleton from '@/domains/Youtube/StrengthWeakness/skeleton/skeleton';
import PageBackground from '@/shared/ui/components/PageBackground';

export default function InstagramStrengthWeakness() {
  return (
    <PageBackground color="black_gradient" className="h-screen">
      <QuerySuspenseBoundary loadingFallback={<StrengthWeaknessSkeleton />}>
        <InstagramStrengthWeaknessFunnel />
      </QuerySuspenseBoundary>
    </PageBackground>
  );
}
