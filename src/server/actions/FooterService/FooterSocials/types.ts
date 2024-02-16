import { type Prisma } from ".prisma/client";
import { z } from "zod";

export type SocialLinks = Prisma.FooterSocialsGetPayload<{
  include: {
    socials: true;
  };
}>;

export const socialLinkSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export type TSocialLink = z.infer<typeof socialLinkSchema>;
