// Next
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/section-renderer";
import { FALLBACK_SEO } from "@/utils/fallback-seo";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;



export const revalidate = 0;

// Meta title & description
export async function generateMetadata({ params }: { params: { slug: string; } }): Promise<Metadata> {

  // Qs
  const qs = require("qs");

  const queryParams = () => qs.stringify({
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
  })

  //const ID = 1;
  const CONTENT_TYPE = "pages";
  //const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}/${ID}?`;
  const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}?`;
  const QUERY_1 = BASE_URL + queryParams();
  const resp = await fetcher(QUERY_1);

  if (!resp.data || !resp.data.attributes.metadata.metaTitle || !resp.data.attributes.metadata.metaDescription) return FALLBACK_SEO;

  return {
    title: resp.data.attributes.metadata.metaTitle,
    description: resp.data.attributes.metadata.metaDescription
  }
}



// Return page
export default async function RootRoute({ params }: { params: { slug: string; } }) {

  // Qs
  const qs = require("qs");

  const queryParams = () => qs.stringify({
    filters: {
      slug: {
        $eq: `/${params.slug}`,
      },
    },
    populate: {
      contentSections: {
        populate: "*",
      },
    },
  })

  //const ID = 1;
  const CONTENT_TYPE = "pages";
  //const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}/${ID}?`;
  const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}?`;
  const QUERY_1 = BASE_URL + queryParams();
  const resp = await fetcher(QUERY_1);

  if (!resp.data || resp.data.length === 0) {
    notFound();
  }



  //return resp.data.attributes.contentSections.map((section: any, index: number) => sectionRenderer(section, index, 0));
  return resp.data.attributes.contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}