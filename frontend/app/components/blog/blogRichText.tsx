// ReactMarkDown
import ReactMarkdown from "react-markdown";

// Types
interface BlogRichTextProps {
  body: string;
}



export default function blogRichText({ body }: BlogRichTextProps) {
  return (
    <ReactMarkdown className="p / mb-10 / xl:mb-12">{body}</ReactMarkdown>
  )
}