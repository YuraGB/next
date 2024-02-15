import { type TRating } from "@/server/actions/RatingServises/setRating";
import { useAddRattingService } from "@/modules/rating/useAddRatting";
import { useUserId } from "@/modules/rating/useUserId";
import { useCanUserVote } from "@/modules/rating/useCanUserVote";
import { useRouter } from "next/navigation";
import { Pages } from "@/utils/pages";

export const useRating = (
  rating: TRating | null | undefined,
  id: string | undefined
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => {
  const userId = useUserId();
  const { mutate, status, error, data } = useAddRattingService(id, userId);
  // Find Did user already vote
  const { canEdit } = useCanUserVote(userId, id);
  const router = useRouter();

  const isPending = status === "pending";

  const onClick = (rate: number): void => {
    const newRating = {
      rating: rating?.rating ? rating?.rating + rate : rate,
      count: rating?.count ? rating?.count + 1 : 1,
    };

    if (!isPending && id && userId) {
      mutate({ taleId: id, data: newRating, userId });
    }
  };

  const averageRating = rating?.rating && rating?.count ? rating.rating / rating.count : 0;

  return {
    onUpdateRate: mutate,
    data,
    error,
    isPending,
    onClick: userId
      ? onClick
      : () => {
          console.log("You need to login to vote");
          router.push(Pages.LOGIN);
        },
    averageRating,
    canEdit,
    userId,
  };
};
