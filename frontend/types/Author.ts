// Imported types
import { Picture } from "./Picture";



export interface Author {
	data: {
        id: number;
        attributes: {
            name: string;
            function: string;
            avatar: Picture;
        }
    }
}