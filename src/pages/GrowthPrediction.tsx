import { Suspense } from 'react';
import { GrowthPredictionFunnel } from '@/domains/GrowthPrediction';

export default function GrowthPrediction() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <GrowthPredictionFunnel />
    </Suspense>
  );
}
