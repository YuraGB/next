import { type FC } from "react";
import { X } from "lucide-react";
import * as React from "react";

type Props = {
  imageUrl: string | null;
  disabled: boolean | undefined;
  onChange?: (file?: File) => void | Promise<void>;
};

const RemoveImageIcon: FC<Props> = ({ imageUrl, disabled, onChange }) => {
  if (imageUrl && !disabled) {
    return (
      <div
        className="group absolute right-0 top-0 -translate-y-1/4 translate-x-1/4"
        onClick={(e) => {
          e.stopPropagation();
          void onChange?.(undefined);
        }}
      >
        <div className="flex size-5 items-center justify-center rounded-md border border-solid border-gray-500 bg-white transition-all duration-300 hover:size-6 dark:border-gray-400 dark:bg-black">
          <X className="text-gray-500 dark:text-gray-400" width={16} height={16} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export { RemoveImageIcon };
