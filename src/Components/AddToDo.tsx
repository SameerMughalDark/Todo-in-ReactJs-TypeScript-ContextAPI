import { useContext, useState } from "react"
import TodoContext from "../Context/TodoContext";

const AddToDo = () => {




    const [textFieldData,setTextFieldData]=useState("");

    const {handleAddTodo}=useContext(TodoContext);

   

    const handleFormSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleAddTodo(textFieldData);
        setTextFieldData("")
    }
   
  return (
    <>
    <form action="#"className="addTodoForm" onSubmit={handleFormSubmit}>
        <div>
            <input type="text" name="text" id="utext" value={textFieldData} onChange={(e)=>setTextFieldData(e.target.value)} placeholder="Enter Your TODO-Task Here!"/>
            <button type="submit">Add-Note</button>
        </div>
    </form>

    </>
  )
}

export default AddToDo
