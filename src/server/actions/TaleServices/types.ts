import { z } from "zod";
import type { CategoryTale } from "@prisma/client";
import type { Image } from ".prisma/client";
import type { TaleWithRelations } from "@/server/actions/types";

export const LIMIT = 6;

export type TGetAllFairyTalesWithPagination = [
  number,
  TaleWithRelations[] | undefined,
  number | null,
];

export type OrderTitleFilter = {
  orderBy: {
    title?: string;
  };
};

export type CategoryFilter = {
  where: {
    categoryTale: {
      id: string;
    };
  };
};

export type TProps = {
  currentPage?: number;
  filters?: OrderTitleFilter | CategoryFilter;
};

export const TaleSchema = z.object({
  content: z.string({
    required_error: "Content is required",
    invalid_type_error: "Content must be a string",
  }),
  shortDescription: z.string({
    required_error: "Short description is required",
    invalid_type_error: "Short description must be a string",
  }),
  mainImage: z.object({
    url: z.string().url({
      message: "Main image url is required",
    }),
    thumbnailUrl: z
      .string()
      .url({
        message: "Main image url is required",
      })
      .optional(),
    id: z.string().optional(),
  }),
  forAge: z.string(),
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title must be a string",
  }),
  images: z.array(
    z.object({
      url: z
        .string({
          required_error: "Image url is required",
          invalid_type_error: "Image url must be a string",
        })
        .url({
          message: "Image url is required",
        }),
      thumbnailUrl: z.string().url().optional(),
      id: z.string().optional(),
    })
  ),
  categoryTaleId: z.string(),
});

export type TCreateTale = z.infer<typeof TaleSchema>;

// -------------------

export type SearchTaleResponse = {
  title: string;
  id: string;
  categoryTale: CategoryTale;
  forAge: string;
  mainImage: Image;
  content: string;
  shortDescription: string;
};
