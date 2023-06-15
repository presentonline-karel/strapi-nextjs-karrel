interface BlogSubtitleProps {
  data: {
    data: string;
  }
}

export default function BlogSubtitle(data: BlogSubtitleProps) {
  return (
    <h2 className="h h2 / xl:text-4xl">{data.data.toString()}</h2>
  )
}