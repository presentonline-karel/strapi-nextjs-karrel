// Imported types
import { Picture } from "./Picture";
import { Author } from "./Author";
import { Category } from "./Category";



export interface BlogpostProps {
	id: number;
    attributes: {
        slug: string;
        cover: Picture;
        title: string;
        description: string;
        createdAt: string;
        author: Author;
        category: Category;
    }
}