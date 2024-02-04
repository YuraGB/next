"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { type ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  // eslint-disable-next-line
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
