import { getAllContent } from "./content";

export interface Publication {
  slug: string;
  title: string;
  authors: string[];
  journal: string;
  date: string;
  type: string;
  url: string;
}

export function getAllPublications(): Publication[] {
  return getAllContent<Publication>("publications");
}
