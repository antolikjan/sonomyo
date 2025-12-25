export type Lang = 'cs' | 'en';

export function getLangFromParams(
  params: Record<string, string | undefined>
): Lang {
  return params.lang === 'en' ? 'en' : 'cs';
}

export function localizePath(path: string, lang: Lang): string {
  return path === '/'
    ? `/${lang}`
    : `/${lang}${path}`;
}