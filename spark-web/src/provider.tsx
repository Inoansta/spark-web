import {
	QueryClient,
	QueryClientProvider,
	QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { PropsWithChildren, useEffect, useState, Suspense } from "react";

export const Provider = ({ children }: PropsWithChildren) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						throwOnError: true,
						staleTime: 1000 * 60 * 5,
						gcTime: 1000 * 60 * 10,
						retry: 0,
					},
				},
			}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			<QueryErrorResetBoundary>
				{({ reset }) => (
					<ErrorBoundary onReset={reset} fallbackRender={undefined}>
						<Suspense>{children}</Suspense>
					</ErrorBoundary>
				)}
			</QueryErrorResetBoundary>
		</QueryClientProvider>
	);
};
