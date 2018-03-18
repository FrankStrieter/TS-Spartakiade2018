import { Note } from "../models";

export class NotesService {
	notes: Note[];

	constructor() {
		this.notes = [];
	}

	addNote(notes: Note | Note[]): void {
		if (Array.isArray(notes)) {
			notes.forEach(element => this.notes.push(element));
		} else {
			this.notes.push(notes);
		}
	}

	sortNotes(notes: Note[]): Note[] {
		return notes.sort((current, next) => current.position - next.position);
	}

	listTitles(seperator?: string): string {
		return this.notes
			.map(note => {
				let elem: string = note.titel;
				elem = "Awsome!!!! " + elem;
				return elem;
			})
			.join(seperator || ",");
	}
}
