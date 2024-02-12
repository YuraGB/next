import { type ReactNode } from "react";

const ErrorMessage = ({ error }: { error: string | string[] | undefined }): ReactNode | null => {
  if (typeof error === "undefined") return null;
  if (typeof error === "string") return <p className={"text-rose-600"}>{error}</p>;

  if (Array.isArray(error)) {
    return (
      <ul className={"text-rose-600"}>
        {error.map((message: string) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    );
  }

  return null;
};

export default ErrorMessage;
