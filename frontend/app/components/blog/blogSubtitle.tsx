// Types
interface BlogSubtitleProps {
  title: string;
}

export default function blogSubtitle({ title }: BlogSubtitleProps) {
  return (
    <h2 className="h h2 / xl:text-4xl">{title}</h2>
  )
}