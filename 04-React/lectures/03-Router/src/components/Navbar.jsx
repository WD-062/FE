import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-center bg-base-100 shadow-sm rounded-box">
        <li className="btn btn-ghost text-xl">
          <NavLink to="/" style={({isActive}) => isActive ? ({color: "red"}) : ({color: "black"})}>Home</NavLink>
        </li>
        <li className="btn btn-ghost text-xl">
          <NavLink to="/about" style={({isActive}) => isActive ? ({color: "red"}) : ({color: "black"})}>About</NavLink>
        </li>
        <li className="btn btn-ghost text-xl">
          <NavLink to="/contact" style={({isActive}) => isActive ? ({color: "red"}) : ({color: "black"})}>Contact</NavLink>
        </li>
        <li className="btn btn-ghost text-xl">
          <NavLink to="/students" style={({isActive}) => isActive ? ({color: "red"}) : ({color: "black"})}>Students</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
