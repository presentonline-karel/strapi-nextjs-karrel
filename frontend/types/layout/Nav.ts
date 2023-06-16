// Imported types
import { LinkProps } from "next/link";



export interface NavbarProps {
	data: {
		attributes: {
			navbar: {
				navbarLogo: {
					logoImg: {
						data: {
							attributes: {
								url: string;
								alternativeText: string;
							};
						};
					};
				},
				links: LinkProps[],
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
		};
	};
}
