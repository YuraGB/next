// Type definitions for the Prisma schema
// Path: prisma/schema.prisma
import { CategoryTale, Prisma, Tale } from '@prisma/client'
import { Comment, Rating } from '.prisma/client'

// TaleWithRelations is a type that extends the Tale type with the relations
const talesWithRelations = Prisma.validator<
  Prisma.CategoryTale$talesArgs[] | Prisma.Rating$TaleArgs
>()({
  include: {
    categoryTale: true,
    rating: true,
    comments: {
      include: {
        user: true,
      },
    },
  },
})

export type TaleWithRelations = Tale &
  Prisma.TaleGetPayload<typeof talesWithRelations>
// End of TaleWithRelations

// -----------------------------------

// CommentWithAuthor is a type that extends the Comment type with the relations
const commentWithAuthor = Prisma.validator<Prisma.User$commentsArgs>()({
  include: {
    user: true,
  },
})

export type CommentWithUser = Comment &
  Prisma.CommentGetPayload<typeof commentWithAuthor>
// End of CommentWithAuthor

// -----------------------------------

export type TFindAllTales = Tale & {
  categoryTale: Pick<CategoryTale, 'name' | 'id'>
} & { rating: Rating | null }
