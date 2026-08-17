import Image from 'next/image';

export default function Banner({ title, subTitle, image, imageAlt }) {
  return (
    <div className="flex flex-col-reverse items-center min-[768px]:flex-row min-[768px]:items-end">
      <div className="flex-1 text-center min-[768px]:text-left">
        <h1 className="text-[2.2rem] font-light min-[450px]:text-[3.5rem] min-[600px]:text-[4rem]">
          {title}
        </h1>
        <p className="text-[1.2rem] font-medium text-[#999] min-[450px]:text-[1.7rem] min-[600px]:text-[2.2rem]">
          {subTitle}
        </p>
      </div>
      {image && (
        <Image
          src={image}
          alt={imageAlt || ''}
          width={520}
          height={520}
          priority
          className="w-[22rem] min-[450px]:w-[26rem]"
        />
      )}
    </div>
  );
}
