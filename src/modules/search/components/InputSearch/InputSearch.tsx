import { Input } from "@nextui-org/input";
import { type ChangeEvent, memo, type ReactNode, useRef } from "react";
import { SearchIcon } from "@nextui-org/shared-icons";
import RemoveButton from "@/components/removeButton";

const InputSearch = ({
  onChange,
  isValue,
  clearSearch,
}: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isValue: boolean;
  clearSearch: () => void;
}): ReactNode => {
  const searchRef = useRef<HTMLFormElement>(null);

  const onReset = (): void => {
    if (searchRef?.current?.reset) {
      searchRef.current?.reset();
      clearSearch();
    }
  };

  return (
    <form aria-label={"search input"} ref={searchRef} className={"w-full"}>
      <Input
        type={"text"}
        size={"lg"}
        onInput={onChange}
        placeholder={"Start type"}
        aria-label={"Search input"}
        className={"w-full min-w-[200px]"}
        startContent={<SearchIcon />}
        maxLength={128}
        endContent={isValue ? <RemoveButton onClick={onReset} /> : null}
      />
    </form>
  );
};

export default memo(InputSearch);
