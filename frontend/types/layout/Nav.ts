// Imported types
import { LinkProps } from "next/link";
import { Picture } from "../Picture";
import { Platform } from "../Platform";



export interface NavbarProps {
	data: {
		attributes: {
			navbar: {
				navbarLogo: {
					logoImg: Picture;
				};
				links: LinkProps[];
			};
			footer: {
				footerLogo: {
					logoImg: {
						data: {
							attributes: {
								url: string;
								alternativeText: string;
							};
						};
					};
				};
			};
			contactInfo: {
				email: string;
				phone: string;
			};
			copyrightText: string;
			socials: Platform[];
		};
	};
}
