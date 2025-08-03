import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
<<<<<<< HEAD
            <Link to="/">FILM NANDA</Link>
=======
            <Link to="/">Movie App</Link>
>>>>>>> 4807e53aa60031bd7d7497c142c7da05e3f03eb9
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar