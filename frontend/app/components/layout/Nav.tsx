"use client";

// Next
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

// React
import { useState, useEffect } from "react";

// FontAwesome
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Utils
import { fetcher, getStrapiMedia } from "@/utils/fetcher";
import { renderPlatformIcon } from "@/utils/render-platform-icon";

// Types
import { NavbarProps } from "@/types/layout/Nav";
import { LinkType } from "@/types/Link";
import { Platform } from "@/types/Platform";

// Components
import ProgressBar from "@/app/components/blog/ProgressBar";



export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navData, setNavData] = useState<NavbarProps>();

  // Active menu item
  const pathname = usePathname();

  // Qs
  const qs = require("qs");

  async function getNavBar() {
    const queryParams = () =>
      qs.stringify({
        populate: {
          navbar: {
            populate: {
              navbarLogo: {
                populate: "*",
              },
              links: {
                populate: "*",
              },
            },
          },
          footer: {
            populate: {
              footerLogo: {
                populate: "*",
              },
            },
          },
          contactInfo: {
            populate: "*",
          },
          socials: {
            populate: "*",
          },
        },
      });

    const CONTENT_TYPE = "global";
    const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${CONTENT_TYPE}?`;

    const QUERY_1 = BASE_URL + queryParams();
    const resp = await fetcher(QUERY_1);

    if (resp.data.length === 0) return null;

    setNavData(resp);
  }

  // Execute function
  useEffect(() => {
    getNavBar();
  }, []);

  return (
    <>
      {navData != null && (
        <nav className="Nav / fixed top-0 left-0 w-full z-10 bg-neutrals-100 / md:border-neutrals-400">
          {/* Container */}
          <div className="Container / py-5 px-4 / sm:px-12 sm:py-8 / md:flex md:justify-between md:items-center md:py-8 md:px-12 md:border-b-[0.4px] / lg:py-10 lg:px-[120px] / xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-400">
            {/* Top */}
            <div className="flex justify-between items-center">
              <Link href={`/`}>
                <div className="Logo / relative w-[102px] h-[40px] / xl:w-[164px] xl:h-[64px]">
                  <Image
                    src={
                      getStrapiMedia(
                        navData.data.attributes.navbar.navbarLogo.logoImg.data
                          .attributes.url
                      ) || ""
                    }
                    alt={
                      navData.data.attributes.navbar.navbarLogo.logoImg.data
                        .attributes.alternativeText || "none provided"
                    }
                    fill={true}
                    onClick={() => setMenuOpen(false)}
                  />
                </div>
              </Link>

              <Image
                onClick={() => setMenuOpen(true)}
                className="md:hidden"
                src="/Menu-Burger-Icon.svg"
                alt="Menu burger icon"
                width={16}
                height={8}
              />
            </div>

            {/* Sliding nav */}
            <div
              className={`Sliding-Nav / ${
                menuOpen
                  ? "translate-x-0"
                  : "translate-x-[271px] sm:translate-x-[384px]"
              } / fixed top-0 right-0 w-[271px] h-full bg-neutrals-1000 py-5 px-4 rounded-tl rounded-bl flex flex-col justify-between shadow-card z-10 / sm:py-8 sm:w-[384px] sm:px-12`}
            >
              <div className="Top /">
                <div className="Header / flex justify-between items-center mb-16">
                  <Image
                    src={
                      getStrapiMedia(
                        navData.data.attributes.footer.footerLogo.logoImg.data
                          .attributes.url
                      ) || ""
                    }
                    alt={
                      navData.data.attributes.footer.footerLogo.logoImg.data
                        .attributes.url || ""
                    }
                    width={102}
                    height={40}
                    onClick={() => setMenuOpen(false)}
                  />
                  <Image
                    onClick={() => setMenuOpen(false)}
                    src="/Menu-Cross-Icon.svg"
                    alt="Close menu cross icon"
                    width={14}
                    height={14}
                  />
                </div>

                <div className="Menu-Items / flex flex-col gap-4 mb-20">
                  {navData.data.attributes.navbar.links.map(
                    (link: any, index: number) => (
                      <Link
                        href={`${link.url}`}
                        className={`Menu-Item / ${
                          pathname == link.url ? "text-prim-500" : ""
                        } block text-3xl font-headings font-medium text-neutrals-100 tracking-tight`}
                        onClick={() => setMenuOpen(false)}
                        key={index}
                      >
                        <span className="Number / text-sm font-normal text-prim-500 pr-3">
                          0{index + 1}.
                        </span>
                        {link.text}
                      </Link>
                    )
                  )}
                </div>

                <div className="Socials / mb-20">
                  <div className="Menu-Item / block text-3xl font-headings font-medium text-neutrals-100 mb-5 tracking-tight">
                    <span className="Number / text-sm font-normal text-prim-500 pr-3">
                      00.
                    </span>
                    Socials
                  </div>

                  <div className="Socials / pl-[34px] flex items-center gap-6">
                    {navData.data.attributes.socials.map(
                      (platform: Platform, index: number) => (
                        <Link
                          href={`${platform.url}`}
                          target="_blank"
                          key={index}
                        >
                          <FontAwesomeIcon
                            icon={renderPlatformIcon(platform.platform)}
                            className="Social / text-2xl text-neutrals-100"
                          />
                        </Link>
                      )
                    )}
                  </div>
                </div>

                <div className="Contact-Links /">
                  {navData.data.attributes.contactInfo && (
                    <Link
                      href={`mailto:${navData.data.attributes.contactInfo.email}`}
                      className="mb-3 text-xl text-neutrals-100 flex items-center gap-5 tracking-tight font-headings"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-sm text-prim-500"
                      />
                      {navData.data.attributes.contactInfo.email}
                    </Link>
                  )}
                  {navData.data.attributes.contactInfo && (
                    <Link
                      href={`tel:${navData.data.attributes.contactInfo.phone}`}
                      className="text-xl text-neutrals-100 flex items-center gap-5 tracking-tight font-headings"
                    >
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-sm text-prim-500"
                      />
                      {navData.data.attributes.contactInfo.phone}
                    </Link>
                  )}
                </div>
              </div>

              <div className="Copyright / text-center">
                <p className="font-paragraphs text-sm text-neutrals-100">
                  {navData.data.attributes.copyrightText}
                </p>
              </div>
            </div>

            {/* Links md & upwards */}
            <div className="hidden / md:flex">
              <div className="Menu-Items / flex justify-center items-center gap-8 / lg:gap-10">
                {navData.data.attributes.navbar.links.map(
                  (link: any, index: number) => (
                    <Link
                      href={`${link.url}`}
                      className={`Menu-Item / ${
                        pathname == link.url ? "text-prim-600" : ""
                      } block text-xl font-headings font-semibold text-neutrals-1100 tracking-tight / hover:text-prim-500 / lg:text-2xl`}
                      key={index}
                    >
                      <span className="Number / text-sm font-normal text-prim-600 pr-3">
                        0{index + 1}.
                      </span>
                      {link.text}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Desktop CTA */}
            {navData.data.attributes.contactInfo && (
              <Link
                href={`mailto:${navData.data.attributes.contactInfo.email}`}
                className="Desktop-CTA / hidden / hover:text-prim-500 / md:text-neutrals-1100 md:flex md:items-center md:gap-3 md:tracking-tight / lg:text-lg / xl:text-xl"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-sm text-prim-500"
                />
                {navData.data.attributes.contactInfo.email}
              </Link>
            )}
          </div>

          <ProgressBar />
        </nav>
      )}
    </>
  );
}