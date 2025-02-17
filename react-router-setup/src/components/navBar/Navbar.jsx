import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex gap-8 items-center justify-center mb-8">
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/user">User</Link>
       <Link to="/posts">Posts</Link>
    </nav>
  )
}
