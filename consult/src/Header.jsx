import React from "react";

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="img/logo.png" alt="Logo" />
            </div>
            <nav>
                <ul className="nav-list">
                    <li><NavLink exact to='/' activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
                    <li><NavLink to="/industary" activeClassName="active">Industry</NavLink></li>
                    <li><NavLink to="/careers" activeClassName="active">Careers</NavLink></li>
                    <li><NavLink to="/pages" activeClassName="active">Pages</NavLink></li>
                    <li><NavLink to="/contactus" activeClassName="active">Contact Us</NavLink></li>
                </ul>
            </nav>
            <div className="contact-info">
                <span className="phone">+91 5685 6664 555</span>
                <button className="btn-email" type="button"></button>
            </div>
        </header>
    );
};

export default Header;