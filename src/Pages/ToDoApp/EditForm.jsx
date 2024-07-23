
import { useState } from "react"


function EditToDoForm({editTodo, task}) {
    
    const [value, setValue] = useState("")
    
    const handleSubmit = event => {
        event.preventDefault();
        editTodo(value, task.id)
        setValue("")
    }

    return (
        <form className="mt-24 flex justify-center" onSubmit={handleSubmit}>
            <input type="text" placeholder="Edit the selected Task" onChange={(event) => setValue(event.target.value)} value={value} className="input tracking-widest text-yellow-500 input-bordered w-full max-w max-w-xl border-yellow-500 text-lg" />           
            <button type="submit" className="btn btn-warning ml-3">Update</button>
        </form>
    )
}

export default EditToDoForm
