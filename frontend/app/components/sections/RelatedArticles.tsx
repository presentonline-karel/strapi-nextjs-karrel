import RelatedArticle from "../organisms/RelatedArticle";



export default function RelatedArticles() {
  return (
    <div className="Related-Articles section / bg-neutrals-200 / lg:py-0">
      <div className="Container / px-4 / sm:px-12 sm:flex sm:gap-12 sm:justify-between / md:px-0 md:max-w-[784px] md:mx-auto / lg:max-w-[834px] lg:py-[104px] / xl:px-[222px] xl:max-w-[1440px] xl:border-x-[0.4px] xl:border-neutrals-400">
        <h2 className="h h2 / mb-10 / xl:text-5xl">Read also</h2>

        <div className="Articles / flex flex-col gap-5 / sm:max-w-[400px] / xl:max-w-[588px] xl:gap-10">
          <RelatedArticle />
          <RelatedArticle />
        </div>
      </div>
    </div>
  )
}