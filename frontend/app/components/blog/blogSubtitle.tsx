// Types
interface BlogSubtitleProps {
  title: string;
}

export default function BlogSubtitle({ title }: BlogSubtitleProps) {
  return (
    <h2 className="h h2 / xl:text-4xl">{title}</h2>
  )
}