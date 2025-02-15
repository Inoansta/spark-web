import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider, QuerySuspenseBoundary } from './app/provider';
import { Provider } from './app/provider';
import { RouterApp } from './app/router';
import { GlobalLayout } from './shared/ui';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalLayout>
      <Provider>
        {/* <QuerySuspenseBoundary> */}
        <RouterApp />
        {/* </QuerySuspenseBoundary> */}
      </Provider>
    </GlobalLayout>
  </StrictMode>,
);
