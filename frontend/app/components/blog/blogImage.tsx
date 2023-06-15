// React & Next.js
import Image from "next/image";

// Types
import { Picture } from "@/types/Picture";

// Utils
import { getStrapiMedia } from "@/utils/fetcher";



export default function BlogImage({data}: Picture) {
  const imgUrl = getStrapiMedia(data.attributes.url);

  return (
    <div className="Image / relative w-full aspect-[3/2] rounded overflow-hidden border-[0.4px] border-neutrals-400 shadow-card mb-10 / xl:mb-12">
      <Image src={imgUrl || ""} alt={data.attributes.alternativeText || "none provided"} fill={true} className="object-cover" />
    </div>
  )
}