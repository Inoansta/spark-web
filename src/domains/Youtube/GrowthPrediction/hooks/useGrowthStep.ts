import { createFunnelSteps } from '@use-funnel/browser';

export const useGrowthStep = createFunnelSteps()
  .extends('SubscriberStep', {
    requiredKeys: [],
  })
  .extends('ChannelStep', {
    requiredKeys: [],
  })
  .extends('EngagementStep', {
    requiredKeys: [],
  })

  .build();
