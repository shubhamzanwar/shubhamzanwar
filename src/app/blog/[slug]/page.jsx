import Image from 'next/image';
import Divider from '@/components/Divider';
import DisqusComments from '@/components/DisqusComments';
import SocialIcon from '@/components/SocialIcon';
import profileLinks from '@/constants/profileLinks.json';
import { getAllPosts, getPostBySlug, getCoffeeCount } from '@/lib/posts';
import profilePicture from '../../../../public/images/profile-picture.png';

export const generateStaticParams = () =>
  getAllPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post.title,
    description: post.subTitle,
    openGraph: {
      title: post.title,
      description: post.subTitle,
      images: [`https://shubhamzanwar.com${post.coverImage}`],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@szanwar22',
      title: post.title,
      description: post.subTitle,
      images: [`https://shubhamzanwar.com${post.coverImage}`],
    },
  };
};

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article className="mx-auto w-full max-w-[836px] flex-1">
      <div className="mt-12">
        <h1 className="text-[2.2rem] font-medium">{post.title}</h1>
        <div className="my-3 mb-4 flex items-center border-y border-[#e5e5e5] py-4">
          <Image
            src={profilePicture}
            alt="shubham zanwar's mugshot"
            className="h-[50px] w-[50px] rounded-full min-[768px]:h-16 min-[768px]:w-16"
          />
          <div className="ml-4">
            <div className="text-[1.1rem] font-bold">
              <a href="/blog" className="text-black no-underline">
                Shubham Zanwar
              </a>
            </div>
            <div className="text-[#999]">
              Published on <strong>{post.date}</strong>
            </div>
            <div className="flex items-center">
              <SocialIcon iconType="twitter" link={profileLinks.twitter} />
              <SocialIcon iconType="github" link={profileLinks.github} />
              <div className="ml-1 text-[#999]">
                {getCoffeeCount(post.timeToRead)} {post.timeToRead} min read
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={post.coverImage} className="w-full" alt="" />
      {post.coverCredit && (
        <div
          className="mt-1 text-center text-base text-[#999] [&_a]:text-[#999]"
          dangerouslySetInnerHTML={{ __html: post.coverCredit }}
        />
      )}

      <div
        className="prose prose-lg mt-4 max-w-none prose-blockquote:not-italic prose-img:w-full"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <Divider />
      <DisqusComments
        identifier={post.title}
        url={`https://shubhamzanwar.com/blog/${post.slug}/`}
      />
      <Divider />
    </article>
  );
}
