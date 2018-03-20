import { Note } from ".";
import { NoteColor } from "./enums/note-color.enum";

describe("When a new Note is created", () => {
  describe("and no colorvalue is given", () => {
    test("the noteColor is set to BLUE", () => {
      const note: Note = new Note(42, "test", "test");
      expect(note.noteColor).toEqual(NoteColor.BLUE);
    });
  });
  describe("and a color colorvalue except blue is given", () => {
    test("the color value is set to the given value", () => {
      const note: Note = new Note(42, "test", "test", NoteColor.YELLOW);
      expect(note.noteColor).not.toEqual(NoteColor.BLUE);
      expect(note.noteColor).toEqual(NoteColor.YELLOW);
    });
  });
});
