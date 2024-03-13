
import './NavBar.scss'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
                <NavLink to="/about" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                    About
                </NavLink>
                <NavLink to="/skills" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                    Skills
                </NavLink>
                <NavLink to="/projects" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                    Contact
                </NavLink>
            </nav>
  )
}
