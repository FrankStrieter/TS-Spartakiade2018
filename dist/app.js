"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
// type Note = {titel: string, description: string};
var models_1 = require("./models");
var note_service_1 = require("./services/note.service");
var pluralize_template_1 = require("./utils/modifiers/pluralize.template");
var note = new models_1.Note(3, "spartakiade", "Hello Developer");
var noteWithTodo = new models_1.NoteWithTodos(1, "Typescript ist Toll", "das ist wirklich so", [
    {
        title: "Doku lesen",
        checked: true
    }
]);
var notesService = new note_service_1.NotesService();
notesService.notes = [new models_1.Note(2, "Developer OpenSpace", "42"), note, noteWithTodo];
// const sortArray: (notes: Note[]) => Note[] = (notes: Note[]) =>
// notes.sort((current, next)=> current.position-next.position);
console.log(pluralize_template_1.pluralize(templateObject_1 || (templateObject_1 = __makeTemplateObject(["NoteCount: ", " Notes"], ["NoteCount: ", " Notes"])), notesService.notes.length));
console.log(pluralize_template_1.pluralize(templateObject_2 || (templateObject_2 = __makeTemplateObject(["NoteCount: ", " Notes"], ["NoteCount: ", " Notes"])), 1));
console.log(notesService.listTitles(" | "));
var templateObject_1, templateObject_2;
//# sourceMappingURL=app.js.map