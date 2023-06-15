// React & Next.js
import Link from "next/link";
import Image from "next/image";

// FontAwesome
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import RelatedArticles from "@/app/components/sections/RelatedArticles";



export default function BlogDetailPage() {
  return (
    <>
      <section className="Article / py-14 / lg:pt-20 lg:pb-[120px] / xl:!py-0">
        <div className="Container / px-4 / sm:px-12 / md:px-0 md:max-w-[588px] md:mx-auto / xl:pt-20 xl:pb-[120px] xl:max-w-[1440px] xl:border-x-[0.4px] xl:border-neutrals-400 xl:px-[426px]">
          <div className="Details / flex items-center justify-between mb-10">
            <Link href={`/blog`} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faChevronLeft} className="text-xs leading-6 text-prim-600" />
              <span className="font-headings text-base leading-6 text-neutrals-1100 font-medium">Blog</span>
            </Link>

            <div className="Meta / flex items-center gap-4">
              <div className="Date / font-headings text-base leading-6 text-neutrals-800 font-medium">Mar 16, 2020</div>
              <div className="tag">Marketing</div>
            </div>
          </div>

          <article className="Body /">
            <div className="Heading / mb-10">
              <h1 className="h h1 / mb-4 / xl:text-6xl">How you can boost your conversion rate via our tips now</h1>
              <p className="Description p /">Mauris consectetur magna dictum libero porta, et venenatis tortor posuere. Class aptent taciti sociosqu ad litora torquent per conubia.</p>
            </div>

            <div className="Image / relative w-full aspect-[3/2] rounded overflow-hidden border-[0.4px] border-neutrals-400 shadow-card mb-10">
              <Image src="/Karrel-Aboutt-Hero-Img.jpg" alt="Test" fill={true} className="object-cover" />
            </div>

            <h2 className="h h2 / xl:text-4xl">How you can boost your conversion rate via our tips now</h2>

            <p className="p / mb-10">Mauris consectetur magna dictum libero porta, et venenatis tortor posuere. Class aptent taciti sociosqu ad litora torquent per conubia.</p>

            <div className="Image / relative w-full aspect-[3/2] rounded overflow-hidden border-[0.4px] border-neutrals-400 shadow-card mb-10">
              <Image src="/Karrel-Aboutt-Hero-Img.jpg" alt="Test" fill={true} className="object-cover" />
            </div>

            <h2 className="h h2 / xl:text-4xl">How you can boost your conversion rate via our tips now</h2>

            <p className="p">Mauris consectetur magna dictum libero porta, et venenatis tortor posuere. Class aptent taciti sociosqu ad litora torquent per conubia.</p>
          </article>
        </div>
      </section>

      <RelatedArticles />
      {/* <Cta /> */}
    </>
  )
}