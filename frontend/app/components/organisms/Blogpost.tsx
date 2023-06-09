import Image from "next/image";



export default function Blogpost() {
  return (
    <div className="Blogpost / rounded border-[0.4px] border-neutrals-400 flex flex-col gap-6 pb-5 shadow-card / md:pb-0">
      <div className="Content / flex flex-col gap-6 / md:flex-row md:items-center md:gap-8 / xl:gap-10">
        <div className="Image / relative w-full aspect-[3/2] / md:aspect-[7/8] / lg:aspect-square / xl:max-w-[343px]">
          <Image src="/Karrel-Home-Hero-Img.jpg" alt="Karrel" fill={true} className="object-cover" />
        </div>

        <div className="Body / px-4 / md:px-0 md:pr-8 / lg:pr-10">
          <div className="flex gap-4 items-center mb-5 / md:mb-4">
            <div className="font-headings text-base leading-6 font-medium text-neutrals-800 tracking-tight">Mar 16, 2020</div>
            <div className="tag">Marketing</div>
          </div>

          <h3 className="h h3 / mb-3 / xl:text-2xl leading-8">How you can boost your conversion rate via our tips now</h3>
          <p className="p / md:mb-6 / xl:mb-8 xl:text-base">Mauris consectetur magna dictum libero porta, et venenatis tortor posuere. Class aptent taciti sociosqu ad litora torquent per conubia.</p>

          <div className="Author-Desktop / items-center gap-4 hidden md:flex">
            <div className="Image / w-12 h-12 rounded relative border-[0.4px] border-neutrals-400">
              <Image src="/Karrel-Home-Hero-Img.jpg" alt="Karrel" fill={true} className="object-cover" />
            </div>

            <div>
              <h6 className="h h6 / mb-1">Karel Decoene</h6>
              <div className="font-headings text-base leading-4 text-neutrals-800">CEO of Present Online</div>
            </div>
          </div>
        </div>
      </div>

      <div className="Author-Mobile / flex items-center gap-4 px-4 / md:hidden">
        <div className="Image / w-12 h-12 rounded relative border-[0.4px] border-neutrals-400">
          <Image src="/Karrel-Home-Hero-Img.jpg" alt="Karrel" fill={true} className="object-cover" />
        </div>

        <div>
          <h6 className="h h6 / mb-1">Karel Decoene</h6>
          <div className="font-headings text-base leading-4 text-neutrals-800">CEO of Present Online</div>
        </div>
      </div>
    </div>
  )
}