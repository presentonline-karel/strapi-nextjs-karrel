// Heros & headers
import HeroPrimary from "@/app/components/sections/HeroPrimary";
import HeroSecondary from "@/app/components/sections/HeroSecondary";
import Header from "@/app/components/sections/Header";

// Content sections
import Skills from "@/app/components/sections/Skills";
import TextWithImage from "@/app/components/sections/TextWithImage";
import TextWithImageModified from "@/app/components/sections/TextWithImageModified";
import Cta from "@/app/components/sections/Cta";
import ContactForm from "@/app/components/sections/ContactForm";
import BlogPosts from "@/app/components/sections/Blogposts";
import RelatedArticles from "@/app/components/sections/RelatedArticles";



export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero-primary":
      return <HeroPrimary key={index} data={section} />;
    case "sections.hero-secondary":
      return <HeroSecondary key={index} />;
    case "sections.header":
      return <Header key={index} />;
    case "sections.skills":
      return <Skills key={index} />;
    case "sections.text-image":
      return <TextWithImage key={index} />;
    case "sections.text-image-modified":
      return <TextWithImageModified key={index} />;
    case "sections.cta":
      return <Cta key={index} />;
    case "sections.contact-form":
      return <ContactForm key={index} />;
    case "sections.blogposts":
      return <BlogPosts key={index} />;
    case "sections.related-articles":
      return <RelatedArticles key={index} />;
    default:
      return <div key={index} className="bg-red-200">No data</div>;
  }
}