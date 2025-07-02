import { createFunnelSteps } from '@use-funnel/browser';

export const useGrowthStep = createFunnelSteps()
  .extends('GrowthStep', {
    requiredKeys: [],
  })
  .extends('ViewStep', {
    requiredKeys: [],
  })
  .extends('SubscriberStep', {
    requiredKeys: [],
  })

  .build();
