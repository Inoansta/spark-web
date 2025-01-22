import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, QuerySuspenseBoundary } from './app/provider/index.ts';
import { RouterApp } from './app/router/index.ts';
import { GlobalLayout } from './shared/ui/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalLayout>
      <Provider>
        <QuerySuspenseBoundary>
          <RouterApp />
        </QuerySuspenseBoundary>
      </Provider>
    </GlobalLayout>
  </StrictMode>,
);
