// Blog components
import BlogImage from "@/app/components/blog/BlogImage";
import BlogSubtitle from "@/app/components/blog/BlogSubtitle";
import BlogRichText from "@/app/components/blog/BlogRichText";



export function articleBlocksRenderer(block: any, index: number) {
  switch (block.__component) {
    case "shared.media":
      /* return <blogImage key={index} data={block.file.data} />; */
      return <BlogImage key={index} data={block.file.data} />
    case "shared.subtitle":
      return <BlogSubtitle key={index} {...block} />;
    case "shared.rich-text":
      return <BlogRichText key={index} {...block} />;
    default:
      return <div key={index} className="bg-red-200">No data</div>;
  }
}