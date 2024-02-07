import { type RefObject, useRef } from "react";

type UseInputSearchField = (clearSearch: () => void) => {
  onReset: () => void;
  searchRef: RefObject<HTMLFormElement>;
};

export const useInputSearchField: UseInputSearchField = (clearSearch) => {
  const searchRef = useRef<HTMLFormElement>(null);

  const onReset = (): void => {
    if (searchRef?.current?.reset) {
      searchRef.current?.reset();
      clearSearch();
    }
  };

  return { onReset, searchRef };
};
