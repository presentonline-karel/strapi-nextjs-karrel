"use client";

// React
import { useState, useEffect } from "react";

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/section-renderer";



export default function RootRoute() {
  const [contentSections, setContentSections] = useState([]);

  async function getHomePage() {
    const resp = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/pages/1?populate=*`);

    if(resp.data.length === 0) return null;
    setContentSections(resp.data.attributes.contentSections);
  }

  useEffect(() => {
    getHomePage();
  }, []);

  return contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}