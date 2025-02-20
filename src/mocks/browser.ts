/* eslint-disable */
import { setupWorker } from 'msw/browser';

import { handlers as AuthHandler } from './handler/auth';
import { handlers as channelHandler } from './handler/channel';
import { handlers as strategyHandler } from './handler/strategy';

export const worker = setupWorker(
  ...AuthHandler,
  ...channelHandler,
  ...strategyHandler,
);
