// Imported types
import { Button } from "../Button";
import { Picture } from "../Picture";



export interface TextImageProps {
	data: {
		id: string;
		label: string;
		title: string;
		text: string;
		buttons: Button[];
		image: Picture;
	};
}