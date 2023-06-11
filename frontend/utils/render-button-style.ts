export function renderButtonStyle(type: String) {
	switch (type) {
		case "primary":
			return "btn btn--primary styles/classes";
		case "secondary":
			return "btn btn--secondary styles/classes";
		default:
			return "btn btn--primary styles/classes";
	}
}
