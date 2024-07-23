import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li className="text-yellow-500"><NavLink to="/movie-app">Movie Search</NavLink></li>
                <li>
                  <NavLink>To-Do App</NavLink>
                  <ul className="p-2">
                    <li><NavLink>Submenu 1</NavLink></li>
                    <li><NavLink>Submenu 2</NavLink></li>
                  </ul>
                </li>
              </ul>
            </div>
            <NavLink to="/" className="btn btn-ghost text-5xl text-yellow-500">React Week 3 GI</NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="text-yellow-500 text-xl"><NavLink to="movie-app">Movie Search</NavLink></li>
              <li className="text-yellow-500 text-xl"><NavLink to="to-do">To-Do List</NavLink></li>
            </ul>
          </div>
        </div>
    )
}

export default Nav
