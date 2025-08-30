import { getAllContent } from './content';

export interface Publication {
  slug: string
  title: string
  authors: string[]
  journal: string
  date: string
  type: string
  url: string
  selected: boolean
}

export function getAllPublications(): Publication[] {
  return getAllContent('publications') as any as Publication[];
}

export function getSelectedPublications(): Publication[] {
  const allPubs = getAllPublications()
  return allPubs.filter(pub => pub.selected === true)
}