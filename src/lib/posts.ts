import { getAllContent, getContentBySlug, getContentSlugs } from './content';

export interface Post {
  slug: string
  title: string
  date: string
  excerpt?: string
  content: string
  readingTime: string
  [key: string]: any
}

export function getAllPosts(): Post[] {
  return getAllContent('posts') as any as Post[];
}

export function getPostBySlug(slug: string): Post | null {
  return getContentBySlug('posts', slug) as Post | null;
}

export function getPostSlugs(): string[] {
  return getContentSlugs('posts');
}