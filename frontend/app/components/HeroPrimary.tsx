// Next.js
import Image from "next/image";
import Link from "next/link";

// Utils
import { getStrapiMedia } from "@/utils/api-helpers";
import { getStrapiURL } from "@/utils/api-helpers";

// Types
interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string,
    attributes: {
      url: string,
      name: string,
      alternativeText: string;
    }
  }
}

interface HeroPrimaryProps {
  data: {
    id: string;
    label: string;
    title: string;
    text: string;
    buttons: Button[];
    image: Picture;
  }
}



export default function HeroPrimary({data}: HeroPrimaryProps) {

  // Generate imageUrl
  const imageUrl = getStrapiMedia(data.image.data.attributes.url);

  return (
    <section>
      <div>
        {data.label}
        {data.title}
      </div>
    </section>
  );
}