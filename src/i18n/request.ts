import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing'; // tu configuración de locales

export default getRequestConfig(async ({ requestLocale }) => {
  const localeValue = await requestLocale;
  const locale =
    localeValue &&
    routing.locales.includes(localeValue as typeof routing.locales[number])
      ? (localeValue as typeof routing.locales[number])
      : routing.defaultLocale;

  return {
    locale: String(locale),
    messages: (await import(`../messages/${locale}.json`)).default
  };
});