import { Suspense } from 'react';
import { StrengthWeaknessFunnel } from '@/domains/StrengthWeakness';

export default function StrengthWeakness() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <StrengthWeaknessFunnel />
    </Suspense>
  );
}
