import { type Prisma } from ".prisma/client";
import { z } from "zod";

export type FooterSocialLinks = Prisma.FooterSocialsGetPayload<{
  include: {
    socials: true;
  };
}>;

export const socialLinkSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export type TSocialLink = z.infer<typeof socialLinkSchema>;

export type SocialNames = "Facebook" | "Instagram" | "Twitter" | "Google";
