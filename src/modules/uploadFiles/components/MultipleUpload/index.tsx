import { type ReactNode, useState } from "react";
import {
  type FileState,
  MultiImageDropzone,
} from "@/modules/uploadFiles/components/MultipleUpload/MultipleLoad";
import { useEdgeStore } from "@/context/Edgestore";

export function MultiImageDropzoneUsage(): ReactNode {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
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
  return (
    <div>
      <MultiImageDropzone
        value={fileStates}
        dropzoneOptions={{
          maxFiles: 6,
        }}
        onChange={(files) => {
          setFileStates(files);
        }}
        onFilesAdded={async (addedFiles) => {
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
                console.log(res);
              } catch (err) {
                updateFileProgress(addedFileState.key, "ERROR");
              }
            })
          );
        }}
      />
    </div>
  );
}
