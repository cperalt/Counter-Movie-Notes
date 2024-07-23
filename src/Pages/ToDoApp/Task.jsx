import trash from "../../assets/trash-icon.svg";
import editNote from "../../assets/editNote.svg";
import "../../Pages/Movie-App/movie.css"

function Task({task, deleteTodo, editTodo} ) {
    return (
        <div className="w-[42rem] flex flex-row max-w-xl overflow-scroll relative rounded-[0.9rem] justify-between bg-sky-950 mt-7">
            <p className="text-3xl text-yellow-500">{task.task}</p>
            <div className="flex flex-row">
                <img src={editNote} className="w-10" onClick={() => editTodo(task.id)} />
                <img src={trash} className="w-11" onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    )
}

export default Task
