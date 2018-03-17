// type Note = {titel: string, description: string};

class Note {
    constructor(
        public titel: string,
        public description: string) {
    }
}

class NoteWithTodos extends Note {
    constructor(
        titel: string,
        description: string,
        public todos: Todo[]) {
            super(titel, description);
    }
}

// tslint:disable-next-line:interface-name
interface Todo {
    title: string;
    checked: boolean;
}

const note: Note  = new Note("spartakiade", "Hello Developer");
const noteWithTodo: NoteWithTodos = new NoteWithTodos(
    "Typescript ist Toll",
    "das ist wirklich so",
    [
        {
        title: "Doku lesen",
        checked: true
    }
    ]);

const notes: Note[] = [new Note("Developer OpenSpace", "42"),note];



console.log(notes[0].titel, notes[1].titel);