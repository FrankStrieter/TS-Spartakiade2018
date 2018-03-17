"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pluralize(strings) {
    var expressions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        expressions[_i - 1] = arguments[_i];
    }
    var firstString = strings[0];
    var pluralizedNoteString = expressions[0] === 1 ? "Note" : "Notes";
    return firstString + " " + expressions[0] + " " + pluralizedNoteString;
}
exports.pluralize = pluralize;
//# sourceMappingURL=pluralize.template.js.map