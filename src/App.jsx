import { ToDoList } from "./ToDoList";
import image from './todo.jpg';
import imageTwo from './done1.jpg';

import './App.css'

function App() {
  
  return (
   <div className="App">
    <img src={image} alt="todolist" width="500px" />
    <h1>ToDo List</h1>
     <ToDoList />
    <img src={imageTwo} alt="done" width="500px" />
   </div>
  )
}

export default App
