import Link from "next/link";

export default function Cta() {
  return (
    <div className="Cta / md:bg-neutrals-200">
      <div className="Container / md:px-12 md:py-14 / lg:p-[120px] / xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-400">
        <div className="Content / bg-prim-500 px-4 py-12 flex flex-col gap-6 / sm:px-12 / md:flex-row md:justify-between md:items-end md:rounded md:bg-prim-100 md:border-[0.4px] md:border-neutrals-400 md:shadow-card">
          <div className="Text / md:max-w-[586px]">
            <h3 className="h h3 / mb-3 / xl:mb-4 xl:text-3xl leading-10">Read my latest blogposts</h3>
            <p className="p / text-neutrals-1100 / md:text-neutrals-800">
              Mauris consectetur magna dictum libero porta, et venenatis tortor
              posuere.
            </p>
          </div>

          <Link
            href={`#`}
            className="btn btn--primary / border-[1px] border-neutrals-1100 w-min whitespace-nowrap / md:border-none"
          >
            Read my blog
          </Link>
        </div>
      </div>
    </div>
  );
}
