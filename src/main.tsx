import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider, QuerySuspenseBoundary } from './app/provider';
import { Provider } from './app/provider';
import ClarityEffector from './app/provider/ClarityEffector';
import { RouterApp } from './app/router';
import { GlobalLayout } from './shared/ui';

async function deferRender() {
  if (import.meta.env.MODE !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

deferRender().then(() =>
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <GlobalLayout>
        <Provider>
          {/* <QuerySuspenseBoundary> */}
          <RouterApp />
          {/* </QuerySuspenseBoundary> */}
        </Provider>
        <ClarityEffector />
      </GlobalLayout>
    </StrictMode>,
  ),
);
