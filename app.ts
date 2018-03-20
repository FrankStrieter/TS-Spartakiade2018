// type Note = {titel: string, description: string};
import { Note, NoteWithTodos, IamATodo, IamAnArchivedElement } from "./models";
import { NotesService } from "./services/note.service";
import { pluralize } from "./utils/modifiers/pluralize.template";
import { reverse } from "./utils/modifiers/reverse.generic";

const note: Note = new Note(3, "spartakiade", "Hello Developer");
const noteWithTodo: NoteWithTodos = new NoteWithTodos(
  1,
  "Typescript ist Toll",
  "das ist wirklich so",
  [
    {
      title: "Doku lesen",
      checked: true,
    },
  ]
);

noteWithTodo.addTodo({
  item: { title: "dependencies installieren", checked: false },
  position: "first",
});

const notesService: NotesService = new NotesService();
notesService.notes = [
  new Note(2, "Developer OpenSpace", "42"),
  note,
  noteWithTodo,
];

const archivedNote: Note & IamAnArchivedElement = Object.assign(note, {
  archiveId: 12,
});
// console.log(archivedNote);
// const sortArray: (notes: Note[]) => Note[] = (notes: Note[]) =>
// notes.sort((current, next)=> current.position-next.position);

// console.log(pluralize`NoteCount: ${notesService.notes.length} Notes`);
// console.log(pluralize`NoteCount: ${1} Notes`);
// console.log(reverse<Note>(notesService.notes));
// console.log(notesService.listTitles(" | "));
// [notesService.notes[0], notesService.notes[1]] = [notesService.notes[1], notesService.notes[0]];

// notesService.all((notes: Note[]) => {
//     console.log(notes);
// });

notesService.allAsPromise().then(notes => console.log(notes));

notesService.allAsync().then(apiNotes => {
  notesService.notes = apiNotes.map((apiNote: any) => {
    return new Note(apiNote.id, apiNote.title, apiNote.text);
  });
  console.log(notesService.notes);
});
