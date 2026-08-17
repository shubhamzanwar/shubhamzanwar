export default function BlogCard({ image, title, date, link, native = false }) {
  return (
    <div className="group flex min-h-[18rem] flex-1 flex-col bg-[#F4F4F4]">
      <a
        href={link}
        target={native ? undefined : '_blank'}
        rel={native ? undefined : 'noopener noreferrer'}
        className="flex flex-1 flex-col text-inherit no-underline"
      >
        <div
          className="h-[12.5rem] bg-center bg-[length:100%] bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:110%]"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="flex flex-1 flex-col justify-between p-4">
          <div className="mb-3 text-[1.2rem] font-medium">{title}</div>
          <div className="mt-4 text-[0.8rem] italic text-[#999]">Published {date}</div>
        </div>
      </a>
    </div>
  );
}
