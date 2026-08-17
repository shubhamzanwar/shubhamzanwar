import Alert from '@/components/Alert';
import Banner from '@/components/Banner';
import BlogCard from '@/components/BlogCard';
import Divider from '@/components/Divider';
import externalBlogs from '@/constants/blogs.json';
import { getNativeBlogs } from '@/lib/posts';
import blogBanner from '../../../public/images/blog.png';

export const metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  const blogs = [...getNativeBlogs(), ...externalBlogs];

  return (
    <div className="flex-1">
      <Banner title="Hey there!" subTitle="Here some thoughts that I published" image={blogBanner} />

      <div className="mt-12">
        <Alert type="info">
          I recently shifted my blog to this website. You can find my older posts on{' '}
          <a href="https://github.com/shubhamzanwar" target="_blank" rel="noopener noreferrer">
            medium
          </a>{' '}
          and{' '}
          <a href="https://dev.to/shubhamzanwar" target="_blank" rel="noopener noreferrer">
            Dev.to
          </a>
          .
        </Alert>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 min-[600px]:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            date={blog.date}
            image={blog.image}
            link={blog.link}
            native={blog.native}
          />
        ))}
      </div>

      <Divider />
    </div>
  );
}
