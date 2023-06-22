// Types
import { HeaderProps } from "@/types/sections/Header";



export default function Header({ data }: HeaderProps) {
  return (
    <div className="Header / pt-[136px] pb-12 relative z-0 top-0 / sm:pt-40 / md:pt-[184px] / lg:py-0">
      <div className="Container / px-4 / sm:px-12 / md:px-0 md:max-w-[784px] md:mx-auto / lg:max-w-[834px] lg:pb-20 lg:pt-[201px] / xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-400 xl:px-[222px] xl:pt-56">
        <h1 className="h h1 / mb-4 / xl:mb-6">{data.title}</h1>
        <p className="p / md:max-w-[690px]">{data.text}</p>
      </div>
    </div>
  );
}
