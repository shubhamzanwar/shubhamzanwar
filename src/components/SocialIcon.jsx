import { GithubIcon, TwitterIcon } from './Icons';

const icons = {
  github: GithubIcon,
  twitter: TwitterIcon,
};

export default function SocialIcon({ iconType, link }) {
  const Icon = icons[iconType];
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Icon className="mr-1 text-[#999]" />
    </a>
  );
}
