// Next.js
import Link from "next/link";

// FontAwesome
import { faPen, faArrowRight, faKeyboard, faCamera, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Types
import { SkillProps } from "@/types/Skill";



export default function Skill({ icon, title, text }: SkillProps) {
  function renderIcon (type: string) {
    switch (icon) {
      case "pencil":
        return <FontAwesomeIcon icon={faPen} className="text-sm leading-[22px] text-prim-500 / xl:text-lg xl:leading-8" />;
      case "keyboard":
        return <FontAwesomeIcon icon={faKeyboard} className="text-sm leading-[22px] text-prim-500  / xl:text-lg xl:leading-8" />;
      case "camera":
        return <FontAwesomeIcon icon={faCamera} className="text-sm leading-[22px] text-prim-500 / xl:text-lg xl:leading-8" />;
      default:
        return <FontAwesomeIcon icon={faCheck} className="text-sm leading-[22px] text-prim-500 / xl:text-lg xl:leading-8" />;
    }
  }

  return (
    <div className="Skill / py-5 px-4 bg-neutrals-100 border-[0.4px] border-neutrals-400 rounded shadow-card">
      <div className="Content /">
        <div className="Heading / flex gap-3 justify-start items-baseline mb-4 / xl:gap-4 xl:mb-5">
          {renderIcon(icon)}
          <h3 className="h h3 / xl:text-3xl">{title}</h3>
        </div>

        <p className="p / mb-5 / xl:text-base xl:mb-8">{text}</p>

        <Link href={`#`} className="Link / flex items-center gap-2 text-neutrals-1100 font-headings text-base leading-6 font-semibold tracking-tight">
          Read more
          <FontAwesomeIcon icon={faArrowRight} className="text-sm leading-6 text-prim-500" />
        </Link>
      </div>
    </div>
  )
}