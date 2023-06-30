// Next & React
import Link from "next/link";

// Types
import { PaginationData } from "@/types/PaginationData";



export default function Pagination({ page, pageCount, pageSize, total }: PaginationData) {

  function createElements(number: number | null | undefined) {
    var elements = [];
    for (let i = 0; i < number!; i++) {
      elements.push(
        <Link 
          href={{
            pathname: "/blog",
            query: { page: `${i + 1}` }
          }} 
          passHref
          className={`Number / bg-prim-100 px-4 py-3 font-headings text-xl leading-7 tracking-tight font-semibold border-t-2 hover:cursor-pointer ${(i + 1) == page ? "text-prim-600 border-prim-600" : "text-neutrals-1000 border-prim-100" } hover:text-prim-500 hover:border-t-2 hover:border-prim-400`}>
          {i + 1}
        </Link>
      );
    }
    return elements;
  }

  return (
    <div className="Pagination / inline-flex items-center mx-auto rounded overflow-hidden border-[0.4px] border-neutrals-400">
      {createElements(pageCount)}



      {/* <div className="Number / bg-prim-100 text-prim-600 px-4 py-3 font-headings text-xl leading-7 tracking-tight font-semibold border-t-2 border-prim-600">1</div>
        <div className="Number / bg-prim-100 text-neutrals-1000 px-4 py-3 font-headings text-xl leading-7 tracking-tight font-semibold border-t-2 border-prim-100 hover:cursor-pointer hover:text-prim-500 hover:border-t-2 hover:border-prim-400">2</div>
        <div className="Number / bg-prim-100 text-neutrals-1000 px-4 py-3 font-headings text-xl leading-7 tracking-tight font-semibold border-t-2 border-prim-100 hover:cursor-pointer hover:text-prim-500 hover:border-t-2 hover:border-prim-400">3</div>
        <div className="Number / bg-prim-100 text-neutrals-1000 px-4 py-3 font-headings text-xl leading-7 tracking-tight font-semibold border-t-2 border-prim-100 hover:cursor-pointer hover:text-prim-500 hover:border-t-2 hover:border-prim-400">4</div> */}
    </div>
  )
}