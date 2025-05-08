import { type PropsWithChildren, type ReactNode, Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import ErrorIcon from '@/assets/ErrorIcon.png';
import { Flex } from '@/shared/ui';
interface QuerySuspenseBoundaryProps extends PropsWithChildren {
  ErrorFallback?: ReactNode;
  loadingFallback: ReactNode;
  textColor?: ErrorComponentsProps['textColor'];
  buttonColor?: ErrorComponentsProps['buttonColor'];
}

interface ErrorComponentsProps extends FallbackProps {
  textColor: 'text-white' | 'text-black';
  buttonColor: 'bg-primary5' | 'bg-white';
}

const ErrorComponents = ({
  textColor,
  buttonColor,
  resetErrorBoundary,
}: ErrorComponentsProps) => {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gapY={5}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img src={ErrorIcon} alt="error_image" />
      <p className={`${textColor} font-bold text-lg`}>
        정보를 불러올 수 없어요.
      </p>
      <button
        onClick={resetErrorBoundary}
        className={`px-5 py-[10px] ${buttonColor} ${buttonColor === 'bg-white' ? 'text-primary5' : 'text-white'}  rounded-[10px] font-bold text-[13px]`}
      >
        다시 불러오기
      </button>
    </Flex>
  );
};

export default function QuerySuspenseBoundary({
  loadingFallback,
  textColor,
  buttonColor,
  children,
}: QuerySuspenseBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={(props) => (
            <ErrorComponents
              textColor={textColor ?? 'text-black'}
              buttonColor={buttonColor ?? 'bg-primary5'}
              {...props}
            />
          )}
        >
          <Suspense fallback={loadingFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
