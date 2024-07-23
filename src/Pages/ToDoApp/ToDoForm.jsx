import { useState } from "react"


function ToDoForm({addTodo}) {
    
    const [value, setValue] = useState("")
    
    const handleSubmit = event => {
        event.preventDefault();
        (value.length !== 0) ?  addTodo(value) :
        alert('Invalid Entry')
        setValue("")
    }

    return (
        <form className="mt-24 flex justify-center" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a task..." onChange={(event) => setValue(event.target.value)} value={value} className="input tracking-widest text-yellow-500 input-bordered w-full max-w max-w-xl border-yellow-500 text-lg" />           
            <button type="submit" className="btn btn-warning ml-3">Add</button>
        </form>
    )
}

export default ToDoForm
