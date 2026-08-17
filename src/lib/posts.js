import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';

const CONTENT_DIR = path.join(process.cwd(), 'content');

const getTimeToRead = (markdown) => {
  const words = markdown.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

export const getAllPosts = () => {
  const posts = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8');
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title,
        subTitle: data.subTitle,
        coverImage: data.coverImage,
        coverCredit: data.coverCredit,
        date: format(data.date, 'dd MMM yyyy'),
        timestamp: new Date(data.date).getTime(),
        timeToRead: getTimeToRead(content),
      };
    });

  return posts.sort((a, b) => b.timestamp - a.timestamp);
};

// blogs hosted on this website are called native
export const getNativeBlogs = () =>
  getAllPosts().map((post) => ({
    id: post.slug,
    title: post.title,
    link: `/blog/${post.slug}/`,
    date: post.date,
    image: post.coverImage,
    native: true,
  }));

export const getPostBySlug = async (slug) => {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.md`), 'utf-8');
  const { data, content } = matter(raw);

  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    title: data.title,
    subTitle: data.subTitle,
    coverImage: data.coverImage,
    coverCredit: data.coverCredit,
    date: format(data.date, 'dd MMM yyyy'),
    timeToRead: getTimeToRead(content),
    content: String(html),
  };
};

export const getCoffeeCount = (readTime) => {
  if (readTime < 5) {
    return '☕️';
  }
  if (readTime < 10) {
    return '☕️☕️';
  }
  if (readTime < 20) {
    return '☕️☕️☕️';
  }
  return '☕️☕️☕️☕️';
};
