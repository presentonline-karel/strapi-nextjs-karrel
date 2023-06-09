// Next.js
import Image from "next/image";
import Link from "next/link";



// Types
interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface HeroPrimaryProps {
  data: {
    id: string;
    label: string;
    title: string;
    text: string;
    buttons: Button[];
    image: Picture;
  };
}



export default function HeroPrimary({ data }: HeroPrimaryProps) {
  return (
    <div className="Hero-Primary section / bg-neutrals-100 / md:py-0">
      <div className="Container / flex flex-col gap-10 px-4 / sm:px-12 sm:gap-16 / md:p-0 md:flex-row md:gap-12 md:items-center / lg:gap-[102px] / xl:border-x-[0.4px] xl:border-neutrals-400 xl:max-w-[1440px] xl:mx-auto">
        <div className="Text / md:w-1/2 md:pl-12 / lg:pl-[120px]">
          <div className="section__label">{data.label}</div>
          <h1 className="h h1">{data.title}</h1>
          <p className="p / mb-6 / xl:mb-10">{data.text}</p>
          <Link
            href={`#`}
            className="btn btn--primary"
          >
            Read my blog
          </Link>
        </div>

        <div className="Image / relative w-full aspect-square z-0 / md:w-1/2 md:h-[calc(100vh-104.5px)] md:max-h-[880px] / lg:h-[calc(100vh-121px)]">
          <Image
            src="/Karrel-Home-Hero-Img.jpg"
            className="object-cover rounded border-[0.4px] border-neutrals-400 shadow-card / md:shadow-none md:border-t-0 md:rounded-none"
            alt="Home hero image"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}