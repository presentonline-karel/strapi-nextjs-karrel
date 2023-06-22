// Imported types
import { LinkProps } from "next/link";
import { Picture } from "../Picture";
import { Platform } from "../Platform";



export interface FooterProps {
    data: {
        attributes: {
            footer: {
                footerLogo: {
                    logoImg: Picture;
                };
                menuLinks: LinkProps[];
                legalLinks: LinkProps[];
            };
            copyrightText: string;
            companyText: string;
			socials: Platform[];
        }
    }
}