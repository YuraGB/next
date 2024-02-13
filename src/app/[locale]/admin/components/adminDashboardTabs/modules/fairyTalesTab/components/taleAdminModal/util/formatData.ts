import { type TCreateTale } from "@/server/actions/addNewTale";
import { type TSubmit } from "@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleAdminModal/useTaleModal";

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
        formattedData.mainImage.url = value;
        break;
      }
      case "images": {
        formattedData.images.push(value);
        break;
      }
      case "thumbnailUrl": {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        formattedData.mainImage.thumbnailUrl = value;
        break;
      }

      default: {
        formattedData[key as keyof typeof data] = value;
      }
    }
  }

  return formattedData;
};
