// Next.js
import Image from "next/image";
import Link from "next/link";

// Utils
import { renderButtonStyle } from "@/utils/render-button-style";
import { getStrapiMedia } from "@/utils/fetcher";

// Types
import { HeroProps } from "@/types/sections/Hero";
import { Button } from "@/types/Button";



export default function HeroSecondary({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.image.data.attributes.url);

  return (
    <div className="Hero-Secondary / bg-neutrals-100 pb-14 pt-[136px] relative z-0 / sm:pt-40 / md:pb-16 md:pt-40 / lg:p-0">
      <div className="Container / px-4 flex flex-col gap-10 / sm:px-12 sm:gap-16 / md:flex-row md:gap-12 md:items-center / lg:gap-16 lg:px-[120px] lg:pt-[177px] lg:pb-[120px] / xl:gap-[102px] xl:border-x-[0.4px] xl:border-neutrals-400 xl:max-w-[1440px] xl:mx-auto xl:pt-[200px]">
        <div className="Text / lg:w-[calc(100%-486px)] / xl:w-[calc(100%-588px)]">
          <div className="section__label">{data.label}</div>
          <h1 className="h h1 / mb-4 / xl:mb-6">{data.title}</h1>
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

        <div className="Image / relative w-full aspect-[3/2] z-0 inset-0 overflow-hidden rounded border-[0.4px] border-neutrals-400 shadow-card / md:aspect-square / lg:w-[486px] / xl:w-[588px]">
          <Image
            src={imgUrl || ""}
            alt={data.image.data.attributes.alternativeText || "none provided"}
            className="block w-full h-full object-cover p-0 m-0 inset-0"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
