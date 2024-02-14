import { Select, SelectItem } from "@nextui-org/select";
import { type UseFormRegister } from "react-hook-form/dist/types/form";
import { type FieldValues } from "react-hook-form/dist/types/fields";
import { type FC, memo } from "react";
import { useCategoryList } from "@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/categorySelect/useCategoryList";

type Props = {
  register: UseFormRegister<FieldValues>;
};

const CategorySelect: FC<Props> = ({ register }) => {
  const { categoryList } = useCategoryList();

  if (categoryList.length === 0) {
    return null;
  }

  return (
    <Select
      label="Select a category"
      className="mb-6 max-w-xs"
      {...register("categoryTaleId", {})}
      name={"categoryTaleId"}
      defaultSelectedKeys={[categoryList[0].id]}
      isRequired={true}
    >
      {categoryList.map((category) => (
        <SelectItem key={category.id} value={category.id}>
          {category.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default memo(CategorySelect);
