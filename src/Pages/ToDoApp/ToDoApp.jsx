import { useState} from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import EditToDoForm from "./EditForm";
uuidv4();

function ToDoApp() {
    // const [tasks, setTasks] = useState([]);
    // const [newTask, setNewTask] = useState("");
    const [todos, setTodos] = useState([]);
  
    const addTodo = todo => {
      setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
      console.log(todos)
    }
  
    const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id))
    }
  
    const editToDo = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }
  
    return (
    <div>
      <ToDoForm  addTodo={addTodo}/>
      <div className="flex items-center justify-center">
        <div className="w-[42rem] max-w-xl overflow-scroll relative rounded-[0.9rem]">
          {todos.map((todo, index) => (
            todo.isEditing ? (
              <EditToDoForm />
            ) : (
              <Task task={todo} key={index} deleteTodo={deleteTodo} editToDo={editToDo} />
            )
          ))}
        </div>
      </div>
    </div>
    )
    
}





export default ToDoApp
