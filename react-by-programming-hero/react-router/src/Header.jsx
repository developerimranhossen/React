import { Link, NavLink } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <nav>
        <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/friends">Friends</NavLink>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Header