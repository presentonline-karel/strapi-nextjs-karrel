export function formatMyDate(value: string, locale = "en-GB") {
	return new Date(value).toLocaleDateString(locale);
}
