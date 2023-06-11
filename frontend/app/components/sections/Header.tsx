// Types
import { HeaderProps } from "@/types/sections/Header";



export default function Header({ data }: HeaderProps) {
  return (
    <div className="Header / pt-14 pb-12 / lg:py-0">
      <div className="Container / px-4 / sm:px-12 / md:px-0 md:max-w-[784px] md:mx-auto / lg:max-w-[834px] lg:py-20 / xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-400 xl:px-[222px]">
        <h1 className="h h1 / mb-4 / xl:mb-6">{data.title}</h1>
        <p className="p / md:max-w-[690px]">{data.text}</p>
      </div>
    </div>
  );
}
