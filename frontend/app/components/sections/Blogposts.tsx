"use client";

// React
import { useState, useEffect, Suspense } from "react";

// Utils
import { fetcher } from "@/utils/fetcher";

// Components
import Blogpost from "../organisms/Blogpost";
import { BlogpostProps } from "@/types/Blogpost";
import Pagination from "../organisms/Pagination";

// Types
import { PaginationData } from "@/types/PaginationData";



export default function BlogPosts({ pageParamNr }: {pageParamNr: number}) {

  // States
  const [blogposts, setBlogposts] = useState([]);
  const [paginationData, setPaginationData] = useState<PaginationData>();

  // Qs
  const qs = require("qs");

  // Get blogposts function
  async function getBlogposts() {
    const queryParams = () => qs.stringify(
      {
        populate: {
          blocks: {
            populate: "*",
          },
          category: {
            populate: "*",
          },
          author: {
            populate: "*",
          },
          cover: {
            populate: "*"
          }
        },
        pagination: {
          page: pageParamNr,
          pageSize: 3,
        }
      }
    )

    const CONTENT_TYPE = "articles";
    const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}?`;
    const QUERY_1 = BASE_URL + queryParams();
    const resp = await fetcher(QUERY_1);

    console.log("pagination resp", resp);

    if (resp.data.length === 0) return null;
    setBlogposts(resp.data);
    setPaginationData(resp.meta.pagination);
  }

  useEffect(() => {
    getBlogposts();
  }, []);



  return (
    <div className="Blogpost-Section / pb-14 / lg:pb-0">
      <div className="Container / px-4 flex flex-col gap-14 / sm:px-12 / md:px-0 md:max-w-[784px] md:mx-auto / lg:max-w-[834px] lg:pb-[120px] / xl:max-w-[1440px] xl:px-[222px] xl:border-x-[0.4px] xl:border-neutrals-400">
        <div className="Blogposts / flex flex-col gap-12 / sm:grid sm:grid-cols-2 sm:gap-x-6 / md:flex">
          {blogposts.map((blogpost: BlogpostProps, index: number) => {
            return <Blogpost key={index} {...blogpost} />
          })}
        </div>

        {/* <div className="Pagination / inline-flex items-center mx-auto rounded overflow-hidden border-[0.4px] border-neutrals-400">
          <div className="Number / bg-prim-100 text-prim-600 px-4 py-3 font-headings text-xl leading-7 tracking-tight font-semibold border-t-2 border-prim-600">1</div>
          <div className="Number / bg-prim-100 text-neutrals-1000 px-4 py-3 font-headings text-xl leading-7 tracking-tight font-semibold border-t-2 border-prim-100 hover:cursor-pointer hover:text-prim-500 hover:border-t-2 hover:border-prim-400">2</div>
          <div className="Number / bg-prim-100 text-neutrals-1000 px-4 py-3 font-headings text-xl leading-7 tracking-tight font-semibold border-t-2 border-prim-100 hover:cursor-pointer hover:text-prim-500 hover:border-t-2 hover:border-prim-400">3</div>
          <div className="Number / bg-prim-100 text-neutrals-1000 px-4 py-3 font-headings text-xl leading-7 tracking-tight font-semibold border-t-2 border-prim-100 hover:cursor-pointer hover:text-prim-500 hover:border-t-2 hover:border-prim-400">4</div>
        </div> */}

        <Pagination {...paginationData} />
      </div>
    </div>
  )
}