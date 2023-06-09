import Image from "next/image";



export default function RelatedArticle() {
  return (
    <div className="Related-Article / flex gap-4 bg-neutrals-100 rounded border-[0.4px] border-neutrals-400 items-center shadow-card / xl:gap-6">
      <div className="Image / relative w-[104px] aspect-[10/11] / xl:w-[180px] xl:aspect-square">
        <Image src="/Karrel-Home-Hero-Img.jpg" alt="Karrel" fill={true} className="object-cover" />
      </div>

      <div className="Heading / w-[calc(100%-104px)] pr-4 / xl:pr-6">
        <h6 className="h h6 / leading-5 mb-2 / xl:text-2xl xl:leading-8 / xl:mb-3">How you can boost your conversion rate via our tips now</h6>
        <div className="font-headings font-medium text-base leading-6 text-neutrals-800 / xl:text-xl xl:leading-7">Mar 16, 2020</div>
      </div>
    </div>
  )
}