import { type Tale } from ".prisma/client";
import { type TCreateTale } from "@/server/actions/addNewTale";
import { type TaleWithRelations } from "@/server/actions/types";

export const formatTaleData = (data: Partial<Tale>): TCreateTale => {
  const formattedData: Partial<TaleWithRelations> = {
    images: [] as string[], // Initialize images as an array
  };

  for (const [key, value] of Object.entries(data)) {
    if (key.includes("images")) {
      if (typeof value === "string") {
        formattedData.images?.push(value);
      }
    } else if (key.includes("mainImage")) {
      formattedData.mainImage = {
        url: value as string,
        thumbnailUrl: "", // Initialize thumbnailUrl as an empty string
        id: "", // Initialize id as an empty string
        createdAt: new Date(), // Initialize createdAt as a new Date
        updatedAt: new Date(), // Initialize updatedAt as a new Date
      };
    } else {
      // never as a temporary solution
      formattedData[key as keyof typeof data] = value as never; // Type assertion here
    }
  }

  return formattedData as TCreateTale;
};
