import { useContext } from "react"
import TodoContext, { myTodoTypes } from "../Context/TodoContext"
import { useSearchParams } from "react-router-dom";

export default function TodosList() {
  const { todo, todoTaskCompleted, handleDelete } = useContext(TodoContext)
  let todosData = todo;


  const [urlParams] = useSearchParams();
  const todosStatus = urlParams.get("td");

  //routing logic is showing here!
  if (todosStatus === "active") {
    todosData = todosData.filter((items: myTodoTypes) => {
      return items.completed === false;
    })
  }

  if (todosStatus === "completed") {
    todosData = todosData.filter((items: myTodoTypes) => {
      return items.completed === true;
    })
  }


  return (
    <>
      {/* out to do list data is showing here in this component */}
      <div className="todosDiv">

        <h2>Task List is Here!</h2>
        {todosData.length === 0 ? <h4 >No Record to Show Please Be First to Enter the Your TODO's!</h4> : <h4 >Total Tasks are:{todosData.length} </h4>}
        {todosData.map((items: myTodoTypes) => {
          return <div className="todoItemsDivs" key={`${items.id}` + 1}>
            <li className="todosListInMAP">
              <input type="checkbox" name={items.id} id={items.id} onChange={() => { todoTaskCompleted(items.id) }} />
              <label style={items.completed ? { textDecoration: 'line-through' } : {}} htmlFor={items.id}>  {items.todoText}</label>
              {items.completed && <button type="button" onClick={() => { handleDelete(items.id) }}>Delete it</button>}
            </li>
          </div>
        })}
      </div>
    </>
  )
}

