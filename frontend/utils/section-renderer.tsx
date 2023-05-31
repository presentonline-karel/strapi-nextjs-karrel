// Sections
import HeroPrimary from "@/app/components/sections/HeroPrimary";
import Skills from "@/app/components/sections/Skills";



export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero-primary":
      return <HeroPrimary key={index} data={section} />;
    case "sections.skills":
      return <Skills key={index} />;
    default:
      return <div key={index}>No data</div>;
  }
}