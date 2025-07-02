import { createFunnelSteps } from '@use-funnel/browser';

const userCardSteps = createFunnelSteps()
  .extends('Strength1', {
    requiredKeys: [],
  })
  .extends('Strength2', {
    requiredKeys: [],
  })
  .extends('Weakness1', {
    requiredKeys: [],
  })
  .extends('Weakness2', {
    requiredKeys: [],
  })
  .build();

export default userCardSteps;
