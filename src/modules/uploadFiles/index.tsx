"use client";
import SingleImageDropzoneUsage from "@/modules/uploadFiles/components/SingleUpload";
import { type ReactNode } from "react";
import { MultiImageDropzoneUsage } from "@/modules/uploadFiles/components/MultipleUpload";

export const UploadSingle = (): ReactNode => {
  return <SingleImageDropzoneUsage />;
};

export const UploadMultiple = (): ReactNode => {
  return <MultiImageDropzoneUsage />;
};
