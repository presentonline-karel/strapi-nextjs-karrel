// Blog components
import blogImage from "@/app/components/blog/blogImage";
import blogSubtitle from "@/app/components/blog/blogSubtitle";
import blogRichText from "@/app/components/blog/blogRichText";



export function articleBlocksRenderer(block: any, index: number) {
  switch (block.__component) {
    case "shared.media":
      return <blogImage key={index} data={block.file.data} />;
    case "shared.subtitle":
      return <blogSubtitle key={index} {...block} />;
    case "shared.rich-text":
      return <blogRichText key={index} {...block} />;
    default:
      return <div key={index} className="bg-red-200">No data</div>;
  }
}