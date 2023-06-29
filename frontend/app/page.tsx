// Next
import { Metadata } from "next";

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/section-renderer";
import { FALLBACK_SEO } from "@/utils/fallback-seo";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;



// Meta title & description
export async function generateMetadata(): Promise<Metadata> {

  // Qs
  const qs = require("qs");

  const params = () => qs.stringify(
    {
      populate: {
        metadata: {
          populate: "*",
        },
      },
    }
  )

  const ID = 1;
  const CONTENT_TYPE = "pages";
  const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}/${ID}?`;
  const QUERY_1 = BASE_URL + params();
  const resp = await fetcher(QUERY_1);

  if(!resp.data.attributes.metadata.metaTitle || !resp.data.attributes.metadata.metaDescription) return FALLBACK_SEO;

  return {
    title: resp.data.attributes.metadata.metaTitle,
    description: resp.data.attributes.metadata.metaDescription
  }
}



// Return page
export default async function RootRoute() {

  // Qs
  const qs = require("qs");

  const params = () => qs.stringify(
    {
      populate: {
        contentSections: {
          populate: "*",
        },
      },
    }
  )

  const ID = 1;
  const CONTENT_TYPE = "pages";
  const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}/${ID}?`;
  const QUERY_1 = BASE_URL + params();
  const resp = await fetcher(QUERY_1);

  console.log(resp);

  if (resp.data.length === 0) return null;



  return resp.data.attributes.contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}