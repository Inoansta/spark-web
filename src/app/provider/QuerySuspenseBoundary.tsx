import { type PropsWithChildren, type ReactNode, Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

interface QuerySuspenseBoundaryProps extends PropsWithChildren {
  errorFallback: ReactNode;
  loadingFallback: ReactNode;
}

export default function QuerySuspenseBoundary({
  errorFallback,
  loadingFallback,
  children,
}: QuerySuspenseBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackRender={() => errorFallback}>
          <Suspense fallback={loadingFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
