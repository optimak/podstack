import "./NavBar.scss"

import { Link } from "react-router-dom";

import logo from "../../assets/industry-project-logo.svg";
import icon from "../../assets/search-24px.svg";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__container">
            <Link className="navbar__link" to="/"> <img className="navbar__logo" src={logo} alt="Logo" /> </Link>
            </div>
            <div className="navbar__menu">
                <Link className="navbar__link" to="/">Home</Link>            
                <img className="navbar__icon" src={icon} alt="search-icon" /> 
                <button className="navbar__button">Get Started</button>
            </div>
        </nav>
    );
}

export default Navbar;