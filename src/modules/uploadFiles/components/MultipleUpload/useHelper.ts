import { useRef, useState } from "react";
import type { FileState } from "@/modules/uploadFiles/components/MultipleUpload/MultipleLoad";
import { useEdgeStore } from "@/context/Edgestore";
import { type TProps } from "@/modules/uploadFiles/components/MultipleUpload/index";
import { type Image } from ".prisma/client";
import toast from "react-hot-toast";

export type TUploadFiles = Array<Omit<Image, "id" | "createdAt" | "updatedAt">>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useHelper = ({ setImage }: TProps) => {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const uploadFiles = useRef<TUploadFiles>([]);
  const { edgestore } = useEdgeStore();

  function updateFileProgress(key: string, progress: FileState["progress"]): void {
    setFileStates((files) => {
      const newFileStates = structuredClone(files);
      const fileState = newFileStates.find((state) => state.key === key);
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onFileLoader = async (addedFiles: FileState[]) => {
    setFileStates([...fileStates, ...addedFiles]);

    await Promise.all(
      addedFiles.map(async (addedFileState) => {
        try {
          const res = await edgestore.publicFiles.upload({
            file: addedFileState.file as File,
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onProgressChange: async (progress): Promise<void> => {
              updateFileProgress(addedFileState.key, progress);
              if (progress === 100) {
                // wait 1 second to set it to complete
                // so that the user can see the progress bar at 100%
                await new Promise((resolve) => setTimeout(resolve, 1000));
                updateFileProgress(addedFileState.key, "COMPLETE");
              }
            },
          });

          // format, save and update the state for images
          // for submitting to the server
          uploadFiles.current.push({
            url: res.url,
            thumbnailUrl: res.thumbnailUrl,
          });

          // to write the images to the form react-hook-form
          setImage?.("images", uploadFiles.current);
        } catch (err) {
          toast.error("Error uploading file");
          updateFileProgress(addedFileState.key, "ERROR");
        }
      })
    );
  };

  return { fileStates, setFileStates, onFileLoader, uploadFiles };
};
