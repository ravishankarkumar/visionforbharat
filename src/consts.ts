export const SITE_TITLE = 'Vision for Bharat, 2075';
export const SITE_DESCRIPTION =
  'A personal, long-view collection of ideas and essays about India’s future.';
export const SITE_URL = 'https://visionforbharat.com';

export const EDITORIAL_FORMAT_LABELS = {
  note: 'Spark',
  essay: 'Deep dive',
} as const;

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
