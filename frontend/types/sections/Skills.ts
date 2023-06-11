// Imported types
import { SkillProps } from "../Skill";



export interface SkillsProps {
    data: {
        id: string;
        label: string;
        title: string;
        text: string;
        skills: SkillProps[];
    }
}