import { NoteColor } from "./enums/note-color.enum";

export class Note {
  constructor(
    public position: number,
    private _titel: string,
    public description: string,
    public noteColor: NoteColor = NoteColor.BLUE
  ) {
    console.log(this.titel);
  }

  get titel(): string {
    return this._titel;
  }

  set titel(titel: string) {
    this._titel = titel !== "" ? titel : this._titel;
  }
}
