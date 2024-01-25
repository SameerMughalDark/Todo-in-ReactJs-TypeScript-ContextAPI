import { createContext } from "react";

export type myTodoTypes = {
    id: string,
    todoText: string,
    completed: boolean,
    cretedAt:  Date,
}
type todoContextValuesType = {
    todo: myTodoTypes[];
}

const TodoContext=createContext<todoContextValuesType | any>(null);


export default TodoContext;