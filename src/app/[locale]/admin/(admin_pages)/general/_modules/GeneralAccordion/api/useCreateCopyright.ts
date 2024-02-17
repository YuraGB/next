import { useMutation } from "@tanstack/react-query";
import {
  addCopyright,
  type TCopyrightSchema,
} from "@/server/actions/FooterService/FooterCopyright/addCopyright";

// eslint-disable-next-line
export const useCreateCopyright = () => {
  return useMutation({
    mutationFn: (createData: TCopyrightSchema) => addCopyright(createData),
  });
};
