"server-only";

import { createIntl } from "@formatjs/intl";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function getIntl(locale = "en") {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
  const messages = (await import(`@/i18n/${locale}.json`)).default;
  return createIntl({
    locale,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    messages,
    onError: (e) => {
      console.log(e);
    },
  });
}
