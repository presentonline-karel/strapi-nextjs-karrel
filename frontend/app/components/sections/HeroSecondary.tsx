// Next.js
import Image from "next/image";
import Link from "next/link";



export default function HeroSecondary() {
  return (
    <div className="Hero-Secondary / bg-neutrals-100 py-14 / md:py-16 / lg:p-0">
      <div className="Container / px-4 flex flex-col gap-10 / sm:px-12 sm:gap-16 / md:flex-row md:gap-12 md:items-center / lg:gap-16 lg:px-[120px] lg:pt-14 lg:pb-[120px] / xl:gap-[102px] xl:border-x-[0.4px] xl:border-neutrals-400 xl:max-w-[1440px] xl:mx-auto">
        <div className="Text / lg:w-[calc(100%-486px)] / xl:w-[calc(100%-588px)]">
          <div className="section__label">A little bit more</div>
          <h1 className="h h1 / mb-4 / xl:mb-6">About me</h1>
          <p className="p / mb-6 / xl:mb-10">
            Mauris consectetur magna dictum libero porta, et venenatis tortor
            posuere. Class aptent taciti sociosqu ad litora torquent perconubia.
          </p>
          <Link
            href={`#`}
            className="btn btn--primary"
          >
            Contact me
          </Link>
        </div>

        <div className="Image / relative w-full aspect-[3/2] z-0 inset-0 overflow-hidden rounded border-[0.4px] border-neutrals-400 shadow-card / md:aspect-square / lg:w-[486px] / xl:w-[588px]">
          <Image
            src="/Karrel-Aboutt-Hero-Img.jpg"
            className="block w-full h-full object-cover p-0 m-0 inset-0"
            alt="About hero image"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}
