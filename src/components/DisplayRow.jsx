import Link from 'next/link';
import { ArrowRightIcon } from './Icons';

export default function DisplayRow({ title, viewMoreText, viewMoreLink, children }) {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-medium min-[450px]:text-[2rem]">{title}</h2>
      <div className="flex flex-col gap-8 py-8 min-[600px]:flex-row">{children}</div>
      <div className="flex justify-end">
        <Link href={viewMoreLink} className="text-black no-underline">
          {viewMoreText} <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
