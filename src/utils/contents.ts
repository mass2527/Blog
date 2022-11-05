import fs from 'fs';

import { Frontmatter } from './bundle';
import { getContentPath, removeMDXFileExtension } from './path';

// blog
const blogPath = getContentPath('blog');
export const blogFiles = fs.readdirSync(blogPath);
export const blogSlugs = blogFiles.map(removeMDXFileExtension);

export interface BlogFrontmatter extends Frontmatter {
  summary: string;
  published: boolean;
}

// snippet
const snippetPath = getContentPath('snippet');
export const snippetFiles = fs.readdirSync(snippetPath);
export const getFormattedCategory = (category: string) => category.toLowerCase().replace(/\s/g, '-');

export interface SnippetFrontmatter extends Frontmatter {
  description: string;
  lastUpdated: boolean;
}
