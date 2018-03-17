// type Note = {titel: string, description: string};
import { Note, NoteWithTodos, IamATodo } from "./models";
import { NotesService } from "./services/note.service";
import { pluralize } from "./utils/modifiers/pluralize.template";

const note: Note  = new Note(3,"spartakiade", "Hello Developer");
const noteWithTodo: NoteWithTodos = new NoteWithTodos(
    1,
    "Typescript ist Toll",
    "das ist wirklich so",
    [
        {
        title: "Doku lesen",
        checked: true
    }
    ]);

    const notesService: NotesService = new NotesService();
    notesService.notes = [new Note(2,"Developer OpenSpace", "42"),note,noteWithTodo];

// const sortArray: (notes: Note[]) => Note[] = (notes: Note[]) =>
// notes.sort((current, next)=> current.position-next.position);

console.log(pluralize `NoteCount: ${notesService.notes.length} Notes`);
console.log(pluralize `NoteCount: ${1} Notes`);
console.log(notesService.listTitles(" | "));