//"use client";

// Next & React
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useSearchParams } from 'next/navigation';

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/section-renderer";
import { FALLBACK_SEO } from "@/utils/fallback-seo";



export const revalidate = 0;

// Meta title & description
export async function generateMetadata({ params }: { params: { slug: string }; }): Promise<Metadata> {

  // Qs
  const qs = require("qs");

  const queryParams = () =>
    qs.stringify({
      filters: {
        slug: {
          $eq: `/${params.slug}`,
        },
      },
      populate: {
        metadata: {
          populate: "*",
        },
      },
    });

  const CONTENT_TYPE = "pages";
  const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}?`;
  const QUERY_1 = BASE_URL + queryParams();
  const resp = await fetcher(QUERY_1);

  if (resp.data[0] == null || !resp.data[0].attributes.metadata.metaTitle || !resp.data[0].attributes.metadata.metaDescription) return FALLBACK_SEO;

  return {
    title: resp.data[0].attributes.metadata.metaTitle,
    description: resp.data[0].attributes.metadata.metaDescription
  }
}



// Return page
export default async function Page({ params }: { params: { slug: string; } }) {

  // Page param for pagination blogposts
  //const searchParams = useSearchParams();
  //const pageSize = searchParams.get("page");
  //console.log("getPageSize", pageSize);
  //const pageParam = pageSize === null ? 1 : pageSize;

  //console.log("pageParam before parseInt", pageParam);

  //const pageParamNr = parseInt(pageParam as string);

  //console.log("pageParamNr", pageParamNr, typeof pageParamNr);

  // Qs
  const qs = require("qs");

  const queryParams = () => qs.stringify(
    {
      filters: {
        slug: {
          $eq: `/${params.slug}`,
        }
      },
      populate: {
        contentSections: {
          populate: "*",
        },
      },
    }
  )

  const CONTENT_TYPE = "pages";
  const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}?`;
  const QUERY_1 = BASE_URL + queryParams();
  const resp = await fetcher(QUERY_1);

  if (resp.data.length === 0) {
    notFound();
  }



  //return resp.data[0].attributes.contentSections.map((section: any, index: number) => sectionRenderer(section, index, pageParamNr));
  return resp.data[0].attributes.contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}