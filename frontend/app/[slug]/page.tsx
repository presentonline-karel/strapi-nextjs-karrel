"use client";

// React & Next.js
import { useState, useEffect } from "react";
//import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from 'next/head'

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/section-renderer";

// Types
import { MetaDataProps } from "@/types/MetaData";



export default function Page({ params }: { params: { slug: string; } }) {

  // State
  const [slug, setSlug] = useState(params.slug !== "" ? params.slug : "");
  const [contentSections, setContentSections] = useState([]);
  const [metaData, setMetaData] = useState<MetaDataProps>();


  // Qs
  const qs = require("qs");

  async function getPage() {
    const queryParams = () => qs.stringify(
      {
        filters: {
          slug: {
            $eq: `/${slug}`,
          }
        },
        populate: {
          contentSections: {
            populate: "*",
          },
          metadata: {
            populate: "*",
          }
        },
      }
    )

    const CONTENT_TYPE = "pages";
    const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}?`;

    const QUERY_1 = BASE_URL + queryParams();

    const resp = await fetcher(QUERY_1);
    //console.log("resp", resp);

    if (resp.data.length === 0) return null;
    setContentSections(resp.data[0].attributes.contentSections);
    setMetaData(resp.data[0].attributes.metadata);
    //console.log("respmeta", resp.data[0].attributes.metadata);
  }

  useEffect(() => {
    getPage();
  }, []);



  /*return (
    <>
      {console.log("meta", metaData)}
      <Head>
        {metaData != null && (
          <>
            <meta property="og:title" content={metaData.metaTitle} key="title" />
            <meta name="og:description" content={metaData.metaDescription} key="description" />
          </>
        )}
        {metaData == null && (
          <>
            <meta property="og:title" content="Karel Decoene - Creative Technologist - Portfolio Website" key="title" />
            <meta name="og:description" content="Hi, I'm Karel and I'm a creative technologist focused on web development/design. Welcome to my portfolio website." key="description" />
          </>
        )}
      </Head>

      {contentSections.map((section: any, index: number) => sectionRenderer(section, index))};
    </>
  );*/

  return contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}