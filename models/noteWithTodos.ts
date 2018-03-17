import { Note } from "./note";
import { IamATodo } from ".";


export class NoteWithTodos extends Note {
    constructor(
        position: number,
        titel: string,
        description: string,
        public todos: IamATodo[]) {
            super(position,titel, description);
    }
}