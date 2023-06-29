import Link from "next/link";

export default function PostNotFound() {
  return (
    <div className="Error-Container / w-full h-screen text-center / md:h-min">
      <div className="Container / flex flex-col justify-center items-center h-full px-4 / sm:px-12 / md:h-min md:pt-60 md:pb-40 / lg:px-[120px] / xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-400 xl:pt-[265px] / hd:!py-0 hd:h-[calc(100vh-469px)] hd:!pt-32 hd:min-h-[611px]">
        <div className="section__label / xl:mb-4">Oooppss</div>
        <h1 className="h h2 / mb-4 / xl:mb-6">Error404</h1>
        <p className="p / mb-8 / sm:max-w-[588px] sm:mx-auto / xl:max-w-[791px] xl:mb-10">Mauris consectetur magna dictum libero porta, et venenatis tortor posuere. Class aptent taciti sociosqu ad litora.</p>

        <Link href={`/`} className="btn btn--primary / px-16">
          Home
        </Link>
      </div>
    </div>
  )
}