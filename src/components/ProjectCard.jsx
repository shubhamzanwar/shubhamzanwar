import { StarIcon, CircleIcon } from './Icons';

export default function ProjectCard({
  title,
  description,
  showDetails,
  starCount,
  primaryLanguage,
  languageColor,
  link,
}) {
  return (
    <div className="flex min-h-[9.5rem] flex-1 flex-col bg-[#F4F4F4] p-4">
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-inherit">
        <div className="mb-3 text-[1.2rem] font-medium">{title}</div>
      </a>
      <div className="flex flex-1 flex-col justify-between">
        <div>{description}</div>
        {showDetails && (
          <div className="mt-4 flex justify-between">
            <span>
              {starCount} <StarIcon />
            </span>
            <span>
              <CircleIcon style={{ color: languageColor }} /> {primaryLanguage}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
