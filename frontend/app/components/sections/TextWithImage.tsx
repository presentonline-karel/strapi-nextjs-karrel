import Link from "next/link";
import Image from "next/image";

export default function TextWithImage() {
  return (
    <div className="TextWithImage section / bg-neutrals-100 / lg:p-0">
      <div className="Container / px-4 flex flex-col gap-10 / sm:px-12 / md:flex-row-reverse md:items-center md:gap-12 / lg:p-[120px] lg:gap-[102px] / xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-400">
        <div className="Text / xl:w-[510px]">
          <div className="section__label">What I'm up to</div>
          <h2 className="h h2 / mb-4 / xl:mb-6">
            I'm always looking for the next big thing.
          </h2>
          <p className="p mb-6 / xl:mb-10">
            Mauris consectetur magna dictum libero porta, et venenatis tortor
            posuere. Class aptent taciti sociosqu ad litora torquent per
            conubia.
          </p>
          <Link
            href={`#`}
            className="btn btn--primary"
          >
            Read my blog
          </Link>
        </div>

        <div className="Image / relative w-full aspect-[3/2] overflow-hidden rounded border-[0.4px] border-neutrals-400 shadow-card / md:aspect-square / xl:w-[588px]">
          <Image
            src="/Karrel-Home-TextWithImage.jpg"
            alt="Karrel image"
            fill={true}
            className="object-cover z-0"
          />
        </div>
      </div>
    </div>
  );
}
