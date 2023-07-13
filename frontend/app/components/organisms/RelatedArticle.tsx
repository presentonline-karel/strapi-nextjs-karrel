// React & Next.js
import Image from "next/image";
import Link from "next/link";

// Utils
import { formatMyDate } from "@/utils/date-formatter";

// Types
import { BlogpostProps } from "@/types/Blogpost";
import { getStrapiMedia } from "@/utils/fetcher";



export default function RelatedArticle(data: BlogpostProps) {
  const imgUrl = getStrapiMedia(data.attributes.cover.data.attributes.url);

  // Cut of blog title
  const maxLength = 64;
  var cutOffTitle = "";
  data.attributes.title.length > maxLength ? cutOffTitle = data.attributes.title.substring(0, maxLength - 4) + "..." : cutOffTitle = data.attributes.title;

  // Format my date
  const formattedDate = formatMyDate(data.attributes.createdAt);



  return (
    <Link href={`/blog/${data.attributes.slug}`} className="Related-Article / flex gap-4 bg-neutrals-100 rounded border-[0.4px] border-neutrals-400 items-center shadow-card overflow-hidden hover:shadow-cardHover / xl:gap-6">
      <div className="Image / relative w-[104px] aspect-[10/11] / xl:w-[180px] xl:aspect-square">
        <Image
          src={imgUrl || ""}
          alt={data.attributes.cover.data.attributes.alternativeText || ""}
          fill={true} 
          className="object-cover"
          sizes="(max-width: 768px) 10vw"
        />
      </div>

      <div className="Heading / w-[calc(100%-104px)] pr-4 / xl:pr-6">
        <h6 className="h h6 / leading-5 mb-2 / xl:text-2xl xl:leading-8 / xl:mb-3">{cutOffTitle}</h6>
        <div className="font-headings font-medium text-base leading-6 text-neutrals-800 / xl:text-xl xl:leading-7">{formattedDate}</div>
      </div>
    </Link>
  )
}