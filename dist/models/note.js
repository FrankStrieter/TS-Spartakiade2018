"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var note_color_enum_1 = require("./enums/note-color.enum");
var Note = /** @class */ (function () {
    function Note(position, titel, description) {
        this.position = position;
        this.titel = titel;
        this.description = description;
        this.color = note_color_enum_1.NoteColor.BLUE;
    }
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=note.js.map