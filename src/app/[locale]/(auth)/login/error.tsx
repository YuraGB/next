"use client"; // Error components must be Client Components

import { type ReactNode, useEffect } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Gyb Nextjs Error Page",
  description: "testing Nextjs 14 Error page",
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): ReactNode {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        type={"button"}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {
            reset();
          }
        }
      >
        Try again
      </button>
    </div>
  );
}
