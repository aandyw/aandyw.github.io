import { getAllContent, getContentBySlug, getContentSlugs } from './content';

export interface Post {
  slug: string
  title: string
  date: string
  description?: string
  content: string
  readingTime: string
  tags: string[]
}

export function getAllPosts(): Post[] {
  const posts = getAllContent('posts') as any as Post[];
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  return getContentBySlug('posts', slug) as Post | null;
}

export function getPostSlugs(): string[] {
  return getContentSlugs('posts');
}