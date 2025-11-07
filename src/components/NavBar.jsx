import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="nav-links">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="favorites">Favorites</Link>
        </div>
    </nav>
}

export default NavBar;