export function withBase(path: string): string {
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('#')
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}` || '/';
}

export function externalUrl(url: string): string {
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('mailto:') ||
    url.startsWith('#')
  ) {
    return url;
  }

  return `https://${url}`;
}
