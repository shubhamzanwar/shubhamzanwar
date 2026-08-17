import Alert from '@/components/Alert';
import Banner from '@/components/Banner';
import BlogCard from '@/components/BlogCard';
import DisplayRow from '@/components/DisplayRow';
import Divider from '@/components/Divider';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/constants/projects.json';
import externalBlogs from '@/constants/blogs.json';
import { getNativeBlogs } from '@/lib/posts';
import homeBanner from '../../public/images/home.png';

const intro = {
  living: (
    <>
      I’m an Indian software developer currently living in{' '}
      <a href="https://goo.gl/maps/KKJPp9zt7VAz8Crb7" target="_blank" rel="noopener noreferrer">
        Stockholm, Sweden
      </a>
      . I’ve been designing and developing solutions since 2018
    </>
  ),
  working: (
    <>
      I currently work at <a href="https://mimohq.com">Mimo</a> where we help our clients simplify
      the invoice paying and getting paid experience
    </>
  ),
  learning: (
    <>
      I love learning and experimenting in my free time. I also actively contribute to{' '}
      <a href="https://github.com/shubhamzanwar" target="_blank" rel="noopener noreferrer">
        open source projects
      </a>{' '}
      and maintain a{' '}
      <a href="https://medium.com/@zanwar.shubham" target="_blank" rel="noopener noreferrer">
        blog
      </a>{' '}
      to document my learnings
    </>
  ),
};

export default function HomePage() {
  const blogs = [...getNativeBlogs(), ...externalBlogs].slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex-1">
      <Banner
        title="Hi, I'm Shubham Zanwar"
        subTitle="A full stack software development engineer"
        image={homeBanner}
      />

      <div className="mt-8 hidden gap-16 text-[1.3rem] font-normal text-[#222222] min-[600px]:mt-12 min-[600px]:flex [&_a]:underline">
        <div className="flex-1">{intro.living}</div>
        <div className="flex-1">{intro.working}</div>
        <div className="flex-1">{intro.learning}</div>
      </div>
      <div className="mt-8 text-base font-normal text-[#222222] min-[600px]:hidden [&_a]:underline">
        {intro.living} {intro.working} {intro.learning}
      </div>

      <Divider />

      <Alert type="primary">
        If you would like to chat, you can reach out to me on{' '}
        <a href="https://twitter.com/szanwar22" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>{' '}
        or even <a href="mailto:zanwar.shubham@gmail.com">send me an email</a>
      </Alert>

      <DisplayRow
        title="Check out some of my work!"
        viewMoreText="view more cool stuff"
        viewMoreLink="/projects"
      >
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name}
            description={project.description}
            languageColor={project.primaryLanguage.color}
            primaryLanguage={project.primaryLanguage.name}
            starCount={project.stargazers}
            showDetails
            link={project.url}
          />
        ))}
      </DisplayRow>

      <Alert type="warning">
        You can also find my skills and project work documented in my resume.{' '}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download now
        </a>
      </Alert>

      <Divider />

      <DisplayRow
        title="Read some of my thoughts!"
        viewMoreText="read more cool stuff"
        viewMoreLink="/blog"
      >
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
      </DisplayRow>

      <Divider />
    </div>
  );
}
