export type ViewState = 'BOOT' | 'HERO' | 'ARTWORKS' | 'CODING' | 'WRITING';

export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'VENTURE' | 'SIDE_PROJECT' | 'FREELANCE';
  tech: string[];
  image?: string;
  logo?: string;
  startDate?: string;
  gallery?: string[];
  link?: string;
  longDescription?: string;
}

export interface WritingWork {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Full content for the reader view
  type: 'BOOK' | 'POETRY';
  year: string;
}

export interface Artwork {
  id: string;
  title: string;
  url: string;
}