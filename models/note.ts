import { NoteColor } from "./enums/note-color.enum";

export class Note {
    color: NoteColor = NoteColor.BLUE;
    constructor(
        public position: number,
        public titel: string,
        public description: string) {
    }

}