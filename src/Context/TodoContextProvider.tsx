import { ReactNode, useState } from "react"
import TodoContext from "./TodoContext";

// types defines here
type childrenType = {
    children: ReactNode,
}
type myTodoTypes = {
    id: string;
    todoText: string;
    completed: boolean;
    cretedAt: Date;
}


const TodoContextProvider = ({ children }: childrenType) => {

    const [todo, setTodo] = useState<myTodoTypes[]>([])

    const handleAddTodo = (todoText: string) => {

        setTodo((prev) => {
            const newTodos: myTodoTypes[] = [
                {
                    id: Math.random().toString(),
                    todoText: todoText,
                    completed: false,
                    cretedAt: new Date(),

                },
                ...prev
            ]
            return newTodos
        })
    }

    // taskcompleted toggle checkbox function is here
    const todoTaskCompleted=(taskid:string)=>{
        setTodo((prev)=>{
            const newTodo=prev.map((item)=>{
                if(item.id==taskid){
                    return {...item, completed:!item.completed};
                }
                return item;
            })
            return newTodo;
        }
        )
    }
    // taskDeleted handling function is here
    const handleDelete=(taskid:string)=>{
       setTodo((prev)=>{
            const  newTodo=prev.filter((item)=>{
                return item.id!==taskid;
            })
            return newTodo;
       }
       )
    }


    return (
        <>
            <TodoContext.Provider value={{ todo , handleAddTodo,todoTaskCompleted ,handleDelete}}>
                {children}
            </TodoContext.Provider>
        </>
    )
}

export default TodoContextProvider;