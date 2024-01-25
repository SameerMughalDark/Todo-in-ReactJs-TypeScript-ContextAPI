import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
     <Link to="/">All</Link>
     <Link to="/?td=completed">Completed</Link>
     <Link to="/?td=active">Active</Link>
    </nav>
    
    </>
  )
}
