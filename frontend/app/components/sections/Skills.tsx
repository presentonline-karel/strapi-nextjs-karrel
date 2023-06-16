// Types
import { SkillsProps } from "@/types/sections/Skills";
import { SkillProps } from "@/types/Skill";
import Skill from "../organisms/Skill";



export default function Skills({ data }: SkillsProps) {
  console.log(data.skills);

  return (
    <div className="Skills / py-14 bg-neutrals-200 / lg:py-0">
      <div className="Container / px-4 / sm:px-12 / lg:p-[120px] / xl:border-x-[0.4px] xl:border-neutrals-400 xl:max-w-[1440px] xl:mx-auto">
        <div className="Heading / mb-10 / md:text-center / lg:mb-16 / xl:mb-20">
          <div className="section__label">{data.label}</div>
          <h2 className="h h2 / mb-4 / md:max-w-[792px] md:mx-auto / xl:mb-6">{data.title}</h2>
          <p className="p / md:max-w-[792px] md:mx-auto">{data.text}</p>
        </div>

        <div className="Skills / flex flex-col gap-6 / md:flex-row">
          {data.skills.map((skill: SkillProps, index: number) => (
            <Skill key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
