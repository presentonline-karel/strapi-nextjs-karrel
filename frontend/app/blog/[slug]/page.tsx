"use client";

// React & Next.js
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// FontAwesome
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Utils
import { fetcher } from "@/utils/fetcher";
import { articleBlocksRenderer } from "@/utils/article-blocks-renderer";
import { formatMyDate } from "@/utils/date-formatter";

// Components
import RelatedArticles from "@/app/components/sections/RelatedArticles";

// Types
import { BlogpostProps } from "@/types/Blogpost";
import ProgressBar from "@/app/components/blog/ProgressBar";



export default function BlogDetailPage({ params }: { params: { slug: string; } }) {

  const articleSlug = params.slug.replace("/blog", "");

  // States
  const [slug, setSlug] = useState(articleSlug);
  const [articleData, setArticleData] = useState<BlogpostProps>();
  const [articleBlocks, setArticleBlocks] = useState([]);
  const [relatedArticles, setRelatedArticles] = useState([]);

  // Qs
  const qs = require("qs");

  async function getArticleData() {
    const queryParams = () => qs.stringify(
      {
        filters: {
          slug: {
            $eq: `${slug}`,
          }
        },
        populate: {
          blocks: {
            populate: "*",
          },
          category: {
            populate: "*",
          },
          cover: {
            populate: "*"
          },
          articles: {
            populate: "*"
          }
        }
      }
    )

    const CONTENT_TYPE = "articles";
    const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}?`;

    const QUERY_1 = BASE_URL + queryParams();

    const resp = await fetcher(QUERY_1);

    if (resp.data.length === 0) return null;

    setArticleBlocks(resp.data[0].attributes.blocks);
    setArticleData(resp.data[0]);
    setRelatedArticles(resp.data[0].attributes.articles.data);
  }

  useEffect(() => {
    getArticleData();
  }, []);



  return (
    <div className="relative">
      <ProgressBar />
      {articleData != null && (
        <section className="Article / py-14 / lg:pt-20 lg:pb-[120px] / xl:!py-0">
          <div className="Container / px-4 / sm:px-12 / md:px-0 md:max-w-[588px] md:mx-auto / xl:pt-20 xl:pb-[120px] xl:max-w-[1440px] xl:border-x-[0.4px] xl:border-neutrals-400 xl:px-[426px]">
            <div className="Details / flex items-center justify-between mb-10">
              <Link href={`/blog`} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronLeft} className="text-xs leading-6 text-prim-600" />
                <span className="font-headings text-base leading-6 text-neutrals-1100 font-medium">Blog</span>
              </Link>

              <div className="Meta / flex items-center gap-4 / lg:gap-5">
                <div className="Date / font-headings text-base leading-6 text-neutrals-800 font-medium">{formatMyDate(articleData.attributes.createdAt)}</div>
                <div className="tag">{articleData.attributes.category.data.attributes.name}</div>
              </div>
            </div>

            <article className="Body /">
              <div className="Heading / mb-10 / xl:mb-12">
                <h1 className="h h1 / mb-4 / xl:text-6xl xl:mb-6">{articleData.attributes.title}</h1>
                <p className="Description p /">{articleData.attributes.description}</p>
              </div>

              {articleBlocks.map((block: any, index: number) => articleBlocksRenderer(block, index))}
            </article>
          </div>
        </section>
      )}

      <RelatedArticles data={relatedArticles} />
      {/* <Cta /> */}
    </div>
  )
}