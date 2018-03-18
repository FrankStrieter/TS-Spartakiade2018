import { Note } from "./note";
import { IamATodo } from ".";


export class NoteWithTodos extends Note {
    constructor(
        position: number,
        titel: string,
        description: string,
        public todos: IamATodo[]) {
            super(position,titel, description);
    }

    addTodo(options: {item: IamATodo, position: "last" | "first"}): void;
    addTodo(newTodo: IamATodo): void;
    addTodo(newTodo: IamATodo | {item: IamATodo, position: "last" | "first"}): void {
        if(this.isTodo(newTodo)) {
            this.todos.push(newTodo);
        } else {
            newTodo.position === "last" ?
                this.todos.push(newTodo.item) :
                this.todos.unshift(newTodo.item);
        }
    }

    isTodo(testValue: any): testValue is IamATodo {
        return ("title" in testValue && "checked" in testValue);

    }

}