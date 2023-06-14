// Imported types
import { Button } from "../Button";



export interface CtaProps {
    data: {
        title: string;
        text: string;
        greyBgColor: boolean;
        buttons: Button[];
    }
}