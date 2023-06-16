// Blog components
import BlogImage from "@/app/components/blog/blogImage";
import BlogSubtitle from "@/app/components/blog/blogSubtitle";
import BlogRichText from "@/app/components/blog/blogRichText";



export function articleBlocksRenderer(block: any, index: number) {
  switch (block.__component) {
    case "shared.media":
      return <BlogImage key={index} data={block.file.data} />;
    case "shared.subtitle":
      return <BlogSubtitle key={index} {...block} />;
    case "shared.rich-text":
      return <BlogRichText key={index} {...block} />;
    default:
      return <div key={index} className="bg-red-200">No data</div>;
  }
}