// Next.js
import Image from "next/image";
import Link from "next/link";

// FontAwesome
import { faPen, faArrowRight, faKeyboard, faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Skills() {
  return (
    <div className="Skills / py-14 bg-neutrals-200 / lg:py-0">
      <div className="Container / px-4 / sm:px-12 / lg:p-[120px] / xl:border-x-[0.4px] xl:border-neutrals-400 xl:max-w-[1440px] xl:mx-auto">
        <div className="Heading / mb-10 / md:text-center / lg:mb-16 / xl:mb-20">
          <div className="section__label">Find my</div>
          <h2 className="h h2 / mb-4 / md:max-w-[792px] md:mx-auto / xl:mb-6">Skills listed below</h2>
          <p className="p / md:max-w-[792px] md:mx-auto">Mauris consectetur magna dictum libero porta, et venenatis tortor posuere. Class aptent taciti sociosqu ad litora torquent per conubia.</p>
        </div>

        <div className="Skills / flex flex-col gap-6 / md:flex-row">
          <div className="Skill / py-5 px-4 bg-neutrals-100 border-[0.4px] border-neutrals-400 rounded shadow-card">
            <div className="Content /">
              <div className="Heading / flex gap-3 justify-start items-baseline mb-4 / xl:gap-4 xl:mb-5">
                <FontAwesomeIcon icon={faPen} className="text-sm leading-[22px] text-prim-500 / xl:text-lg xl:leading-8" />
                <h3 className="h h3 / xl:text-3xl">Web design</h3>
              </div>

              <p className="p / mb-5 / xl:text-base xl:mb-8">
                Mauris consectetur magna dictum libero porta, et venenatis tortor posuere. Class aptent taciti sociosqu ad.
              </p>

              <Link href={`#`} className="Link / flex items-center gap-2 text-neutrals-1100 font-headings text-base leading-6 font-semibold tracking-tight">
                Read more 
                <FontAwesomeIcon icon={faArrowRight} className="text-sm leading-6 text-prim-500" />
              </Link>
            </div>
          </div>

          <div className="Skill / py-5 px-4 bg-neutrals-100 border-[0.4px] border-neutrals-400 rounded shadow-card">
            <div className="Content /">
              <div className="Heading / flex gap-3 justify-start items-baseline mb-4 / xl:gap-4 xl:mb-5">
                <FontAwesomeIcon icon={faKeyboard} className="text-sm leading-[22px] text-prim-500  / xl:text-lg xl:leading-8" />
                <h3 className="h h3 / xl:text-3xl">Web development</h3>
              </div>

              <p className="p / mb-5 / xl:text-base xl:mb-8">
                Mauris consectetur magna dictum libero porta, et venenatis tortor posuere. Class aptent taciti sociosqu ad.
              </p>

              <Link href={`#`} className="Link / flex items-center gap-2 text-neutrals-1100 font-headings text-base leading-6 font-semibold tracking-tight">
                Read more 
                <FontAwesomeIcon icon={faArrowRight} className="text-sm leading-6 text-prim-500" />
              </Link>
            </div>
          </div>

          <div className="Skill / py-5 px-4 bg-neutrals-100 border-[0.4px] border-neutrals-400 rounded shadow-card">
            <div className="Content /">
              <div className="Heading / flex gap-3 justify-start items-baseline mb-4 / xl:gap-4 xl:mb-5">
                <FontAwesomeIcon icon={faCamera} className="text-sm leading-[22px] text-prim-500 / xl:text-lg xl:leading-8" />
                <h3 className="h h3 / xl:text-3xl">Photography</h3>
              </div>

              <p className="p / mb-5 / xl:text-base xl:mb-8">
                Mauris consectetur magna dictum libero porta, et venenatis tortor posuere. Class aptent taciti sociosqu ad.
              </p>

              <Link href={`#`} className="Link / flex items-center gap-2 text-neutrals-1100 font-headings text-base leading-6 font-semibold tracking-tight">
                Read more 
                <FontAwesomeIcon icon={faArrowRight} className="text-sm leading-6 text-prim-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
