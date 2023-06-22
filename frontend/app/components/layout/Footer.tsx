"use client";

// Next
import Image from "next/image";
import Link from "next/link";

// React
import { useState, useEffect } from "react";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// Utils
import { fetcher, getStrapiMedia } from "@/utils/fetcher";
import { renderPlatformIcon } from "@/utils/render-platform-icon";

// Types
import { FooterProps } from "@/types/layout/Footer";
import { LinkType } from "@/types/Link";
import { Platform } from "@/types/Platform";



export default function Footer() {
  const [footerData, setFooterData] = useState<FooterProps>();

  // Qs
  const qs = require("qs");

  async function getFooter() {
    const queryParams = () => qs.stringify(
      {
        populate: {
          footer: {
            populate: {
              footerLogo: {
                populate: "*"
              },
              menuLinks: {
                populate: "*"
              },
              legalLinks: {
                populate: "*"
              }
            }
          },
          socials: {
            populate: "*",
          }
        }
      }
    )

    const CONTENT_TYPE = "global";
    const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}?`;

    const QUERY_1 = BASE_URL + queryParams();
    const resp = await fetcher(QUERY_1);

    if (resp.data.length === 0) return null;

    setFooterData(resp);
  }

  // Execute function
  useEffect(() => {
    getFooter();
  }, []);



  return (
    <>
      {footerData != null && (
        <footer className="Footer / bg-neutrals-1000 pt-12 pb-4 / lg:!py-0">
          <div className="Container / px-4 flex flex-col gap-4 items-center relative / sm:px-12 / lg:px-[120px] lg:pt-20 lg:pb-8 lg:gap-8 / xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-900">
            <div className="Content / pb-8 border-b-[1px] border-neutrals-800 flex flex-col gap-10 w-full / md:flex-row md:pr-[207px] md:justify-between / lg:pb-14">
              <div className="Company / sm:max-w-[343px]">
                <div className="Logo / relative w-[102px] h-10 mb-8 / xl:w-40 xl:h-16">
                  <Image
                    src={getStrapiMedia(footerData.data.attributes.footer.footerLogo.logoImg.data.attributes.url) || ""}
                    alt={footerData.data.attributes.footer.footerLogo.logoImg.data.attributes.alternativeText || "none provided"}
                    fill={true}
                    className=""
                  />
                </div>

                <p className="p / mb-5 text-neutrals-400 / xl:mb-8">{footerData.data.attributes.companyText}</p>

                <div className="Socials / flex items-center gap-6 / xl:gap-8">
                  {footerData.data.attributes.socials.map((platform: Platform, index: number) => (
                    <Link href={`${platform.url}`} target="_blank">
                      <FontAwesomeIcon
                        icon={renderPlatformIcon(platform.platform)}
                        className="Social / text-2xl text-neutrals-100 / xl:text-3xl xl:leading-8"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="Links / flex gap-2 / md:gap-16 / lg:gap-20 / xl:gap-28">
                <div className="Sitemap / w-1/2">
                  <h4 className="h h4 / text-neutrals-200 mb-4 / xl:mb-5 xl:text-2xl xl:leading-8">Sitemap</h4>

                  <div className="flex flex-col gap-1 / xl:gap-2">
                    {footerData.data.attributes.footer.menuLinks.map((link: any, index: number) => (
                      <Link
                        href={`${link.url}`}
                        className="block font-headings text-base leading-6 text-neutrals-200 whitespace-nowrap / xl:text-xl xl:leading-7"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="Conditions / w-1/2">
                  <h4 className="h h4 / text-neutrals-200 mb-4 / xl:mb-5 xl:text-2xl xl:leading-8">Conditions</h4>

                  <div className="flex flex-col gap-1 / xl:gap-2">
                    {footerData.data.attributes.footer.legalLinks.map((link: any, index: number) => (
                      <Link
                        href={`${link.url}`}
                        className="block font-headings text-base leading-6 text-neutrals-200 whitespace-nowrap / xl:text-xl xl:leading-7"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="Copyright">
              <p className="p / text-neutrals-400 / xl:text-base xl:leading-6">{footerData.data.attributes.copyrightText}</p>
            </div>

            <Link href={`#`} className="absolute top-2 right-4 / sm:right-12 / lg:right-[120px] lg:top-20">
              <FontAwesomeIcon icon={faArrowUp} className="text-neutrals-100 text-2xl leading-6 / xl:text-3xl xl:leading-8" />
            </Link>
          </div>
        </footer>
      )}
    </>
  )
}