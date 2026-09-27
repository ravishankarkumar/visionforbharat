import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context: { site?: URL }) {
  const proposals = (await getCollection('proposals', ({ data }) => !data.draft))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site ?? new URL('https://visionforbharat.com'),
    items: proposals.map((proposal) => ({
      title: proposal.data.title,
      description: proposal.data.summary,
      pubDate: proposal.data.publishedAt,
      link: `/ideas/${proposal.id}/`,
    })),
  });
}
