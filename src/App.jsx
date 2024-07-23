import { BrowserRouter, Routes , Route } from "react-router-dom";
import Counter from "./Pages/Counter"
import Nav from "./Components/Nav.jsx"
import MovieApp from './Pages/Movie-App/Movie.jsx';
import ToDoApp from "./Pages/ToDoApp/ToDoApp.jsx";

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="movie-app" element={<MovieApp />} />
        <Route path="to-do" element={<ToDoApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
