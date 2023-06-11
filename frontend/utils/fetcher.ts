// Get data from Strapi
export async function fetcher(url: string, options = {}) {
	let response;

	if (!options) {
		response = await fetch(url);
	} else {
		response = await fetch(url, options);
	}

	const data = response.json();
	return data;
}



// Get Strapi media
export function getStrapiMedia(url: string | null) {
	if (url == null) {
		return null;
	}

	// Return the full URL if the media is hosted on an external provider
	if (url.startsWith("http") || url.startsWith("//")) {
		return url;
	}

	// Otherwise prepend the URL path with the Strapi URL
	return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${url}`;
}
