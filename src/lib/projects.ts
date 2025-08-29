import { getAllContent, getContentBySlug, getContentSlugs } from './content';

export interface Project {
  slug: string
  title: string
  description: string
  image: string
  category: string
  date: string
  tags: string[]
  url: string
  featured: boolean
  content: string
  [key: string]: any
}

export function getAllProjects(): Project[] {
  return getAllContent('projects') as any as Project[];
}

export function getFeaturedProjects(): Project[] {
  const allProjects = getAllProjects()
  return allProjects.filter(project => project.featured === true)
}

export function getProjectsByCategory(category: string): Project[] {
  const allProjects = getAllProjects()
  return allProjects.filter(project => project.category === category)
}

export function getProjectBySlug(slug: string): Project | null {
  return getContentBySlug('projects', slug) as Project | null;
}

export function getProjectSlugs(): string[] {
  return getContentSlugs('projects');
}

export function getProjectCategories(): string[] {
  const allProjects = getAllProjects()
  const categories = [...new Set(allProjects.map(project => project.category))]
  return categories.sort()
}
