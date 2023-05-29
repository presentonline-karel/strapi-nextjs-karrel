import HeroPrimary from "@/app/components/HeroPrimary";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero-primary":
      return <HeroPrimary key={index} data={section} />
    default:
      return null;
  }
}