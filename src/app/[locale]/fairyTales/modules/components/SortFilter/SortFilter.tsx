import { Select, SelectItem } from "@nextui-org/select";
import { FormattedMessage } from "react-intl";
import { type ChangeEvent, type ReactNode } from "react";

const SortFilter = ({
  onChangeHandler,
}: {
  onChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}): ReactNode => {
  return (
    <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
      <Select
        label="Sort order"
        className="max-w-[150px] shadow-lg"
        onChange={onChangeHandler}
        defaultSelectedKeys={["asc"]}
      >
        <SelectItem key={"asc"} value={"asc"} textValue={"From A to Z"}>
          <span>
            <FormattedMessage id={"sort.asc"} defaultMessage={"From A to Z"} />
          </span>
        </SelectItem>
        <SelectItem key={"desc"} value={"desc"} textValue={"From Z to A"}>
          <span>
            <FormattedMessage id={"sort.desc"} defaultMessage={"From Z to A"} />
          </span>
        </SelectItem>
      </Select>
    </div>
  );
};

export default SortFilter;
