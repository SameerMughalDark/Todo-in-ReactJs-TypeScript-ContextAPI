import AddToDo from './Components/AddToDo'
import Navbar from './Components/Navbar'
import TodosList from './Components/TodosList'
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />
        <AddToDo />
        <TodosList />
      </BrowserRouter>

    </>
  )
}

export default App
