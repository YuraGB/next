import { type TCreateTale } from "@/server/actions/TaleServices/types";
import { type TSubmit } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/fairyTalesTab/components/taleAdminModal/useTaleModal";

export const formatTaleData = (data: Partial<TSubmit>): TCreateTale => {
  const formattedData: TCreateTale = {
    mainImage: {
      url: "",
      thumbnailUrl: "",
    },
    images: [],
    content: "",
    shortDescription: "",
    forAge: "",
    title: "",
    categoryTaleId: "",
  };
  for (const [key, value] of Object.entries(data)) {
    switch (key) {
      case "mainImage": {
        formattedData.mainImage.url = value as string;
        break;
      }
      case "images": {
        formattedData.images.push(...(value as Array<{ url: string; thumbnailUrl: string }>));
        break;
      }
      case "thumbnailUrl": {
        formattedData.mainImage.thumbnailUrl = value as string;
        break;
      }

      default: {
        // eslint-disable-next-line
        // @ts-ignore
        formattedData[key] = value as string;
      }
    }
  }

  return formattedData;
};
