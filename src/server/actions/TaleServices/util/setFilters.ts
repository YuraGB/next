import { type CategoryFilter, type OrderTitleFilter } from "@/server/actions/TaleServices/types";

export const setFilters = (
  filters: OrderTitleFilter | CategoryFilter | undefined
): OrderTitleFilter | CategoryFilter => {
  let config = {};

  if (filters && "orderBy" in filters) {
    config = {
      orderBy: {
        title: filters.orderBy.title,
      },
    };
  } else {
    config = {
      orderBy: {
        title: "asc",
      },
    };
  }

  if (filters && "where" in filters) {
    config = {
      where: {
        categoryTale: {
          id: filters.where.categoryTale.id,
        },
      },
    };
  }

  return config as OrderTitleFilter | CategoryFilter;
};
