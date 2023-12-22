import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Website
      </Link>
      <ul>
        <Link to="/contacts">Contacts</Link>
        <Link to="/registration-form">Registration Form</Link>
      </ul>
    </nav>
  )
}