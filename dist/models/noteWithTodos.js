"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var note_1 = require("./note");
var NoteWithTodos = /** @class */ (function (_super) {
    __extends(NoteWithTodos, _super);
    function NoteWithTodos(position, titel, description, todos) {
        var _this = _super.call(this, position, titel, description) || this;
        _this.todos = todos;
        return _this;
    }
    return NoteWithTodos;
}(note_1.Note));
exports.NoteWithTodos = NoteWithTodos;
//# sourceMappingURL=noteWithTodos.js.map