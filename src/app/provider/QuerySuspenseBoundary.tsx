import { type PropsWithChildren, type ReactNode, Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import ErrorIcon from '@/assets/ErrorIcon.png';
import { Flex } from '@/shared/ui';
interface QuerySuspenseBoundaryProps extends PropsWithChildren {
  ErrorFallback?: ReactNode;
  loadingFallback: ReactNode;
}

const NetWorkErrorComponent = ({ resetErrorBoundary }: FallbackProps) => {
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

const ErrorComponents = ({ resetErrorBoundary, ...props }: FallbackProps) => {
  console.log(props);
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gapY={5}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img src={ErrorIcon} alt="error_image" />
      <p className="">정보를 불러올 수 없어요.</p>
      <button
        onClick={resetErrorBoundary}
        className="px-5 py-[10px] bg-primary5 text-white rounded-[10px]"
      >
        다시 불러오기
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
