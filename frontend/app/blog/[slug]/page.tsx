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

// Components
import RelatedArticles from "@/app/components/sections/RelatedArticles";
import { BlogpostProps } from "@/types/Blogpost";



export default function BlogDetailPage({ params }: { params: { slug: string; } }) {

  const articleSlug = params.slug.replace("/blog", "");

  // States
  const [slug, setSlug] = useState(articleSlug);
  const [articleData, setArticleData] = useState<BlogpostProps>();
  const [articleBlocks, setArticleBlocks] = useState([]);

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
          }
        }
      }
    )

    const CONTENT_TYPE = "articles";
    const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}?`;

    const QUERY_1 = BASE_URL + queryParams();

    const resp = await fetcher(QUERY_1);

    //console.log(resp);

    if (resp.data.length === 0) return null;

    setArticleBlocks(resp.data[0].attributes.blocks);
    //console.log(articleBlocks);
    setArticleData(resp.data[0]);
  }

  useEffect(() => {
    getArticleData();
  }, []);



  return (
    <>
      {articleData != null && (
        <section className="Article / py-14 / lg:pt-20 lg:pb-[120px] / xl:!py-0">
          <div className="Container / px-4 / sm:px-12 / md:px-0 md:max-w-[588px] md:mx-auto / xl:pt-20 xl:pb-[120px] xl:max-w-[1440px] xl:border-x-[0.4px] xl:border-neutrals-400 xl:px-[426px]">
            <div className="Details / flex items-center justify-between mb-10">
              <Link href={`/blog`} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronLeft} className="text-xs leading-6 text-prim-600" />
                <span className="font-headings text-base leading-6 text-neutrals-1100 font-medium">Blog</span>
              </Link>

              <div className="Meta / flex items-center gap-4 / lg:gap-5">
                <div className="Date / font-headings text-base leading-6 text-neutrals-800 font-medium">Mar 16, 2020</div>
                <div className="tag">{articleData.attributes.category.data.attributes.name}</div>
              </div>
            </div>

            <article className="Body /">
              <div className="Heading / mb-10">
                <h1 className="h h1 / mb-4 / xl:text-6xl">{articleData.attributes.title}</h1>
                <p className="Description p /">{articleData.attributes.description}</p>
              </div>

              {/*
              <div className="Image / relative w-full aspect-[3/2] rounded overflow-hidden border-[0.4px] border-neutrals-400 shadow-card mb-10">
                <Image src="/Karrel-Aboutt-Hero-Img.jpg" alt="Test" fill={true} className="object-cover" />
              </div>

              <h2 className="h h2 / xl:text-4xl">How you can boost your conversion rate via our tips now</h2>

              <p className="p / mb-10">Mauris consectetur magna dictum libero porta, et venenatis tortor posuere. Class aptent taciti sociosqu ad litora torquent per conubia.</p>

              <div className="Image / relative w-full aspect-[3/2] rounded overflow-hidden border-[0.4px] border-neutrals-400 shadow-card mb-10">
                <Image src="/Karrel-Aboutt-Hero-Img.jpg" alt="Test" fill={true} className="object-cover" />
              </div>

              <h2 className="h h2 / xl:text-4xl">How you can boost your conversion rate via our tips now</h2>

      <p className="p">Mauris consectetur magna dictum libero porta, et venenatis tortor posuere. Class aptent taciti sociosqu ad litora torquent per conubia.</p>*/}
            
                {articleBlocks.map((block: any, index: number) => articleBlocksRenderer(block, index))}
              </article>
          </div>
        </section>
      )}

      <RelatedArticles />
      {/* <Cta /> */}
    </>
  )
}