export function renderButtonStyle(type: String) {
	switch (type) {
		case "primary":
			return "px-8 py-3 primary button styles/classes";
		case "secondary":
			return "px-8 py-3 secondary button styles/classes";
		default:
			return "px-8 py-3 primary button styles/classes";
	}
}