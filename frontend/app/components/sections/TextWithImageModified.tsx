import Link from "next/link";
import Image from "next/image";

export default function TextWithImageModified() {
  return (
    <div className="TextWithImage section / bg-neutrals-100 / lg:p-0">
      <div className="Container / px-4 flex flex-col gap-10 / sm:px-12 / md:flex-row-reverse md:items-center md:gap-12 md:justify-end / lg:p-[120px] lg:gap-[102px] / xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-400">
        <div className="Text / xl:max-w-[510px]">
          <div className="section__label">A little bit more</div>
          <h2 className="h h2 / mb-4 / xl:mb-6 ">
            About me
          </h2>
          <p className="p mb-6 / xl:mb-10">
            Mauris consectetur magna dictum libero porta, et venenatis tortor
            posuere. Class aptent taciti sociosqu ad litora torquent per
            conubia.<br/><br/>

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

        <div className="Image / relative w-full aspect-square overflow-hidden rounded border-[0.4px] border-neutrals-400 shadow-card / xl:w-[486px]">
          <Image
            src="/Karrel-Home-TextWithImage.jpg"
            alt="Karrel image"
            fill={true}
            className="image-gradient / object-cover z-0"
          />

          <div className="absolute w-full h-full z-2 bg-gradient-to-b from-transparent from-25% to-neutrals-1200 opacity-100" />
          
          <h5 className="h h5 / absolute bottom-8 left-8 text-neutrals-100 z-1 opacity-100">Karrel.be | presentonline.be</h5>
        </div>
      </div>
    </div>
  );
}
