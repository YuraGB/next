import { Select, SelectItem } from "@nextui-org/select";
import { FormattedMessage, useIntl } from "react-intl";
import { type ChangeEvent, type ReactNode } from "react";

const SortFilter = ({
  onChangeHandler,
}: {
  onChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}): ReactNode => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage } = useIntl();
  return (
    <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
      <Select
        label={<FormattedMessage id={"sort.order"} defaultMessage={"Sort order"} />}
        className="max-w-[150px] shadow-lg"
        onChange={onChangeHandler}
        defaultSelectedKeys={["asc"]}
      >
        <SelectItem key={"asc"} value={"asc"} textValue={formatMessage({ id: "sort.asc" })}>
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
