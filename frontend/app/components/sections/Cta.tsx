// Next.js
import Link from "next/link";

// Utils
import { renderButtonStyle } from "@/utils/render-button-style";

// Types
import { CtaProps } from "@/types/sections/Cta";
import { Button } from "@/types/Button";



export default function Cta({ data }: CtaProps) {
  return (
    <div className={`Cta / ${data.greyBgColor ? "md:bg-neutrals-200" : "md:bg-neutrals-100"}`}>
      <div className="Container / md:px-12 md:py-14 / lg:p-[120px] / xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-400">
        <div className="Content / bg-prim-500 px-4 py-12 flex flex-col gap-6 / sm:px-12 / md:flex-row md:justify-between md:items-end md:rounded md:bg-prim-100 md:border-[0.4px] md:border-neutrals-400 md:shadow-card">
          <div className="Text / md:max-w-[586px]">
            <h3 className="h h3 / mb-3 / xl:mb-4 xl:text-3xl leading-10">{data.title}</h3>
            <p className="p / text-neutrals-1100 / md:text-neutrals-800">{data.text}</p>
          </div>

          <div className="Buttons / flex items-center gap-2 / xl:gap-4">
            {data.buttons.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                className={`${renderButtonStyle(button.type)} border-[1px] border-neutrals-1100 / md:border-0`}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
