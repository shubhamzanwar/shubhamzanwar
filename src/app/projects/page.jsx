import Alert from '@/components/Alert';
import Banner from '@/components/Banner';
import Divider from '@/components/Divider';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/constants/projects.json';
import projectsBanner from '../../../public/images/projects.png';

export const metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  return (
    <div className="flex-1">
      <Banner title="Hey there!" subTitle="Here is what I’ve been working on" image={projectsBanner} />

      <div className="mt-12">
        <Alert type="success">
          Most of these projects are available on{' '}
          <a href="https://github.com/shubhamzanwar" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          . You can also find them all in{' '}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            my resume
          </a>
        </Alert>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 min-[600px]:grid-cols-3">
        {projects.map((project) => (
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
      </div>

      <Divider />
    </div>
  );
}
