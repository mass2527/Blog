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

// project
const projectPath = getContentPath('project');
export const projectFiles = fs.readdirSync(projectPath);
export const getFormattedCategory = (category: string) => category.toLowerCase().replace(/\s/g, '-');

export interface ProjectFrontmatter extends Frontmatter {
  description: string;
  lastUpdated: boolean;
  category: string;
}
