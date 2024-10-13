import "./NavBar.scss"

import { Link } from "react-router-dom";

import logo from "../../assets/podstack_logo_2-removebg-preview.png";
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
                <a href="mailto:chimaghaizu@gmail.com?subject=Hello%20Chi&body=I%20am%20interested%20in%20your%20services%21" className="styled-link">

                    Get in Touch</a>
            </div>
        </nav>
    );
}

export default Navbar;