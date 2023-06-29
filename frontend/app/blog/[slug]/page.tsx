// React & Next.js
import Link from "next/link";
import { Metadata } from "next";

// FontAwesome
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Utils
import { fetcher } from "@/utils/fetcher";
import { articleBlocksRenderer } from "@/utils/article-blocks-renderer";
import { formatMyDate } from "@/utils/date-formatter";
import { FALLBACK_SEO } from "@/utils/fallback-seo";

// Components
import RelatedArticles from "@/app/components/sections/RelatedArticles";



// Meta title & description
export async function generateMetadata({ params, }: { params: { slug: string }; }): Promise<Metadata> {
  const articleSlug = params.slug.replace("/blog", "");

  // Qs
  const qs = require("qs");

  const queryParams = () =>
    qs.stringify({
      filters: {
        slug: {
          $eq: `${articleSlug}`,
        },
      },
      populate: {
        seo: {
          populate: "*",
        },
      },
    });

  const CONTENT_TYPE = "articles";
  const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}?`;
  const QUERY_1 = BASE_URL + queryParams();
  const resp = await fetcher(QUERY_1);

  if(!resp.data[0].attributes.seo.metaTitle || !resp.data[0].attributes.seo.metaDescription) return FALLBACK_SEO;

  return {
    title: resp.data[0].attributes.seo.metaTitle,
    description: resp.data[0].attributes.seo.metaDescription
  }
}



// Return page
export default async function BlogDetailPage({ params, }: { params: { slug: string }; }) {
  const articleSlug = params.slug.replace("/blog", "");

  // Qs
  const qs = require("qs");

  const queryParams = () =>
    qs.stringify({
      filters: {
        slug: {
          $eq: `${articleSlug}`,
        },
      },
      populate: {
        blocks: {
          populate: "*",
        },
        category: {
          populate: "*",
        },
        cover: {
          populate: "*",
        },
        articles: {
          populate: "*",
        },
      },
    });

  const CONTENT_TYPE = "articles";
  const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}?`;
  const QUERY_1 = BASE_URL + queryParams();
  const resp = await fetcher(QUERY_1);

  if (resp.data.length === 0) return null;



  return (
    <>
      {resp.data[0] != null && (
        <section className="Article / pb-14 pt-[136px] relative z-0 / sm:pt-40 / lg:pt-[201px] lg:pb-[120px] / xl:!py-0">
          <div className="Container / px-4 / sm:px-12 / md:px-0 md:max-w-[588px] md:mx-auto / xl:pt-56 xl:pb-[120px] xl:max-w-[1440px] xl:border-x-[0.4px] xl:border-neutrals-400 xl:px-[426px]">
            <div className="Details / flex items-center justify-between mb-10">
              <Link
                href={`/blog`}
                className="flex items-center gap-2"
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-xs leading-6 text-prim-600"
                />
                <span className="font-headings text-base leading-6 text-neutrals-1100 font-medium">
                  Blog
                </span>
              </Link>

              <div className="Meta / flex items-center gap-4 / lg:gap-5">
                <div className="Date / font-headings text-base leading-6 text-neutrals-800 font-medium">
                  {formatMyDate(resp.data[0].attributes.createdAt)}
                </div>
                <div className="tag">
                  {resp.data[0].attributes.category.data.attributes.name}
                </div>
              </div>
            </div>

            <article className="Body /">
              <div className="Heading / mb-10 / xl:mb-12">
                <h1 className="h h1 / mb-4 / xl:text-6xl xl:mb-6">
                  {resp.data[0].attributes.title}
                </h1>
                <p className="Description p /">
                  {resp.data[0].attributes.description}
                </p>
              </div>

              {resp.data[0].attributes.blocks.map((block: any, index: number) =>
                articleBlocksRenderer(block, index)
              )}
            </article>
          </div>
        </section>
      )}

      <RelatedArticles data={resp.data[0].attributes.articles.data} />
    </>
  );
}