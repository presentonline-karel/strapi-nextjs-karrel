// React & Next.js
import Image from "next/image";
import Link from "next/link";

// Utils
import { getStrapiMedia } from "@/utils/fetcher";
import { formatMyDate } from "@/utils/date-formatter";

// Types
import { BlogpostProps } from "@/types/Blogpost";



export default function Blogpost(data: BlogpostProps) {
  const coverImageUrl = getStrapiMedia(data.attributes.cover.data.attributes.url);
  const avatarImageUrl = getStrapiMedia(data.attributes.author.data.attributes.avatar.data.attributes.url);

  // Cut of blog description
  const maxLength = 144;
  var cutOffDescription = "";
  data.attributes.description.length > maxLength ? cutOffDescription = data.attributes.description.substring(0, maxLength - 4) + "..." : cutOffDescription = data.attributes.description;

  // Format date
  const formattedDate = formatMyDate(data.attributes.createdAt);



  return (
    <Link href={`/blog/${data.attributes.slug}`} className="Blogpost / rounded border-[0.4px] border-neutrals-400 flex flex-col gap-6 pb-5 shadow-card overflow-hidden hover:shadow-cardHover / md:pb-0">
      <article className="Content / flex flex-col gap-6 / md:flex-row md:items-center md:gap-8 / xl:gap-10">
        <div className="Image / relative w-full aspect-[3/2] / md:aspect-[7/8] / lg:aspect-square / xl:max-w-[343px]">
          <Image
            src={coverImageUrl || ""}
            alt={data.attributes.cover.data.attributes.alternativeText || "none provided"}
            fill={true} 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 25vw"
          />
        </div>

        <div className="Body / px-4 / md:px-0 md:pr-8 / lg:pr-10">
          <div className="flex gap-4 items-center mb-5 / md:mb-4">
            <div className="font-headings text-base leading-6 font-medium text-neutrals-800 tracking-tight">{formattedDate}</div>
            <div className="tag">{data.attributes.category.data.attributes.name}</div>
          </div>

          <h3 className="h h3 / mb-3 / xl:text-2xl leading-8">{data.attributes.title}</h3>
          <p className="p / md:mb-6 / xl:mb-8 xl:text-base">{cutOffDescription}</p>

          <div className="Author-Desktop / items-center gap-4 hidden md:flex">
            <div className="Image / w-12 h-12 rounded relative border-[0.4px] border-neutrals-400 overflow-hidden">
              <Image
                src={avatarImageUrl || ""}
                alt={data.attributes.author.data.attributes.avatar.data.attributes.alternativeText || "none provided"}
                className="object-cover"
                fill={true}
                sizes="48px"
              />
            </div>

            <div>
              <h6 className="h h6 / mb-1">{data.attributes.author.data.attributes.name}</h6>
              <div className="font-headings text-base leading-4 text-neutrals-800">{data.attributes.author.data.attributes.function}</div>
            </div>
          </div>
        </div>
      </article>

      <div className="Author-Mobile / flex items-center gap-4 px-4 / md:hidden">
        <div className="Image / w-12 h-12 rounded relative border-[0.4px] border-neutrals-400 overflow-hidden">
          <Image 
            src={avatarImageUrl || ""} 
            alt={data.attributes.author.data.attributes.avatar.data.attributes.alternativeText || "none provided"} 
            className="object-cover"
            fill={true}
            sizes="48px"
          />
        </div>

        <div>
          <h6 className="h h6 / mb-1">{data.attributes.author.data.attributes.name}</h6>
          <div className="font-headings text-base leading-4 text-neutrals-800">{data.attributes.author.data.attributes.function}</div>
        </div>
      </div>
    </Link>
  )
}