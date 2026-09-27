export const SITE_TITLE = 'Vision for Bharat, 2075';
export const SITE_DESCRIPTION =
  'A quiet, long-term journal of constructive ideas and policy proposals for India’s future.';
export const SITE_URL = 'https://visionforbharat.com';

export const STATUS_LABELS = {
  seed: 'Seed idea',
  draft: 'Working draft',
  developed: 'Developed proposal',
  revised: 'Revised proposal',
} as const;

export function topicSlug(topic: string) {
  return topic
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
