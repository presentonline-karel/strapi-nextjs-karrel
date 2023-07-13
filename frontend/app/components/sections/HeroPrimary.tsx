// Next.js
import Image from "next/image";
import Link from "next/link";

// Utils
import { renderButtonStyle } from "@/utils/render-button-style";
import { getStrapiMedia } from "@/utils/fetcher";

// Types
import { HeroProps } from "@/types/sections/Hero";
import { Button } from "@/types/Button";



export default function HeroPrimary({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.image.data.attributes.url);

  return (
    <div className="Hero-Primary section / pt-[136px] bg-neutrals-100 relative z-0 / sm:pt-40 / md:pt-[104px] md:pb-0 / lg:pt-[121px] / xl:pt-[144px]">
      <div className="Container / flex flex-col gap-10 px-4 / sm:px-12 sm:gap-16 / md:p-0 md:flex-row md:gap-12 md:items-center / lg:gap-[102px] / xl:border-x-[0.4px] xl:border-neutrals-400 xl:max-w-[1440px] xl:mx-auto">
        <div className="Text / md:w-1/2 md:pl-12 / lg:pl-[120px]">
          <div className="section__label">{data.label}</div>
          <h1 className="h h1">{data.title}</h1>
          <p className="p / mb-6 / xl:mb-10">{data.text}</p>

          <div className="Buttons / flex items-center gap-2 / xl:gap-4">
            {data.buttons.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                className={renderButtonStyle(button.type)}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>

        <div className="Image / relative w-full aspect-square z-0 / md:w-1/2 md:h-[calc(100vh-104.5px)] md:max-h-[880px] / lg:h-[calc(100vh-121px)]">
          <Image
            src={imgUrl || ""}
            alt={data.image.data.attributes.alternativeText || "none provided"}
            className="object-cover rounded border-[0.4px] border-neutrals-400 shadow-card / md:shadow-none md:border-t-0 md:rounded-none"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}