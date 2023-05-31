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
    <div className="section">
      <h1 className="h h1">{data.title}</h1>
      <h2 className="h h2">{data.title}</h2>
      <h3 className="h h3">{data.title}</h3>
      <h4 className="h h4">{data.title}</h4>
      <h5 className="h h5">{data.title}</h5>
      <h6 className="h h6">{data.title}</h6>

      <div>
        <p className="p">Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele.</p>
      </div>

      <a className="btn btn--primary">Read my blog</a>
    </div>
  );
}