import { usePathname, useRouter } from "next/navigation";
import { useCurrentLocale } from "next-i18n-router/client";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { i18nConfig } from "../../../i18nConfig";
import { type ChangeEvent } from "react";

export const useLangSwitcher = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = useCurrentLocale(i18nConfig);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (currentLocale === i18nConfig.defaultLocale) {
      console.log(
        newLocale,
        i18nConfig.defaultLocale,
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
      if (newLocale === i18nConfig.defaultLocale) {
        router.push("/" + currentPathname.replace(`/${newLocale}`, ""));
      } else {
        // If the old locale is still in the pathname, replace it with the empty string
        router.push("/" + newLocale + currentPathname.replace(`/${i18nConfig.defaultLocale}`, ""));
      }
    } else {
      router.push(
        currentPathname.replace(
          `/${currentLocale}`,
          `${newLocale === i18nConfig.defaultLocale ? "" : "/" + newLocale}`
        )
      );
    }

    router.refresh();
  };

  return { handleChange, currentLocale };
};
