import Blogpost from "../organisms/Blogpost"

export default function BlogPosts() {
  return (
    <div className="Blogpost-Section / pb-14 / lg:pb-0">
      <div className="Container / px-4 flex flex-col gap-14 / sm:px-12 / md:px-0 md:max-w-[784px] md:mx-auto / lg:max-w-[834px] lg:pb-[120px] / xl:max-w-[1440px] xl:px-[222px] xl:border-x-[0.4px] xl:border-neutrals-400">
        <div className="Blogposts / flex flex-col gap-12 / sm:grid sm:grid-cols-2 sm:gap-x-6 / md:flex">
          <Blogpost />
          <Blogpost />
          <Blogpost />
        </div>

        <div className="Pagination / inline-flex items-center mx-auto rounded overflow-hidden border-[0.4px] border-neutrals-400">
          <div className="Number / bg-prim-100 text-prim-600 px-4 py-3 font-headings text-xl leading-7 tracking-tight font-semibold border-t-2 border-prim-600">1</div>
          <div className="Number / bg-prim-100 text-neutrals-1000 px-4 py-3 font-headings text-xl leading-7 tracking-tight font-semibold border-t-2 border-prim-100 hover:cursor-pointer hover:text-prim-500 hover:border-t-2 hover:border-prim-400">2</div>
          <div className="Number / bg-prim-100 text-neutrals-1000 px-4 py-3 font-headings text-xl leading-7 tracking-tight font-semibold border-t-2 border-prim-100 hover:cursor-pointer hover:text-prim-500 hover:border-t-2 hover:border-prim-400">3</div>
          <div className="Number / bg-prim-100 text-neutrals-1000 px-4 py-3 font-headings text-xl leading-7 tracking-tight font-semibold border-t-2 border-prim-100 hover:cursor-pointer hover:text-prim-500 hover:border-t-2 hover:border-prim-400">4</div>
        </div>
      </div>
    </div>
  )
}