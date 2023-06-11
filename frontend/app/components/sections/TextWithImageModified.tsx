// Next.js
import Link from "next/link";
import Image from "next/image";

// Utils
import { renderButtonStyle } from "@/utils/render-button-style";
import { getStrapiMedia } from "@/utils/fetcher";

// Types
import { TextImageModifiedProps } from "@/types/sections/TextImageModified";
import { Button } from "@/types/Button";



export default function TextWithImageModified({ data }: TextImageModifiedProps) {
  const imgUrl = getStrapiMedia(data.image.data.attributes.url);

  return (
    <div className="TextWithImage section / bg-neutrals-100 / lg:p-0">
      <div className="Container / px-4 flex flex-col gap-10 / sm:px-12 / md:flex-row-reverse md:items-center md:gap-12 md:justify-end / lg:p-[120px] lg:gap-[102px] / xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-400">
        <div className="Text / xl:max-w-[510px]">
          <div className="section__label">{data.label}</div>
          <h2 className="h h2 / mb-4 / xl:mb-6 ">{data.title}</h2>
          <p className="p mb-6 / xl:mb-10">{data.text}</p>

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

        <div className="Image / relative w-full aspect-square overflow-hidden rounded border-[0.4px] border-neutrals-400 shadow-card / xl:w-[486px]">
          <Image
            src={imgUrl || ""}
            alt={data.image.data.attributes.alternativeText || "none provided"}
            fill={true}
            className="image-gradient / object-cover z-0"
          />

          <div className="absolute w-full h-full z-2 bg-gradient-to-b from-transparent from-25% to-neutrals-1200 opacity-100" />

          <h5 className="h h5 / absolute bottom-8 left-8 text-neutrals-100 z-1 opacity-100">{data.caption}</h5>
        </div>
      </div>
    </div>
  );
}
