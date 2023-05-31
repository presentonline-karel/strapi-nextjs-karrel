// Next.js
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div>
      <h1 className="bg-orange-700">{data.title}</h1>
    </div>
  );
}