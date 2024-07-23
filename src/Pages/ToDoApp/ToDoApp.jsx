import { useState, useRef } from "react";
import { useKey } from "../Movie-App/useKey";

function ToDoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    return (
        <div>
          {/* <NavBar>
            <Search query={query} setQuery={setQuery} />
          </NavBar> */}
        </div>
    )
}


// function NavBar({ children }) {
//   return (
//     <nav className="nav-bar">
//       {children}
//     </nav>
//   );
// }


// function Search({ query, setQuery }) {
//   const inputEl = useRef(null);

//   useKey("Enter", function () {
//     if (document.activeElement === inputEl.current) return;
//     inputEl.current.focus();
//     setQuery("");
//   });

//   return (
//     <input
//       className="search"
//       type="text"
//       placeholder="Enter a note"
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//       ref={inputEl}
//     />
//   );
// }



export default ToDoApp
