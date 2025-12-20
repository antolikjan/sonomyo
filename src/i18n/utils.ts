export type Lang = 'cs' | 'en';

export function getLangFromUrl(pathname: string): Lang {
  // Works for /en/... and /... (default)
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'cs';
}

export function stripLangFromPath(pathname: string): string {
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) return pathname.replace('/en', '');
  return pathname;
}

export function localizePath(path: string, lang: Lang): string {
  // path should start with "/"
  if (lang === 'cs') return path;
  return path === '/' ? '/en' : `/en${path}`;
}
