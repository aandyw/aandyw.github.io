import { getAllContent, getContentBySlug, getContentSlugs } from './content';

export interface Publication {
  slug: string
  title: string
  authors: string[]
  journal: string
  date: string
  type: string
  url: string
  selected: boolean
  [key: string]: any
}

export function getAllPublications(): Publication[] {
  return getAllContent('publications') as any as Publication[];
}

export function getSelectedPublications(): Publication[] {
  const allPubs = getAllPublications()
  return allPubs.filter(pub => pub.selected === true)
}

export function getPublicationBySlug(slug: string): Publication | null {
  return getContentBySlug('publications', slug) as Publication | null;
}

export function getPublicationSlugs(): string[] {
  return getContentSlugs('publications');
}