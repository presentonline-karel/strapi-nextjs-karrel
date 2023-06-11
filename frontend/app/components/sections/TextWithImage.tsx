// Next.js
import Link from "next/link";
import Image from "next/image";

// Utils
import { renderButtonStyle } from "@/utils/render-button-style";
import { getStrapiMedia } from "@/utils/fetcher";

// Types
import { TextImageProps } from "@/types/sections/TextImage";
import { Button } from "@/types/Button";



export default function TextWithImage({ data }: TextImageProps) {
  const imgUrl = getStrapiMedia(data.image.data.attributes.url);

  return (
    <div className="TextWithImage section / bg-neutrals-100 / lg:p-0">
      <div className="Container / px-4 flex flex-col gap-10 / sm:px-12 / md:flex-row-reverse md:items-center md:gap-12 / lg:p-[120px] lg:gap-[102px] / xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-400">
        <div className="Text / xl:w-[510px]">
          <div className="section__label">{data.label}</div>
          <h2 className="h h2 / mb-4 / xl:mb-6">{data.title}</h2>
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

        <div className="Image / relative w-full aspect-[3/2] overflow-hidden rounded border-[0.4px] border-neutrals-400 shadow-card / md:aspect-square / xl:w-[588px]">
          <Image
            src={imgUrl || ""}
            alt={data.image.data.attributes.alternativeText || "none provided"}
            fill={true}
            className="object-cover z-0"
          />
        </div>
      </div>
    </div>
  );
}
