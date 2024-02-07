import { Input } from "@nextui-org/input";
import { type ChangeEvent, memo, type ReactNode } from "react";
import { SearchIcon } from "@nextui-org/shared-icons";
import RemoveButton from "@/components/removeButton";
import { useInputSearchField } from "@/modules/search/components/InputSearch/useInputSearchField";

const InputSearch = ({
  onChange,
  isValue,
  clearSearch,
}: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isValue: boolean;
  clearSearch: () => void;
}): ReactNode => {
  const { onReset, searchRef } = useInputSearchField(clearSearch);

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
