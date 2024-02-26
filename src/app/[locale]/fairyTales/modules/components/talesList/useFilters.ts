import { type ChangeEvent, useState } from "react";
import { type CategoryFilter, type OrderTitleFilter } from "@/server/actions/TaleServices/types";

type TFilters = {
  filters: OrderTitleFilter | CategoryFilter;
  onSetSort: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const useFilters = (): TFilters => {
  const [filters, setFilters] = useState({
    orderBy: {
      title: "asc",
    },
  });

  const onSetSort = (e: ChangeEvent<HTMLSelectElement>): void => {
    const {
      target: { value },
    } = e;
    if (value !== "asc" && value !== "desc") return;

    setFilters((prevState) => {
      return {
        ...prevState,
        orderBy: {
          title: value,
        },
      };
    });
  };

  return {
    filters,
    onSetSort,
  };
};
