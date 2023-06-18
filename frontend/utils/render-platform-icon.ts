// FontAwesome
import {
	faInstagram,
	faFacebookF,
	faLinkedinIn,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";



export function renderPlatformIcon(platform: String) {
	switch (platform) {
		case "instagram":
			return faInstagram;
		case "facebook":
			return faFacebookF;
		case "linkedin":
			return faLinkedinIn;
		case "twitter":
			return faTwitter;
		default:
			return faEarthEurope;
	}
}
