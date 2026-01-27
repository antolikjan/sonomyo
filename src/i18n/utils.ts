export type Lang = 'cs' | 'en';

export function getLangFromParams(
  params: Record<string, string | undefined>
): Lang {
  return params.lang === 'en' ? 'en' : 'cs';
}

export function localizePath(path: string, lang: Lang): string {
  // Do not localize external or special links
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:')
  ) {
    return path
  }

  // Normalize root
  if (path === '/') {
    return `/${lang}`
  }

  return `/${lang}${path}`
}
