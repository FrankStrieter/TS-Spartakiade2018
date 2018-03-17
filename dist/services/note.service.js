"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotesService = /** @class */ (function () {
    function NotesService() {
        this.notes = [];
    }
    NotesService.prototype.addNote = function (notes) {
        var _this = this;
        if (Array.isArray(notes)) {
            notes.forEach(function (element) {
                return _this.notes.push(element);
            });
        }
        else {
            this.notes.push(notes);
        }
    };
    NotesService.prototype.sortNotes = function (notes) {
        return notes.sort(function (current, next) { return current.position - next.position; });
    };
    NotesService.prototype.listTitles = function (seperator) {
        return this.notes.map(function (note) {
            var elem = note.titel;
            elem = "Awsome!!!! " + elem;
            return elem;
        }).join(seperator || ",");
    };
    return NotesService;
}());
exports.NotesService = NotesService;
//# sourceMappingURL=note.service.js.map