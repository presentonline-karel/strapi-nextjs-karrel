"use client";

// React
import { useState, useEffect } from "react";

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/section-renderer";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;



export default function RootRoute() {

  // State
  const [contentSections, setContentSections] = useState([]);

  // Qs
  const qs = require("qs");

  async function getHomePage() {
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

    if (resp.data.length === 0) return null;
    setContentSections(resp.data.attributes.contentSections);
  }

  useEffect(() => {
    getHomePage();
  }, []);

  return contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}