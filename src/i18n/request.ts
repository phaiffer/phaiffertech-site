import { getRequestConfig } from "next-intl/server";
import { routing, type AppLocale } from "@/i18n/routing";

function hasLocale(locale: string): locale is AppLocale {
  return routing.locales.includes(locale as AppLocale);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = requested && hasLocale(requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
