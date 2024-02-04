"use client";
import React, { type FC, memo, type ReactNode, Suspense, useEffect, useState } from "react";

type TProps = {
  createdAt: Date | string;
};

const CreatedAt: FC<TProps> = ({ createdAt }): ReactNode => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setDate(createdAt.toLocaleString());
  }, [createdAt]);

  if (!date) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <p>Published: {String(date)}</p>
    </Suspense>
  );
};

export default memo(CreatedAt);
