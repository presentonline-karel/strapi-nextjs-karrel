"use client";

// Next
import Image from "next/image";
import Link from "next/link";

// React
import { useState, useEffect } from "react";

// FontAwesome
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Utils
import { fetcher } from "@/utils/fetcher";

export default function Nav() {
  /*const [globalVars, setGlobalVars] = useState([]);

  async function getGlobalVars() {
    const resp = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/global?populate[navbar][populate]=*&populate[navbar][navbarLogo][populate]=images`);
    setGlobalVars(resp.data.attributes);
  }

  useEffect(() => {
    getGlobalVars();
    console.log(globalVars);
  }, []);*/

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="Nav / md:border-neutrals-400">

      {/* Container */}
      <div className="Container / py-5 px-4 / sm:px-12 sm:py-8 / md:flex md:justify-between md:items-center md:py-8 md:px-12 md:border-b-[0.4px] / lg:py-10 lg:px-[120px] / xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-400">

        {/* Top */}
        <div className="flex justify-between items-center">
          <Link href={`/`}>
            <div className="Logo / relative w-[102px] h-[40px] / xl:w-[164px] xl:h-[64px]">
              <Image
                src="/Karrel-Logo-Dark.png"
                alt="Karrel logo"
                fill={true}
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
                src="/Karrel-Logo-Light.png"
                alt="Karrel logo"
                width={102}
                height={40}
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
              <Link
                href={`/`}
                className="Menu-Item / block text-3xl font-headings font-medium text-neutrals-100 tracking-tight"
              >
                <span className="Number / text-sm font-normal text-prim-500 pr-3">
                  01.
                </span>
                Home
              </Link>
              <Link
                href={`/`}
                className="Menu-Item / block text-3xl font-headings font-medium text-neutrals-100 tracking-tight"
              >
                <span className="Number / text-sm font-normal text-prim-500 pr-3">
                  02.
                </span>
                About
              </Link>
              <Link
                href={`/`}
                className="Menu-Item / block text-3xl font-headings font-medium text-neutrals-100 tracking-tight"
              >
                <span className="Number / text-sm font-normal text-prim-500 pr-3">
                  03.
                </span>
                Blog
              </Link>
              <Link
                href={`/`}
                className="Menu-Item / block text-3xl font-headings font-medium text-neutrals-100 tracking-tight"
              >
                <span className="Number / text-sm font-normal text-prim-500 pr-3">
                  04.
                </span>
                Contact
              </Link>
            </div>

            <div className="Socials / mb-20">
              <Link
                href={`/`}
                className="Menu-Item / block text-3xl font-headings font-medium text-neutrals-100 mb-5 tracking-tight"
              >
                <span className="Number / text-sm font-normal text-prim-500 pr-3">
                  00.
                </span>
                Socials
              </Link>

              <div className="Socials / pl-[34px] flex items-center gap-6">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="Social / text-2xl text-neutrals-100"
                />
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="Social / text-2xl text-neutrals-100"
                />
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="Social / text-2xl text-neutrals-100"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="Social / text-2xl text-neutrals-100"
                />
              </div>
            </div>

            <div className="Contact-Links /">
              <Link
                href={`mailto:info@karrel.be`}
                className="mb-3 text-xl text-neutrals-100 flex items-center gap-5 tracking-tight font-headings"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-sm text-prim-500"
                />
                info@karrel.be
              </Link>
              <Link
                href={`tel:+32476280902`}
                className="text-xl text-neutrals-100 flex items-center gap-5 tracking-tight font-headings"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-sm text-prim-500"
                />
                +32 476 28 09 02
              </Link>
            </div>
          </div>

          <div className="Copyright / text-center">
            <p className="font-paragraphs text-sm text-neutrals-100">
              ©2023 Karel - All rights reserved.
            </p>
          </div>
        </div>

        {/* Links md & upwards */}
        <div className="hidden / md:flex">
          <div className="Menu-Items / flex justify-center items-center gap-8 / lg:gap-10">
            <Link
              href={`/`}
              className="Menu-Item / block text-xl font-headings font-semibold text-neutrals-1100 tracking-tight / hover:text-prim-500 / lg:text-2xl"
            >
              <span className="Number / text-sm font-normal text-prim-500 pr-3">
                01.
              </span>
              Home
            </Link>
            <Link
              href={`/`}
              className="Menu-Item / block text-xl font-headings font-semibold text-neutrals-1100 tracking-tight / hover:text-prim-500 / lg:text-2xl"
            >
              <span className="Number / text-sm font-normal text-prim-500 pr-3">
                02.
              </span>
              About
            </Link>
            <Link
              href={`/`}
              className="Menu-Item / block text-xl font-headings font-semibold text-neutrals-1100 tracking-tight / hover:text-prim-500 / lg:text-2xl"
            >
              <span className="Number / text-sm font-normal text-prim-500 pr-3">
                03.
              </span>
              Blog
            </Link>
            <Link
              href={`/`}
              className="Menu-Item / block text-xl font-headings font-semibold text-neutrals-1100 tracking-tight / hover:text-prim-500 / lg:text-2xl"
            >
              <span className="Number / text-sm font-normal text-prim-500 pr-3">
                04.
              </span>
              Contact
            </Link>
          </div>
        </div>

        {/* Desktop CTA */}
        <Link
          href={`mailto:info@karrel.be`}
          className="Desktop-CTA / hidden / hover:text-prim-500 / md:text-neutrals-1100 md:flex md:items-center md:gap-3 md:tracking-tight / lg:text-lg / xl:text-xl"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-sm text-prim-500"
          />
          info@karrel.be
        </Link>
      </div>
    </nav>
  );
}
