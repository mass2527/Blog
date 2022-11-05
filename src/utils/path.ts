import path from 'path';

const contentsPath = `${process.cwd()}/src/contents`;

export const getContentPath = (content: 'blog' | 'snippet') => {
  return path.join(contentsPath, content);
};

export const removeMDXFileExtension = (fileName: string) => {
  return fileName.replace('.mdx', '');
};
