"use client";

// React & Next.js
import { useState, useEffect } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/section-renderer";

// Components
import Custom404 from "../404";



export default function Page({ params }: { params: { slug: string; } }) {

  // State
  const [slug, setSlug] = useState(params.slug !== "" ? params.slug : "");
  const [contentSections, setContentSections] = useState([]);


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
        },
      }
    )

    const CONTENT_TYPE = "pages";
    const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}?`;

    const QUERY_1 = BASE_URL + queryParams();

    const resp = await fetcher(QUERY_1);

    if (resp.data.length === 0) return null;
    setContentSections(resp.data[0].attributes.contentSections);
  }

  useEffect(() => {
    getPage();
  }, []);



  return contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}