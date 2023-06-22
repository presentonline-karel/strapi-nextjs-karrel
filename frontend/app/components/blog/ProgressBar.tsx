// Utils
import useReadingProgress from "@/utils/useReadingProgress";

export default function ProgressBar() {
  const completion = useReadingProgress();

  return (
    <div className="relative">
      <div
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="ProgressBar / absolute bg-prim-500 h-1 w-full bottom-0"
      />
    </div>
  )
}
