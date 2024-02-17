import { z } from "zod";
import { type FooterNavigation, type FooterNavLink } from ".prisma/client";

export const footerNavigationSchema = z.object({
  navLinks: z.array(
    z.object({
      name: z.string({
        required_error: "Title is required",
        invalid_type_error: "Title must be a string",
      }),
      url: z.string({
        required_error: "URL is required",
        invalid_type_error: "URL must be a string",
      }),
    })
  ),
});

export type TFooterNavigationSchema = z.infer<typeof footerNavigationSchema>;

export type TFooterNavWithLinks = FooterNavigation & { navLinks: FooterNavLink[] };
