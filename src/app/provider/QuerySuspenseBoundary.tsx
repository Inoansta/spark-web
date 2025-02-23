import { type PropsWithChildren, type ReactNode, Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Flex } from '@/shared/ui';

interface QuerySuspenseBoundaryProps extends PropsWithChildren {
  ErrorFallback?: ReactNode;
  loadingFallback: ReactNode;
}

const ErrorComponents = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      className="border-primary3 border rounded-md bg-primary4 py-4"
      gapY={5}
    >
      {/* <p>An error occurred: {error.message}</p> */}
      <p className="text-white">엇 에러가 발생했어요!</p>
      <button
        onClick={resetErrorBoundary}
        className="p-4 bg-primary6 text-white rounded-lg"
      >
        다시 시도
      </button>
    </Flex>
  );
};

export default function QuerySuspenseBoundary({
  loadingFallback,
  children,
}: QuerySuspenseBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={(props) => <ErrorComponents {...props} />}
        >
          <Suspense fallback={loadingFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
