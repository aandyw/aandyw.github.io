import { getAllContent, getContentBySlug, getContentSlugs } from './content';

export interface Project {
  slug: string
  title: string
  description: string
  image: string
  date: string
  tags: string[]
  content: string
}

export function getAllProjects(): Project[] {
  const projects = getAllContent('projects') as any as Project[];
  return projects.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getProjectBySlug(slug: string): Project | null {
  return getContentBySlug('projects', slug) as Project | null;
}

export function getProjectSlugs(): string[] {
  return getContentSlugs('projects');
}
