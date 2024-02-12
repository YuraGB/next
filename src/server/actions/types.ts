// Type definitions for the Prisma schema
// Path: prisma/schema.prisma
import { type CategoryTale, type Tale } from "@prisma/client";
import { type Comment, Prisma, type Rating, type Image } from ".prisma/client";
import CategoryTale$talesArgs = Prisma.CategoryTale$talesArgs;
import Rating$TaleArgs = Prisma.Rating$TaleArgs;
import validator = Prisma.validator;
import { type Record } from "@prisma/client/runtime/library";

// TaleWithRelations is a type that extends the Tale type with the relations
const talesWithRelations = validator<CategoryTale$talesArgs[] | Rating$TaleArgs>()({
  include: {
    categoryTale: true,
    rating: true,
    mainImage: true,
    comments: true,
  },
});

export type TaleWithRelations = Tale & Prisma.TaleGetPayload<typeof talesWithRelations>;
// End of TaleWithRelations

// -----------------------------------

// CommentWithAuthor is a type that extends the Comment type with the relations
const commentWithAuthor = Prisma.validator<Prisma.User$commentsArgs>()({
  include: {
    user: true,
  },
});

export type CommentWithUser = Comment & Prisma.CommentGetPayload<typeof commentWithAuthor>;
// End of CommentWithAuthor

// -----------------------------------

export type TFindAllTales = Tale & {
  categoryTale: Pick<CategoryTale, "name" | "id">;
} & { rating: Rating | null } & { mainImage: Image };

// At the production the errors are overriden.
// The error messages are not returned to the client.
//It was decided to replace the error  with a generic message.
export type TErrorObject = {
  isError: boolean;
  errorCode: string;
  meta?: Record<string, unknown>;
  message: string;
};
