import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-br", "en-us"],
  defaultLocale: "pt-br",
  localePrefix: "always",
});

export type AppLocale = (typeof routing.locales)[number];
