"use client";
import { type ReactNode, useState } from "react";
import { useEdgeStore } from "@/context/Edgestore";
import { SingleImageDropzone } from "@/modules/uploadFiles/components/SingleUpload/SingleImageDropzoneUsage";
import { Button } from "@nextui-org/button";

export function SingleImageDropzoneUsage(): ReactNode {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();

  return (
    <div>
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(fileOnChange: File | undefined): void => {
          setFile(fileOnChange);
        }}
      />
      <Button
        type={"button"}
        variant={"faded"}
        size={"lg"}
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              onProgressChange: (progress): void => {
                // you can use this to show a progress bar
                console.log(progress);
              },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res);
          }
        }}
      >
        Upload
      </Button>
    </div>
  );
}

export default SingleImageDropzoneUsage;
